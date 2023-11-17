import { createCaptureSdk } from "@microblink/capture";
import { useSetAtom } from "jotai";
import { autoCaptureSdkAtom } from "../globalState";

export const useAutoCaptureSdk = () => {
  const setAutoCaptureSdk = useSetAtom(autoCaptureSdkAtom);

  const initialiseAutoCaptureSdk = async () => {
    setAutoCaptureSdk(undefined);
    const captureSdk = await createCaptureSdk({
      analyzerSettings: {
        captureSingleSide: true,
        ignoreBlur: false,
        ignoreGlare: false,
        captureStrategy: "optimize-for-quality",
      },
      licenseKey: import.meta.env.VITE_LICENCE_KEY,
    });

    setAutoCaptureSdk(captureSdk);
  };
  return {
    initialiseAutoCaptureSdk,
  };
};
