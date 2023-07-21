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
import { CaptureCallbacks } from "./createCaptureSdk";

export type ReactiveStore = {
  videoElement: HTMLVideoElement | null;
  cameras: ConfiguredCamera[];
  selectedCamera: ConfiguredCamera | null;
  callbacks: CaptureCallbacks;
  isPlaying: boolean;
  isCapturing: boolean;
  isSwappingCamera: boolean;
  isQueryingCameras: boolean;
  analyzerSettings: AnalyzerSettings;
  uiState: UiState;
  /** If Wasm is initialized successfully */
  initialized: boolean;
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
  // this is important! otherwise we share a reference and mutate the original map!
  uiState: structuredClone(uiStateMap.SENSING_FRONT),
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
 * Never use setters as this will break the application logic. We do not have two-way binding.
 * Make sure you only observe the state.
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

// TODO: Should this be here or in createCaptureSdk.ts?
export const resetCoreStore = () => {
  console.log("resetting zustand store");
  // Stop all cameras
  zustandStore.getState().cameras.forEach((camera) => {
    camera.stopStream();
  });
  zustandStore.setState(structuredClone(initialState));
};
