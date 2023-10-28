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

/*
This file contains fixes for TS inference issues and
dev environment live reloading hacks.
Actual code resides in main.ts and index.ts
*/

// fixes type annotation
import * as comlink from "comlink";

// try to fix non-exported types not being rolled up
import * as wasmTypes from "capture-wasm";

// https://github.com/microsoft/TypeScript/issues/47663#issuecomment-1519138189
// import type {} from "capture-wasm";
// import type {} from "capture-worker";

// this triggers reloading
import workerContent from "capture-worker/dist/capture-worker.js?raw";
// we use a falsy check to remove this code during build
if (false as true) {
  console.log(workerContent);
  console.log(wasmTypes);
  console.log(comlink);
  console.log("THIS SHOULDN'T BE IN THE BUNDLE");
}
