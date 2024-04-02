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

export function getKeyWithHighestValue(obj: Record<string, number>) {
  const keys = Object.keys(obj);

  if (keys.length === 0) {
    throw new Error("No members in object!");
  }
  // set default
  let maxKey = keys[0];
  let maxValue = -Infinity;

  for (const [key, value] of Object.entries(obj)) {
    if (value > maxValue) {
      maxValue = value;
      maxKey = key;
    }
  }

  return maxKey;
}

export function getAverage(arr: number[]) {
  return arr.reduce((p, c) => p + c, 0) / arr.length;
}

export const asError = (thrown: unknown): Error => {
  if (thrown instanceof Error) return thrown;
  try {
    return new Error(JSON.stringify(thrown));
  } catch {
    // fallback in case there's an error stringifying.
    // for example, due to circular references.
    return new Error(String(thrown));
  }
};
