// Fix for Rollup native module issue
process.env.ROLLUP_SKIP_LOAD_NATIVE_PLUGIN = 'true';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Patch Rollup in both possible locations
try {
  // First try in the project's node_modules
  const nativePath = path.resolve('./node_modules/rollup/dist/native.js');
  if (fs.existsSync(nativePath)) {
    console.log('Patching rollup at', nativePath);
    fs.writeFileSync(nativePath, `
// Patched version
exports.getDefaultExecOptions = () => ({});
exports.installNativePlugins = () => {};
exports.loadNativePlugins = () => {};
exports.setNativePluginPromise = () => {};
`);
  }
  
  // Also try in the root node_modules
  const rootNativePath = path.resolve('../node_modules/rollup/dist/native.js');
  if (fs.existsSync(rootNativePath)) {
    console.log('Patching rollup at', rootNativePath);
    fs.writeFileSync(rootNativePath, `
// Patched version
exports.getDefaultExecOptions = () => ({});
exports.installNativePlugins = () => {};
exports.loadNativePlugins = () => {};
exports.setNativePluginPromise = () => {};
`);
  }
} catch (err) {
  console.error('Error patching rollup:', err);
}

// Create a simple vite config that doesn't use native modules
const viteConfigPath = path.resolve('./vite.config.js');
const viteConfigContent = `
export default {
  plugins: [require('@vitejs/plugin-react')()],
  resolve: {
    alias: {
      '@': '${path.resolve('./src').replace(/\\/g, '\\\\')}',
    },
  },
  build: {
    rollupOptions: {
      context: 'globalThis',
    },
  },
};
`;

try {
  fs.writeFileSync('./vite.config.simple.js', viteConfigContent);
  console.log('Created simplified vite config');
} catch (err) {
  console.error('Error creating vite config:', err);
}

// Run build with the simple config
try {
  console.log('Starting build...');
  execSync('vite build --config vite.config.simple.js', { 
    stdio: 'inherit',
    env: { 
      ...process.env, 
      ROLLUP_SKIP_LOAD_NATIVE_PLUGIN: 'true'
    }
  });
} catch (err) {
  console.error('Build failed:', err);
  process.exit(1);
}