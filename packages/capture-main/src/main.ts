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

import "./devUtils";

// polyfill for browsers not supporting `requestVideoFrameCallback`
import "rvfc-polyfill";

export { createCaptureSdk } from "./createCaptureSdk";

export type {
  CaptureSdk,
  CaptureSdkSettings,
  CaptureCallbacks,
} from "./createCaptureSdk";

export { ConfiguredCamera } from "./ConfiguredCamera";

export * from "./imageDataUtils";
export * from "./zustandStore";
export * from "./FeedbackParser";

// export all from other dependencies
export * from "capture-wasm";
