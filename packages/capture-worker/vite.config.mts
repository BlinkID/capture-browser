import { resolve } from "node:path";
import { defineConfig } from "vite";
import "zx/globals";

export default defineConfig((config) => {
  return {
    build: {
      minify: config.mode === "production",
      sourcemap: config.mode === "development" ? "inline" : false,
      lib: {
        entry: {
          "capture-worker": resolve(__dirname, "./src/worker.ts"),
        },
        name: "captureWorker",
        fileName: () => "capture-worker.js",
        formats: ["iife"],
      },
    },
  };
});
