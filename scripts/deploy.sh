#!/bin/bash

# Sentinel Website Deployment Script for Vercel
echo "🚀 Deploying Sentinel Website to Vercel..."

# Set production environment
export NODE_ENV=production
export NEXT_TELEMETRY_DISABLED=1

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf .next
rm -rf node_modules/.cache

# Install dependencies
echo "📦 Installing dependencies..."
npm ci --only=production

# Build the project
echo "🔨 Building project..."
npm run build

# Run tests
echo "🧪 Running tests..."
npm test -- --passWithNoTests

# Deploy to Vercel
echo "🚀 Deploying to Vercel..."
vercel --prod

echo "✅ Deployment complete!"
echo "🌐 Your website is now live on Vercel!"
