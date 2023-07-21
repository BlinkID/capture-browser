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

import { ecsstatic } from "@acab/ecsstatic/vite";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import solidSvg from "vite-plugin-solid-svg";
// import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig((config) => {
  return {
    build: {
      sourcemap: config.mode === "development",
      minify: config.mode === "production",
      target: "es2022",
      lib: {
        entry: {
          "capture-ui": resolve(__dirname, "./src/index.ts"),
        },
        name: "captureUi",
        // fileName: (format, name) => `${name}.${format}.js`,
        fileName: "capture-ui",
      },
      rollupOptions: {
        // external: ["capture-main"],
        // output: {
        //   // Provide global variables to use in the UMD build
        //   // for externalized deps
        //   globals: {
        //     "capture-main": "capture",
        //   },
        // },
      },
    },
    plugins: [
      // FullReload(["public/**/*"]),
      ecsstatic({
        classNamePrefix: "mb",
      }),
      solidPlugin(),
      solidSvg(),
      // cssInjectedByJsPlugin(),
    ],
  };
});
