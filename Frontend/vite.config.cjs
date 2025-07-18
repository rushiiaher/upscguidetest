// vite.config.cjs
const path = require('path');

module.exports = {
  plugins: [require('@vitejs/plugin-react')()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      context: 'globalThis',
      plugins: []
    },
    target: 'es2015'
  },
  optimizeDeps: {
    exclude: ['@rollup/rollup-linux-x64-gnu']
  }
}