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

import { createCaptureSdk } from "@microblink/capture";
import "@microblink/capture/style.css";
import "./style.css";

async function initSdk() {
  const captureSdk = await createCaptureSdk({
    callbacks: {
      onCaptureResult: (e) => console.log(e),
    },
    licenseKey: import.meta.env.VITE_LICENCE_KEY,
  });

  const videoElement = document.getElementById("video") as HTMLVideoElement;
  const feedback = document.getElementById("messages") as HTMLDivElement;

  await captureSdk.startCameraStream(videoElement);
  await captureSdk.startCapture();

  // subscription example

  captureSdk.subscribe(
    (state) => state.uiState,
    (uiState) => {
      feedback.innerHTML = uiState.key;
    },
    {
      fireImmediately: true,
    },
  );
}

initSdk();
