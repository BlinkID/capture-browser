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

export type LicenseUnlockResult = Readonly<{
  isTrial: boolean;
  licenseId: string;
  licensee: string;
  packageName: string;
  sdkName: string;
  sdkVersion: string;
  unlockResult: LicenseTokenState;
  licenseError: string;
}>;

export enum LicenseTokenState {
  Invalid,
  RequiresServerPermission,
  Valid,
}

export type BaltazarRequest = Readonly<{
  licenseId: string;
  licensee: string;
  packageName: string;
  platform: string;
  sdkName: string;
  sdkVersion: string;
}>;

export type BaltazarResponseData = { [key: string]: string };

// https://twitter.com/mattpocockuk/status/1625173884885401600
declare const brand: unique symbol;

type Brand<T, Tbrand extends string> = T & {
  [brand]: Tbrand;
};

/**
 * Branded type for type safety. Requires casting where required.
 */
export type StringifiedBaltazarResponse = Brand<
  string,
  "StringifiedBaltazarResponse"
>;

export type ServerPermissionSubmitResult = Readonly<{
  status: ServerPermissionSubmitResultStatus;
  lease: number;
  networkErrorDescription?: string;
}>;

export enum ServerPermissionSubmitResultStatus {
  Ok,
  NetworkError,
  RemoteLock,
  PermissionExpired,
  PayloadCorrupted,
  PayloadSignatureVerificationFailed,
  IncorrectTokenState,
}
