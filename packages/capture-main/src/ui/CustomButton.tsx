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
import { Button } from "@kobalte/core";
import { ButtonRootProps } from "@kobalte/core/dist/types/button";
import clsx from "clsx";
import { ParentComponent, splitProps } from "solid-js";

type Variant = "primary" | "secondary";

export const CustomButton: ParentComponent<
  ButtonRootProps & {
    variant?: Variant;
  }
> = (props) => {
  const [classProp] = splitProps(props, ["class"]);

  return (
    <Button.Root
      {...props}
      class={clsx(
        classProp.class,
        css`
          border: none;
          appearance: none;
          display: flex;
          /* padding: 16px 24px; */
          padding: 8px 16px;
          justify-content: center;
          align-items: center;
          font-size: calc(1em - 2px);
          border-radius: 40px;
          background: var(--mb-color-primary);
          color: var(--mb-color-white);
          font-weight: 700;
          user-select: none;

          &:disabled {
            pointer-events: none;
            background: var(--mb-gray-100);
            color: var(-mb-gray-400);
            outline: none;
          }
        `,
        props.variant === "secondary" &&
          css`
            outline: 1px solid var(--mb-gray-400);
            background: var(--mb-color-white);
            color: var(--mb-gray-700);
          `,
      )}
    >
      {props.children}
    </Button.Root>
  );
};
