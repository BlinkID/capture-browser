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

import { Select } from "@kobalte/core";

import { css } from "@acab/ecsstatic";
import clsx from "clsx";
import { Component, createSignal } from "solid-js";
import IconChevronDown from "./assets/general-c-chevron-down.svg?component-solid";
import IconCamera from "./assets/camera.svg?component-solid";
import IconCheck from "./assets/check.svg?component-solid";
import { useSolidStore } from "./StoreContext";

type CameraOption = {
  value: string;
  label: string;
  disabled: boolean;
};

export const CameraSelector: Component = () => {
  const { solidStore, sdkStore } = useSolidStore();
  // const fakeCameras: CameraOption[] = [
  //   {
  //     value: "5",
  //     label: "Back Camera 2",
  //     disabled: false,
  //   },
  //   {
  //     value: "2",
  //     label: "Back Triple Camera",
  //     disabled: false,
  //   },
  //   {
  //     value: "1",
  //     label: "Back Dual Wide Camera",
  //     disabled: false,
  //   },
  // ];

  // https://kobalte.dev/docs/core/components/select#using-object-as-options
  const cameraOptions = () => [
    ...(sdkStore.cameras.map((camera) => ({
      value: camera.deviceInfo.deviceId,
      label: camera.name,
      disabled: false,
    })) as CameraOption[]),
    // ...fakeCameras,
  ];

  const selectedCameraOption = () => {
    return cameraOptions().find(
      (camera) => camera.value === sdkStore.selectedCamera?.deviceInfo.deviceId,
    );
  };

  const selectCameraById = async (id: string) => {
    if (!solidStore.captureSdk) {
      return;
    }
    setIsSwapping(true);
    const camera = sdkStore.cameras.find(
      (camera) => camera.deviceInfo.deviceId === id,
    );

    if (!camera) {
      console.warn("No camera");
      return;
    }

    await solidStore.captureSdk.selectCamera(camera);
    setIsSwapping(false);
  };

  const [isSwapping, setIsSwapping] = createSignal(false);

  return (
    <Select.Root
      options={cameraOptions()}
      value={selectedCameraOption()}
      optionValue="value"
      optionTextValue="label"
      optionDisabled="disabled"
      placeholder="Select a camera..."
      disabled={isSwapping()}
      onChange={(e) => void selectCameraById(e.value)}
      itemComponent={(props) => (
        <Select.Item
          item={props.item}
          class={css`
            display: flex;
            padding: 12px 16px;
            cursor: pointer;
            user-select: none;
            padding-right: 48px;
            position: relative;
            gap: 1px;
            color: var(--mb-color-white);

            /* separator */
            & + * {
              &::before {
                content: "";
                position: absolute;
                height: 1px;
                left: 16px;
                right: 16px;
                top: -1px;
                background-color: var(--mb-color-white);
              }
            }
          `}
        >
          <Select.ItemLabel
            class={css`
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            `}
          >
            {props.item.textValue}
          </Select.ItemLabel>
          <Select.ItemIndicator
            class={css`
              position: absolute;
              right: 16px;
            `}
          >
            <IconCheck
              class={css`
                width: 20px;
                height: 20px;

                path {
                  fill: none;
                }
              `}
            />
          </Select.ItemIndicator>
        </Select.Item>
      )}
    >
      <Select.Trigger
        aria-label="Camera"
        class={css`
          all: unset;
          display: flex;
          padding: 8px 16px;
          align-items: center;
          gap: 4px;
          border-radius: 50px;
          background: var(--mb-camera-picker-bg);
          backdrop-filter: blur(10px);
          white-space: nowrap;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
        `}
      >
        <IconCamera
          class={css`
            width: 20px;
            height: 20px;
            flex-shrink: 0;
          `}
        />
        <Select.Value
          class={css`
            overflow: hidden;
            text-overflow: ellipsis;
          `}
        >
          {(state) => (state.selectedOption() as CameraOption).label}
        </Select.Value>
        <Select.Icon
          class={css`
            flex-shrink: 0;
            &[data-expanded] {
              transform: scaleY(-1);
            }
          `}
        >
          <IconChevronDown
            class={css`
              width: 20px;
              height: 20px;
            `}
          />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          class={clsx(
            "mb-style-scope",
            css`
              border-radius: 20px;
              background: var(--mb-camera-picker-bg);
              backdrop-filter: blur(10px);
              overflow: hidden;
              font-size: 16px;
              font-weight: 500;
            `,
          )}
        >
          <Select.Listbox
            class={css`
              list-style: none;
              margin: 0;
              padding: 0;
              display: flex;
              flex-direction: column;
            `}
          />
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};
