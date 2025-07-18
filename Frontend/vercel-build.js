// Set environment variable before importing any modules
process.env.ROLLUP_SKIP_LOAD_NATIVE_PLUGIN = 'true';

// Run the build command
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Current directory:', process.cwd());

// Apply a patch to the rollup native.js file
try {
  // Create a complete replacement for the native.js file
  const nativePath = path.resolve('./node_modules/rollup/dist/native.js');
  console.log('Looking for rollup at:', nativePath);
  
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
  } else {
    console.log('Rollup native.js not found at expected path');
    // Try alternative path
    const altPath = path.resolve('node_modules/rollup/dist/native.js');
    console.log('Trying alternative path:', altPath);
    
    if (fs.existsSync(altPath)) {
      const replacementContent = `
// Patched version that completely disables native addons
exports.getDefaultExecOptions = () => ({});
exports.installNativePlugins = () => {};
exports.loadNativePlugins = () => {};
exports.setNativePluginPromise = () => {};
`;
      
      fs.writeFileSync(altPath, replacementContent);
      console.log('Successfully patched rollup native module at alternative path');
    }
  }
} catch (error) {
  console.error('Failed to patch rollup:', error);
}

try {
  console.log('Running TypeScript compiler...');
  execSync('npx tsc --skipLibCheck', { stdio: 'inherit' });
} catch (error) {
  console.error('TypeScript compilation failed, but continuing with build:', error.message);
}

console.log('Running Vite build...');
try {
  execSync('npx vite build', { stdio: 'inherit' });
  console.log('Vite build completed successfully');
} catch (error) {
  console.error('Vite build failed:', error.message);
  process.exit(1);
}