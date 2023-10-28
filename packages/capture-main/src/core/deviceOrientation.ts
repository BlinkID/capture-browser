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

/* This file is not currently in use */

// TODO: use screen.orientation instead?

/**
 * Use non-standard `DeviceOrientationEvent` on iOS
 */
interface DeviceOrientationEventIOS extends DeviceOrientationEvent {
  requestPermission?: () => Promise<"granted" | "denied">;
}
/**
 * Can only be triggered by user interaction on iOS
 */
async function triggerDeviceOrientationPermission() {
  if (!("DeviceOrientationEvent" in window)) {
    // DeviceOrientationEvent is not supported
    throw new Error("DeviceOrientationEvent is not supported.");
  }

  const requestPermission = (
    DeviceOrientationEvent as unknown as DeviceOrientationEventIOS
  ).requestPermission;

  if (!requestPermission) {
    // Permission request not supported
    throw new Error("Permission request is not supported.");
  }

  const permissionState = await requestPermission();

  return permissionState;
}
