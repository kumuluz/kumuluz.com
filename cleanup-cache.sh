#!/bin/bash
# Remove problematic symlinks before Gatsby plugin caching
if [ -d ".cache/adapters/node_modules/.bin" ]; then
  echo "Removing .cache/adapters/node_modules/.bin to prevent caching errors"
  rm -rf .cache/adapters/node_modules/.bin
fi
