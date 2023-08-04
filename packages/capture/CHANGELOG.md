# @microblink/capture

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
