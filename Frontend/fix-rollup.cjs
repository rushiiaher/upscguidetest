const fs = require('fs');
const path = require('path');

// Path to the problematic file
const filePath = path.resolve(__dirname, '../node_modules/rollup/dist/es/shared/parseAst.js');

// Read the file
let content = fs.readFileSync(filePath, 'utf8');

// Replace the problematic import and fix the parse function
content = content.replace(
  "import { parse, parseAsync } from '../../native.js';",
  `import native from '../../native.js';
const parse = function(source, options) {
  return native.parse(source, options);
};
const parseAsync = native.parseAsync;`
);

// Write the modified content back
fs.writeFileSync(filePath, content);

console.log('Rollup fix applied successfully!');