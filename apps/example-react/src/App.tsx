/**
 * Copyright (c) 2024 Microblink Ltd. All rights reserved.
 *
 * ANY UNAUTHORIZED USE OR SALE, DUPLICATION, OR DISTRIBUTION
 * OF THIS PROGRAM OR ANY OF ITS PARTS, IN SOURCE OR BINARY FORMS,
 * WITH OR WITHOUT MODIFICATION, WITH THE PURPOSE OF ACQUIRING
 * UNLAWFUL MATERIAL OR ANY OTHER BENEFIT IS PROHIBITED!
 * THIS PROGRAM IS PROTECTED BY COPYRIGHT LAWS AND YOU MAY NOT
 * REVERSE ENGINEER, DECOMPILE, OR DISASSEMBLE IT.
 */

import { useEffect, useState } from "react";
import { useRef } from "react";

import {
  AnalyzerResult,
  CaptureComponent,
  createCaptureUi,
} from "@microblink/capture";
import "@microblink/capture/style.css";

function App() {
  const divRef = useRef<HTMLDivElement>(null);
  const [result, setResult] = useState<AnalyzerResult>();
  const captureComponent = useRef<CaptureComponent>();
  const initialized = useRef(false);

  const loadSDK = async () => {
    if (!divRef.current) {
      return;
    }

    captureComponent.current = await createCaptureUi({
      sdkSettings: {
        callbacks: {
          onCaptureResult: (result) => setResult(result),
        },
        licenseKey: import.meta.env.VITE_LICENCE_KEY,
      },
      uiSettings: {
        target: divRef.current,
      },
    });
  };

  useEffect(() => {
    if (initialized.current) {
      return;
    }

    loadSDK();
    // prevent loading twice in strict mode
    initialized.current = true;

    return () => {
      console.log(captureComponent.current);
      captureComponent.current?.dismount();
    };
  }, []);

  useEffect(() => {
    console.log(result);
  }, [result]);

  return (
    <>
      <div ref={divRef}></div>
    </>
  );
}

export default App;
