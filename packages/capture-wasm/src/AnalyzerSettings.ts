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

/**
 * Settings for the analyzer.
 */
export type AnalyzerSettings = {
  /**
   * Whether to capture a single side or capture all possible sides
   * of a document with automatic side detection.
   */
  captureSingleSide: boolean;

  /**
   * Whether to return an image of a cropped and perspective-corrected document.
   */
  returnTransformedDocumentImage: boolean;

  /**
   * Configures capture strategy used to select the best frame.
   *
   * The following values are possible:
   *
   * - `"optimize-for-speed"` - Analysis is faster, but it is possible to
   *   capture frames with lower quality
   * - `"optimize-for-quality"` - Analysis is slower in order to capture high
   *   quality frames.
   * - `"default"` - Trade-off for quality and speed.
   * - `"single-frame"` - Captures first acceptable frame.
   */
  captureStrategy: CaptureStrategy;

  /**
   * Enables document capture with a margin defined as the percentage of the
   * dimensions of the framed document.
   *
   * Both margin and document are required to be fully visible on camera frame
   * in order to finish capture.
   *
   * Allowed values are from 0 to 1.
   */
  documentFramingMargin: number;

  /**
   * Whether to return an image of the transformed document with applied margin
   * used during document framing.
   */
  keepMarginOnTransformedDocumentImage: boolean;

  /**
   * Parameters for lighting estimation.
   *
   * Thresholds used to classify the frame as too dark.
   *
   * If the calculated lighting score are outside these thresholds, the frame is
   * discarded. Allowed values are from 0 to 1.
   *
   * ```typescript
   * type LightingThresholds = {
   *    tooDarkThreshold: number;
   *    tooBrightThreshold: number;
   * }
   * ```
   */
  lightingThresholds: LightingThresholds;
  /**
   * Whether to discard frames with blurred documents.
   *
   * If it is enabled, the capture process is allowed to finish with blur on the
   * document.
   */
  ignoreBlur: boolean;

  /**
   * Whether to discard frames with glare detected on the document.
   *
   * If it is enabled, the capture process is allowed to finish with glare on
   * the document.
   */
  ignoreGlare: boolean;
  /**
   * Defines percentage of the document area that is allowed to be occluded by hand.
   *
   * Allowed values are from 0 to 1.
   */
  handOcclusionThreshold: number;

  /**
   * Threshold for detecting tilted documents. Frames with documents tilted more
   * than defined by this threshold are discarded.
   *
   * Allowed values are from 0 to 1.
   */
  tiltThreshold: number;

  /**
   * Required minimum DPI of the captured document on transformed image.
   *
   * Affects how close the document needs to be to the camera in order to get
   * captured.
   *
   * Allowed values are from 150 to 400.
   */
  minimumDocumentDpi: number;
};

/**
 * Capture strategy used to select the best frame.
 *
 * The following values are possible:
 *
 * - `"optimize-for-speed"` - Analysis is faster, but it is possible to capture
 *   frames with lower quality
 * - `"optimize-for-quality"` - Analysis is slower in order to capture high
 *   quality frames.
 * - `"default"` - Trade-off for quality and speed.
 * - `"single-frame"` - Captures first acceptable frame.
 */
export type CaptureStrategy =
  | "optimize-for-speed"
  | "optimize-for-quality"
  | "default"
  | "single-frame";

/**
 * Parameters for lighting estimation.
 *
 * Thresholds used to classify the frame as too dark.
 *
 * If the calculated lighting score are outside these thresholds, the frame is
 * discarded. Allowed values are from 0 to 1.
 */
export type LightingThresholds = {
  tooDarkThreshold: number;
  tooBrightThreshold: number;
};
