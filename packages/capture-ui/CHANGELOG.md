# capture-ui

## 1.0.8

### Patch Changes

- capture-main@1.0.8

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

## 1.0.6

### Patch Changes

- 2412e97: - Fixed an issue where React refs weren't a valid target for `UiSettings.target`.
  - Updated JSdoc for `createCaptureUI`
  - Updated React example to use `UiSettings.target`

## 1.0.1

### Patch Changes

- - Fixed incorrect initialization of user-provided UI settings
  - Fixed a bug where calling the dismount function without a target DOM node would clear the document body
