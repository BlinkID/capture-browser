# capture-main

## 1.2.3

### Patch Changes

- capture-wasm@1.2.3
- capture-worker@1.2.3

## 1.2.2

### Patch Changes

- capture-wasm@1.2.2
- capture-worker@1.2.2

## 1.2.1

### Patch Changes

- Version sync
- Updated dependencies
  - capture-wasm@1.2.1
  - capture-worker@1.2.1

## 1.1.1

### Patch Changes

- f70472b: Removed the use of `data:` protocols when loading cross-origin workers. Will only use the `blob:` to be more flexible with different CSPs.
- Updated dependencies [f70472b]
  - capture-worker@1.1.1

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
  - capture-worker@1.0.7
