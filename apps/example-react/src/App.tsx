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

import { useEffect, useState } from "react";
import { useRef } from "react";

import { CaptureComponent } from "@microblink/capture";
import "@microblink/capture/style.css";
import { useAutoCaptureSdk } from "./hooks/useAutoCaptureSdk";
import { IdCapture } from "./components/IDCapture";
import { CapturedImage } from "react-use-camera";
import { IdReview } from "./components/IDReview";
import { autoCaptureSdkAtom } from "./globalState";
import { useAtomValue } from "jotai";

function App() {
  const captureComponent = useRef<CaptureComponent>();
  const initialized = useRef(false);

  const { initialiseAutoCaptureSdk } = useAutoCaptureSdk();

  const [showReviewScreen, setShowReviewScreen] = useState<boolean>(false);
  const [capturedDocument, setCapturedDocument] = useState<CapturedImage>();
  const autoCaptureSdk = useAtomValue(autoCaptureSdkAtom);

  useEffect(() => {
    if (initialized.current) {
      return;
    }

    initialiseAutoCaptureSdk();
    // prevent loading twice in strict mode
    initialized.current = true;

    return () => {
      console.log(captureComponent.current);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      captureComponent.current?.dismount();
    };
  }, [initialiseAutoCaptureSdk]);

  const handleCaptureFromCamera = (imageData: CapturedImage) => {
    setCapturedDocument(imageData);
    setShowReviewScreen(true);
  };

  const handleRetakeFromReview = () => {
    setShowReviewScreen(false);
  };

  if (!autoCaptureSdk) {
    return <>SDK not loaded</>;
  }
  return (
    <div className="flex h-full w-full items-center justify-center bg-page">
      {initialized && showReviewScreen ? (
        <IdReview
          capturedData={capturedDocument}
          onRetake={handleRetakeFromReview}
        />
      ) : (
        <IdCapture
          onCapture={handleCaptureFromCamera}
        />
      )}
    </div>
  );
}

export default App;
