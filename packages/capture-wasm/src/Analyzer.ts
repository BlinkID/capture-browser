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

import { EmbindObject } from "./EmbindObject";
import { FrameAnalysisResult } from "./FrameAnalysisResult";
import { AnalyzerResult } from "./AnalyzerResult";
import { AnalyzerSettings } from "./AnalyzerSettings";

export declare class Analyzer extends EmbindObject {
  /**
   * Performs frame analysis and returns `FrameAnalysisResult`
   */
  analyze(image: ImageData): FrameAnalysisResult;
  getResult: () => AnalyzerResult;
  getSettings: () => AnalyzerSettings;
  updateSettings: (settings: AnalyzerSettings) => void;
  /** Returns analyzer to initial state */
  reset: () => void;
  /**
   * Method used to finish capture of current side when `Analyzer.analyze()`
   * didn't return {@linkcode FrameAnalysisResult#frameAnalysisStatus} state.
   *
   * Method tries to fill `SideCaptureResult` with current best frame, if there
   * isn't one method returns `false` and result is not changed, otherwise
   * `true` is returned and current best frame is filled in current
   * `SideCaptureResult`.
   */
  finishSideCapture: () => boolean;
}
