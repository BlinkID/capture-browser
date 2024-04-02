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

/**
 * Settings for the analyzer.
 */
export type AnalyzerSettings = {
  /**
   * Whether to capture a single side or capture all possible sides
   * Determines whether to capture a single side or capture all possible sides
   * of a document with automatic side detection.
   */
  captureSingleSide: boolean;

  /**
   * Determines whether to return an image of a cropped and perspective-corrected document.
   */
  returnTransformedDocumentImage: boolean;

  /**
   * Configures the capture strategy used to select the best frame.
   *
   * The following values are possible:
   *
   * - `"optimize-for-speed"` - Analysis is faster, but it is possible to
   *   capture frames with lower quality
   * - `"optimize-for-quality"` - Analysis is slower in order to capture high
   *   quality frames.
   * - `"default"` - Trade-off between quality and speed.
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
   * Allowed values are from 0 to 1. (0%-100%)
   */
  documentFramingMargin: number;

  /**
   * Determines whether to return an image of the transformed document with applied margin
   * used during document framing.
   */
  keepMarginOnTransformedDocumentImage: boolean;

  /**
   * Determines whether to preserve the captured document DPI in transformed document image.
   * If disabled, the document DPI is downscaled to 400 DPI.
   */
  keepDpiOnTransformedDocumentImage: boolean;

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
   * Defines percentage of the document area that is allowed to be occluded by hand.
   *
   * Allowed values are from 0 to 1.
   */
  handOcclusionThreshold: number;

  /**
   * Defines the tolerance for discarding overly tilted frames.
   * The following values are possible:
   *
   * - `"disabled"` - Disables tilt detection.
   * - `"strict"` - The policy is strict, resulting in more frames being discarded.
   * - `"normal"` - Trade-off between `"strict"` and `"relaxed"`.
   * - `"relaxed"` - The policy is relaxed, resulting in fewer frames being discarded.
   *
   * @defaultValue `"normal"`
   */
  tiltPolicy: StrictnessLevel;

  /**
   * Defines the tolerance for discarding overly blurred frames.
   * The following values are possible:
   *
   * - `"disabled"` - Disables blur detection.
   * - `"strict"` - The policy is strict, resulting in more frames being discarded.
   * - `"normal"` - Trade-off between `"strict"` and `"relaxed"`.
   * - `"relaxed"` - The policy is relaxed, resulting in fewer frames being discarded.
   *
   * @defaultValue `"normal"`
   */
  blurPolicy: StrictnessLevel;

  /**
   * Defines the tolerance for discarding frames with excessive glare.
   * - `"disabled"` - Disables glare detection.
   * - `"strict"` - The policy is strict, resulting in more frames being discarded.
   * - `"normal"` - Trade-off between `"strict"` and `"relaxed"`.
   * - `"relaxed"` - The policy is relaxed, resulting in fewer frames being discarded.
   *
   * @defaultValue `"normal"`
   */
  glarePolicy: StrictnessLevel;

  /**
   * Required minimum DPI of the captured document on transformed image.
   *
   * Affects how close the document needs to be to the camera in order to get
   * captured.
   *
   * Allowed values are from 150 to 400.
   */
  minimumDocumentDpi: number;

  /**
   * Determines whether to automatically adjust minimum document DPI.
   *
   * If it is enabled, the minimum DPI is adjusted to optimal value for the
   * provided input resolution to enable capture of all document groups.
   */
  adjustMinimumDocumentDpi: boolean;
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

export type StrictnessLevel = "disabled" | "strict" | "normal" | "relaxed";
