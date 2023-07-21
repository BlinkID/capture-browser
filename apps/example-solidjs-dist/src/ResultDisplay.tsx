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

import { AnalyzerResult } from "@microblink/capture";
import { Component, Show } from "solid-js";
import { ImageDataDisplay } from "./ImageDataDisplay";

export const ResultDisplay: Component<{
  result: AnalyzerResult;
}> = (props) => {
  const firstCapture = () => props.result.firstCapture;
  const secondCapture = () => props.result.secondCapture;

  return (
    <div>
      <h1>Classification: {props.result.documentGroup}</h1>
      <Show when={firstCapture()?.transformedImageResult}>
        {(imageResult) => (
          <div>
            <h2>{firstCapture()?.side}</h2>
            <ImageDataDisplay imageData={imageResult()} />
          </div>
        )}
      </Show>
      <Show when={secondCapture()?.transformedImageResult}>
        {(imageResult) => (
          <div>
            <h2>{secondCapture()?.side}</h2>
            <ImageDataDisplay imageData={imageResult()} />
          </div>
        )}
      </Show>
      <Show when={firstCapture()?.imageResult}>
        {(imageResult) => (
          <div>
            <h2>{firstCapture()?.side}</h2>
            <ImageDataDisplay imageData={imageResult()} />
          </div>
        )}
      </Show>
      <Show when={secondCapture()?.imageResult}>
        {(imageResult) => (
          <div>
            <h2>{secondCapture()?.side}</h2>
            <ImageDataDisplay imageData={imageResult()} />
          </div>
        )}
      </Show>
    </div>
  );
};
