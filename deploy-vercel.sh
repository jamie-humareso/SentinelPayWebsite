#!/bin/bash

# Sentinel Website Vercel Deployment Script
echo "🚀 Deploying Sentinel Website to Vercel..."

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found. Installing..."
    npm install -g vercel
fi

# Check if user is logged in
if ! vercel whoami &> /dev/null; then
    echo "🔐 Please login to Vercel first:"
    echo "   vercel login"
    echo "   Then run this script again."
    exit 1
fi

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf .next
rm -rf node_modules/.cache

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

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
echo ""
echo "📋 Next steps:"
echo "   1. Test all pages and functionality"
echo "   2. Add custom domain in Vercel dashboard"
echo "   3. Configure DNS records"
echo "   4. Monitor performance metrics"
