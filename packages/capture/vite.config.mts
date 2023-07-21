import { getPackagePath } from "@mb/utils";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import { fs } from "zx";

export default defineConfig((config) => ({
  build: {
    sourcemap: config.mode === "development",
    minify: config.mode === "production",
    target: "es2022",
    lib: {
      entry: {
        capture: resolve(__dirname, "./src/index.ts"),
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
        fs.ensureDirSync(`public/resources`);
        fs.copySync(
          `${getPackagePath("capture-main")}/dist/resources`,
          "public/resources",
          {
            dereference: true,
          },
        );
        fs.copySync(
          `${getPackagePath("capture-ui")}/dist/style.css`,
          "public/style.css",
          {
            dereference: true,
          },
        );
        ranOnce = true;
      },
    },
  ],
}));

let ranOnce = false;
