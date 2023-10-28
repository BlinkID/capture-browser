![logo-microblink](https://github.com/BlinkID/capture-browser/assets/2827047/ab8ab61b-ac82-4d84-8013-f6f2efe5bec5)

# _Capture_ SDK for browsers

The Capture Browser SDK gives you the ability to auto-capture high-quality images of identity documents in a user-friendly way. The SDK provides you with a rectified image of the document, ensuring a high success rate in extracting document text or verifying the document's validity.

Users are guided to avoid glare, blurred images, bad lighting conditions, fingers covering the document, or too much tilt. The SDK is able to recognize if a document is single-sided (i.e., passport) or double-sided (i.e., driving license) and prompt the user to scan the back side of the document when needed.

In the results, you can obtain a cropped, perspective-corrected image of the document, along with the original frame. These can be processed by your webapp in any way required. The SDK is lightweight and can be easily integrated into your webapp, blending seamlessly with your design.

## Installation

The Capture SDK is available as a package on NPM for use with a module bundler.

```bash
# npm
npm install @microblink/capture

# yarn
yarn add @microblink/capture

# pnpm
pnpm add @microblink/capture
```

## Obtaining a licence

A valid license key is required to initialize scanning. You can request a free trial license key after registering on [Microblink Developer Hub](https://account.microblink.com/signin). The license is bound to the domain of your app.

## Hosting environment

In order for the SDK to work it needs to run inside a [secure context](https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).
Additionally, to run the threaded version of the SDK, the following headers need to be set on your server:

```
Cross-Origin-Embedder-Policy: require-corp
Cross-Origin-Opener-Policy: same-origin
```

Otherwise, you will only be able to run the single-threaded version of the SDK.

In order to load the accompanying Wasm files and Web Workers, you also need to host them locally on your dev server. These files can be found inside the `node_modules/@microblink/capture/dist/resources` directory after installation. The `/resources` directory must be hosted without modification of the directory name or its contents.

The dev environments for the example apps have these set and you can use them as a reference.

## Examples Quick Start

### Requirements

In order to run the examples provided in the [GitHub repository](), you'll need the following tools:

1. NodeJS LTS (18.x)

   - Prefer using [`nvm`](https://github.com/nvm-sh/nvm) on dev machines:

   ```sh
   nvm install --lts
   nvm use --lts
   ```

   - [alternative installation methods](https://nodejs.org/en/download)

2. `pnpm`

   - alternative package manager to `npm`
   - easiest to install using `npm install -g pnpm`
   - [alternative installation methods](https://pnpm.io/installation)

### Device requirements

Additionally, your device will need a camera capable of providing a video stream with a minimum resolution of 1920x1080.

The minimum supported browser versions are Chrome 96, Firefox 79 and Safari 15.2. Web views are not supported as they are not providing a secure context.

### Running the provided examples

The examples provided in the [GitHub repository]() can be run by first building the SDK by running `pnpm build`, and then navigating to the examples found in `/apps/*` and running `pnpm dev` for the dev server or `pnpm serve` for the production build.

These examples will move the `node_modules/@microblink/capture/dist/resources` as part of the build step to [Vite's public folder](https://vitejs.dev/guide/assets.html#the-public-directory), generate a local HTTPS certificate and apply the appropriate headers to Vite's dev server.

## Using the SDK

It is strongly recommended to use TypeScript and an IDE that has a TypeScript language server during development as the SDK is strongly typed and provides JSdoc comments, links, usage examples, autocomplete, and other Intellisense features.

### Using the provided UI component with `createCaptureUi`

The simplest way to initialize the SDK and start capturing is to call `createCaptureUi` and provide it with a licence key. This will mount a full-screen capturing UI in your web app. Make sure to also load the CSS styles for the component.

```typescript
import { createCaptureUi } from "@microblink/capture";
import "@microblink/capture/style.css";

createCaptureUi({
  sdkSettings: {
    licenseKey: "YOUR_LICENCE",
    callbacks: {
      onCaptureResult: (result) => {
        /* do something with the result */
      },
    },
  },
});
```

### Headless usage with `createCaptureSdk`

You can also use the Capture SDK without the provided UI and build your own experience by using `createCaptureSdk`. All the mechanisms that the Capture UI uses are provided by the object returned by this method.

```typescript
import { createCaptureSdk } from "@microblink/capture";

const sdk = await createCaptureSdk({
  licenseKey: "YOUR_LICENCE",
  callbacks: {
    onCaptureResult: (result) => {
      /* do something with the result */
    },
  },
});

await sdk.startCameraStream(document.getElementById("videoElementId"));
```

The SDK will terminate automatically if the video element is dismounted and requires no handling on the developer's end.

## Configuration

### Configuring the Capture SDK

The SDK can be configured on initialization using `createCaptureSdk(settings)` . The configuration documentation can be found on [`CaptureSdkSettings`](/packages/capture-main/src/createCaptureSdk.ts#30).

The capturing process is handled using the [`Analyzer`](/packages/capture-wasm/src/Analyzer.ts). The configuration settings for the `Analyzer` can be found on [`AnalyzerSettings`](/packages/capture-wasm/src/AnalyzerSettings.ts).

### Configuring the Capture UI

`createCaptureUi` takes a [`CreateCaptureUiSettings`](/packages/capture-ui/src/createCaptureUi.tsx#52) configuration object as a parameter with both [`CaptureSdkSettings`](/packages/capture-main/src/createCaptureSdk.ts#30) that configures the SDK behaviour, and [`UiSettings`](/packages/capture-ui/src/StoreContext.tsx#36) which configures the UI itself.

You can configure the mount point of the UI, toggle the display of the onboarding screen and help screens, the error screen and provide your own localization strings.

You can find a list of all the localization strings in [`packages/capture-ui/src/locales/en.ts`](/packages/capture-ui/src/locales/en.ts)

## Advanced usage

### State management and subscriptions

The Capture SDK tracks its internal state on the [`ReactiveStore`](/packages/capture-main/src/zustandStore.ts#8) object, which is implemented using [Zustand](https://github.com/pmndrs/zustand).

The user can get the internal state of the SDK at any time by calling `getState()` on the `CaptureSdk` object returned by `createCaptureSdk`. `CaptureSdk` is also available on the `CaptureComponent` instance returned by `createCaptureUi`.

You can also subscribe to state changes by calling `CaptureSdk.subscribe()`. Detailed documentation for using this feature is available [here](https://github.com/pmndrs/zustand#using-subscribe-with-selector).

### UI customization

The UI can be customized by either overriding the CSS variables found at `packages/capture-ui/src/root-styles.scss`, or by manually targetting the CSS classes applied to the UI component.

All components rendered by the UI are nested under `.mb-style-scope` which provides some base styles.

### Detailed capturing process information

You can find details on the internal state of the capture process using the [`onFrameAnalysis`](/packages/capture-main/src/createCaptureSdk.ts#57) callback. This callback will provide you with an `ImageData` instance of the previously processed frame and the [`FrameAnalysisResult`](/packages/capture-wasm/src/FrameAnalysisResult.ts).

### Low-level access Direct API

This mode gives users the capability to directly interact with the `Analyzer` instance, bypassing the provided functionality in the Capture SDK such as camera and video management, user feedback, callbacks and state management.

```typescript
import { createDirectApi } from "@microblink/capture";

const directApi = await createDirectApi({
  licenseKey: "YOUR_LICENCE",
});

// The user is free to use methods available on
// the `directApi` to fit their use case
```

## Troubleshooting

### Integration problems

If you are experiencing issues with the SDK integration, first make sure that you have followed the integration instructions and used our [provided examples as reference](#examples-quick-start).
Also make sure that your device meets the [requirements](#requirements). If you're still having problems, please contact us at [help.microblink.com](help.microblink.com).

### Licencing problems

If you are getting "invalid licence key" error or having other licence-related problems, first check the console. All licence-related problems are logged to error log so it is easy to determine what went wrong.

When you have determined what is the licence-related problem or you simply do not understand the log, you should contact us [help.microblink.com](help.microblink.com). When contacting us, please make sure you provide following information:

## Contact

For any other questions, feel free to contact us at [help.microblink.com](help.microblink.com).
