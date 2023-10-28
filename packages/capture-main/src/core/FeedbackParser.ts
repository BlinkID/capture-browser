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

import { FrameAnalysisResult } from "capture-wasm";
import { P, match } from "ts-pattern";
import { getKeyWithHighestValue } from "./utils";

export type UiStateEvent = {
  stateKey: Readonly<UiStateKey>;
  timeStamp: Readonly<DOMHighResTimeStamp>;
  currentWeight: number;
};

export type ReticleType =
  | "searching"
  | "processing"
  | "error"
  | "done"
  | "flip"
  | "rotate";

export type UiStateKey =
  | "PROCESSING"
  | "SIDE_CAPTURED"
  | "DOCUMENT_CAPTURED"
  | "SENSING_FRONT"
  | "SENSING_BACK"
  | "DOCUMENT_FRAMING_CAMERA_TOO_FAR"
  | "DOCUMENT_FRAMING_CAMERA_TOO_CLOSE"
  | "DOCUMENT_FRAMING_CAMERA_ORIENTATION_UNSUITABLE"
  | "DOCUMENT_FRAMING_CAMERA_ORIENTATION_UNSUITABLE_ANIMATION"
  | "DOCUMENT_FRAMING_CAMERA_ANGLE_TOO_STEEP"
  | "DOCUMENT_TOO_CLOSE_TO_FRAME_EDGE"
  | "LIGHTING_TOO_DARK"
  | "LIGHTING_TOO_BRIGHT"
  | "BLUR_DETECTED"
  | "GLARE_DETECTED"
  | "OCCLUDED"
  | "WRONG_SIDE";

export type UiState = Readonly<{
  key: UiStateKey;
  reticleType: ReticleType;
  minDuration: number;
}>;

export const uiStateMap: Readonly<Record<UiStateKey, UiState>> = {
  PROCESSING: {
    key: "PROCESSING",
    reticleType: "processing",
    minDuration: 1000,
  },
  SIDE_CAPTURED: {
    key: "SIDE_CAPTURED",
    reticleType: "flip",
    minDuration: 3000,
  },
  DOCUMENT_CAPTURED: {
    key: "DOCUMENT_CAPTURED",
    reticleType: "done",
    minDuration: 1000,
  },
  SENSING_FRONT: {
    key: "SENSING_FRONT",
    reticleType: "searching",
    minDuration: 1000,
  },
  SENSING_BACK: {
    key: "SENSING_BACK",
    reticleType: "searching",
    minDuration: 1000,
  },
  DOCUMENT_FRAMING_CAMERA_TOO_FAR: {
    key: "DOCUMENT_FRAMING_CAMERA_TOO_FAR",
    reticleType: "error",
    minDuration: 1500,
  },
  DOCUMENT_FRAMING_CAMERA_TOO_CLOSE: {
    key: "DOCUMENT_FRAMING_CAMERA_TOO_CLOSE",
    reticleType: "error",
    minDuration: 1500,
  },
  /**
   * This is a special case where we want to show the animation only once It's
   * handled manually inside `CaptureSdk`, and not in `getUiStateKeyFromResult()`
   */
  DOCUMENT_FRAMING_CAMERA_ORIENTATION_UNSUITABLE_ANIMATION: {
    key: "DOCUMENT_FRAMING_CAMERA_ORIENTATION_UNSUITABLE_ANIMATION",
    reticleType: "rotate",
    minDuration: 3000,
  },
  DOCUMENT_FRAMING_CAMERA_ORIENTATION_UNSUITABLE: {
    key: "DOCUMENT_FRAMING_CAMERA_ORIENTATION_UNSUITABLE",
    reticleType: "error",
    minDuration: 1500,
  },
  DOCUMENT_FRAMING_CAMERA_ANGLE_TOO_STEEP: {
    key: "DOCUMENT_FRAMING_CAMERA_ANGLE_TOO_STEEP",
    reticleType: "error",
    minDuration: 1500,
  },
  DOCUMENT_TOO_CLOSE_TO_FRAME_EDGE: {
    key: "DOCUMENT_TOO_CLOSE_TO_FRAME_EDGE",
    reticleType: "error",
    minDuration: 1500,
  },
  LIGHTING_TOO_DARK: {
    key: "LIGHTING_TOO_DARK",
    reticleType: "error",
    minDuration: 1500,
  },
  LIGHTING_TOO_BRIGHT: {
    key: "LIGHTING_TOO_BRIGHT",
    reticleType: "error",
    minDuration: 1500,
  },
  BLUR_DETECTED: {
    key: "BLUR_DETECTED",
    reticleType: "error",
    minDuration: 1500,
  },
  GLARE_DETECTED: {
    key: "GLARE_DETECTED",
    reticleType: "error",
    minDuration: 1500,
  },
  OCCLUDED: {
    key: "OCCLUDED",
    reticleType: "error",
    minDuration: 1500,
  },
  WRONG_SIDE: {
    key: "WRONG_SIDE",
    reticleType: "error",
    minDuration: 1500,
  },
};

class FeedbackParser {
  private timeWindow = 3000;
  private decayRate = 0.95;
  private eventStack: UiStateEvent[] = [];
  // used for tracking current state
  private currentUiState = uiStateMap.SENSING_FRONT;
  private currentStateStartTime = performance.now();

  reset() {
    this.eventStack = [];
  }

  /**
   * Returns a weighted UI state based on the history
   */
  getUiState(frameAnalysisResult: FrameAnalysisResult) {
    const now = performance.now();

    // create new event
    const uiStateEvent: UiStateEvent = {
      stateKey: this.getUiStateKeyFromResult(frameAnalysisResult),
      timeStamp: now,
      currentWeight: 1,
    };

    // if event is success, don't use weighted averages and clear the stack
    if (
      uiStateEvent.stateKey === "SIDE_CAPTURED" ||
      uiStateEvent.stateKey === "DOCUMENT_CAPTURED"
    ) {
      this.eventStack = [];
      return uiStateMap[uiStateEvent.stateKey];
    }

    // place new event on stack
    this.eventStack.push(uiStateEvent);

    // set up the scoreboard for current stack iteration
    const scoreBoard: Partial<Record<UiStateKey, number[]>> = {};

    // start iterating from the oldest events
    this.eventStack.forEach((event) => {
      // delete and skip events outside of time window
      if (now - event.timeStamp > this.timeWindow) {
        this.eventStack.shift();
        return;
      }

      const relativeTime = event.timeStamp / now;

      // Decay weight based on time, not only index.
      event.currentWeight *= this.decayRate * relativeTime;

      // prefill board
      if (!scoreBoard[event.stateKey]) {
        scoreBoard[event.stateKey] = [];
      }

      // push the score on the current track
      scoreBoard[event.stateKey]!.push(event.currentWeight);
    });

    // Return same state if under minimum duration
    if (now - this.currentStateStartTime < this.currentUiState.minDuration) {
      return this.currentUiState;
    }

    // Otherwise calculate new UI state

    // We use this record to sum individual tracks
    const summedScores: Partial<Record<UiStateKey, number>> = {};

    // score board is full, pick a winning state
    for (const track in scoreBoard) {
      const key = track as UiStateKey;
      const relativeAmount = track.length / this.eventStack.length;
      const sum = scoreBoard[key]!.reduce((partialSum, a) => partialSum + a, 0);
      summedScores[key] = sum * relativeAmount;
    }

    // TODO: this sometimes fails with 0 keys - inspect!
    try {
      const winningKey = getKeyWithHighestValue(summedScores) as UiStateKey;
      const winningState = uiStateMap[winningKey];
      // start tracking time if it's a different state
      if (winningState !== this.currentUiState) {
        this.currentUiState = winningState;
        this.currentStateStartTime = now;
      }

      return winningState;
    } catch (error) {
      return this.currentUiState;
    }
  }

  /**
   * Returns a requested UI state key based on the latest frame
   */
  private getUiStateKeyFromResult(frameAnalysisResult: FrameAnalysisResult) {
    return (
      match<FrameAnalysisResult, UiStateKey>(frameAnalysisResult)
        .with(
          {
            frameCaptured: true,
            captureState: P.when(
              (s) =>
                s === "first-side-capture-in-progress" ||
                s === "second-side-capture-in-progress",
            ),
          },
          () => "PROCESSING",
        )
        .with(
          {
            captureState: "first-side-capture-in-progress",
            frameAnalysisStatus: {
              framingStatus: "no-document",
            },
          },
          () => "SENSING_FRONT",
        )
        .with(
          {
            captureState: "second-side-capture-in-progress",
            frameAnalysisStatus: {
              framingStatus: "no-document",
            },
          },
          () => "SENSING_BACK",
        )
        // transitive
        .with(
          {
            captureState: "document-captured",
          },
          () => "DOCUMENT_CAPTURED",
        )
        .with(
          {
            captureState: "side-captured",
          },
          () => "SIDE_CAPTURED",
        )
        .with(
          {
            frameAnalysisStatus: {
              sideAnalysisStatus: "side-already-captured",
            },
          },
          () => "WRONG_SIDE",
        )
        // framing
        .with(
          {
            frameAnalysisStatus: {
              framingStatus: "camera-angle-too-steep",
            },
          },
          () => "DOCUMENT_FRAMING_CAMERA_ANGLE_TOO_STEEP",
        )
        .with(
          {
            frameAnalysisStatus: {
              framingStatus: "camera-too-close",
            },
          },
          () => "DOCUMENT_FRAMING_CAMERA_TOO_CLOSE",
        )
        .with(
          {
            frameAnalysisStatus: {
              framingStatus: "camera-orientation-unsuitable",
            },
          },
          () => "DOCUMENT_FRAMING_CAMERA_ORIENTATION_UNSUITABLE",
        )
        .with(
          {
            frameAnalysisStatus: {
              framingStatus: "camera-too-far",
            },
          },
          () => "DOCUMENT_FRAMING_CAMERA_TOO_FAR",
        )
        .with(
          {
            frameAnalysisStatus: {
              framingStatus: "document-too-close-to-frame-edge",
            },
          },
          () => "DOCUMENT_TOO_CLOSE_TO_FRAME_EDGE",
        )
        // lighting
        .with(
          {
            frameAnalysisStatus: {
              lightingStatus: "too-bright",
            },
          },
          () => "LIGHTING_TOO_BRIGHT",
        )
        .with(
          {
            frameAnalysisStatus: {
              lightingStatus: "too-dark",
            },
          },
          () => "LIGHTING_TOO_DARK",
        )
        // occlusion
        .with(
          {
            frameAnalysisStatus: {
              blurStatus: "blur-detected",
            },
          },
          () => "BLUR_DETECTED",
        )
        .with(
          {
            frameAnalysisStatus: {
              glareStatus: "glare-detected",
            },
          },
          () => "GLARE_DETECTED",
        )
        .with(
          {
            frameAnalysisStatus: {
              occlusionStatus: "occluded",
            },
          },
          () => "OCCLUDED",
        )
        // fallback
        .otherwise(() => "SENSING_FRONT")
    );
  }
}

export const feedbackParser = new FeedbackParser();
