/**
 * Copyright (c) 2024 Microblink Ltd. All rights reserved.
 *
 * ANY UNAUTHORIZED USE OR SALE, DUPLICATION, OR DISTRIBUTION
 * OF THIS PROGRAM OR ANY OF ITS PARTS, IN SOURCE OR BINARY FORMS,
 * WITH OR WITHOUT MODIFICATION, WITH THE PURPOSE OF ACQUIRING
 * UNLAWFUL MATERIAL OR ANY OTHER BENEFIT IS PROHIBITED!
 * THIS PROGRAM IS PROTECTED BY COPYRIGHT LAWS AND YOU MAY NOT
 * REVERSE ENGINEER, DECOMPILE, OR DISASSEMBLE IT.
 */

import "rvfc-polyfill";
import "./devUtils";

import structuredClone from "@ungap/structured-clone";

if (!("structuredClone" in globalThis)) {
  // @ts-expect-error no idea
  globalThis.structuredClone = structuredClone;
}

export { createCaptureSdk } from "./core/CaptureSdk";
export { createDirectApi } from "./core/DirectApi";
export {
  createCaptureUi,
  createCaptureUiWithInstance,
} from "./ui/createCaptureUi";

export type { CaptureComponent } from "./ui/createCaptureUi";

export type {
  CaptureCallbacks,
  CaptureSdk,
  CaptureSdkSettings,
} from "./core/CaptureSdk";

export type { DirectApi, DirectApiSettings } from "./core/DirectApi";

export { ConfiguredCamera } from "./core/ConfiguredCamera";

export * from "./core/FeedbackParser";
export * from "./core/imageDataUtils";
export * from "./core/zustandStore";

// export all from other dependencies
export * from "capture-wasm";
