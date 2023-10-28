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

import { ProxyWorker } from "capture-worker";
import { wrap } from "comlink";
import { getCrossOriginWorkerURL } from "./getCrossOriginWorkerURL";

/**
 * Creates a Comlink-proxied Web Worker
 *
 * @param resourcesLocation the location of the resources directory, default is `window.location.href`
 * @returns a Comlink-proxied instance of the Web Worker
 */
export const createProxyWorker = async (
  resourcesLocation: string = window.location.href,
) => {
  const workerUrl = await getCrossOriginWorkerURL(
    resourcesLocation + "/resources/capture-worker.js",
  );
  const worker = new Worker(workerUrl);

  worker.onerror = (e) => {
    console.error("Worker error:", e);
  };

  const proxyWorker = wrap<ProxyWorker>(worker);
  await proxyWorker.setResourceUrl(resourcesLocation + "/resources");

  return proxyWorker;
};

export type RemoteWorker = ReturnType<typeof createProxyWorker>;
export type RemoteAnalyzer = Awaited<ReturnType<ProxyWorker["createAnalyzer"]>>;
