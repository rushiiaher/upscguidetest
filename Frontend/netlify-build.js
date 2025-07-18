// netlify-build.js
const fs = require('fs');

// Create a production env file with the Render URL
fs.writeFileSync('./dist/.env', `VITE_API_URL=https://upscguidetest.onrender.com`);

// Copy the _redirects file to the dist folder
fs.copyFileSync('./_redirects', './dist/_redirects');

console.log('Environment variables and redirects set for Netlify deployment');