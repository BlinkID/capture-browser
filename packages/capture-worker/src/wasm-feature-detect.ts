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

import {
  bulkMemory,
  mutableGlobals,
  referenceTypes,
  saturatedFloatToInt,
  signExtensions,
  simd,
  threads,
} from "wasm-feature-detect";

function isIOSUserAgent() {
  const pattern = /iOS|iPhone|iPad|iPod/i; // 'i' flag for case-insensitive matching
  return pattern.test(navigator.userAgent);
}

/**
 * Safari 16 shipped with WASM threads support, but it didn't ship with nested
 * workers support, so an extra check is needed
 * https://github.com/GoogleChromeLabs/squoosh/pull/1325/files#diff-904900db64cd3f48b0e765dbbdc6a218a7ea74a199671bde82a8944a904db86f
 */
export default async function checkThreadsSupport(): Promise<boolean> {
  const supportsWasmThreads = await threads();
  if (!supportsWasmThreads) return false;

  if (!("importScripts" in self)) {
    throw Error("Not implemented");
  }

  // Safari has issues with shared memory
  // https://github.com/emscripten-core/emscripten/issues/19374
  if (isIOSUserAgent()) {
    return false;
  }

  return "Worker" in self;
}

type WasmVariant = "basic" | "advanced" | "advanced-threads";

export async function detectWasmFeatures(): Promise<WasmVariant> {
  const basicSet = [
    mutableGlobals(),
    referenceTypes(),
    bulkMemory(),
    saturatedFloatToInt(),
    signExtensions(),
  ];

  const supportsBasic = (await Promise.all(basicSet)).every(Boolean);

  if (!supportsBasic) {
    throw new Error("Browser doesn't meet minimum requirements!");
  }

  const supportsAdvanced = await simd();

  if (!supportsAdvanced) {
    return "basic";
  }

  const supportsAdvancedThreads = await checkThreadsSupport();

  if (!supportsAdvancedThreads) {
    return "advanced";
  }

  return "advanced-threads";
}
