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

import { ParentComponent, createContext, useContext } from "solid-js";
import { SetStoreFunction, createStore } from "solid-js/store";

import enLocaleStrings from "./locales/en";

export type LocalizationStrings = typeof enLocaleStrings;

const LocalizationContext = createContext<{
  t: LocalizationStrings;
  updateLocalization: SetStoreFunction<LocalizationStrings>;
}>();

export const LocalizationProvider: ParentComponent<{
  userStrings?: Partial<LocalizationStrings>;
}> = (props) => {
  const [localizationStore, updateLocalizationStore] =
    createStore<LocalizationStrings>(
      structuredClone({
        ...enLocaleStrings,
        // we don't care on init
        // eslint-disable-next-line solid/reactivity
        ...props.userStrings,
      }),
    );

  const contextValue = {
    t: localizationStore,
    updateLocalization: updateLocalizationStore,
  };

  return (
    <LocalizationContext.Provider value={contextValue}>
      {props.children}
    </LocalizationContext.Provider>
  );
};

export function useLocalization() {
  const ctx = useContext(LocalizationContext);
  if (!ctx) {
    throw new Error("LocalizationProvider not in scope.");
  }
  return ctx;
}
