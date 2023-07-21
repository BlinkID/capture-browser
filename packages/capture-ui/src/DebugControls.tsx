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

import { Component } from "solid-js";
import { css } from "@acab/ecsstatic";
import { useSolidStore } from "./StoreContext";

export const DebugControls: Component = () => {
  const { solidStore, sdkStore } = useSolidStore();

  return (
    <div
      class={css`
        position: relative;
        z-index: 2;
      `}
    >
      <div>
        <button
          onClick={() => void solidStore.captureSdk?.updateCameraDevices()}
        >
          Scan cameras
        </button>
        <div>
          <button onClick={() => void solidStore.captureSdk?.pausePlayback()}>
            Pause playback
          </button>
          <button onClick={() => void solidStore.captureSdk?.startPlayback()}>
            Start playback
          </button>
        </div>
      </div>
      <div>
        <button onClick={() => void solidStore.captureSdk?.pauseCapture()}>
          Pause capture
        </button>
        <button onClick={() => void solidStore.captureSdk?.startCapture()}>
          Start capture
        </button>
      </div>
      <div>
        <button
          onClick={() =>
            void solidStore.captureSdk?.startCameraStream(
              sdkStore.videoElement!,
            )
          }
        >
          Start stream
        </button>
        <button onClick={() => void solidStore.captureSdk?.stopStream()}>
          Stop stream
        </button>
      </div>

      <div>
        <div>Playing: {sdkStore.isPlaying.toString()}</div>
        <div>Capturing: {sdkStore.isCapturing.toString()}</div>
      </div>
    </div>
  );
};
