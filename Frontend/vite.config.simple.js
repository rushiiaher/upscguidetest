
export default {
  plugins: [await import('@vitejs/plugin-react').then(m => m.default())],
  resolve: {
    alias: {
      '@': 'C:\\Users\\rushi\\Desktop\\Cano\\proj6\\Frontend\\src',
    },
  },
  build: {
    rollupOptions: {
      context: 'globalThis',
    },
  },
};
