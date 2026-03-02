#!/bin/bash
# Remove all problematic .bin symlink directories before Gatsby plugin caching
if [ -d ".cache/adapters" ]; then
  echo "Removing all .bin directories under .cache/adapters to prevent caching errors"
  find .cache/adapters -type d -name '.bin' -exec rm -rf {} + 2>/dev/null || true
fi
