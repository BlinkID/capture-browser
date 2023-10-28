process.env.FORCE_COLOR = "1";
import { getPackagePath } from "@mb/utils";
import type { PackageJson } from "type-fest";
import "zx/globals";
import packageJson from "./package.json";

// On macOS, the /var directory is actually a symbolic link to /private/var
const RELEASE_DIR = fs.realpathSync(`${os.tmpdir()}/capture-temp`);

const mainPackagePath = getPackagePath("capture-main");
const releasePackagePath = path.resolve(".");
const publishPackagePath = path.resolve(releasePackagePath, "publish-dir");
fs.ensureDirSync(publishPackagePath);

const scriptPath = path.resolve(".");
const isInGitHub = scriptPath === `${RELEASE_DIR}/release/capture-npm-package`;

const ONLY_RUN_IN_GITHUB = false;

if (isInGitHub && ONLY_RUN_IN_GITHUB) {
  console.error(
    chalk.red(
      "This script should only be run from generated GitHub repository.",
    ),
  );
  process.exit(1);
}

// const remote = (await $`git remote get-url origin`.quiet()).toString();

// Exit if not in the right repository
// if (remote !== "git@github.com:BlinkID/capture-browser.git") {
//   console.error(
//     chalk.red(
//       "This script should only be run from generated GitHub repository.",
//     ),
//   );
//   process.exit(1);
// }

// const rootDirectory = (await $`git rev-parse --show-toplevel`.quiet())
//   .toString()
//   .trim();

// Exit if folder is empty
// if (!fs.existsSync(RELEASE_DIR)) {
//   console.log("Folder does not exist");
//   process.exit(1);
// }

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
fs.copySync(`${RELEASE_DIR}/README.md`, `${publishPackagePath}/README.md`);

// lint the package
await $`pnpm lint:package`;
