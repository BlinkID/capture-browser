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

import {
  BaltazarRequest,
  BaltazarResponseData,
  LicenseUnlockResult,
} from "capture-wasm";

function toBaltazarRequest(unlockResult: LicenseUnlockResult): BaltazarRequest {
  return {
    licenseId: unlockResult.licenseId,
    licensee: unlockResult.licensee,
    applicationIds: unlockResult.applicationIds,
    packageName: unlockResult.packageName,
    platform: "Browser",
    sdkName: unlockResult.sdkName,
    sdkVersion: unlockResult.sdkVersion,
  };
}

export async function obtainNewServerPermission(
  unlockResult: LicenseUnlockResult,
) {
  try {
    const response = await fetch(import.meta.env.VITE_BALTAZAR_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
      body: JSON.stringify(toBaltazarRequest(unlockResult)),
    });

    const serverPermission = (await response.json()) as BaltazarResponseData;
    return serverPermission;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
