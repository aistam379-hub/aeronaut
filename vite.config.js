import { defineConfig } from "vite";

// GitHub Pages serves this as a project site at /aeronaut/, so built asset
// URLs need that base path or they'll 404 against the repo root.
export default defineConfig({
  base: "/aeronaut/",
});
