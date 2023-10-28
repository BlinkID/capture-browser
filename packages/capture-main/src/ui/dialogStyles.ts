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
import clsx from "clsx";

export const positionerStyle = css`
  position: fixed;
  height: 100vh;
  width: 100vw;
  height: 100dvh;
  width: 100dvw;
  top: 0;
  left: 0;
  z-index: var(--mb-z-index-root);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const overlayStyle = css`
  height: 100vh;
  width: 100vw;
  height: 100dvh;
  width: 100dvw;
  top: 0;
  left: 0;
  position: fixed;
  background-color: rgba(17, 24, 39, 0.5);
`;

export const contentStyle = clsx(
  "mb-style-scope",
  css`
    max-width: min(calc(100vw - 100px), 500px);
    max-height: calc(100dvh - 100px);
    border: 1px solid hsl(240 5% 84%);
    border-radius: 8px;
    padding: 24px;
    padding-top: 60px;
    background-color: white;
    color: black;
    overflow: hidden;
    overflow-y: auto;
    position: relative;
    @media (max-width: 480px) {
      font-size: 14px;
    }
    box-shadow:
      0px 11px 15px 0px rgba(0, 0, 0, 0.2),
      0px 9px 46px 0px rgba(0, 0, 0, 0.12),
      0px 24px 38px 0px rgba(0, 0, 0, 0.14);
  `,
);
