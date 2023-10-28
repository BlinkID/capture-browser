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

import { AnalyzerResult } from "./AnalyzerResult";
import { AnalyzerSettings } from "./AnalyzerSettings";
import { EmbindObject } from "./EmbindObject";
import { FrameAnalysisError, FrameAnalysisResult } from "./FrameAnalysisResult";

export declare class Analyzer extends EmbindObject {
  /**
   * Analyses a single image and returns either `FrameAnalysisResult` or `FrameAnalysisError`.
   * Each captured image is stored as a candidate for the best frame.
   */
  analyze(image: ImageData): FrameAnalysisResult | FrameAnalysisError;

  /**
   * Returns the analyzer result.
   */
  getResult: () => AnalyzerResult;

  /**
   * Returns the analyzer settings.
   */
  getSettings: () => AnalyzerSettings;

  /**
   * Updates the analyzer settings.
   */
  updateSettings: (settings: AnalyzerSettings) => void;

  /** Resets the currently active capturing process. */
  reset: () => void;

  /**
   * Attempts to finish the side capture early.
   *
   * If there aren't enough captured frames, the method returns `false` and
   * further `Analyzer.analyze` calls are required.
   *
   * Otherwise, the method returns `true` and the `Analyzer` uses the best frame
   * candidate to finish the side capture and either finish the capture process
   * or continue to the next side.
   *
   * @returns `true` if there are enough captured frames to finish the capture
   * process and `getResult` can be called, `false` otherwise.
   */
  finishSideCapture: () => boolean;
}
