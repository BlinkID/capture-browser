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

/* @refresh reload */

import { Component, Show, createEffect, onCleanup } from "solid-js";
import { Dynamic } from "solid-js/web";
import { CaptureScreen, CaptureScreenPortalled } from "./CaptureScreen";

import { zustandStore } from "../core/zustandStore";
import { ErrorAlert } from "./ErrorAlert";
import { useSolidStore } from "./StoreContext";
import { MOUNT_POINT_ID } from "./createCaptureUi";
import "./root-styles.scss";

const RootComponent: Component = () => {
  const { solidStore, sdkStore } = useSolidStore();

  // TODO: See if we can simplify this and if this is a good place to do this
  function destroyInstanceOnDismount() {
    if (
      solidStore.captureSdk &&
      solidStore.uiSettings.destroyInstanceOnDismount
    ) {
      void solidStore.captureSdk.destroy();
    }
  }

  // Cleanup the rest of the component if the video element is disconnected
  // This is useful when using conditional rendering and portalling
  createEffect(() => {
    if (solidStore.captureSdk) {
      const unsubscribe = solidStore.captureSdk.subscribe(
        (store) => store.videoElement,
        // On videoElement mount, it will be [videoElement, null]
        // If the videoElement disappears, it will become [null, videoElement]
        (current, previous) => {
          if (!zustandStore.getState().initialized) {
            return;
          }
          if (!current && previous) {
            console.info("Video element disconnected, dismounting");
            solidStore.dismountFn();
            destroyInstanceOnDismount();
          }
        },
      );
      onCleanup(() => unsubscribe());
    }
  });

  // Destroy the SDK instance when the component is unmounted
  onCleanup(() => {
    destroyInstanceOnDismount();
  });

  return (
    <>
      <Show when={solidStore.uiSettings.showErrorDialog && sdkStore.errorState}>
        {(error) => <ErrorAlert error={error()} />}
      </Show>

      {/* TODO: handle loading state in portal or let the user handle it */}
      <Show when={solidStore.captureSdk}>
        <Dynamic
          component={
            (solidStore.uiSettings.target as HTMLElement).id === MOUNT_POINT_ID
              ? CaptureScreenPortalled
              : CaptureScreen
          }
        />
      </Show>
    </>
  );
};

export { RootComponent };
