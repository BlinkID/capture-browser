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

import deepmerge from "deepmerge";
import { SetStoreFunction } from "solid-js/store";
import { CaptureSdk, CaptureSdkSettings } from "../core/CaptureSdk";
import {
  LocalizationProvider,
  LocalizationStrings,
} from "./LocalizationContext";
import { RootComponent } from "./RootComponent";
import { SolidStore, StoreProvider, UiSettings } from "./StoreContext";
import isPlainObject from "is-plain-obj";

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

type CreateCaptureUiSettings = {
  sdkSettings: CaptureSdkSettings;
  uiSettings?: UiSettings;
};

export const MOUNT_POINT_ID = "mount-point";

/**
 * Creates the capture UI and loads the SDK
 *
 * @param settings {@linkcode CreateCaptureUiSettings}
 * @returns An object with methods for controlling the Capture SDK and the UI
 * component
 */
export function createCaptureUi(settings: CreateCaptureUiSettings) {
  return new Promise<CaptureComponent>((resolve) => {
    const dismount = () => {
      dismountRef();
      document.getElementById(MOUNT_POINT_ID)?.remove();
    };

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

    // We create a dummy element that will be the target of the `dismount()`
    // function if no target is provided. If we simply provide `document.body`,
    // `dismount()` will clear the entire document body:
    //
    // https://www.solidjs.com/docs/latest/api#render
    //
    // This is a DX optimization so that users don't need to provide their own
    // dummy mount points if they are using a portalled component anyway
    const target = settings.uiSettings?.target ?? document.createElement("div");

    if (!target.isConnected && target instanceof HTMLDivElement) {
      target.setAttribute("id", MOUNT_POINT_ID);
      document.body.appendChild(target);
    }

    const mergedDefaults: SolidStore = deepmerge(initialState, settings, {
      isMergeableObject: isPlainObject,
    });

    // we can't clone DOM nodes, so we add it to `mergedDefaults` after
    // `deepmerge`
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
