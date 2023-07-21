/**
 * Copyright (c) 2023 Microblink Ltd. All rights reserved.
 *
 * ANY UNAUTHORIZED USE OR SALE, DUPLICATION, OR DISTRIBUTION
 * OF THIS PROGRAM OR ANY OF ITS PARTS, IN SOURCE OR BINARY FORMS,
 * WITH OR WITHOUT MODIFICATION, WITH THE PURPOSE OF ACQUIRING
 * UNLAWFUL MATERIAL OR ANY OTHER BENEFIT IS PROHIBITED!
 * THIS PROGRAM IS PROTECTED BY COPYRIGHT LAWS AND YOU MAY NOT
 * REVERSE ENGINEER, DECOMPILE, OR DISASSEMBLE IT.
 */

/* @refresh reload */

import { AnalyzerResult, CaptureSdkSettings } from "capture-main";
import { CaptureComponent, createCaptureUi } from "capture-ui";
import "capture-ui/dist/style.css";
import {
  Component,
  Match,
  Show,
  Switch,
  batch,
  createEffect,
  createSignal,
  onCleanup,
} from "solid-js";
import { ResultDisplay } from "./ResultDisplay";

export const App: Component = () => {
  let mountPoint: HTMLDivElement;

  const [captureComponent, setCaptureComponent] =
    createSignal<CaptureComponent>();
  const [result, setResult] = createSignal<AnalyzerResult>();
  const [loading, setLoading] = createSignal(false);

  const sdkSettings: CaptureSdkSettings = {
    licenseKey: import.meta.env.VITE_LICENCE_KEY,
    callbacks: {
      // onFrameAnalysis: () => void captureComponent()?.captureSdk?.resetAnalyzer(),
      onCaptureResult: (result) => {
        setResult(result);
        captureComponent()!.dismount();
      },
    },
  };

  const load = async () => {
    setLoading(true);
    // THE MAIN PART
    const captureComponent = await createCaptureUi({
      sdkSettings,
      uiSettings: {
        // target: mountPoint,
      },
    });

    // janky way of pausing capture for dev purposes
    // captureComponent.captureSdk?.subscribe(
    //   (s) => s.isCapturing,
    //   (x) => x && captureComponent.captureSdk?.pauseCapture(),
    // );

    // subscribe to error state
    // captureComponent.captureSdk?.subscribe(
    //   (s) => s.errorState,
    //   (x) => {
    //     console.error(x);
    //     captureComponent.dismount();
    //   },
    // );

    batch(() => {
      setCaptureComponent(captureComponent);
      setLoading(false);
      // reset
      setResult(undefined);
    });
  };

  // load on mount
  createEffect(() => {
    void load();
  });

  // subscribe to dismount
  createEffect(() => {
    const captureSdk = captureComponent()?.captureSdk;

    if (!captureSdk) {
      return;
    }

    const unsubDismount = captureSdk.subscribe(
      (s) => s.videoElement,
      (videoElement) => {
        if (!videoElement) {
          setCaptureComponent(undefined);
        }
      },
    );

    onCleanup(() => {
      unsubDismount();
    });
  });

  return (
    <div>
      <div ref={mountPoint!} />
      <p>This content is always visible to test portalling.</p>

      {/* TODO: localize these */}
      <Switch>
        <Match when={loading()}>Loading SDK</Match>

        <Match when={!captureComponent()}>
          <button onClick={() => void load()}>Load UI component</button>
        </Match>
      </Switch>

      <Show when={result()}>
        {(result) => <ResultDisplay result={result()} />}
      </Show>
    </div>
  );
};
