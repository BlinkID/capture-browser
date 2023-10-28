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

/* @refresh reload */

import { Component, Show, createEffect } from "solid-js";
import { Dynamic } from "solid-js/web";
import { CaptureScreen, CaptureScreenPortalled } from "./CaptureScreen";

import { ErrorAlert } from "./ErrorAlert";
import { useLocalization } from "./LocalizationContext";
import { useSolidStore } from "./StoreContext";
import { ExposedComponentApi, MOUNT_POINT_ID } from "./createCaptureUi";
import "./root-styles.scss";

const RootComponent: Component<{
  exposeApiOnLoad: (api: ExposedComponentApi) => void;
}> = (props) => {
  const { solidStore, sdkStore } = useSolidStore();
  const { updateLocalization } = useLocalization();

  // lift the SDK API outside the component scope and notify when ready
  createEffect(() => {
    if (solidStore.captureSdk) {
      // Also expose localization changes
      props.exposeApiOnLoad({
        updateLocalization,
        captureSdk: solidStore.captureSdk,
      });
    }
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
