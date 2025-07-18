// Root build script
const { execSync } = require('child_process');
const path = require('path');

console.log('Starting build process from root directory');

try {
  console.log('Changing to Frontend directory');
  process.chdir(path.join(__dirname, 'Frontend'));
  console.log('Current directory:', process.cwd());
  
  console.log('Installing dependencies');
  execSync('npm install', { stdio: 'inherit' });
  
  console.log('Running build script');
  execSync('npm run build', { stdio: 'inherit' });
  
  console.log('Build completed successfully');
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}