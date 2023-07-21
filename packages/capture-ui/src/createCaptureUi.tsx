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

import { MountableElement, render } from "solid-js/web";

import { CaptureSdk, CaptureSdkSettings } from "capture-main";
import { SetStoreFunction } from "solid-js/store";
import {
  LocalizationProvider,
  LocalizationStrings,
} from "./LocalizationContext";
import { RootComponent } from "./RootComponent";
import { SolidStore, StoreProvider, UiSettings } from "./StoreContext";
import deepmerge from "deepmerge";

export type CaptureComponent = {
  /** Dismounts the component from the DOM and unloads the SDK */
  dismount: () => void;
} & ExposedComponentApi;

export type ExposedComponentApi = {
  /** Can return undefined if called after the SDK has been
   * destroyed
   */
  captureSdk: CaptureSdk | undefined;
  updateLocalization: SetStoreFunction<LocalizationStrings>;
};

/**
 * Loads the UI component along with the Capture SDK.
 *
 * @param target The DOM node you want to render the Capture UI component to
 * @param sdkSettings Settings for the Capture SDK
 * @param uiSettings Settings for the Capture SDK UI component
 * @returns An object with methods for controlling the Capture SDK and the UI
 * component
 *
 * @example
 * ```typescript
 * // Load the UI and the SDK
 * const captureComponent = await createCaptureUi({
 *   sdkSettings: {
 *     licenseKey: "YOUR_LICENCE_KEY",
 *     callbacks: {
 *       onCaptureResult: (result) => console.log(result),
 *     },
 *   },
 * });
 *
 * // Will dismount and clean up
 * captureComponent.dismount()
 * ```
 */

type CreateCaptureUiSettings = {
  sdkSettings: CaptureSdkSettings;
  uiSettings?: UiSettings;
};

/** Creates the capture UI and loads the SDK */
export function createCaptureUi(settings: CreateCaptureUiSettings) {
  return new Promise<CaptureComponent>((resolve) => {
    const dismount = () => dismountRef();

    const initialState: SolidStore = {
      captureSdk: undefined,
      helpVisible: false,
      uiSettings: {
        target: null as unknown as MountableElement,
        showTutorial: true,
        showErrorDialog: true,
      },
      dismountFn: dismount,
    };

    // we can't clone DOM nodes, need a reference
    const target = settings.uiSettings?.target ?? document.body;

    const mergedDefaults: SolidStore = deepmerge(initialState, {
      uiSettings: settings,
    });

    mergedDefaults.uiSettings.target = target;

    const exposeApiOnLoad = (exposedApi: ExposedComponentApi) => {
      resolve({
        dismount,
        ...exposedApi,
      });
    };

    const dismountRef = render(
      () => (
        <LocalizationProvider userStrings={settings.uiSettings?.localization}>
          <StoreProvider
            sdkSettings={settings.sdkSettings}
            mergedDefaults={mergedDefaults}
          >
            <RootComponent exposeApiOnLoad={exposeApiOnLoad} />
          </StoreProvider>
        </LocalizationProvider>
      ),
      mergedDefaults.uiSettings.target,
    );
  });
}
