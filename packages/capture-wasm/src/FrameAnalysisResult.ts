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

export type FrameAnalysisResult = {
  captureState: CaptureState;
  frameCaptured: boolean;
  frameAnalysisStatus: FrameAnalysisStatus;
};

export type FrameAnalysisStatus = {
  sideAnalysisStatus: DocumentSideAnalysisStatus;
  framingStatus: DocumentFramingStatus;
  lightingStatus: DocumentLightingStatus;
  blurStatus: DocumentBlurStatus;
  glareStatus: DocumentGlareStatus;
  occlusionStatus: DocumentOcclusionStatus;
};

export type CaptureState =
  | "side-captured"
  | "document-captured"
  | "first-side-capture-in-progress"
  | "second-side-capture-in-progress";

/** Back side analysis */
export type DocumentSideAnalysisStatus =
  | "not-available"
  | "side-already-captured"
  | "side-not-captured";

export type DocumentFramingStatus =
  | "not-available"
  | "no-document"
  | "camera-too-far"
  | "camera-too-close"
  | "camera-angle-too-steep"
  | "document-too-close-to-frame-edge"
  | "ok";

export type DocumentLightingStatus =
  | "not-available"
  | "too-bright"
  | "too-dark"
  | "normal";

export type DocumentBlurStatus =
  | "not-available"
  | "blur-detected"
  | "blur-not-detected";

export type DocumentGlareStatus =
  | "not-available"
  | "glare-detected"
  | "glare-not-detected";

export type DocumentOcclusionStatus =
  | "not-available"
  | "occluded"
  | "not-occluded";
