# @microblink/capture

## 1.1.0

### Minor Changes

- - Users can now initialize the SDK in a low-level _DirectAPI_ mode using `createDirectApi`
  - This mode gives users the capability to directly interact with the `Analyzer` instance, bypassing the provided functionality in the Capture SDK such as camera and video management, user feedback, callbacks and state management.
  - Added `camera-orientation-unsuitable` to `DocumentFramingStatus`. This status is returned if it's not possible to capture the document in its current orientation.
  - When using the SDK the user will be guided to rotate the document.
  - Added `adjustMinimumDocumentDpi` setting on the `Analyzer`.
    When enabled, the minimum dpi is adjusted to optimal value for the
    provided input resolution to enable capture of all document groups.
  - Added the capability to mirror the camera stream horizontally. Enabled by default on front facing cameras.
  - The current state can be found on the `mirrorX` property in the store and toggled using the `setMirrorX` method on the SDK instance.
  - The `finishSideCapture` method has been added to the SDK instance which allows users to manually finish the capturing process early if there are any candidates available.
  - The `completenessStatus` property on the `AnalyzerResult` spelling has been fixed (was `completnessStatus`)
  - The `frame` and `frameResult` parameters in `onFrameCallback` have been swapped as the actual `ImageData` is required less often
  - Improved guide for hosting resources
  - `CaptureSdk` and `CaptureUi` provide a stricter API contract
  - Lowered bundle size
  - Improved error handling in the web worker
  - `videoFrameCallback` is now only polyfilled in browsers, so that SSR builds work properly now.
  - The `showErrorDialog` option now works properly
  - Updated the capture animations
  - The `z-index` of floating elements can be configured by overriding the `--mb-z-index-root` CSS custom property
  - Added `mb-logo` class to the Microblink logo for customization purposes
  - Fixed inherited font color in the camera selector

## 1.0.8

### Patch Changes

- Bugfix: prevent loading cross-origin worker on non-threaded builds
  - capture-main@1.0.8
  - capture-ui@1.0.8

## 1.0.7

### Patch Changes

- 15bde2b: Implemented an approach from https://github.com/CezaryDanielNowak/CrossOriginWorker to load workers cross-domain.

  According to spec, `new Worker` should honor the response's CORS headers
  but this doesn't work in any of the browsers, so an approach was used
  that inlines the fetched resources inside a `Blob` and a `ObjectURL` so
  that they execute from the same domain.

  Note, that this approach won't work with certain CSPs and is not
  recommended. It also may break at any point as it's skirting around some
  pretty undefined browser behaviours.

  The recommended way is still to host the resources and the SDK on the
  same domain.

- Updated dependencies [15bde2b]
  - capture-main@1.0.7
  - capture-ui@1.0.7

## 1.0.6

### Patch Changes

- Updated dependencies [2412e97]
  - capture-ui@1.0.6

## 1.0.5

### Patch Changes

- Add missing readme to published package

## 1.0.4

### Patch Changes

- Fixes a critical issue where the published npm package was dependent on private packages

## 1.0.3

### Patch Changes

- Fixing incorrect npm publish

## 1.0.2

### Patch Changes

- - Fixed incorrect initialization of user-provided UI settings
  - Fixed a bug where calling the dismount function without a target DOM node would clear the document body
- Updated dependencies
  - capture-ui@1.0.1
