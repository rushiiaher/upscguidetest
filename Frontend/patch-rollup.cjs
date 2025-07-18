// patch-rollup.cjs - Fix for Rollup native module issue
const fs = require('fs');
const path = require('path');

// Set environment variable
process.env.ROLLUP_SKIP_LOAD_NATIVE_PLUGIN = 'true';

try {
  // Path to the rollup native.js file
  const nativePath = path.resolve('./node_modules/rollup/dist/native.js');
  
  if (fs.existsSync(nativePath)) {
    console.log('Patching rollup native.js...');
    
    const patchedContent = `
// Patched version that disables native addons
exports.getDefaultExecOptions = () => ({});
exports.installNativePlugins = () => {};
exports.loadNativePlugins = () => {};
exports.setNativePluginPromise = () => {};
`;
    
    fs.writeFileSync(nativePath, patchedContent);
    console.log('Successfully patched rollup native.js');
  } else {
    console.log('Rollup native.js not found at expected path');
    
    // Try alternative path
    const altPath = path.resolve('../node_modules/rollup/dist/native.js');
    if (fs.existsSync(altPath)) {
      console.log('Found rollup at alternative path, patching...');
      
      const patchedContent = `
// Patched version that disables native addons
exports.getDefaultExecOptions = () => ({});
exports.installNativePlugins = () => {};
exports.loadNativePlugins = () => {};
exports.setNativePluginPromise = () => {};
`;
      
      fs.writeFileSync(altPath, patchedContent);
      console.log('Successfully patched rollup native.js at alternative path');
    }
  }
} catch (error) {
  console.error('Failed to patch rollup:', error);
}