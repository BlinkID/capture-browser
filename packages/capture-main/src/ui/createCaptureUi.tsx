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

import { MountableElement, render } from "solid-js/web";

import deepmerge from "deepmerge";
import isPlainObject from "is-plain-obj";
import { SetStoreFunction } from "solid-js/store";
import {
  CaptureSdk,
  CaptureSdkSettings,
  createCaptureSdk,
} from "../core/CaptureSdk";
import {
  LocalizationProvider,
  LocalizationStrings,
} from "./LocalizationContext";
import { RootComponent } from "./RootComponent";
import { SolidStore, StoreProvider, UiSettings } from "./StoreContext";

/**
 * The Capture UI component. Provides methods for controlling the Capture SDK and the UI
 */
export type CaptureComponent = {
  /** The instance of the Capture SDK wrapped by the UI */
  captureSdk: CaptureSdk;
  /** Updates the localization strings */
  updateLocalization: SetStoreFunction<LocalizationStrings>;
  /** Dismounts the component from the DOM and unloads the SDK */
  dismount: () => void;
};

/**
 * Use {@linkcode CaptureComponent} instead of `ExposedComponentApi`
 * @deprecated
 */
export type ExposedComponentApi = CaptureComponent;

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
export async function createCaptureUi(
  settings: CreateCaptureUiSettings,
): Promise<CaptureComponent> {
  const captureSdk = await createCaptureSdk(settings.sdkSettings);

  const uiSettings = settings.uiSettings ?? {};
  // We default to `true` here because we want to destroy the SDK instance
  uiSettings.destroyInstanceOnDismount = true;

  return createCaptureUiWithInstance(captureSdk, uiSettings);
}

/**
 * Creates the capture UI with an existing instance of the Capture SDK
 * @param captureSdk
 * @param uiSettings
 */
export function createCaptureUiWithInstance(
  captureSdk: CaptureSdk,
  uiSettings: UiSettings = {},
) {
  // This function will unmount the component and remove the mount point from the DOM
  const dismount = () => {
    try {
      document.getElementById(MOUNT_POINT_ID)?.remove();
      dismountRef();
    } catch (e) {
      // component is already unmounted
    }
  };

  const initialState: SolidStore = {
    captureSdk,
    helpVisible: false,
    uiSettings: {
      target: null as unknown as MountableElement,
      showTutorial: true,
      showErrorDialog: true,
      // We default to `false` here because we want to keep the SDK instance
      destroyInstanceOnDismount: false,
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
  const target = uiSettings?.target ?? document.createElement("div");

  if (!target.isConnected && target instanceof HTMLDivElement) {
    target.setAttribute("id", MOUNT_POINT_ID);
    document.body.appendChild(target);
  }

  const mergedUiSettings = deepmerge(initialState.uiSettings, uiSettings, {
    isMergeableObject: isPlainObject,
  });

  // we can't clone DOM nodes, so we add it to `mergedDefaults` after
  // `deepmerge`
  // https://github.com/TehShrike/deepmerge/issues/221
  mergedUiSettings.target = target;

  // Merge the provided settings with the defaults
  const mergedDefaults: SolidStore = {
    ...initialState,
    uiSettings: mergedUiSettings,
  };

  // A reference to the `updateLocalization` function inside the `LocalizationProvider`
  let updateLocalizationRef!: SetStoreFunction<LocalizationStrings>;

  // This function is called by the `LocalizationProvider` to lift the state update function up
  const setLocalizationRef = (fn: SetStoreFunction<LocalizationStrings>) => {
    updateLocalizationRef = fn;
  };

  const dismountRef = render(
    () => (
      <LocalizationProvider
        userStrings={uiSettings?.localization}
        setLocalizationRef={setLocalizationRef}
      >
        <StoreProvider
          captureSdk={captureSdk}
          solidStoreDefaults={mergedDefaults}
        >
          <RootComponent />
        </StoreProvider>
      </LocalizationProvider>
    ),
    mergedDefaults.uiSettings.target,
  );

  const exposedComponentApi: CaptureComponent = {
    captureSdk,
    updateLocalization: updateLocalizationRef,
    dismount,
  };

  return exposedComponentApi;
}
