import { resolve } from "node:path";
import { defineConfig } from "vite";
import { linkResources, getPackagePath } from "@mb/utils";
import { fs } from "zx";
import { dependencies } from "./package.json";

export default defineConfig((config) => ({
  build: {
    sourcemap: config.mode === "development",
    minify: config.mode === "production",
    target: "es2022",
    lib: {
      entry: {
        capture: resolve(__dirname, "./src/main.ts"),
      },
      name: "capture",
      // fileName: (format, name) => `${name}.${format}.js`,
      fileName: "capture",
    },
  },
  plugins: [
    {
      name: "move-resources",
      buildStart: async () => {
        if (ranOnce) {
          return;
        }
        moveDist("capture-wasm");
        moveDist("capture-worker");
        ranOnce = true;
      },
    },
  ],
}));

let ranOnce = false;

type Dependency = keyof typeof dependencies;

async function moveDist(path: Dependency) {
  const pkgPath = getPackagePath(path);
  const distPath = `${pkgPath}/dist`;
  const files = fs.readdirSync(distPath);

  fs.ensureDirSync(`public/resources`);

  for (const path of files) {
    await linkResources(`${distPath}/${path}`, `public/resources/${path}`);
  }
}
