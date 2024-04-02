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

/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Analyzer, CaptureWasmModule } from "capture-wasm";
import { expose, finalizer, proxy } from "comlink";
import { getCrossOriginWorkerURL } from "./getCrossOriginWorkerURL";
import { detectWasmFeatures } from "./wasm-feature-detect";

// TODO: Need to hash filenames in /resources/ for cache busting

declare global {
  interface WorkerGlobalScope {
    createModule: EmscriptenModuleFactory<CaptureWasmModule>;
  }
}

class CaptureWorker {
  #wasmModule?: CaptureWasmModule;
  #analyzer?: Analyzer;
  #resourceUrl?: string;

  /**
   * @returns a Comlink-proxified instance of the Wasm module
   */
  async loadWasm() {
    // TODO: Error handling
    const wasmVariant = await detectWasmFeatures();

    console.log(`Requesting ${wasmVariant} Wasm build`);

    // TODO: what happens with no resourceUrl?

    const variantUrl = `${this.#resourceUrl}/${wasmVariant}`;

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
    this.#wasmModule = await self.createModule({
      locateFile: (path) => {
        let filePath: string;

        // Since `locateFile` is synchronous, we can't use
        // `getCrossOriginWorkerURL` here. Instead, we make an exception for the
        // worker, as we know its name in advance
        if (path.includes(".worker.js")) {
          filePath = crossOriginWorkerUrl;
        } else {
          filePath = `${this.#resourceUrl}/${wasmVariant}/${path}`;
        }
        return filePath;
      },
      // TODO: pthreads build breaks without this:
      // "Failed to execute 'createObjectURL' on 'URL': Overload resolution failed."
      mainScriptUrlOrBlob: crossOriginLoaderUrl.toString(),
      setStatus: (text) => {
        // console.log(text, convertEmscriptenStatusToProgress(text));
      },
      noExitRuntime: true,
    });

    // @ts-ignore - this property exists when proxy-ed
    this.#wasmModule[finalizer] = () => {
      // console.log("finalizer wasmModule");
    };

    return proxy(this.#wasmModule);
  }

  /**
   * Separate function so that we can set a finalizer on the analyzer.
   */
  createAnalyzer() {
    if (!this.#wasmModule) {
      console.error("Wasm is not initialized yet. Call loadWasm() first.");
      return;
    }

    this.#analyzer = new this.#wasmModule.Analyzer();

    // @ts-ignore - this property exists when proxy-ed
    this.#analyzer[finalizer] = () => {
      console.log(
        "Comlink.finalizer called on Analyzer instance. Deleting instance.",
      );
      if (this.#analyzer) {
        void this.#analyzer.delete();
      }
    };

    return proxy(this.#analyzer);
  }

  /**
   * Separate function so that we can clear the `imageData` buffer
   */
  analyze(image: Parameters<Analyzer["analyze"]>[0]) {
    if (!this.#analyzer) {
      throw new Error(
        "Analyzer is not initialized yet. Call createAnalyzer() first.",
      );
    }

    const frameAnalysisResultOrError = this.#analyzer.analyze(image);
    // transfer the ownership of the buffer back, without a recipient
    self.postMessage({}, [image.data.buffer]);
    // @ts-ignore
    image = null;

    return frameAnalysisResultOrError;
  }

  /**
   * Terminates the workers and the Wasm runtime.
   */
  terminate() {
    self.close();
  }

  /** By default, the SDK will look for the required `/resources` directory on
   * the current URL path.
   *
   * If you are hosting the resources on a different URL, provide a new relative
   * or absolute one. The SDK will then search for files in the `/resources`
   * directory of that URL.
   */
  setResourceUrl(url: string) {
    this.#resourceUrl = url;
  }

  /**
   * This method is called when the worker is terminated.
   */
  [finalizer]() {
    console.log("Comlink.finalizer called on proxyWorker");
    // Can't use this as the `proxyWorker` gets randomly GC'd, even if in use
    // self.close();
  }
}

/**
 * This object contains methods exposed from the worker via Comlink
 */
const captureWorker = new CaptureWorker();

expose(captureWorker);

export type ProxyWorker = Omit<CaptureWorker, typeof finalizer>;

/*
  TODO: document these better
  Things that can break:

  - Analyzer.delete() can be called
  - finalizer can be called on Analyzer
  - finalizer can be called on proxyWorker
  - entire worker can be terminated
*/
