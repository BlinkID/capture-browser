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

import { css } from "@acab/ecsstatic";
import { Button } from "@kobalte/core";
import clsx from "clsx";
import { Component, Show } from "solid-js";
import { CameraSelector } from "./CameraSelector";
import { useSolidStore } from "./StoreContext";
import IconClose from "./assets/close.svg?component-solid";
import { useLocalization } from "./LocalizationContext";

export const Header: Component = () => {
  const { sdkStore, solidStore } = useSolidStore();
  const { t } = useLocalization();

  return (
    <div // TODO: header is cut off when it's a full-screen dialog
      class={clsx(
        css`
          display: grid;
          grid-template-columns: 32px 1fr 32px;
          align-items: center;
          padding: 18px 12px;
          position: relative;
          z-index: 5;
          gap: 24px;
        `,
        gradient,
      )}
    >
      <Show when={sdkStore.cameras.length > 1}>
        <div
          class={css`
            grid-column: 2;
            display: flex;
            place-content: center;
          `}
        >
          <CameraSelector />
        </div>
      </Show>
      <div
        class={css`
          grid-column: 3;
          display: flex;
          justify-content: flex-end;
        `}
      >
        <Button.Root
          aria-label={t.dismiss}
          onclick={() => solidStore.dismountFn()}
          class={css`
            all: unset;
            cursor: pointer;
            width: 32px;
            height: 32px;
            display: grid;
            place-items: center;
          `}
        >
          <IconClose width={16} />
        </Button.Root>
      </div>
    </div>
  );
};

const gradient = css`
  background: linear-gradient(
    to bottom,
    hsla(0, 0%, 0%, 0.56) 0%,
    hsla(0, 0%, 0%, 0.553) 8.1%,
    hsla(0, 0%, 0%, 0.533) 15.5%,
    hsla(0, 0%, 0%, 0.502) 22.5%,
    hsla(0, 0%, 0%, 0.462) 29%,
    hsla(0, 0%, 0%, 0.415) 35.3%,
    hsla(0, 0%, 0%, 0.363) 41.2%,
    hsla(0, 0%, 0%, 0.308) 47.1%,
    hsla(0, 0%, 0%, 0.252) 52.9%,
    hsla(0, 0%, 0%, 0.197) 58.8%,
    hsla(0, 0%, 0%, 0.145) 64.7%,
    hsla(0, 0%, 0%, 0.098) 71%,
    hsla(0, 0%, 0%, 0.058) 77.5%,
    hsla(0, 0%, 0%, 0.027) 84.5%,
    hsla(0, 0%, 0%, 0.007) 91.9%,
    hsla(0, 0%, 0%, 0) 100%
  );
`;
