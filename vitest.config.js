// vitest.config.js
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // <-- allows describe, it, expect without imports
    environment: "jsdom", // <-- simulates a browser environment
    include: ["src/**/*.{test,spec}.{js,ts,jsx,tsx}"], // <-- pick up your test files
  },
});
