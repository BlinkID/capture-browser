process.env.FORCE_COLOR = "1";
import { getPackagePath } from "@mb/utils";
import type { PackageJson } from "type-fest";
import "zx/globals";
import packageJson from "./package.json";

const mainPackagePath = getPackagePath("capture-main");
const releasePackagePath = path.resolve(".");
const publishPackagePath = path.resolve(releasePackagePath, "publish-dir");
fs.ensureDirSync(publishPackagePath);

// prepare release package
fs.copySync(`${mainPackagePath}/dist`, `${publishPackagePath}/dist`);
fs.copySync(`${mainPackagePath}/types`, `${releasePackagePath}/types`);

// roll up types
await $`npm run rollup`;

// prepare publish package
fs.ensureDirSync(`${publishPackagePath}/types`);
fs.emptyDirSync(`${publishPackagePath}/types`);

// copy rolled up types to the publish package
fs.copySync(
  `${releasePackagePath}/types/capture.d.ts`,
  `${publishPackagePath}/types/index.d.ts`,
);
fs.copySync(
  `${releasePackagePath}/types/capture.d.ts`,
  `${publishPackagePath}/types/index.d.cts`,
);

// create package.json
const publishPackageJson: PackageJson = {
  name: packageJson.name,
  version: packageJson.version,
  homepage: packageJson.homepage,
  repository: packageJson.repository,
  description:
    "A smart image capturing library for WebAssembly-enabled browsers",
  type: "module",
  main: packageJson.main,
  module: packageJson.module,
  types: packageJson.types,
  exports: packageJson.exports,
  // TODO: see if we can add transitive types some other way, or roll them up
  dependencies: {
    "solid-js": packageJson.devDependencies["solid-js"],
    "@types/emscripten": packageJson.devDependencies["@types/emscripten"],
  },
};

// write it
fs.writeFileSync(
  `${publishPackagePath}/package.json`,
  JSON.stringify(publishPackageJson, null, 2),
);

// copy readme file
fs.copySync(
  `${releasePackagePath}/README.md`,
  `${publishPackagePath}/README.md`,
);
