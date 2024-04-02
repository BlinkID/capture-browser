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

export default {
  // Capture messages
  scan_the_front_side: "Scan the front side of the document",
  flip_document: "Flip the document",
  scan_the_back_side: "Scan the back side of the document",
  scanning_wrong_side: "Scanning wrong side",
  move_closer: "Move closer",
  move_farther: "Move farther",
  camera_angle_too_steep: "Keep document parallel to phone",
  document_too_close_to_edge: "Move farther",
  rotate_phone_animation: "Rotate card or turn phone to landscape",
  rotate_phone: "Rotate phone or card",
  lightning_too_bright: "Move to spot with less lighting",
  lightning_too_dark: "Move to brighter spot",
  blur_detected: "Keep document and phone still",
  glare_detected: "Tilt or move document to remove reflection",
  occluded: "Keep the document fully visible",

  // Tutorial
  need_help_tooltip: "Need help?",
  onboarding_field_visible_title: "Keep all the details visible",
  onboarding_field_visible_details:
    "Make sure you keep the document well lit. All document fields should be visible on the camera screen.",
  tutorial_fields_visible_title: "Keep all the fields visible",
  tutorial_fields_visible_start: "Start scanning",
  tutorial_fields_visible_details:
    "Make sure you aren’t covering parts of the document with a finger, including the bottom lines. Also, watch out for hologram reflections that go over the document fields.",
  tutorial_harsh_light_title: "Watch out for harsh light",
  tutorial_harsh_light_details:
    "Avoid direct harsh light because it reflects from the document and can make parts of the document unreadable. If you can’t read data on the document, it won’t be visible to the camera either.",
  tutorial_keep_still_title: "Keep still while scanning",
  tutorial_keep_still_details:
    "Try to keep the phone and document still while scanning. Moving either can blur the image and make data on the document unreadable.",

  // Camera
  camera_unavailable: "Camera Unavailable",
  camera_permission_error:
    "App doesn't have permission to use the camera, please change privacy settings",
  settings: "Settings",
  camera_media_capture_error: "Unable to capture media",
  camera_unable_to_resume_session: "Unable to resume",
  camera_query_in_progress: "Selecting best camera, please wait",

  // Shared
  done: "Done",
  cancel: "Cancel",
  back: "Back",
  next: "Next",
  ok: "OK",
  dismiss: "Dismiss",
  // `as const` is required for autocomplete to work
} as const;
