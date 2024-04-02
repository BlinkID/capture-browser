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

import { UiStateKey } from "../core/FeedbackParser";
import { LocalizationStrings } from "./LocalizationContext";

export const feedbackMessages: Partial<
  Record<UiStateKey, keyof LocalizationStrings>
> = {
  SENSING_FRONT: "scan_the_front_side",
  SENSING_BACK: "scan_the_back_side",
  SIDE_CAPTURED: "flip_document",
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
  DOCUMENT_FRAMING_CAMERA_ORIENTATION_UNSUITABLE: "rotate_phone",
  DOCUMENT_FRAMING_CAMERA_ORIENTATION_UNSUITABLE_ANIMATION:
    "rotate_phone_animation",
  // lighting
  LIGHTING_TOO_DARK: "lightning_too_dark",
  LIGHTING_TOO_BRIGHT: "lightning_too_bright",
};
