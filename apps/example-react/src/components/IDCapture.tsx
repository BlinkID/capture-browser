import {
  imageDataToUrl,
  getBase64StringFromDataURL,
} from "@microblink/capture";

import { useEffect, useId, useRef, useState } from "react";
import { Camera, CameraElement, CapturedImage } from "react-use-camera";

import { useAtomValue } from "jotai";

import { autoCaptureSdkAtom } from "../globalState";

export type IdCaptureProps = {
  onCapture: (imageData: CapturedImage) => void;
};

export const IdCapture = ({ onCapture }: IdCaptureProps) => {
  const [cameraError, setCameraError] = useState<boolean>(false);

  const cameraRef = useRef<CameraElement>(null);
  const [isCameraReady, setIsCameraReady] = useState(false);

  const autoCaptureSdk = useAtomValue(autoCaptureSdkAtom);

  const handleAutoCapture = async () => {
    if (!autoCaptureSdk) return;

    const cameraElement = document.getElementById("camera") as HTMLVideoElement;
    await autoCaptureSdk.startCameraStream(cameraElement);
    await autoCaptureSdk.startCapture();

    console.log('sdk state', autoCaptureSdk?.getState())
    autoCaptureSdk.setCallbacks({
      async onCaptureResult(result) {
        if (result?.firstCapture?.imageResult) {
          const dataUrl = imageDataToUrl(result?.firstCapture?.imageResult);
          const base64Data = getBase64StringFromDataURL(dataUrl);

          onCapture({
            url: `data:image/jpeg;base64,${base64Data}`,
            blob: null,
          });
        }
      },
    });

    autoCaptureSdk.subscribe(
      (state) => state.uiState,
      (uiState) => {
        console.log(uiState.key);
      },
      {
        fireImmediately: true,
      },
    );
  };

  const handleCaptureClick = async () => {
    try {
      const data = await cameraRef.current!.capture({ width: 720 });
      if (!data || !data.blob) {
        throw new Error(
          "No data captured. Please check your camera access settings and try again.",
        );
      }
      // Stop Auto Capture SDK Streaming on manual capture
      autoCaptureSdk?.pausePlayback();
      onCapture(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (isCameraReady) {
      handleAutoCapture();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCameraReady]);

  const captureLabelId = useId();

  if (cameraError) {
    return <div className="relative h-full w-full pb-5 pt-8">Error</div>;
  }
  return (
    <div className="relative h-full w-full">
      <div className="absolute h-full w-full">
        <Camera
          ref={cameraRef}
          style={{
            height: "500px",
            width: "1000px",
          }}
          fit="blur"
          videoProps={{
            id: "camera",
          }}
          constraints={{ facingMode: "environment" }}
          onReady={() => setIsCameraReady(true)}
          onError={() => setCameraError(true)}
        />
      </div>

      <div className="absolute bottom-0 mb-1 flex w-full px-2 text-white">
        <div className="mb-6 p-5 text-center">
          <button
            type="button"
            aria-labelledby={captureLabelId}
            onClick={handleCaptureClick}
          >
            <p
              id={captureLabelId}
              className="hidden select-none text-black md:block md:px-10"
            >
              Capture
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};
