// This file patches the rollup native module issue
export function patchRollup() {
  try {
    const nativeModule = require('rollup/dist/native');
    
    // Override the problematic functions with empty implementations
    nativeModule.getDefaultExecOptions = () => ({});
    nativeModule.installNativePlugins = () => {};
    nativeModule.loadNativePlugins = () => {};
    nativeModule.setNativePluginPromise = () => {};
    
    console.log('Successfully patched rollup native module');
  } catch (error) {
    console.error('Failed to patch rollup:', error);
  }
}