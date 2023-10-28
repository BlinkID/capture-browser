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

import {
  ParentComponent,
  createContext,
  createEffect,
  onCleanup,
  onMount,
  useContext,
} from "solid-js";
import { SetStoreFunction, createStore } from "solid-js/store";
import { MountableElement } from "solid-js/web";
import { useStore } from "solid-zustand";
import {
  CaptureSdk,
  CaptureSdkSettings,
  createCaptureSdk,
} from "../core/CaptureSdk";
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
  uiSettings: Omit<UiSettings, "localization">;
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
  localization?: Partial<Record<keyof LocalizationStrings, string>>;
};

const StoreContext = createContext<{
  solidStore: SolidStore;
  updateSolidStore: SetStoreFunction<SolidStore>;
  sdkStore: ReactiveStore;
}>();

export const StoreProvider: ParentComponent<{
  sdkSettings: CaptureSdkSettings;
  // we have localization available here, but we don't use it, as it's for the provider
  mergedDefaults: SolidStore;
}> = (props) => {
  const [solidStore, updateSolidStore] = createStore<SolidStore>(
    // solid/store wraps the initial state in a proxy which results in mutating
    // the original initial state - take care to use a new object
    // eslint-disable-next-line solid/reactivity
    props.mergedDefaults,
  );

  /** Core SDK Zustand store exposed via SolidJS' reactive stores
   * ⚠️ NEVER MUTATE THIS ⚠️
   */
  const sdkStore = useStore(zustandStore);

  onMount(() => {
    void (async () => {
      const captureSdk = await createCaptureSdk(props.sdkSettings);

      updateSolidStore({
        captureSdk,
      });
    })();
  });

  // We watch if the video element gets disconnected and trigger a dismount of
  // the entire SolidJS UI component
  createEffect(() => {
    const dismount = props.mergedDefaults.dismountFn;

    if (solidStore.captureSdk) {
      const unsubscribe = solidStore.captureSdk.subscribe(
        (store) => store.videoElement,
        // On videoElement mount, it will be [videoElement, null]
        // If the videoElement disappears, it will become [null, videoElement]
        (current, previous) => {
          if (!current && previous) {
            dismount();
          }
        },
      );

      onCleanup(() => unsubscribe());
    }
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
