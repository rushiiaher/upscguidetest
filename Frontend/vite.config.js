import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      // Disable native plugins
      context: 'globalThis',
      // Explicitly disable native plugins
      plugins: []
    },
    // Ensure we're not using native modules
    target: 'es2015'
  },
  optimizeDeps: {
    // Disable native dependencies
    exclude: ['@rollup/rollup-linux-x64-gnu']
  }
});