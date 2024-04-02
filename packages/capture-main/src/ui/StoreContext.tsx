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

import {
  ParentComponent,
  createContext,
  createEffect,
  useContext,
} from "solid-js";
import { SetStoreFunction, createStore } from "solid-js/store";
import { MountableElement } from "solid-js/web";
import { useStore } from "solid-zustand";
import { CaptureSdk } from "../core/CaptureSdk";
import { ReactiveStore, zustandStore } from "../core/zustandStore";
import { LocalizationStrings } from "./LocalizationContext";

export type SolidStore = {
  /** Reference to the core SDK module.
   *
   * Guaranteed to be available inside the `CaptureScreen` component.
   */
  captureSdk?: CaptureSdk;
  /** Is the help UI dialog open */
  helpVisible: boolean;
  /** UI settings sent to the Context provider */
  uiSettings: Omit<UiSettingsWithDefinedTarget, "localization">;
  /** Function which will dismount the component */
  dismountFn: () => void;
};

export type UiSettings = {
  /** Target DOM node where you want the UI component to mount.
   *
   * If not provided, the component will be portalled in the document root,
   * taking up the entire screen.
   */
  target?: MountableElement;
  /** If `true`, an onboarding screen will be visible once the video feed starts.
   *
   * @default `true`
   *  */
  showTutorial?: boolean;
  /** If `true`, errors thrown in the SDK will be shown in a dialog.
   *
   * @default `true`
   *  */
  showErrorDialog?: boolean;
  /**
   * User provided localization keys
   */
  localization?: Partial<LocalizationStrings>;

  /**
   * If `true`, the SDK will be destroyed when the component is dismounted.
   * This is useful if you want to re-initialize the SDK on the same page.
   *
   * Defaults to `true` when using `createCaptureUi` and `false` when using
   * `createCaptureUiWithInstance`.
   */
  destroyInstanceOnDismount?: boolean;
};

/**
 * This type is used internally when the target is defined after initialization
 */
export interface UiSettingsWithDefinedTarget extends UiSettings {
  target: MountableElement;
}

const StoreContext = createContext<{
  solidStore: SolidStore;
  updateSolidStore: SetStoreFunction<SolidStore>;
  sdkStore: ReactiveStore;
}>();

export const StoreProvider: ParentComponent<{
  captureSdk: CaptureSdk;
  // we have localization available here, but we don't use it, as it's for the provider
  solidStoreDefaults: SolidStore;
}> = (props) => {
  const [solidStore, updateSolidStore] = createStore<SolidStore>(
    // solid/store wraps the initial state in a proxy which results in mutating
    // the original initial state - take care to use a new object
    // eslint-disable-next-line solid/reactivity
    props.solidStoreDefaults,
  );

  /** Core SDK Zustand store exposed via SolidJS' reactive stores
   * ⚠️ NEVER MUTATE THIS ⚠️
   */
  const sdkStore = useStore(zustandStore);

  // TODO: Do we need a createEffect here?
  createEffect(() => {
    updateSolidStore({
      captureSdk: props.captureSdk,
    });
  });

  const contextValue = { solidStore, updateSolidStore, sdkStore };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export function useSolidStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) {
    throw new Error("StoreContext.Provider not in scope");
  }
  return ctx;
}
