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
  CameraDeviceInfo,
  CameraConstraints,
  createHdDeviceConstraints,
  closeStreamTracks,
} from "./cameraUtils";

export class ConfiguredCamera {
  deviceInfo: CameraDeviceInfo;
  settings: MediaTrackSettings;
  activeStream: MediaStream | null;
  name: string;
  #constraints: CameraConstraints;

  constructor(deviceInfo: CameraDeviceInfo, settings: MediaTrackSettings) {
    this.deviceInfo = deviceInfo;
    this.name = deviceInfo.label;
    this.activeStream = null;
    this.#constraints = createHdDeviceConstraints(deviceInfo);
    this.settings = settings;
  }

  async startStream() {
    if (this.activeStream) {
      return this.activeStream;
    }

    // can throw if device is currently in use by another process
    const stream = await navigator.mediaDevices.getUserMedia(this.#constraints);
    this.activeStream = stream;

    stream.onaddtrack = (e) => console.log("added track", e);
    stream.onremovetrack = (e) => console.log("removed track", e);
    const videoTrack = stream.getVideoTracks()[0];

    // Doesn't trigger on stop / end
    videoTrack.onended = (e) => {
      console.log("track ended", e);
      // TODO: stream vs track: check these
      this.stopStream();
    };

    return stream;
  }

  stopStream() {
    if (this.activeStream) {
      console.log(`Stopping active stream on ${this.name}`);
      closeStreamTracks(this.activeStream);
      this.activeStream = null;
    }
  }

  getVideoTrack() {
    if (!this.activeStream) {
      // TODO: do we need to warn here or is it just noise?

      // console.warn("No active stream on ConfiguredCamera instance.");
      return;
    }

    return this.activeStream.getVideoTracks()[0];
  }
}
