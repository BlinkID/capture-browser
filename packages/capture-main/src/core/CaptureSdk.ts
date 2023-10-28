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

import { stripIndents } from "common-tags";
import { DirectApi, DirectApiSettings, createDirectApi } from "./DirectApi";
import { feedbackParser, uiStateMap } from "./FeedbackParser";

import {
  AnalyzerResult,
  AnalyzerSettings,
  FrameAnalysisResult,
} from "capture-wasm";
import { Prettify } from "../typeUtils";
import { videoToImageData } from "./captureFrame";
import { asError } from "./utils";
import { resetCoreStore, zustandStore } from "./zustandStore";

// we need a reusable copy because of the transfer if we want to return it in a callback
let imageDataCopy: ImageData;
let captureSdk: CaptureSdk;

export type CaptureSdkSettings = Prettify<
  DirectApiSettings & {
    /** Optional callbacks */
    callbacks?: CaptureCallbacks;
  }
>;

/**
 * Singleton that represents the Capture SDK
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CaptureSdk extends _CaptureSdk {}

export type CaptureCallbacks = Partial<{
  /**
   * Will be called on every frame after it has finished processing
   * @param frameResult Detailed information on the frame analysis result {@linkcode FrameAnalysisResult}
   * @param frame {@linkcode ImageData} of the frame. Make sure to copy it as it
   * will be overwritten when the next frame finishes processing.
   */
  onFrameAnalysis: (frameResult: FrameAnalysisResult, frame: ImageData) => void;
  /**
   * Will be called after the entire recognition process has finished successfully.
   * @param result The result of the recognition process {@linkcode AnalyzerResult}
   */
  onCaptureResult: (result: AnalyzerResult) => void;
}>;

/**
 * The class that represents the Capture SDK.
 * Not exported to prevent manual instantiation.
 * @private
 */
class _CaptureSdk {
  #directApi: DirectApi;
  #videoFrameRequestId:
    | ReturnType<HTMLVideoElement["requestVideoFrameCallback"]>
    | undefined;

  constructor(directApi: DirectApi) {
    this.#directApi = directApi;
  }

  /**
   * Single-time setup for a video element
   */
  setupVideoElement(videoElement: HTMLVideoElement) {
    // video disconnect / dismount callback
    const connectionObserver = new ConnectionObserver((entries) => {
      if (!entries[0].connected) {
        void this.destroy();
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
  async updateAnalyzerSettings(settings: Partial<AnalyzerSettings>) {
    if (zustandStore.getState().isCapturing) {
      console.warn(
        "Cancel the capture process using `cancelCapture()` before updating settings",
      );
      return;
    }
    try {
      await this.#directApi.updateSettings(settings);
    } catch (error) {
      console.error("Error updating analyzer settings", error);
    }
  }

  /**
   * Select a camera device from available ones.
   *
   * @param camera A camera device configured by the SDK. You can see available
   * devices using on {@linkcode ReactiveStore.cameras} available by calling {@linkcode captureSdk.getState()}
   */
  async selectCamera(camera: ConfiguredCamera) {
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

    // TODO: do we need to set selectedCamera to undefined?
    zustandStore.setState({
      isSwappingCamera: true,
    });

    if (selectedCamera) {
      // Need to stop the current stream, as multiple cameras can share resources
      // on the same device
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
   * Refreshes available devices on the system and updates the state.
   */
  async updateCameraDevices() {
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

  /**
   * Starts the video playback
   *
   * @returns resolves when playback starts
   */
  async startPlayback() {
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
      state.videoElement.requestVideoFrameCallback(() => void this.#loop());
    }
  }

  /**
   * Starts a best-effort camera stream on a provided video element
   */
  async startCameraStream(videoElement: HTMLVideoElement, autoplay = true) {
    if (zustandStore.getState().isPlaying) {
      console.warn("Already streaming");
      return;
    }

    // Reuse previously selected camera
    if (zustandStore.getState().selectedCamera) {
      console.log("Reusing previous device");
    } else {
      try {
        await this.updateCameraDevices();
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
      this.setupVideoElement(videoElement);
    }

    videoElement.srcObject = stream;
    videoElement.width = videoTrackSettings.width;
    videoElement.height = videoTrackSettings.height;

    // We mirror the video if the camera is front-facing. Assume that desktop
    // devices don't return a facing mode and that they are front-facing.
    const cameraFacing = videoTrack.getSettings().facingMode;

    if (cameraFacing === "environment") {
      zustandStore.setState({
        mirrorX: false,
      });
    } else {
      zustandStore.setState({
        mirrorX: true,
      });
    }

    // set the state
    zustandStore.setState({
      videoElement,
    });

    if (autoplay) {
      await this.startPlayback();
    }
  }

  /**
   * Starts playback and capture.
   */
  async startCapture() {
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

    await this.startPlayback();

    // handle side-effect from `startPlayback()`
    if (!zustandStore.getState().isPlaying) {
      return;
    }

    zustandStore.setState({
      isCapturing: true,
    });

    this.#videoFrameRequestId = state.videoElement.requestVideoFrameCallback(
      () => void this.#loop(),
    );
  }

  /**
   * Pauses the capture process without resetting the recognizer.
   */
  pauseCapture() {
    const video = zustandStore.getState().videoElement;
    if (video && this.#videoFrameRequestId) {
      video.cancelVideoFrameCallback(this.#videoFrameRequestId);
    }
    zustandStore.setState({
      isCapturing: false,
    });
  }

  /**
   * Cancels the capture process. Unlike {@linkcode pauseCapture}, it also resets
   * the analyzer.
   */
  async cancelCapture() {
    await this.resetCapture();
    feedbackParser.reset();

    this.pauseCapture();

    zustandStore.setState({
      uiState: uiStateMap.SENSING_FRONT,
    });
  }

  /**
   * Resets the currently active capturing process.
   */
  async resetCapture() {
    await this.#directApi.resetCapture();
    this.#resetLandscape();
  }

  /**
   * Stops the currently active stream
   */
  async stopStream() {
    console.log("stopStream called");
    const state = zustandStore.getState();

    state.selectedCamera?.stopStream();

    if (!state.videoElement) {
      console.log("no video element");
      return;
    }

    state.videoElement.srcObject = null;
    await this.cancelCapture();
    this.pausePlayback();
  }

  /**
   * Attempts to finish the side capture early.
   *
   * @returns `true` if there are enough captured frames to finish the current
   * side capture, `false` otherwise.
   */
  async finishSideCapture() {
    return await this.#directApi.finishSideCapture();
  }

  /**
   * Pauses the video playback. This will also stop the capturing process.
   */
  pausePlayback() {
    console.log("pausePlayback called");
    const state = zustandStore.getState();

    if (!state.videoElement) {
      zustandStore.setState({ isPlaying: false });
      return;
    }

    this.pauseCapture();

    state.videoElement.pause();
    zustandStore.setState({ isPlaying: false });
  }

  #resetLandscape() {
    zustandStore.setState({
      captureRequiresLandscape: false,
    });
  }

  /**
   * The main recognition loop
   * @private
   * @internal
   */
  async #loop() {
    const state = zustandStore.getState();

    if (!state.isCapturing) {
      return;
    }

    // fix for iOS which triggers `requestVideoFrameCallback` even if the video
    // is not playing
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
    const capturedFrame = videoToImageData(state.videoElement);

    imageDataCopy = new ImageData(
      Uint8ClampedArray.from(capturedFrame.data),
      capturedFrame.width,
      capturedFrame.height,
    );

    const frameResult = await this.#directApi.analyze(capturedFrame);

    if ("error" in frameResult) {
      zustandStore.setState({
        errorState: asError(frameResult.error),
      });
      return;
    }

    const uiState = feedbackParser.getUiState(frameResult);

    // trigger frame callback
    if (hasFrameCallback) {
      try {
        onFrameAnalysis(frameResult, imageDataCopy);

        // force GC before next `ImageData` creation
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        window.setTimeout(() => (imageDataCopy = null), 0);
      } catch (err) {
        console.warn("onFrameAnalysis callback exception");
        throw err;
      }
    }

    // Manually handle DOCUMENT_FRAMING_CAMERA_ORIENTATION_UNSUITABLE
    if (uiState.key === "DOCUMENT_FRAMING_CAMERA_ORIENTATION_UNSUITABLE") {
      // We show the animation only on the first event
      if (!zustandStore.getState().captureRequiresLandscape) {
        this.pauseCapture();

        // This state can only be manually triggered
        const nextState =
          uiStateMap.DOCUMENT_FRAMING_CAMERA_ORIENTATION_UNSUITABLE_ANIMATION;

        zustandStore.setState({
          uiState: nextState,
          captureRequiresLandscape: true,
        });

        await new Promise((f) => setTimeout(f, nextState.minDuration));
        await this.startCapture();

        return;
      }

      // subsequent invocations don't have an animation
      zustandStore.setState({
        uiState: uiStateMap.DOCUMENT_FRAMING_CAMERA_ORIENTATION_UNSUITABLE,
      });
    }

    // Manually handle SIDE_CAPTURED
    if (uiState.key === "SIDE_CAPTURED") {
      this.pauseCapture();
      zustandStore.setState({
        uiState: uiStateMap.SIDE_CAPTURED,
      });
      await new Promise((f) =>
        setTimeout(f, uiStateMap.SIDE_CAPTURED.minDuration),
      );
      await this.startCapture();
      return;
    }

    // Manually handle DOCUMENT_CAPTURED
    if (uiState.key === "DOCUMENT_CAPTURED") {
      this.pausePlayback();
      zustandStore.setState({
        uiState: uiStateMap.DOCUMENT_CAPTURED,
      });
      await new Promise((f) =>
        setTimeout(f, uiStateMap.DOCUMENT_CAPTURED.minDuration),
      );
      const result = await this.#directApi.getResult();

      try {
        state.callbacks?.onCaptureResult?.(result);
      } catch (err) {
        console.warn("onCaptureResult callback exception", err);
      }

      this.#resetLandscape();

      // End capture loop
      return;
    }

    // For all other cases, just update the state
    zustandStore.setState({
      uiState,
    });

    this.#videoFrameRequestId = state.videoElement.requestVideoFrameCallback(
      () => void this.#loop(),
    );
  }

  /**
   * Set up callbacks on the SDK
   *
   * @param newCallbacks A subset of available
   * {@linkcode CaptureCallbacks}. Will overwrite the previously set one.
   *
   * Send an empty object (`{}`) to clear callbacks.
   */
  setCallbacks(newCallbacks: CaptureCallbacks) {
    zustandStore.setState({
      callbacks: newCallbacks,
    });
  }

  /**
   * If true, the video and captured frames will be mirrored horizontally.
   */
  setMirrorX(mirrorX: boolean) {
    zustandStore.setState({
      mirrorX,
    });
  }

  /**
   * Allows the user to subscribe to state changes inside the Capture SDK.
   * Implemented using Zustand. For usage information, see
   * {@link https://github.com/pmndrs/zustand#using-subscribe-with-selector}
   */
  subscribe = zustandStore.subscribe;
  /**
   * Gets the current internal state of the Capture SDK.
   */
  getState = zustandStore.getState;

  /**
   * Resets the captureSdk and terminates the workers and the Wasm runtime.
   */
  async destroy() {
    resetCoreStore();
    await this.#directApi.terminateWorker();
  }
}

/**
 * Creates a singleton instance of the Capture SDK.
 * @param settings {@linkcode CaptureSdkSettings}
 * @returns A singleton instance of {@linkcode CaptureSdk}
 */
export async function createCaptureSdk(
  settings: CaptureSdkSettings,
): Promise<CaptureSdk> {
  try {
    if (!window.isSecureContext) {
      throw new Error(stripIndents`
      Can't load the SDK outside a secure context:
      https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts
    `);
    }

    if (zustandStore.getState().initialized && captureSdk) {
      console.warn("Already initialized, reusing previous SDK instance.");
      return captureSdk;
    }

    // We need to remove callbacks from the settings object before passing it to
    // the DirectApi constructor (Thank you TS structural typing /s)
    const { callbacks, ...directApiSettings } = settings;

    const directApi = await createDirectApi(directApiSettings);

    const analyzerSettings = await directApi.getSettings();

    zustandStore.setState({
      analyzerSettings: analyzerSettings,
    });

    if (callbacks) {
      zustandStore.setState({
        callbacks,
      });
    }

    zustandStore.setState({
      initialized: true,
    });

    captureSdk = new _CaptureSdk(directApi);

    return captureSdk;
  } catch (error) {
    // We set any error as a single state to make it easier to handle
    zustandStore.setState({
      errorState: asError(error),
    });
    throw error;
  }
}
