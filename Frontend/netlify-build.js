// Set environment variable before requiring any modules
process.env.ROLLUP_SKIP_LOAD_NATIVE_PLUGIN = 'true';

// Run the build command
const { execSync } = require('child_process');

// Apply the rollup patch first
console.log('Applying rollup patch...');
require('./rollup-patch');

console.log('Running TypeScript compiler...');
execSync('npx tsc', { stdio: 'inherit' });

console.log('Running Vite build...');
execSync('npx vite build', { stdio: 'inherit' });