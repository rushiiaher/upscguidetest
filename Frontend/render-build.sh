#!/bin/bash
# Fix for Rollup issue on Render
npm install --force
export ROLLUP_SKIP_LOAD_NATIVE_PLUGIN=true
npm run build