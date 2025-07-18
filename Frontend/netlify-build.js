// netlify-build.js
import fs from 'fs';

// Create a script that will inject environment variables
const envScript = `
<script>
window.ENV = {
  VITE_API_URL: "https://upscguidetest.onrender.com"
};
console.log("Environment variables loaded from injected script");
</script>
`;

// Read the index.html file
const indexPath = './dist/index.html';
let indexContent = fs.readFileSync(indexPath, 'utf8');

// Insert the environment script right after the <head> tag
indexContent = indexContent.replace('<head>', '<head>' + envScript);

// Write the modified index.html back
fs.writeFileSync(indexPath, indexContent);

// Copy the _redirects file to the dist folder
fs.copyFileSync('./_redirects', './dist/_redirects');

console.log('Environment variables and redirects set for Netlify deployment');