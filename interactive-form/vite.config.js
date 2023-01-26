import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

/** @type {import('vite').UserConfig} */
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    cssCodeSplit: false,
    assetsInlineLimit: 100000000,
    output: {
      rollupOptions: {
        inlineDynamicImports: true,
      },
    },
  },
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
