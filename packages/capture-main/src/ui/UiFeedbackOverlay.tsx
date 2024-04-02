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

import { css } from "@acab/ecsstatic";
import { Motion, Presence } from "@motionone/solid";
import { Rerun } from "@solid-primitives/keyed";
import clsx from "clsx";
import { Component, Match, ParentComponent, Show, Switch } from "solid-js";
import { useSolidStore } from "./StoreContext";

import { UiState, uiStateMap } from "../core/FeedbackParser";
import { useLocalization } from "./LocalizationContext";
import CardIconBack from "./assets/reticles/card-back.svg?component-solid";
import CardIconFront from "./assets/reticles/card-front.svg?component-solid";
import DoneIcon from "./assets/reticles/done.svg?component-solid";
import FullIcon from "./assets/reticles/full.svg?component-solid";
import SearchIcon from "./assets/reticles/searching.svg?component-solid";
import ScanIcon from "./assets/reticles/spin.svg?component-solid";
import { feedbackMessages } from "./feedbackMessages";

export const UiFeedbackOverlay: Component = () => {
  const { sdkStore } = useSolidStore();

  const videoOrientation = () => {
    const w = sdkStore.videoElement!.videoWidth;
    const h = sdkStore.videoElement!.videoHeight;

    const isLandscape = w > h;

    return isLandscape ? "landscape" : "portrait";
  };

  return (
    <div
      class={css`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: grid;
        place-items: center;
        z-index: 1;
        user-select: none;
      `}
    >
      <div>
        <div
          class={css`
            width: 96px;
            height: 96px;
          `}
        >
          <div
            class={css`
              position: absolute;
            `}
          >
            <Switch>
              <Match when={sdkStore.uiState.reticleType === "searching"}>
                <SearchReticle />
              </Match>
              <Match when={sdkStore.uiState.reticleType === "processing"}>
                <ScanningReticle />
              </Match>
              <Match when={sdkStore.uiState.reticleType === "error"}>
                <ErrorReticle />
              </Match>
              <Match when={sdkStore.uiState.reticleType === "done"}>
                <DoneFeedback />
              </Match>
              <Match when={sdkStore.uiState.reticleType === "flip"}>
                <FlipCardFeedback />
              </Match>
              <Match when={sdkStore.uiState.reticleType === "rotate"}>
                <RotateCardFeedback videoOrientation={videoOrientation()} />
              </Match>
            </Switch>
          </div>
        </div>
        <UiFeedbackMessage uiState={sdkStore.uiState} />
      </div>
    </div>
  );
};

const DoneFeedback: Component = () => (
  <Motion
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{
      opacity: 1,
      scale: 1,
      transition: { easing: "ease-in-out", duration: 0.3 },
    }}
    exit={{ opacity: 0, scale: 5 }}
  >
    <DoneIcon
      class={css`
        width: 96px;
        height: 96px;
        filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.1));
        path {
          fill: initial;
        }
      `}
    />
  </Motion>
);

const RotateCardFeedback: Component<{
  videoOrientation: "landscape" | "portrait";
}> = (props) => (
  <div
    class={css`
      position: relative;
      /* TODO: Fix this horrible magic number */
      left: -28px;
      top: -28px;
      perspective: 300px;
    `}
  >
    <Motion
      class={css`
        transform-style: preserve-3d;
        position: relative;
      `}
      initial={{
        opacity: 0,
        rotateZ: props.videoOrientation === "landscape" ? "90deg" : "0deg",
      }}
      animate={{
        opacity: 1,
        rotateZ: [props.videoOrientation === "landscape" ? "0deg" : "90deg"],
        transition: {
          rotateZ: {
            duration:
              (uiStateMap
                .DOCUMENT_FRAMING_CAMERA_ORIENTATION_UNSUITABLE_ANIMATION
                .minDuration -
                1500) /
              1000,
          },
          opacity: {
            duration: 0.5,
          },
        },
      }}
      exit={{ opacity: 0 }}
    >
      <CardIconFront class={cardStyle} />
      <CardIconBack
        class={clsx(
          cardStyle,
          css`
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            transform: rotateY(180deg);
          `,
        )}
      />
    </Motion>
  </div>
);

const FlipCardFeedback: Component = () => (
  <div
    class={css`
      position: relative;
      /* TODO: Fix this horrible magic number */
      left: -28px;
      perspective: 300px;
    `}
  >
    <Motion
      class={css`
        transform-style: preserve-3d;
        position: relative;
      `}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        rotateY: ["180deg"],
        transition: {
          rotateY: {
            duration: (uiStateMap.SIDE_CAPTURED.minDuration - 1500) / 1000,
          },
          opacity: {
            duration: 0.5,
          },
        },
      }}
      exit={{ opacity: 0 }}
    >
      <CardIconFront class={cardStyle} />
      <CardIconBack
        class={clsx(
          cardStyle,
          css`
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            transform: rotateY(180deg);
          `,
        )}
      />
    </Motion>
  </div>
);

const cardStyle = css`
  width: 150px;
  backface-visibility: hidden;
  filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.1));
`;

const ReticleContainer: ParentComponent<{
  type: UiState["reticleType"];
}> = (props) => {
  return (
    <Motion.div
      class={css`
        backdrop-filter: blur(10px);
        border-radius: 50%;
        width: 96px;
        height: 96px;
        display: grid;
        place-items: center;
      `}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        background:
          props.type === "error"
            ? "var(--mb-reticle-error)"
            : "var(--mb-reticle-ok)",
        transition: { delay: 0.05 },
      }}
      transition={{ duration: 0.05 }}
    >
      {props.children}
    </Motion.div>
  );
};

const SearchReticle: Component = () => (
  <ReticleContainer type="searching">
    <Motion
      class={css`
        will-change: transform;
      `}
      animate={{ opacity: 1, transform: "rotate(360deg)" }}
      transition={{
        transform: {
          duration: 1,
          easing: "ease-in-out",
          repeat: Infinity,
        },
      }}
    >
      <SearchIcon
        class={css`
          width: 48px;
          height: 48px;
        `}
      />
    </Motion>
  </ReticleContainer>
);

const ErrorReticle: Component = () => (
  <ReticleContainer type="error">
    <FullIcon
      class={css`
        width: 48px;
        height: 48px;
      `}
    />
  </ReticleContainer>
);

const ScanningReticle: Component = () => (
  <ReticleContainer type="processing">
    <Motion
      animate={{ opacity: 1, rotate: "360deg" }}
      transition={{
        rotate: {
          duration: 0.8,
          easing: [0.23, 0.58, 0.58, 0.23],
          repeat: Infinity,
        },
      }}
    >
      <ScanIcon
        class={css`
          width: 48px;
          height: 48px;
        `}
      />
    </Motion>
  </ReticleContainer>
);

const UiFeedbackMessage: Component<{
  uiState: UiState;
}> = (props) => {
  const { t } = useLocalization();

  const message = () => {
    if (props.uiState.key in feedbackMessages) {
      return feedbackMessages[props.uiState.key];
    }

    return;
  };

  return (
    <div
      class={css`
        position: absolute;
        left: 0;
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 8px;
      `}
    >
      <Presence exitBeforeEnter>
        <Rerun on={() => props.uiState.key}>
          <Show when={message()}>
            <Motion.div
              initial={{ opacity: 0, transform: "translateY(30px)" }}
              animate={{
                opacity: 1,
                transform: "translateY(0)",
                transition: { delay: 0.05 },
              }}
              transition={{ duration: 0.05 }}
              exit={{ opacity: 0, transform: "translateY(-30px)" }}
              class={css`
                will-change: transform, opacity;
                padding: 8px 12px;
                text-align: center;
                gap: 4px;
                border-radius: 8px;
                color: var(--mb-color-white);
                background: var(--mb-feedback-bg);
                backdrop-filter: blur(10px);
                max-width: 180px;
                font-weight: 700;
                line-height: 24px;
                text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
                text-wrap: balance;
              `}
            >
              <div>{t[message()!]}</div>
            </Motion.div>
          </Show>
        </Rerun>
      </Presence>
    </div>
  );
};
