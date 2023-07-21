// @ts-check

import { fs } from "zx";
import pkgPath from "resolve-package-path";

/**
 * Returns the path to the resources folder of
 * containing the WASM and worker files, defaults to @capture-main
 * @param {string} [sdk] the npm package to get the resources from
 */
export function getResourcesPath(sdk = "capture-main") {
  const sdkPath = getPackagePath(sdk);

  const src = `${sdkPath}/dist/resources`;

  return src;
}

/**
 *
 * @param {string} packageName name of the package
 */
export function getPackagePath(packageName) {
  return pkgPath(packageName, ".")?.replace("/package.json", "");
}

/**
 * Symlinks the resources from `@capture-main` to the target
 * directory
 * @param {string} sourcePath the source
 * @param {string} destinationPath the destination to where to copy the
 * resources
 */
export async function linkResources(sourcePath, destinationPath) {
  if (fs.pathExistsSync(sourcePath)) {
    try {
      await fs.ensureSymlink(sourcePath, destinationPath);
      console.log(`Symlinked files to ${destinationPath}`);
    } catch (error) {
      console.error(error);
    }
  } else {
    console.log(`${sourcePath} doesn't exist`);
  }
}
