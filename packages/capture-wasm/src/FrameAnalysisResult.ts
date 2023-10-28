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
 * The return type of `Analyzer.analyze`. It contains the current capture state
 * and frame analysis status.
 */
export type FrameAnalysisResult = {
  captureState: CaptureState;
  frameCaptured: boolean;
  frameAnalysisStatus: FrameAnalysisStatus;
};

/**
 * The return type of `Analyzer.analyze` when an error occurs.
 */
export type FrameAnalysisError = {
  error: FrameAnalysisErrorType;
};

/**
 * The type of error that can occur during frame analysis.
 */
export type FrameAnalysisErrorType =
  | "analyzer-settings-unsuitable-error"
  | "unknown-error";

/**
 * The frame analysis status.
 */
export type FrameAnalysisStatus = {
  sideAnalysisStatus: DocumentSideAnalysisStatus;
  framingStatus: DocumentFramingStatus;
  lightingStatus: DocumentLightingStatus;
  blurStatus: DocumentBlurStatus;
  glareStatus: DocumentGlareStatus;
  occlusionStatus: DocumentOcclusionStatus;
};

/**
 * The capture state.
 */
export type CaptureState =
  | "side-captured"
  | "document-captured"
  | "first-side-capture-in-progress"
  | "second-side-capture-in-progress";

/**
 * Analysis status of the document side for the current frame.
 */
export type DocumentSideAnalysisStatus =
  | "not-available"
  | "side-already-captured"
  | "side-not-captured";

/**
 *  The document framing status for the current frame.
 */
export type DocumentFramingStatus =
  | "not-available"
  | "no-document"
  | "camera-too-far"
  | "camera-too-close"
  | "camera-angle-too-steep"
  | "camera-orientation-unsuitable"
  | "document-too-close-to-frame-edge"
  | "ok";

/**
 * The document lighting status for the current frame.
 */
export type DocumentLightingStatus =
  | "not-available"
  | "too-bright"
  | "too-dark"
  | "normal";

/**
 * The document blur status for the current frame.
 */
export type DocumentBlurStatus =
  | "not-available"
  | "blur-detected"
  | "blur-not-detected";

/**
 * The document glare status for the current frame.
 */
export type DocumentGlareStatus =
  | "not-available"
  | "glare-detected"
  | "glare-not-detected";

/**
 * The document occlusion status for the current frame.
 */
export type DocumentOcclusionStatus =
  | "not-available"
  | "occluded"
  | "not-occluded";
