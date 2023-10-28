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

import { AnalyzerSettings } from "capture-wasm";
import { subscribeWithSelector } from "zustand/middleware";
import { createStore as createZustandStore } from "zustand/vanilla";
import { ConfiguredCamera } from "./ConfiguredCamera";
import { UiState, uiStateMap } from "./FeedbackParser";
import { CaptureCallbacks } from "./CaptureSdk";

export type ReactiveStore = {
  /**
   * The video element that is currently being used for capture.
   */
  videoElement: HTMLVideoElement | null;
  /**
   * The list of cameras that are available to the user.
   */
  cameras: ConfiguredCamera[];
  /**
   * The currently selected camera.
   */
  selectedCamera: ConfiguredCamera | null;
  /**
   * The callbacks that are used to communicate with the capture sdk.
   */
  callbacks: CaptureCallbacks;
  /**
   * Whether the camera stream is currently active and playing back on the video
   * element.
   */
  isPlaying: boolean;
  /**
   * Whether the active video stream is currently being captured and processed
   * by the Analyzer.
   */
  isCapturing: boolean;
  /**
   * Whether the camera is currently being swapped.
   */
  isSwappingCamera: boolean;
  /**
   * Whether the camera list is currently being queried.
   */
  isQueryingCameras: boolean;
  /**
   * The analyzer settings that are currently being used.
   */
  analyzerSettings: AnalyzerSettings;
  /**
   * Indicates if the captured frames will be mirrored horizontally
   */
  mirrorX: boolean;
  /**
   * The current UI state. Represents the current feedback messages being shown
   * to the user.
   */
  uiState: UiState;
  /**
   * Whether the capture requires landscape mode.
   */
  captureRequiresLandscape: boolean;
  /**
   * Whether the SDK has been initialized.
   */
  initialized: boolean;
  /**
   * If the SDK has encountered an error, this will be set to the error.
   */
  errorState: Error | null;
};

// We can use optional properties to select what to reset
const initialState: ReactiveStore = {
  cameras: [],
  videoElement: null,
  selectedCamera: null,
  isPlaying: false,
  isCapturing: false,
  isSwappingCamera: false,
  isQueryingCameras: false,
  callbacks: {},
  mirrorX: false,
  // this is important! otherwise we share a reference and mutate the original map!
  uiState: structuredClone(uiStateMap.SENSING_FRONT),
  captureRequiresLandscape: false,
  initialized: false,
  errorState: null,
  // We know (hope?) this will be prefilled
  analyzerSettings: {} as unknown as AnalyzerSettings,
};

/**
 * ⚠️ DANGER AHEAD ⚠️
 *
 * The Zustand store. Use only if you know what you're doing.
 *
 * Never set the state as this will break the application logic. We do not have
 * two-way binding. Make sure you only observe the state.
 *
 * Prefer using subscriptions if you require observable state.
 *
 * {@link https://github.com/pmndrs/zustand}
 */
export const zustandStore = createZustandStore<ReactiveStore>()(
  // this is important! Otherwise solid-zustand will start mutating the initial state
  subscribeWithSelector(() => structuredClone(initialState)),
);

zustandStore.subscribe(
  (store) => store.videoElement,
  // On videoElement set, it will be [videoElement, null]
  // If the videoElement disappears, it will become [null, videoElement]
  (current, previous) => {
    if (!current && previous) {
      resetCoreStore();
    }
  },
);

/**
 * Resets the store to its initial state.
 * Stops all camera streams as a side effect.
 */
export const resetCoreStore = () => {
  console.log("resetting zustand store");
  // Stop all cameras
  zustandStore.getState().cameras.forEach((camera) => {
    camera.stopStream();
  });
  zustandStore.setState(structuredClone(initialState));
};
