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

import { from } from "solid-js";
import "./devUtils";
import "rvfc-polyfill";

export { createCaptureSdk } from "./core/CaptureSdk";
export { createDirectApi } from "./core/DirectApi";
export { createCaptureUi } from "./ui/createCaptureUi";

export type {
  ExposedComponentApi,
  CaptureComponent,
} from "./ui/createCaptureUi";

export type {
  CaptureSdk,
  CaptureSdkSettings,
  CaptureCallbacks,
} from "./core/CaptureSdk";

export type { DirectApi, DirectApiSettings } from "./core/DirectApi";

export { ConfiguredCamera } from "./core/ConfiguredCamera";

export * from "./core/imageDataUtils";
export * from "./core/zustandStore";
export * from "./core/FeedbackParser";

// export all from other dependencies
export * from "capture-wasm";
