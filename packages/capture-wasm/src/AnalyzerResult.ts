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
 * The result returned from `Analyzer.analyze`
 */
export type AnalyzerResult = {
  /** Result of the first side capture */
  firstCapture?: SideCaptureResult;
  /** Result of the second side capture */
  secondCapture?: SideCaptureResult;
  /** Document group */
  documentGroup: DocumentGroup;
  /** Completeness status of the capture process */
  completnessStatus: CompletnessStatus;
};

/**
 * Result of side capture
 */
export type SideCaptureResult = {
  /**
   * Original image of the captured document, untransformed, as it was used in
   * analysis.
   */
  imageResult: ImageData;

  /**
   * Image of the cropped and perspective-corrected document. The transformed
   * image is returned in the correct orientation.
   */
  transformedImageResult: ImageData | null;

  /**
   * Document side classification.
   *
   *  If side classification was uncertain, `"unknown"` is returned.
   */
  side: CaptureSide;
};

/**
 * Document side classification.
 *
 *  If side classification was uncertain, `"unknown"` is returned.
 */
export type CaptureSide = "unknown" | "front" | "back";

/**
 * Completeness status of capture process
 */
export type CompletnessStatus = "empty" | "one-side-missing" | "complete";

/**
 * Document group classification.
 */
export type DocumentGroup =
  | "unknown"
  | "dl"
  | "id"
  | "passport"
  | "passport-card"
  | "visa";
