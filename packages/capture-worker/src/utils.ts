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

export function convertEmscriptenStatusToProgress(emStatus: string): number {
  // roughly based on https://github.com/emscripten-core/emscripten/blob/1.39.11/src/shell.html#L1259
  if (emStatus === "Running...") {
    // download has completed, wasm execution has started
    return 100;
  } else if (emStatus.length === 0) {
    // empty message
    return 0;
  }

  const regExp = RegExp(/([^(]+)\((\d+(\.\d+)?)\/(\d+)\)/);
  const match = regExp.exec(emStatus);
  if (match) {
    const currentValue = parseInt(match[2]);
    const maxValue = parseInt(match[4]);
    return (currentValue * 100) / maxValue;
  } else {
    // Cannot parse emscripten status
    return NaN;
  }
}
