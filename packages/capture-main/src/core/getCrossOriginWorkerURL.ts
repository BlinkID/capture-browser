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

/**
 * Original: https://github.com/CezaryDanielNowak/CrossOriginWorker
 */
import { stripIndents } from "common-tags";

const type = "application/javascript";

type Options = {
  skipSameOrigin?: boolean;
  useBlob?: boolean;
};

export const getCrossOriginWorkerURL = (
  originalWorkerUrl: string,
  _options: Options = {},
) => {
  const options = {
    skipSameOrigin: true,
    useBlob: true,

    ..._options,
  };

  if (
    options.skipSameOrigin &&
    new URL(originalWorkerUrl).origin === self.location.origin
  ) {
    // The same origin - Worker will run fine
    return Promise.resolve(originalWorkerUrl);
  }

  return new Promise<string>(
    (resolve, reject) =>
      void fetch(originalWorkerUrl, {
        // abort if the worker is not fetched in a reasonable time
        signal: AbortSignal.timeout(3000),
      })
        .then((res) => res.text())
        .then((codeString) => {
          const workerPath = new URL(originalWorkerUrl).href.split("/");
          workerPath.pop();

          // This needs to be removed if used in the worker context itself as
          // the global variables are already injected there!
          const importScriptsFix = stripIndents`
            const _importScripts = importScripts;
            const _fixImports = (url) => new URL(url, '${
              workerPath.join("/") + "/"
            }').href;
            importScripts = (...urls) => _importScripts(...urls.map(_fixImports));
          `;

          let finalURL = "";

          if (options.useBlob) {
            const blob = new Blob([importScriptsFix + codeString], { type });
            finalURL = URL.createObjectURL(blob);
          } else {
            finalURL =
              `data:${type},` +
              encodeURIComponent(importScriptsFix + codeString);
          }

          resolve(finalURL);
        })
        .catch(() => {
          reject(new Error(`Failed to fetch worker from ${originalWorkerUrl}`));
        }),
  );
};
