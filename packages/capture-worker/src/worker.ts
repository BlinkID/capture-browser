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

/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Analyzer, CaptureWasmModule } from "capture-wasm";
import { expose, finalizer, proxy } from "comlink";
import { getCrossOriginWorkerURL } from "./getCrossOriginWorkerURL";
import { detectWasmFeatures } from "./wasm-feature-detect";

declare global {
  interface WorkerGlobalScope {
    createModule: EmscriptenModuleFactory<CaptureWasmModule>;
  }
}

// Lift it to global scope and act like it exists, just in case
let wasmModule: CaptureWasmModule;
let analyzer: Analyzer;
// we can't get the location if the worker is loaded through a `blob:`
let resourceUrl: string;

console.log("Worker loaded");

// TODO: Need to hash filenames in /resources/ for cache busting

/**
 * @returns a Comlink-proxified instance of the Wasm module
 */
async function loadWasm() {
  // TODO: Error handling
  const wasmVariant = await detectWasmFeatures();

  console.log(`Requesting ${wasmVariant} Wasm build`);

  const variantUrl = `${resourceUrl}/${wasmVariant}`;

  const loaderUrl = `${variantUrl}/capture-wasm.js`;
  const workerUrl = `${variantUrl}/capture-wasm.worker.js`;

  let crossOriginWorkerUrl: string;

  const crossOriginLoaderUrl = await getCrossOriginWorkerURL(loaderUrl);

  if (wasmVariant === "advanced-threads") {
    crossOriginWorkerUrl = await getCrossOriginWorkerURL(workerUrl);
  }

  try {
    importScripts(crossOriginLoaderUrl);
  } catch (error) {
    console.error("loading scripts failed", error);
  }

  /**
   * https://emscripten.org/docs/api_reference/module.html#module-object
   */
  wasmModule = await self.createModule({
    locateFile: (path) => {
      let filePath: string;

      // Since `locateFile` is synchronous, we can't use
      // `getCrossOriginWorkerURL` here. Instead, we make an exception for the
      // worker, as we know its name in advance
      if (path.includes(".worker.js")) {
        filePath = crossOriginWorkerUrl;
      } else {
        filePath = `${resourceUrl}/${wasmVariant}/${path}`;
      }
      return filePath;
    },
    // TODO: pthreads build breaks without this:
    // "Failed to execute 'createObjectURL' on 'URL': Overload resolution failed."
    mainScriptUrlOrBlob: crossOriginLoaderUrl.toString(),
    setStatus: (text) => {
      // console.log(text, convertEmscriptenStatusToProgress(text));
    },
  });

  // @ts-ignore - this property exists when proxy-ed
  wasmModule[finalizer] = () => {
    console.log("finalizer wasmModule");
  };

  return proxy(wasmModule);
}

/**
 * Separate function so that we can set a finalizer on the analyzer.
 */
function createAnalyzer() {
  if (!wasmModule) {
    console.warn("Wasm is not initialized yet. Call loadWasm() first.");
  }

  // TODO: check initialization state

  analyzer = new wasmModule.Analyzer();

  // @ts-ignore - this property exists when proxy-ed
  analyzer[finalizer] = () => {
    console.log(
      "Comlink.finalizer called on Analyzer instance. Deleting instance.",
    );
    void analyzer.delete();
  };

  return proxy(analyzer);
}

/**
 * Separate function so that we can clear the `imageData` buffer
 */
function analyze(image: Parameters<Analyzer["analyze"]>[0]) {
  // TODO: check what happens if it gets deleted

  const frameAnalysisResult = analyzer.analyze(image);
  // transfer the ownership of the buffer back, without a recipient
  self.postMessage({}, [image.data.buffer]);
  // @ts-ignore
  image = null;

  return frameAnalysisResult;
}

/**
 * This object contains methods exposed from the worker via Comlink
 */
export const proxyWorker = {
  createAnalyzer,
  loadWasm,
  analyze,
  terminate: () => self.close(),
  setResourceUrl: (url: string) => {
    resourceUrl = url;
  },
  // TODO: find out when this gets called - seems random
  [finalizer]: () => {
    console.log("Comlink.finalizer called on proxyWorker");
    // Can't use this as the `proxyWorker` gets randomly GC'd, even if in use
    // self.close();
  },
};

expose(proxyWorker);

// https://github.com/microsoft/TypeScript/issues/47663#issuecomment-1519138189
type ProxyType = typeof proxyWorker;
// we can't use the same symbol anyway
/*
Exported variable 'createProxyWorker' has or is using name 'finalizer' from
external module "/capture-worker/types/worker"
but cannot be named.ts(4023)
*/
export type ProxyWorker = Omit<ProxyType, "finalizer">;

/*
  TODO: document these better
  Things that can break:

  - Analyzer.delete() can be called
  - finalizer can be called on Analyzer
  - finalizer can be called on proxyWorker
  - entire worker can be terminated
*/
