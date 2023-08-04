/**
 * Copyright (c) 2023 Microblink Ltd. All rights reserved.
 *
 * ANY UNAUTHORIZED USE OR SALE, DUPLICATION, OR DISTRIBUTION
 * OF THIS PROGRAM OR ANY OF ITS PARTS, IN SOURCE OR BINARY FORMS,
 * WITH OR WITHOUT MODIFICATION, WITH THE PURPOSE OF ACQUIRING
 * UNLAWFUL MATERIAL OR ANY OTHER BENEFIT IS PROHIBITED!
 * THIS PROGRAM IS PROTECTED BY COPYRIGHT LAWS AND YOU MAY NOT
 * REVERSE ENGINEER, DECOMPILE, OR DISASSEMBLE IT.
 */

import { ConnectionObserver } from "@wessberg/connection-observer";

import { ConfiguredCamera } from "./ConfiguredCamera";
import {
  findIdealCameraId,
  getCapableCameras,
  renameCameras,
} from "./cameraUtils";
import { createProxyWorker } from "./createProxyWorker";
import { getUserId } from "./getUserId";
import { obtainNewServerPermission } from "./licencing";
import {
  Analyzer,
  AnalyzerResult,
  AnalyzerSettings,
  FrameAnalysisResult,
  LicenseTokenState,
  ServerPermissionSubmitResultStatus,
  StringifiedBaltazarResponse,
} from "./main";

import type { ProxyWorker } from "capture-worker";
import { stripIndents } from "common-tags";
import { FeedbackParser, uiStateMap } from "./FeedbackParser";
import { captureFrame } from "./captureFrame";
import { asError } from "./utils";
import { resetCoreStore, zustandStore } from "./zustandStore";
import { Remote, ProxyMarked, transfer } from "comlink";

export type CaptureSdkSettings = {
  /** The licence key for loading the Capture SDK. Required. */
  licenseKey: string;
  /** Optional callbacks */
  callbacks?: CaptureCallbacks;
  /** Custom settings for the Capture analyzer */
  analyzerSettings?: Partial<AnalyzerSettings>;
  /** By default, the SDK will look for the required `/resources` directory on the current URL path.
   *
   * If you are hosting the resources on a different URL, provide a new relative or absolute one.
   */
  resourceUrl?: string;
};

let feedbackParser: FeedbackParser;

let videoFrameRequestId: ReturnType<
  HTMLVideoElement["requestVideoFrameCallback"]
>;

export type CaptureCallbacks = Partial<{
  /**
   * Will be called on every frame after it has finished processing
   * @param frame {@linkcode ImageData} of the frame. Make sure to copy it as it
   * will be overwritten when the next frame finishes processing.
   * @param frameResult Detailed information on the frame analysis
   */
  onFrameAnalysis: (frame: ImageData, frameResult: FrameAnalysisResult) => void;
  /**
   * Will be called after the entire recognition process has finished successfully.
   * @param result The result
   */
  onCaptureResult: (result: AnalyzerResult) => void;
}>;

// the worker and analyzer are lifted out and not exposed on `core` directly
let remoteWorker: Remote<ProxyWorker>;
let remoteAnalyzer: Remote<Analyzer & ProxyMarked>;

// we need a reusable copy because of the transfer if we want to return it in a callback
let imageDataCopy: ImageData;

/**
 * Starts a best-effort camera stream on a provided video element
 */
async function startCameraStream(
  videoElement: HTMLVideoElement,
  autoplay = true,
) {
  if (zustandStore.getState().isPlaying) {
    console.warn("Already streaming");
    return;
  }

  // Reuse previously selected camera
  if (zustandStore.getState().selectedCamera) {
    console.log("Reusing previous device");
  } else {
    try {
      await updateCameraDevices();
    } catch (error) {
      zustandStore.setState({
        errorState: asError(error),
      });
      return;
    }
  }

  // capture new state as it's been modified by `updateCameraDevices`
  const state = zustandStore.getState();

  // something went wrong during `updateCameras`?
  if (!state.selectedCamera) {
    console.warn("No selected camera!");
    return;
  }

  const stream = await state.selectedCamera.startStream();
  const videoTrack = stream.getVideoTracks()[0];
  const videoTrackSettings = videoTrack.getSettings();

  // can this happen?
  if (!videoTrackSettings.width || !videoTrackSettings.height) {
    throw new Error(`Video doesn't have dimensions!`);
  }

  if (!videoElement.isConnected) {
    throw new Error("Video element needs to be in the document!");
  }

  // only setup if it isn't set up already
  if (!zustandStore.getState().videoElement) {
    setupVideoElement(videoElement);
  }

  videoElement.srcObject = stream;
  videoElement.width = videoTrackSettings.width;
  videoElement.height = videoTrackSettings.height;

  // set the state
  zustandStore.setState({
    videoElement,
  });

  if (autoplay) {
    await startPlayback();
  }
}

/**
 * Resets the captureSdk and terminates the workers and the Wasm runtime.
 */
async function destroy() {
  // We don't need to cancel capture if we're terminating
  // await cancelCapture();
  resetCoreStore();
  await remoteWorker.terminate();
}

/**
 * Single-time setup for a video element
 */
function setupVideoElement(videoElement: HTMLVideoElement) {
  // video disconnect / dismount callback
  const connectionObserver = new ConnectionObserver((entries) => {
    if (!entries[0].connected) {
      void destroy();
    }
  });
  connectionObserver.observe(videoElement);

  // set up video for autoplay
  videoElement.playsInline = true;
  // videoElement.muted = true;  // doesn't work
  videoElement.setAttribute("muted", "");
}

/**
 * Updates the analyzer. Capture process can't be active. Stop it using
 * {@linkcode updateAnalyzerSettings} if required.
 * @param settings {@linkcode AnalyzerSettings}. Will merge with the current
 * settings.
 */
async function updateAnalyzerSettings(settings: Partial<AnalyzerSettings>) {
  if (zustandStore.getState().isCapturing) {
    console.warn(
      "Cancel the capture process using `cancelCapture()` before updating settings",
    );
    return;
  }

  const newSettings = {
    ...zustandStore.getState().analyzerSettings,
    ...settings,
  };

  await remoteAnalyzer.updateSettings(newSettings);
  feedbackParser.updateSettings(newSettings);
}

/**
 * Select a camera device from available ones.
 *
 * @param camera A camera device configured by the SDK. You can see available
 * devices using on {@linkcode ReactiveStore.cameras} available by calling {@linkcode captureSdk.getState()}
 */
async function selectCamera(camera: ConfiguredCamera) {
  const state = zustandStore.getState();

  if (state.selectedCamera === camera) {
    console.warn("Already selected");
    return;
  }

  // prevent race conditions
  if (state.isSwappingCamera) {
    return;
  }

  const selectedCamera = state.selectedCamera;

  // Need to stop the current stream, as multiple cameras can share resources
  // on the same device

  // TODO: do we need to set selectedCamera to undefined?
  zustandStore.setState({
    isSwappingCamera: true,
  });

  if (selectedCamera) {
    // TODO: Test this assumption on mobile devices.
    selectedCamera.stopStream();
  }

  if (state.videoElement) {
    // pausePlayback();
    state.videoElement.srcObject = null;
  }

  try {
    const stream = await camera.startStream();

    if (state.videoElement) {
      state.videoElement.srcObject = stream;

      // resume currently playing session
      if (state.isPlaying) {
        await state.videoElement.play();
      }
    }

    zustandStore.setState({
      selectedCamera: camera,
      isSwappingCamera: false,
    });
  } catch (error) {
    console.error(error);
  }
}

/**
 * Stops the currently active stream
 */
async function stopStream() {
  console.log("stopStream called");
  const state = zustandStore.getState();

  state.selectedCamera?.stopStream();

  if (!state.videoElement) {
    console.log("no video element");
    return;
  }

  state.videoElement.srcObject = null;
  await cancelCapture();
  pausePlayback();
}

/**
 * The main recognition loop
 * @internal
 */
async function loop() {
  const state = zustandStore.getState();

  if (!state.isCapturing) {
    return;
  }

  // fix for iOS which triggers `requestVideoFrameCallback` even if the video is
  // not playing
  if (!state.isPlaying) {
    return;
  }

  if (!state.videoElement) {
    // shouldn't happen as disconnecting is handled by an observer which will
    // pause the loop
    console.error("Missing video element");
    return;
  }

  const onFrameAnalysis = state.callbacks?.onFrameAnalysis;
  const hasFrameCallback = typeof onFrameAnalysis === "function";
  const capturedFrame = captureFrame(state.videoElement);

  imageDataCopy = new ImageData(
    Uint8ClampedArray.from(capturedFrame.data),
    capturedFrame.width,
    capturedFrame.height,
  );

  // We don't use the `remoteAnalyzer.analyze()`, but a proxy method exposed
  // on the worker as we need to clean up the memory from the worker side
  const frameResult = await remoteWorker.analyze(
    transfer(capturedFrame, [capturedFrame.data.buffer]),
  );

  const uiState = feedbackParser.getUiState(frameResult);

  // set the UI state
  zustandStore.setState({
    uiState,
  });

  // trigger frame callback
  if (hasFrameCallback) {
    try {
      onFrameAnalysis(imageDataCopy, frameResult);
    } catch (err) {
      console.warn("onFrameAnalysis callback exception");
      throw err;
    }
  }

  if (hasFrameCallback) {
    // force GC before next `ImageData` creation
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.setTimeout(() => (imageDataCopy = null), 0);
  }

  // Manually handle SIDE_CAPTURED/FLIP_CARD
  if (uiState.key === "SIDE_CAPTURED") {
    pauseCapture();
    zustandStore.setState({
      uiState: uiStateMap.SIDE_CAPTURED,
    });
    await new Promise((f) =>
      setTimeout(f, uiStateMap.SIDE_CAPTURED.minDuration),
    );
    zustandStore.setState({
      uiState: uiStateMap.FLIP_CARD,
    });
    await new Promise((f) => setTimeout(f, uiStateMap.FLIP_CARD.minDuration));
    await startCapture();
    return;
  }

  // Manually handle DOCUMENT_CAPTURED
  if (uiState.key === "DOCUMENT_CAPTURED") {
    pausePlayback();
    zustandStore.setState({
      uiState: uiStateMap.DOCUMENT_CAPTURED,
    });
    await new Promise((f) =>
      setTimeout(f, uiStateMap.DOCUMENT_CAPTURED.minDuration),
    );
    const result = await remoteAnalyzer.getResult();

    try {
      state.callbacks?.onCaptureResult?.(result);
    } catch (err) {
      console.warn("onCaptureResult callback exception");
    }

    return;
  }

  videoFrameRequestId = state.videoElement.requestVideoFrameCallback(
    () => void loop(),
  );
}

/* -------------------------------------------------------------------------- */
/* CAPTURING                                                                  */
/* -------------------------------------------------------------------------- */

/**
 * Starts playback and capture.
 */
async function startCapture() {
  console.log("startCapture called");
  const state = zustandStore.getState();

  if (state.isCapturing) {
    return;
  }

  if (!state.videoElement) {
    console.warn("Missing video element");
    return;
  }

  if (!state.selectedCamera) {
    console.warn("No active camera!");
    return;
  }

  await startPlayback();

  // handle side-effect from `startPlayback()`
  if (!zustandStore.getState().isPlaying) {
    return;
  }

  zustandStore.setState({
    isCapturing: true,
  });

  videoFrameRequestId = state.videoElement.requestVideoFrameCallback(
    () => void loop(),
  );
}

/**
 * Pauses the capture process without resetting the recognizer.
 */
function pauseCapture() {
  console.log("pauseCapture called");
  const video = zustandStore.getState().videoElement;
  if (video) {
    video.cancelVideoFrameCallback(videoFrameRequestId);
  }
  zustandStore.setState({
    isCapturing: false,
  });
}

/**
 * Cancels the capture process. Unlike {@linkcode pauseCapture}, it also resets
 * the analyzer.
 */
async function cancelCapture() {
  console.log("cancelCapture called");
  await resetAnalyzer();
  feedbackParser.reset();

  pauseCapture();

  zustandStore.setState({
    uiState: uiStateMap.SENSING_FRONT,
  });
}

/**
 * Resets the analyzer.
 */
async function resetAnalyzer() {
  await remoteAnalyzer.reset();
}

/**
 * Finishes capturing the current side
 */
async function finishSideCapture() {
  await remoteAnalyzer.finishSideCapture();
}

/**
 * Refreshes available devices on the system and updates the state.
 */
async function updateCameraDevices() {
  // prevent race conditions
  if (
    zustandStore.getState().isQueryingCameras ||
    zustandStore.getState().isSwappingCamera
  ) {
    return;
  }

  zustandStore.setState({
    isQueryingCameras: true,
  });
  const capableCameras = await getCapableCameras();

  // TODO: handle as error
  if (capableCameras.length < 1) {
    throw new Error(
      "No capable devices found! Your camera needs to have a minimum resolution of 1920x1080",
    );
  }

  renameCameras(capableCameras);
  const idealCameraId = findIdealCameraId(capableCameras);

  // TODO: better way to handle undefined
  const idealCamera = capableCameras.find(
    (camera) => camera.deviceInfo.deviceId === idealCameraId,
  )!;

  zustandStore.setState({
    cameras: capableCameras,
    selectedCamera: idealCamera,
    isQueryingCameras: false,
  });
}

/* -------------------------------------------------------------------------- */
/* VIDEO PLAYBACK                                                             */
/* -------------------------------------------------------------------------- */

/**
 * Starts the video playback
 *
 * @returns resolves when playback starts
 */
async function startPlayback() {
  const state = zustandStore.getState();

  if (state.isPlaying) {
    return;
  }

  if (!state.videoElement) {
    console.warn("No video element present.");
    return;
  }

  if (!state.videoElement.srcObject) {
    console.warn("No source present. Start a camera stream first.");
    return;
  }

  if (!state.selectedCamera) {
    console.warn("No selected camera");
    return;
  }

  await state.selectedCamera.startStream();

  // not using `startPlayback` as we haven't stopped playing as far as the state
  // is concerned
  await state.videoElement.play();
  zustandStore.setState({ isPlaying: true });

  // handle resume for iOS
  if (state.isCapturing === true) {
    state.videoElement.requestVideoFrameCallback(() => void loop());
  }
}

/**
 * Pauses the video playback. This will also stop the capturing process.
 */
function pausePlayback() {
  console.log("pausePlayback called");
  const state = zustandStore.getState();

  if (!state.videoElement) {
    zustandStore.setState({ isPlaying: false });
    return;
  }

  pauseCapture();

  state.videoElement.pause();
  zustandStore.setState({ isPlaying: false });
}

/**
 * Set up callbacks on the SDK
 *
 * @param newCallbacks A subset of available
 * {@linkcode CaptureCallbacks}. Will overwrite the previously set one.
 *
 * Send an empty object (`{}`) to clear callbacks.
 */
function setCallbacks(newCallbacks: CaptureCallbacks) {
  zustandStore.setState({
    callbacks: newCallbacks,
  });
}

/**
 * Main function that loads the SDK and returns a `captureSdk` object
 */

export async function createCaptureSdk(settings: CaptureSdkSettings) {
  try {
    if (!window.isSecureContext) {
      throw new Error(stripIndents`
      Can't load the SDK outside a secure context:
      https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts
    `);
    }

    if (zustandStore.getState().initialized) {
      console.warn("Already initialized");
      return captureSdk;
    }

    remoteWorker = await createProxyWorker(settings.resourceUrl);

    const userId = getUserId();

    const remoteWasm = await remoteWorker.loadWasm();
    const licenceUnlockResult = await remoteWasm.initializeWithLicenseKey(
      settings.licenseKey,
      userId,
      false,
    );

    if (
      licenceUnlockResult.unlockResult ===
      LicenseTokenState.RequiresServerPermission
    ) {
      const serverPermissionResponse = await obtainNewServerPermission(
        licenceUnlockResult,
      );

      const serverPermissionResult = await remoteWasm.submitServerPermission(
        JSON.stringify(serverPermissionResponse) as StringifiedBaltazarResponse,
      );

      console.log(serverPermissionResult);

      if (
        serverPermissionResult.status !== ServerPermissionSubmitResultStatus.Ok
      ) {
        // TODO: more robust error messages
        throw new Error("Server unlock not ok.");
      }
    }

    // lifted out of state
    remoteAnalyzer = await remoteWorker.createAnalyzer();

    const defaultAnalyzerSettings = await remoteAnalyzer.getSettings();

    const initialSettings: AnalyzerSettings = {
      ...defaultAnalyzerSettings,
      minimumDocumentDpi: 200,
      ...settings.analyzerSettings,
    };

    feedbackParser = new FeedbackParser(initialSettings);

    if (settings.analyzerSettings) {
      await remoteAnalyzer.updateSettings(initialSettings);
    }

    zustandStore.setState({
      analyzerSettings: initialSettings,
    });

    if (settings.callbacks) {
      setCallbacks(settings.callbacks);
    }

    zustandStore.setState({
      initialized: true,
    });

    return captureSdk;
  } catch (error) {
    zustandStore.setState({
      errorState: asError(error),
    });
    throw error;
  }
}

// DO NOT EXPORT THIS DIRECTLY

// TODO: Structure typing so that we don't need JSdocs in two places

/**
 * The core singleton with all public API methods.
 *
 * Always defined in external scopes, as it's only accessible as a return value
 * of {@linkcode createCaptureSdk}
 *
 */
const captureSdk = {
  /**
   * Starts a best-effort camera stream on a provided video element
   */
  startCameraStream,
  /**
   * Stops the currently active stream
   */
  stopStream,
  /**
   * Starts the video playback
   *
   * @returns resolves when playback starts
   */
  startPlayback,
  /**
   * Pauses the video playback. This will also stop the capturing process.
   */
  pausePlayback,
  /**
   * Starts playback and capture.
   */
  startCapture,
  /**
   * Pauses the capture process without resetting the recognizer.
   */
  pauseCapture,
  /**
   * Cancels the capture process. Unlike {@linkcode pauseCapture}, it also resets
   * the analyzer.
   */
  cancelCapture,
  /**
   * Finishes capturing the current side
   */
  finishSideCapture,
  /**
   * Resets the analyzer.
   */
  resetAnalyzer,
  /**
   * Select a camera device from available ones.
   *
   * @param camera A camera device configured by the SDK. You can see available
   * devices using on {@linkcode ReactiveStore.cameras} available by calling {@linkcode captureSdk.getState()}
   */
  selectCamera,
  /**
   * Refreshes available devices on the system and updates the state.
   */
  updateCameraDevices,
  /**
   * Set up callbacks on the SDK
   *
   * @param newCallbacks A subset of available
   * {@linkcode CaptureCallbacks}. Will overwrite the previously set one.
   *
   * Send an empty object (`{}`) to clear callbacks.
   */
  setCallbacks,
  /**
   * Updates the analyzer. Capture process can't be active. Stop it using
   * {@linkcode updateAnalyzerSettings} if required.
   * @param settings {@linkcode AnalyzerSettings}. Will merge with the current
   * settings.
   */
  updateAnalyzerSettings,
  /**
   * Allows the user to subscribe to state changes inside the Capture SDK. Implemented using Zustand.
   * For usage information, see {@link https://github.com/pmndrs/zustand#using-subscribe-with-selector}
   */
  subscribe: zustandStore.subscribe,
  /**
   * Gets the current internal state of the Capture SDK.
   */
  getState: zustandStore.getState,
  /**
   * Resets the SDK core and terminates the workers and the Wasm runtime.
   */
  destroy,
};

/** The exported API available to the user */
export type CaptureSdk = typeof captureSdk;
