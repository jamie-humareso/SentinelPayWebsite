#!/bin/bash

# Sentinel Pay Website - Netlify Drop Deployment Script
# This script builds and prepares the site for Netlify Drop

set -e

echo "🚀 Building Sentinel Pay Website..."

# Build the static export
npm run build

echo "📦 Site built successfully!"
echo ""
echo "🌐 To deploy to Netlify:"
echo "   1. Go to https://app.netlify.com/drop"
echo "   2. Drag and drop the 'out' folder from this directory"
echo "   3. Your site will be live in seconds!"
echo ""
echo "📁 The 'out' folder contains your static site"
echo "✅ Ready for deployment!"
