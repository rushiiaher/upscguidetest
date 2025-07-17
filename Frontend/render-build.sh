#!/usr/bin/env sh
# exit on error
set -o errexit

npm install
npm run build
