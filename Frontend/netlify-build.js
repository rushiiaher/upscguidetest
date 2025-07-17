// Set environment variable before importing any modules
process.env.ROLLUP_SKIP_LOAD_NATIVE_PLUGIN = 'true';

// Run the build command
import { execSync } from 'child_process';
import './rollup-patch.js';

// Apply the rollup patch first
console.log('Applying rollup patch...');

console.log('Running TypeScript compiler...');
execSync('npx tsc', { stdio: 'inherit' });

console.log('Running Vite build...');
execSync('npx vite build', { stdio: 'inherit' });