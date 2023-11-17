import { CaptureSdk } from "@microblink/capture";
import { atom } from "jotai";

export const autoCaptureSdkAtom = atom<CaptureSdk | undefined>(undefined);

