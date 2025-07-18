// patch-rollup.cjs
const fs = require('fs');
const path = require('path');

// Set environment variable
process.env.ROLLUP_SKIP_LOAD_NATIVE_PLUGIN = 'true';

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
}