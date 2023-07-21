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

import { Analyzer } from "./Analyzer";
import {
  LicenseUnlockResult,
  ServerPermissionSubmitResult,
  StringifiedBaltazarResponse,
} from "./licencing";

/**
 * Represents all bound properties on the Wasm object
 */
export type CaptureWasmModule = CaptureBindings & EmscriptenModule;

export type CaptureBindings = {
  initializeWithLicenseKey: (
    licenceKey: string,
    userId: string,
    allowHelloMessage: boolean,
  ) => LicenseUnlockResult;
  Analyzer: typeof Analyzer;
  submitServerPermission: (
    serverPermission: StringifiedBaltazarResponse,
  ) => ServerPermissionSubmitResult;
};

// augment global types
declare global {
  interface EmscriptenModule {
    // Missing types:
    // https://emscripten.org/docs/api_reference/module.html#Module.mainScriptUrlOrBlob
    // TODO: figure out how to type it and how it works
    mainScriptUrlOrBlob?: string;
    // for logging progress
    // https://emscripten.org/docs/api_reference/emscripten.h.html#c.emscripten_push_uncounted_main_loop_blocker
    setStatus: (text: string) => void;
  }
}
