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
import { Tooltip } from "@kobalte/core";
import clsx from "clsx";
import { useLocalization } from "./LocalizationContext";
import { useSolidStore } from "./StoreContext";
import HelpIcon from "./assets/icons/icon-question.svg?component-solid";

export const HelpButton = () => {
  const { updateSolidStore } = useSolidStore();
  const { t } = useLocalization();

  return (
    <div>
      <Tooltip.Root overflowPadding={32}>
        <Tooltip.Trigger
          onclick={() =>
            updateSolidStore({
              helpVisible: true,
            })
          }
          class={buttonStyles}
        >
          <HelpIcon
            class={css`
              width: 100%;
              height: 100%;
              path {
                fill: currentColor;
              }
            `}
          />
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content class={clsx(tooltipContent, "mb-style-scope")}>
            <Tooltip.Arrow />
            <p>{t.need_help_tooltip}</p>
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </div>
  );
};

const buttonStyles = css`
  color: var(--mb-color-primary);
  background-color: var(--mb-gray-100);
  border-radius: 50%;
  appearance: none;
  border: none;
  stroke-width: 1px;
  width: 32px;
  height: 32px;
  display: grid;
  place-items: center;
  position: absolute;
  bottom: 40px;
  right: 40px;
  z-index: 10;
  stroke: var(--mb-color-cobalt-4);
  filter: drop-shadow(0px 4px 6px rgba(31, 41, 55, 0.1))
    drop-shadow(0px 2px 4px rgba(31, 41, 55, 0.06));
`;

const tooltipContent = css`
  z-index: 50;
  max-width: min(calc(100vw - 16px), 380px);
  border-radius: 6px;
  padding: 8px;
  background-color: var(--mb-color-primary);
  color: var(---mb-color-white);
  font-size: 14px;
  box-shadow:
    0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);
  transform-origin: var(--kb-tooltip-content-transform-origin);
`;
