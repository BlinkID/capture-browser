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

import { createGlobalStyle, css } from "@acab/ecsstatic";
import { AlertDialog } from "@kobalte/core";
import { Component, Show } from "solid-js";

export const ErrorAlert: Component<{
  error: Error;
}> = (error) => {
  return (
    <AlertDialog.Root defaultOpen>
      <AlertDialog.Portal>
        <AlertDialog.Overlay class="alert-dialog__overlay" />
        <div class="alert-dialog__positioner">
          <AlertDialog.Content class="alert-dialog__content">
            <div class="alert-dialog__header">
              <AlertDialog.Title class="alert-dialog__title">
                Caught error: {error.error.name}
              </AlertDialog.Title>
              <AlertDialog.CloseButton class="alert-dialog__close-button">
                Close
              </AlertDialog.CloseButton>
            </div>
            <AlertDialog.Description class="alert-dialog__description">
              <p>{error.error.message}</p>
              <Show when={error.error.stack}>
                {(stack) => (
                  <pre
                    class={css`
                      font-size: 12px;
                      overflow: auto;
                      display: flex;
                    `}
                  >
                    {stack()}
                  </pre>
                )}
              </Show>
            </AlertDialog.Description>
          </AlertDialog.Content>
        </div>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};

createGlobalStyle`
.alert-dialog__trigger {
  appearance: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: auto;
  outline: none;
  border-radius: 6px;
  padding: 0 16px;
  background-color: hsl(200 98% 39%);
  color: white;
  font-size: 16px;
  line-height: 0;
  transition: 250ms background-color;
}
.alert-dialog__trigger:hover {
  background-color: hsl(201 96% 32%);
}
.alert-dialog__trigger:focus-visible {
  outline: 2px solid hsl(200 98% 39%);
  outline-offset: 2px;
}
.alert-dialog__trigger:active {
  background-color: hsl(201 90% 27%);
}
.alert-dialog__overlay {
  position: fixed;
  inset: 0;
  z-index: 50;
  background-color: rgb(0 0 0 / 0.2);
  animation: overlayHide 250ms ease 100ms forwards;
  pointer-events: none;
}
.alert-dialog__overlay[data-expanded] {
  animation: overlayShow 250ms ease;
}
.alert-dialog__positioner {
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
}
.alert-dialog__content {
  z-index: 50;
  max-width: min(calc(100vw - 16px), 500px);
  border: 1px solid hsl(240 5% 84%);
  border-radius: 6px;
  padding: 16px;
  background-color: white;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  animation: contentHide 300ms ease-in forwards;
}
.alert-dialog__content[data-expanded] {
  animation: contentShow 300ms ease-out;
}
.alert-dialog__header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 12px;
}
.alert-dialog__close-button {
  all: unset;
  color: hsl(240 5% 34%);
}
.alert-dialog__title {
  font-size: 20px;
  font-weight: 500;
  color: hsl(240 6% 10%);
}
.alert-dialog__description {
  font-size: 16px;
  color: hsl(240 5% 26%);
}
@keyframes overlayShow {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes overlayHide {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes contentShow {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes contentHide {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.96);
  }
}

`;
