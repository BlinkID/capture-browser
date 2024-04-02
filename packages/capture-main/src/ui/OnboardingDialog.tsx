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

import { css } from "@acab/ecsstatic";
import { Dialog } from "@kobalte/core";
import { Component, createSignal, onMount } from "solid-js";

import { CustomButton } from "./CustomButton";
import { useLocalization } from "./LocalizationContext";
import { useSolidStore } from "./StoreContext";
import CloseIcon from "./assets/close.svg?component-solid";
import onboardingImageUrl from "./assets/help/onboarding.svg?url";
import { contentStyle, overlayStyle, positionerStyle } from "./dialogStyles";

export const OnboardingDialog: Component = () => {
  const [isOpen, setIsOpen] = createSignal(true);
  const { solidStore } = useSolidStore();

  const closeOnboardingOverlay = () => {
    setIsOpen(false);
    void solidStore.captureSdk?.startCapture();
  };

  // Case when this is mounted after capture started
  onMount(() => {
    solidStore.captureSdk?.pauseCapture();
  });

  const { t } = useLocalization();

  return (
    <Dialog.Root open={isOpen()}>
      <Dialog.Portal>
        <Dialog.Overlay class={overlayStyle} />
        <div class={positionerStyle}>
          <Dialog.Content
            onEscapeKeyDown={closeOnboardingOverlay}
            onPointerDownOutside={closeOnboardingOverlay}
            class={contentStyle}
          >
            <Dialog.CloseButton
              onClick={closeOnboardingOverlay}
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
            <div
              class={css`
                margin: auto;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 1.5em;
                text-align: center;

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
              `}
            >
              <img
                src={onboardingImageUrl}
                alt=""
                srcset=""
                class={css`
                  margin: 0 auto;
                `}
              />
              <h2>{t.tutorial_fields_visible_title}</h2>
              <p>{t.tutorial_fields_visible_details}</p>
              <CustomButton
                onClick={closeOnboardingOverlay}
                class={css`
                  padding: 16px 24px;
                `}
              >
                {t.tutorial_fields_visible_start}
              </CustomButton>
            </div>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
