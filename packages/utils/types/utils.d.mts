/**
 * Returns the path to the resources folder of
 * containing the WASM and worker files, defaults to @capture-main
 * @param {string} [sdk] the npm package to get the resources from
 */
export function getResourcesPath(sdk?: string): string;
/**
 *
 * @param {string} packageName name of the package
 */
export function getPackagePath(packageName: string): string;
/**
 * Symlinks the resources from `@capture-main` to the target
 * directory
 * @param {string} sourcePath the source
 * @param {string} destinationPath the destination to where to copy the
 * resources
 */
export function linkResources(
  sourcePath: string,
  destinationPath: string,
): Promise<void>;
//# sourceMappingURL=utils.d.mts.map
