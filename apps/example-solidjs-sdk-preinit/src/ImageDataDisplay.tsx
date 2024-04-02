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

import { Component, createEffect, createSignal } from "solid-js";

export const ImageDataDisplay: Component<{ imageData: ImageData }> = (
  props,
) => {
  const [canvas, setCanvas] = createSignal<HTMLCanvasElement>();

  createEffect(() => {
    let ctx: CanvasRenderingContext2D | null;
    const imageData = props.imageData;

    const $canvas = canvas();
    if (!$canvas) {
      return;
    }

    if (!(ctx = $canvas.getContext("2d"))) {
      throw new Error(`2d context not supported or canvas already initialized`);
    }

    $canvas.width = imageData.width;
    $canvas.height = imageData.height;
    ctx.putImageData(imageData, 0, 0);
  });

  return (
    <canvas
      style={{
        display: "block",
        width: "100%",
        "max-width": "640px",
      }}
      ref={setCanvas}
    />
  );
};
