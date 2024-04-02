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

import { css } from "@acab/ecsstatic/scss";
import { Dialog } from "@kobalte/core";
import clsx from "clsx";
import { Component, For, Match, Switch, onMount } from "solid-js";

import { createSlider } from "solid-slider";
import "solid-slider/slider.css";
import { CustomButton } from "./CustomButton";
import { useLocalization } from "./LocalizationContext";
import { useSolidStore } from "./StoreContext";
import CloseIcon from "./assets/close.svg?component-solid";
import help1Url from "./assets/help/help_fields_visible.svg?url";
import help2Url from "./assets/help/help_harsh_light.svg?url";
import help3Url from "./assets/help/help_keep_still.svg?url";
import { contentStyle, overlayStyle, positionerStyle } from "./dialogStyles";

export const HelpDialog: Component = () => {
  let sliderRef: HTMLDivElement;

  const { solidStore, updateSolidStore } = useSolidStore();

  const [initSlider, { current, next, prev }] = createSlider();

  const closeHelpOverlay = () => {
    updateSolidStore({
      helpVisible: false,
    });
    void solidStore.captureSdk?.startCapture();
  };

  onMount(() => {
    initSlider(sliderRef);
    // Case when this is mounted after capture started
    solidStore.captureSdk?.pauseCapture();
  });

  const { t } = useLocalization();

  return (
    <Dialog.Root open={true}>
      <Dialog.Portal>
        <Dialog.Overlay class={overlayStyle} />
        <div class={positionerStyle}>
          {/* Window */}
          <Dialog.Content
            onEscapeKeyDown={closeHelpOverlay}
            onPointerDownOutside={closeHelpOverlay}
            onOpenAutoFocus={(e) => e.preventDefault()}
            class={contentStyle}
          >
            <Dialog.CloseButton
              onClick={closeHelpOverlay}
              class={css`
                border: none;
                background: none;
                appearance: none;
                position: absolute;
                top: 8px;
                right: 8px;
                width: 48px;
                height: 48px;
                display: grid;
                place-items: center;
              `}
            >
              <CloseIcon
                class={css`
                  width: 18px;
                  height: 18px;
                  path {
                    fill: var(--mb-color-black);
                  }
                `}
              />
            </Dialog.CloseButton>
            {/* Content */}
            <div
              class={css`
                display: grid;
                gap: 1.5em;
                align-items: center;
                text-align: center;
                overflow-y: auto;
                overscroll-behavior: none;
                /* for outlines */
                padding: 2px;

                h2 {
                  color: var(--mb-color-darkblue);
                  font-size: 1.5em;
                  font-style: normal;
                  font-weight: 700;
                  line-height: 1.3;
                }

                p {
                  color: var(--mb-gray-600);
                  line-height: 1.5;
                }
                img {
                  margin: 0 auto;
                }
              `}
            >
              <div ref={sliderRef!}>
                {/* Screen */}
                <div>
                  <div>
                    <img src={help1Url} alt="" srcset="" />
                  </div>
                  <div>
                    <h2>{t.tutorial_fields_visible_title}</h2>
                    <p>{t.tutorial_fields_visible_details}</p>
                  </div>
                </div>
                {/* Screen */}
                <div>
                  <div>
                    <img src={help2Url} alt="" srcset="" />
                  </div>
                  <div>
                    <h2>{t.tutorial_harsh_light_title}</h2>
                    <p>{t.tutorial_harsh_light_details}</p>
                  </div>
                </div>
                {/* Screen */}
                <div>
                  <div>
                    <img src={help3Url} alt="" srcset="" />
                  </div>
                  <div>
                    <h2>{t.tutorial_keep_still_title}</h2>
                    <p>{t.tutorial_keep_still_details}</p>
                  </div>
                </div>
              </div>

              {/* Dots indicator */}
              <div
                class={css`
                  display: flex;
                  padding: 12px 0px;
                  gap: 12px;
                  justify-content: center;
                `}
              >
                <For each={new Array(3).fill(null)}>
                  {(_, i) => (
                    <div
                      class={clsx(
                        css`
                          width: 9px;
                          height: 9px;
                          border-radius: 50%;
                          background: var(--mb-dot-inactive);
                        `,
                        i() === current() &&
                          css`
                            background: var(--mb-color-primary);
                          `,
                      )}
                    />
                  )}
                </For>
              </div>
              {/* button row */}
              <div
                class={css`
                  display: flex;
                  gap: 8px;
                  > * {
                    flex: 1;
                  }
                `}
              >
                <CustomButton
                  disabled={current() === 0}
                  onClick={() => prev()}
                  variant="secondary"
                >
                  {t.back}
                </CustomButton>
                <Switch>
                  <Match when={current() !== 2}>
                    <CustomButton onClick={() => next()}>{t.next}</CustomButton>
                  </Match>
                  <Match when={current() === 2}>
                    <CustomButton onClick={closeHelpOverlay}>
                      {t.done}
                    </CustomButton>
                  </Match>
                </Switch>
              </div>
            </div>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
