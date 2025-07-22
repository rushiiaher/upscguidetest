// Simple build script that avoids Rollup native module issues
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Create a temporary vite config
const tempConfig = `
import react from '@vitejs/plugin-react';
import path from 'path';

export default {
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      external: ['@rollup/rollup-linux-x64-gnu'],
      output: {
        manualChunks: undefined
      }
    }
  }
}`;

fs.writeFileSync('vite.config.simple.js', tempConfig);

try {
  // Run build with environment variables to skip native modules
  console.log('Starting build...');
  execSync('vite build --config vite.config.simple.js', {
    stdio: 'inherit',
    env: {
      ...process.env,
      ROLLUP_SKIP_LOAD_NATIVE_PLUGIN: 'true',
      NODE_OPTIONS: '--no-warnings'
    }
  });
  console.log('Build completed successfully');
} catch (error) {
  console.error('Build failed, trying alternative approach...');
  
  try {
    // Try direct build with --force flag
    execSync('vite build --force', {
      stdio: 'inherit',
      env: {
        ...process.env,
        ROLLUP_SKIP_LOAD_NATIVE_PLUGIN: 'true',
        NODE_OPTIONS: '--no-warnings'
      }
    });
    console.log('Build completed with alternative approach');
  } catch (err) {
    console.error('All build attempts failed');
    process.exit(1);
  }
}