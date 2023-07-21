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

const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d", {
  willReadFrequently: true,
  alpha: false,
});

export function captureFrame(video: HTMLVideoElement) {
  if (!ctx) {
    throw new Error("CanvasRenderingContext2D is missing!");
  }

  const w = video.videoWidth;
  const h = video.videoHeight;

  canvas.width = w;
  canvas.height = h;

  ctx.drawImage(video, 0, 0, w, h);
  const imageData = ctx.getImageData(0, 0, w, h);
  const customImageData = createCustomImageData(imageData);

  return customImageData;
}
/**
 * fix for postmessage performance
 * https://bugs.chromium.org/p/chromium/issues/detail?id=1439768&q=&can=4
 */
export function createCustomImageData(imageData: ImageData) {
  const customImageData = {
    data: imageData.data,
    width: imageData.width,
    height: imageData.height,
    colorSpace: imageData.colorSpace,
  } satisfies ImageData;

  return customImageData;
}
