import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      plugins: [
        {
          name: 'skip-native',
          resolveId(source) {
            if (source.includes('@rollup/rollup-linux-x64-gnu')) {
              return source;
            }
            return null;
          },
          load(id) {
            if (id.includes('@rollup/rollup-linux-x64-gnu')) {
              return 'module.exports = {};';
            }
            return null;
          },
        },
      ],
    },
  },
}));
