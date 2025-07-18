// Fix for Rollup native module issue
process.env.ROLLUP_SKIP_LOAD_NATIVE_PLUGIN = 'true';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Patch Rollup
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
  }
} catch (err) {}

// Run build
execSync('vite build', { stdio: 'inherit' });