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

import { UiStateKey } from "capture-main";
import { LocalizationStrings } from "./LocalizationContext";

export const feedbackMessages: Partial<
  Record<UiStateKey, keyof LocalizationStrings>
> = {
  SENSING_FRONT: "scan_the_front_side",
  SENSING_BACK: "scan_the_back_side",
  FLIP_CARD: "flip_document",
  WRONG_SIDE: "scanning_wrong_side",
  // occlusion
  BLUR_DETECTED: "blur_detected",
  GLARE_DETECTED: "glare_detected",
  OCCLUDED: "occluded",
  // framing
  DOCUMENT_FRAMING_CAMERA_TOO_CLOSE: "move_farther",
  DOCUMENT_FRAMING_CAMERA_TOO_FAR: "move_closer",
  DOCUMENT_TOO_CLOSE_TO_FRAME_EDGE: "document_too_close_to_edge",
  DOCUMENT_FRAMING_CAMERA_ANGLE_TOO_STEEP: "camera_angle_too_steep",
  // lighting
  LIGHTING_TOO_DARK: "lightning_too_dark",
  LIGHTING_TOO_BRIGHT: "lightning_too_bright",
};
