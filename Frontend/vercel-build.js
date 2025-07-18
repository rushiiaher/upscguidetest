// Set environment variable before importing any modules
process.env.ROLLUP_SKIP_LOAD_NATIVE_PLUGIN = 'true';

// Run the build command
const { execSync } = require('child_process');

// Apply a patch to the rollup native.js file
try {
  const fs = require('fs');
  const path = require('path');
  
  // Create a complete replacement for the native.js file
  const nativePath = path.resolve('./node_modules/rollup/dist/native.js');
  if (fs.existsSync(nativePath)) {
    const replacementContent = `
// Patched version that completely disables native addons
exports.getDefaultExecOptions = () => ({});
exports.installNativePlugins = () => {};
exports.loadNativePlugins = () => {};
exports.setNativePluginPromise = () => {};
`;
    
    fs.writeFileSync(nativePath, replacementContent);
    console.log('Successfully patched rollup native module');
  }
} catch (error) {
  console.error('Failed to patch rollup:', error);
}

console.log('Running TypeScript compiler...');
execSync('npx tsc', { stdio: 'inherit' });

console.log('Running Vite build...');
execSync('npx vite build', { stdio: 'inherit' });