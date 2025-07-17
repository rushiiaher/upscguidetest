// This file will be used to patch the rollup native module issue
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

try {
  // Create a complete replacement for the native.js file
  const nativePath = path.resolve('./node_modules/rollup/dist/native.js');
  if (fs.existsSync(nativePath)) {
    const replacementContent = `
// Patched version that completely disables native addons
export const getDefaultExecOptions = () => ({});
export const installNativePlugins = () => {};
export const loadNativePlugins = () => {};
export const setNativePluginPromise = () => {};
`;
    
    fs.writeFileSync(nativePath, replacementContent);
    console.log('Successfully patched rollup native module');
  }
} catch (error) {
  console.error('Failed to patch rollup:', error);
}