// netlify-build.js
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Patch rollup
try {
  const nativePath = path.resolve('./node_modules/rollup/dist/native.js');
  if (fs.existsSync(nativePath)) {
    fs.writeFileSync(nativePath, `
// Patched version
exports.getDefaultExecOptions = () => ({});
exports.installNativePlugins = () => {};
exports.loadNativePlugins = () => {};
exports.setNativePluginPromise = () => {};
`);
    console.log('Patched rollup');
  }
} catch (err) {
  console.error('Failed to patch rollup:', err);
}

// Run build with environment variable set
try {
  console.log('Starting build...');
  execSync('npx vite build', { 
    stdio: 'inherit',
    env: { 
      ...process.env, 
      ROLLUP_SKIP_LOAD_NATIVE_PLUGIN: 'true',
      NODE_OPTIONS: '--no-warnings'
    }
  });
  console.log('Build completed');
} catch (err) {
  console.error('Build failed:', err);
  process.exit(1);
}