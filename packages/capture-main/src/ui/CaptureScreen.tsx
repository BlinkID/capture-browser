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
import { Component, Show, createEffect } from "solid-js";

import { Dialog } from "@kobalte/core";

import { Header } from "./Header";
import { useSolidStore } from "./StoreContext";
import { UiFeedbackOverlay } from "./UiFeedbackOverlay";

import clsx from "clsx";
import { HelpButton } from "./HelpButton";
import { HelpDialog } from "./HelpDialog";
import { useLocalization } from "./LocalizationContext";
import { OnboardingDialog } from "./OnboardingDialog";
import MicroblinkLogo from "./assets/microblink.svg?component-solid";
import { uiStateMap } from "../core/FeedbackParser";

// TODO: Full screen background

export const CaptureScreen: Component = () => {
  let videoRef: HTMLVideoElement;
  const { solidStore, sdkStore } = useSolidStore();

  const { t } = useLocalization();

  // start playback when active stream is available
  createEffect(() => {
    const captureSdk = solidStore.captureSdk;

    if (!sdkStore || !captureSdk) {
      return;
    }

    void captureSdk.startCameraStream(videoRef).then(async () => {
      // pause capture if tutorial visible
      if (!solidStore.uiSettings.showTutorial) {
        await captureSdk.startCapture();
      }
    });
  });

  return (
    <div
      class={clsx("mb-style-scope", captureScreenRootStyles, "mb-video-screen")}
    >
      {/* TODO: more information on loading state. Place in a toast */}
      <Show
        when={!sdkStore.isQueryingCameras}
        fallback={<div>{t.camera_query_in_progress}</div>}
      >
        <Header />
        {/* <DebugControls /> */}
      </Show>

      {/* TODO: see if `isPlaying` is a good indicator to show dialogs on start */}
      {/* TODO: we have mount logic in parent and child component */}
      <Show when={sdkStore.isPlaying && solidStore.uiSettings.showTutorial}>
        <OnboardingDialog />
      </Show>

      <Show when={solidStore.helpVisible}>
        <HelpDialog />
      </Show>

      {/* Video element loaded in SDK - we can start capturing */}
      <Show
        when={
          sdkStore.isCapturing ||
          // TODO: check why we can't simply compare `uiState`. This is a pervasive problem
          // TODO: transient states which aren't strictly "not capturing". Find
          // a better way to handle this
          sdkStore.uiState.key === uiStateMap.SIDE_CAPTURED.key ||
          sdkStore.uiState.key === uiStateMap.DOCUMENT_CAPTURED.key ||
          sdkStore.uiState.key ===
            uiStateMap.DOCUMENT_FRAMING_CAMERA_ORIENTATION_UNSUITABLE_ANIMATION
              .key
        }
      >
        <UiFeedbackOverlay />
      </Show>

      <div class={clsx(logoPositionerStyles, "mb-logo")}>
        <MicroblinkLogo class={logoStyles} />
      </div>

      <HelpButton />

      <video
        class={videoStyles}
        style={{
          transform: `scaleX(${sdkStore.mirrorX ? -1 : 1})`,
        }}
        ref={videoRef!}
        src=""
      />
    </div>
  );
};

export const CaptureScreenPortalled: Component = () => (
  <Dialog.Root defaultOpen>
    <Dialog.Portal>
      <Dialog.Content
        onEscapeKeyDown={(e) => e.preventDefault()}
        onPointerDownOutside={(e) => e.preventDefault()}
        onOpenAutoFocus={(e) => e.preventDefault()}
        class={captureScreenPortalStyles}
      >
        <CaptureScreen />
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

const captureScreenRootStyles = css`
  background-color: var(--mb-gray-overlay-bg);
  color: var(--mb-color-white);
  width: 100%;
  height: 100%;
  position: relative;
  min-height: 300px;
`;

const captureScreenPortalStyles = css`
  height: 100vh;
  width: 100vw;
  height: 100dvh;
  width: 100dvw;
  position: fixed;
  top: 0;
  left: 0;
  &:focus-visible {
    outline: none;
  }
`;

const logoStyles = css`
  width: 115px;
  height: 53px;
  margin: auto;
  filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.1))
    drop-shadow(0px 0px 15px rgba(0, 0, 0, 1));
`;

const logoPositionerStyles = css`
  position: absolute;
  bottom: 10%;
  left: 0;
  width: 100%;
  pointer-events: none;
`;

const videoStyles = css`
  display: block;
  max-width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  object-fit: contain;
`;
