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

// augment global types
declare global {
  interface MediaTrackCapabilities {
    /**
     * A boolean value defining whether the fill light is continuously
     * connected, meaning it stays on as long as the track is active.
     */
    torch?: boolean;
    // TODO: check if this is always an array
    focusMode?: MediaTrackSettings["focusMode"][];
  }

  interface MediaTrackSettings {
    /**
     * A boolean value defining whether the fill light is continuously
     * connected, meaning it stays on as long as the track is active.
     */
    torch?: boolean;
    // TODO: check if this is always an array
    focusMode?: "none" | "manual" | "single-shot" | "continuous";
  }
}

export {};
