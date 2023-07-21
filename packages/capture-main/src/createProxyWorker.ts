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

/**
 * Creates a Comlink-proxied Web Worker
 *
 * @param resourcesUrl the location of the resources directory, default is `window.location.href`
 * @returns a Comlink-proxied instance of the Web Worker
 */
export const createProxyWorker = (
  resourcesUrl: string = window.location.href,
) => {
  const worker = new Worker(resourcesUrl + "/resources/capture-worker.js");
  // TODO: find a way to handle generic worker loading failures (CSP, network requests, etc)
  worker.onerror = (e) => console.error(e);

  const proxyWorker = wrap<ProxyWorker>(worker);

  return proxyWorker;
};

export type RemoteWorker = ReturnType<typeof createProxyWorker>;
export type RemoteAnalyzer = Awaited<ReturnType<ProxyWorker["createAnalyzer"]>>;
