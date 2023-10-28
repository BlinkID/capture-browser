import { ecsstatic } from "@acab/ecsstatic/vite";
import { getPackagePath, linkResources } from "@mb/utils";
import { stripIndents } from "common-tags";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import solidSvg from "vite-plugin-solid-svg";
import { fs } from "zx";
import { dependencies } from "./package.json";

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
    solidPlugin(),
    solidSvg(),
    ecsstatic({
      classNamePrefix: "mb",
    }),
    {
      name: "move-resources",
      buildStart: async () => {
        if (ranOnce) {
          return;
        }
        await moveDist("capture-wasm");
        await moveDist("capture-worker");
        await writeResourceDoc();
        ranOnce = true;
      },
    },
  ],
}));

let ranOnce = false;

type Dependency = keyof typeof dependencies;

async function writeResourceDoc() {
  fs.outputFile(
    "public/resources/DO_NOT_MODIFY_THIS_DIRECTORY.md",
    stripIndents`
      Do not modify the name of this directory, or the files inside it.
      The Wasm and Web Workers will look for the \`resources\` directory on the path.`,
  );
}

async function moveDist(path: Dependency) {
  const pkgPath = getPackagePath(path);
  const distPath = `${pkgPath}/dist`;
  const files = fs.readdirSync(distPath);

  fs.ensureDirSync(`public/resources`);

  for (const path of files) {
    await linkResources(`${distPath}/${path}`, `public/resources/${path}`);
  }
}
