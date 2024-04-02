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

import { stripIndents } from "common-tags";
import UAParser from "ua-parser-js";
import { getKeyWithHighestValue } from "./utils";
import { ConfiguredCamera } from "./ConfiguredCamera";

export interface CameraDeviceInfo extends Omit<MediaDeviceInfo, "kind"> {
  kind: Extract<MediaDeviceInfo["kind"], "videoinput">;
}

const uaParser = new UAParser();
const isAndroid = uaParser.getOS().name === "Android";
const isiOS = uaParser.getOS().name === "iOS";

/**
 * Trigger camera permission dialog.
 *
 * Unsure how it's different than `navigator.mediaDevices.enumerateDevices`
 * and if we need both.
 *
 * Required for querying devices on iOS
 * TODO: might break Firefox on Android
 */
export const askForCameraPermission = async () => {
  try {
    const mediaStream = await navigator.mediaDevices.getUserMedia({
      video: true,
    });

    closeStreamTracks(mediaStream);
  } catch (error) {
    throw new Error("Camera permission not given");
  }
};

/**
 * Returns available camera (`videoinput`) devices on the user's device.
 */
export const getCameraDevices = async () => {
  if (!navigator.mediaDevices) {
    throw new Error(stripIndents`
      Cameras can only be used in a secure context:
      https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts
    `);
  }

  await askForCameraPermission();

  const allDevices = await navigator.mediaDevices.enumerateDevices();

  const cameraDevices = allDevices.filter(
    (device) => device.kind === "videoinput",
  ) as CameraDeviceInfo[];

  return cameraDevices;
};

/**
 * Create a basic camera object which is used inside the SDK
 *
 * Takes a while and may trigger multiple permission requests
 */
export async function createConfiguredCamera(deviceInfo: CameraDeviceInfo) {
  // see if we can get the constraints we want
  try {
    const hdTestStream = await getHdStreamFromDevice(deviceInfo);

    // we use settings because capabilities aren't supported in Firefox
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1179084
    const mediaTrackSettings = hdTestStream.getVideoTracks()[0].getSettings();

    // console.log(mediaTrackSettings);
    closeStreamTracks(hdTestStream);

    // we can, create a camera
    const cameraInstance = new ConfiguredCamera(deviceInfo, mediaTrackSettings);

    return cameraInstance;
  } catch (error) {
    console.warn(
      `DEBUG: Device ${deviceInfo.deviceId} doesn't support this constraint.`,
    );
    return null;
  }
}

/**
 * Mutates original array
 * TODO: see how this impacts other vendors
 */
export const renameCameras = (cameras: ConfiguredCamera[]) => {
  // only required on android devices
  if (uaParser.getOS().name !== "Android") {
    return;
  }

  // is this a possibility?
  if (cameras.some((camera) => camera.settings.facingMode === undefined)) {
    console.warn("Not all devices have facingMode");
    return;
  }

  let frontCount = 0;
  let backCount = 0;

  for (const camera of cameras) {
    // Dangerous assumption ahead - can a facing mode be both?
    // https://w3c.github.io/mediacapture-main/#dfn-facingmode
    const facingMode = camera.settings.facingMode;

    if (facingMode === "environment") {
      camera.name = `Back camera ${++backCount}`;
    }
    if (facingMode === "user") {
      camera.name = `Front camera ${++frontCount}`;
    }
  }
};

export const closeStreamTracks = (stream: MediaStream) => {
  const tracks = stream.getTracks();
  for (const track of tracks) {
    track.stop();
    // track.enabled = false;
  }
};

export const closeCameraTracks = (camera: ConfiguredCamera) => {
  if (camera.activeStream) {
    closeStreamTracks(camera.activeStream);
  }
};

export const findIdealCameraId = (cameras: ConfiguredCamera[]) => {
  const score: Record<MediaDeviceInfo["deviceId"], number> = {};

  for (const camera of cameras) {
    const id = camera.deviceInfo.deviceId;
    score[id] = 0;

    // Prefer back facing cameras
    if (camera.settings.facingMode === "environment") {
      score[id] += 2;
    }

    // On Samsung devices, only wide angle camera has the torch
    if (isAndroid && "torch" in camera.settings) {
      score[id] += 2;
    }

    // single shot cameras are usually the ones with the best focus
    if (isAndroid && camera.settings.focusMode === "single-shot") {
      score[id] += 2;
    }

    // last camera gets a cookie point, usually the best on both Android and iOS
    if (isAndroid && camera === cameras[cameras.length]) {
      score[id] += 1;
    }

    // The ultimate camera if available (iOS >= 16.4)
    if (isiOS && camera.name === "Back Triple Camera") {
      score[id] += 5;
    }

    // Second place (iOS >= 16.4)
    if (isiOS && camera.name === "Back Dual Wide Camera") {
      score[id] += 3;
    }
  }

  const winner = getKeyWithHighestValue(score);
  return winner;
};

export interface CameraConstraints extends MediaStreamConstraints {
  video: {
    deviceId: {
      exact: string;
    };
    frameRate: {
      exact: 30;
    };
    width: {
      exact: 1920;
    };
    height: {
      exact: 1080;
    };
  };
  audio: false;
}

export function createHdDeviceConstraints(cameraDevice: CameraDeviceInfo) {
  const constraints: CameraConstraints = {
    video: {
      deviceId: {
        exact: cameraDevice.deviceId,
      },
      frameRate: {
        exact: 30,
      },
      width: {
        exact: 1920,
      },
      height: {
        exact: 1080,
      },
    },
    audio: false,
  };

  return constraints;
}

/**
 * Will attempt to open a 1080p media stream. Might throw.
 */
async function getHdStreamFromDevice(device: CameraDeviceInfo) {
  const constraints = createHdDeviceConstraints(device);

  // TODO: can throw if device is currently in use by another process
  const mediaStream = await navigator.mediaDevices.getUserMedia(constraints);

  return mediaStream;
}

/**
 * Calculates capable cameras.
 *
 * @returns Array of capable cameras.
 */
export async function getCapableCameras() {
  const cameras = await getCameraDevices();
  // console.log(cameras);

  const capableCameras: ConfiguredCamera[] = [];

  for await (const device of cameras) {
    const camera = await createConfiguredCamera(device);
    if (camera !== null) {
      capableCameras.push(camera);
    }
  }

  return capableCameras;
}

/* -------------------------------------------------------------------------- */
/* The following are unused                                                   */
/* -------------------------------------------------------------------------- */

// type OnDeviceChange = (
//   capableCameras: ConfiguredCamera[],
//   idealCameraId?: CameraDeviceInfo["deviceId"]
// ) => void;

// /**
//  * Subscribe to capable cameras and receive change callbacks.
//  * Initial cameras enumeration is done which invokes callback immediately.
//  *
//  * @returns Unsubscribe function.
//  */
// function subscribeToCapableCameras(onDeviceChange: OnDeviceChange) {
//   const handleDeviceChange = async () => {
//     const capableCameras = await getCapableCameras();
//     const idealCameraId = capableCameras.length
//       ? findIdealCameraId(capableCameras)
//       : undefined;
//     onDeviceChange(capableCameras, idealCameraId);
//   };

//   navigator.mediaDevices.addEventListener("devicechange", handleDeviceChange);

//   const unsubscribe = () => {
//     navigator.mediaDevices.removeEventListener(
//       "devicechange",
//       handleDeviceChange
//     );
//   };

//   handleDeviceChange();

//   return unsubscribe;
// }
