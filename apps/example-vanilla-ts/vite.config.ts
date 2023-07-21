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

import { getPackagePath, linkResources } from "@mb/utils";
import dns from "dns";
import { ServerOptions, defineConfig } from "vite";
import mkcert from "vite-plugin-mkcert";
import { fs } from "zx";
import { dependencies } from "./package.json";

// https://vitejs.dev/guide/migration.html#architecture-changes-and-legacy-options
dns.setDefaultResultOrder("verbatim");

const serverOptions: ServerOptions = {
  port: 3000,
  https: true,
  // hmr: false,
  // host: true,
  headers: {
    "Cross-Origin-Embedder-Policy": "require-corp",
    "Cross-Origin-Opener-Policy": "same-origin",
  },
  // host: true,
};

export default defineConfig((config) => {
  return {
    build: {
      sourcemap: config.mode === "development",
      target: "es2022",
    },
    plugins: [
      // FullReload(["public/**/*"]),
      {
        name: "move-resources",
        buildStart: async () => {
          if (ranOnce) {
            return;
          }
          moveDist("@microblink/capture");
          ranOnce = true;
        },
      },
      // Generates certificates for https
      mkcert(),
    ],
    server: serverOptions,
    preview: serverOptions,
  };
});

let ranOnce = false;

type Dependency = keyof typeof dependencies;

async function moveDist(packagePath: Dependency) {
  const pkgPath = getPackagePath(packagePath);
  const resourcesPath = `${pkgPath}/dist/resources`;
  const files = fs.readdirSync(resourcesPath);

  fs.ensureDirSync(`public/resources`);

  for (const path of files) {
    await linkResources(`${resourcesPath}/${path}`, `public/resources/${path}`);
  }
}
