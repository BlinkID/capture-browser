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
  Analyzer,
  AnalyzerSettings,
  LicenseTokenState,
  ServerPermissionSubmitResultStatus,
  StringifiedBaltazarResponse,
} from "capture-wasm";
import type { ProxyWorker } from "capture-worker";
import { ProxyMarked, Remote, transfer } from "comlink";
import { createCustomImageData } from "./createCustomImageData";
import { createProxyWorker } from "./createProxyWorker";
import { getUserId } from "./getUserId";
import { obtainNewServerPermission } from "./licencing";

export type DirectApiSettings = {
  /** The licence key for loading the Capture SDK. Required. */
  licenseKey: string;
  /** Custom settings for the Capture analyzer */
  analyzerSettings?: Partial<AnalyzerSettings>;
  /** By default, the SDK will look for the required `/resources` directory on
   the current URL path.
   *
   If you are hosting the resources on a different URL, provide a new relative
   or absolute one. The SDK will then search for files in the `/resources`
   directory of that URL.
   */
  resourceUrl?: string;
};

/**
 * The `DirectApi` is a wrapper around the `capture-worker` module.
 *
 * This is a low-level API that exposes the `capture-worker` module directly and
 * should only be used if the `CaptureSDK` API isn't sufficient.
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface DirectApi extends _DirectApi {}

/**
 * The `_DirectApi` class is private to prevent manual instantiation.
 * @private
 */
class _DirectApi {
  #remoteWorker: Remote<ProxyWorker>;
  #remoteAnalyzer: Remote<Analyzer & ProxyMarked>;

  constructor(
    remoteWorker: Remote<ProxyWorker>,
    remoteAnalyzer: Remote<Analyzer & ProxyMarked>,
  ) {
    this.#remoteWorker = remoteWorker;
    this.#remoteAnalyzer = remoteAnalyzer;
  }

  /**
   * Analyzes a single frame.
   *
   * @remarks
   * This method is a proxy to the `capture-worker` module.
   * It is a workaround to avoid memory leaks when using the `Remote` object
   * directly.
   *
   * @param image - The image to analyze.
   * @returns The analysis result or an error.
   */
  analyze = async (image: ImageData) => {
    const customImageData = createCustomImageData(image);

    // We don't use the `remoteAnalyzer.analyze()`, but a proxy method exposed
    // on the worker as we need to clean up the memory from the worker side
    const frameResult = await this.#remoteWorker.analyze(
      transfer(customImageData, [customImageData.data.buffer]),
    );

    return frameResult;
  };

  /**
   * Attempts to finish the side capture early.
   *
   * If there aren't enough captured frames, the method returns `false` and
   * further `Analyzer.analyze` calls are required.
   *
   * Otherwise, the method returns `true` and the `Analyzer` uses the best frame
   * candidate to finish the side capture and either finish the capture process
   * or continue to the next side.
   *
   * @returns `true` if there are enough captured frames to finish the capture
   * process and `getResult` can be called, `false` otherwise.
   */
  finishSideCapture = async () => {
    const canGetResult = await this.#remoteAnalyzer.finishSideCapture();
    return canGetResult;
  };

  /**
   * Returns the analyzer result.
   * @returns The analysis result.
   */
  getResult = async () => {
    const result = await this.#remoteAnalyzer.getResult();
    return result;
  };

  /**
   * Returns the analyzer settings.
   * @returns The analyzer settings.
   */
  getSettings = async () => {
    const settings = await this.#remoteAnalyzer.getSettings();
    return settings;
  };

  /**
   * Updates the analyzer settings. The new settings are merged with the current
   * settings.
   *
   * Don't update settings in the middle of a capture session. Call
   * `resetCapture` first.
   *
   * @param newSettings - The new analyzer settings. Can be a partial object.
   */
  updateSettings = async (newSettings: Partial<AnalyzerSettings>) => {
    const currentSettings = await this.getSettings();

    const mergedSettings: AnalyzerSettings = {
      ...currentSettings,
      ...newSettings,
    };

    await this.#remoteAnalyzer.updateSettings(mergedSettings);
  };

  /**
   * Resets the currently active capturing process.
   */
  resetCapture = async () => {
    await this.#remoteAnalyzer.reset();
  };

  /**
   * Terminates the workers and the Wasm runtime.
   */
  async terminateWorker() {
    await this.#remoteWorker.terminate();
  }
}

/**
 * Creates a new `DirectApi` instance.
 * @param settings - The settings for the `DirectApi` instance.
 * @returns A new `DirectApi` instance.
 */
export async function createDirectApi(
  settings: DirectApiSettings,
): Promise<DirectApi> {
  const remoteWorker = await createProxyWorker(settings.resourceUrl);
  const userId = getUserId();

  const remoteWasm = await remoteWorker.loadWasm();
  const licenceUnlockResult = await remoteWasm.initializeWithLicenseKey(
    settings.licenseKey,
    userId,
    false,
  );

  // check if we need to obtain a server permission
  if (
    licenceUnlockResult.unlockResult ===
    LicenseTokenState.RequiresServerPermission
  ) {
    const serverPermissionResponse =
      await obtainNewServerPermission(licenceUnlockResult);

    const serverPermissionResult = await remoteWasm.submitServerPermission(
      JSON.stringify(serverPermissionResponse) as StringifiedBaltazarResponse,
    );

    console.log(serverPermissionResult);

    if (
      serverPermissionResult.status !== ServerPermissionSubmitResultStatus.Ok
    ) {
      // TODO: more robust error messages
      throw new Error("Server unlock not ok.");
    }
  }

  const remoteAnalyzer = await remoteWorker.createAnalyzer();

  if (!remoteAnalyzer) {
    throw new Error("Failed to create analyzer");
  }

  const defaultAnalyzerSettings = await remoteAnalyzer.getSettings();

  // Tweak default settings in JS instead of Wasm
  let customSettings: AnalyzerSettings = {
    ...defaultAnalyzerSettings,
    minimumDocumentDpi: 220,
  };

  if (settings.analyzerSettings) {
    // Merge the default settings with the user-provided settings
    Object.assign(customSettings, settings.analyzerSettings);
  }

  await remoteAnalyzer.updateSettings(customSettings);

  const directApi = new _DirectApi(remoteWorker, remoteAnalyzer);

  return directApi;
}
