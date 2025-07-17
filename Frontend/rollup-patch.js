// This file will be used to patch the rollup native module issue
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

try {
  const nativePath = path.resolve('./node_modules/rollup/dist/native.js');
  if (fs.existsSync(nativePath)) {
    let content = fs.readFileSync(nativePath, 'utf8');
    
    // Replace the problematic code with a simple return
    content = content.replace(
      /function requireWithFriendlyError[\s\S]*?return require\(id\);/m,
      'function requireWithFriendlyError(id) { return null; }'
    );
    
    fs.writeFileSync(nativePath, content);
    console.log('Successfully patched rollup native module');
  }
} catch (error) {
  console.error('Failed to patch rollup:', error);
}