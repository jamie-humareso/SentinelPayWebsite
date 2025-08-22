# Sentinel Pay Website

[![Deploy to AWS Amplify](https://img.shields.io/badge/Deploy-AWS%20Amplify-orange?style=for-the-badge&logo=amazon-aws)](https://console.aws.amazon.com/amplify/home?region=us-east-2#/d36xfj43ezpkp)
[![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-Deploy%20on%20Push-green?style=for-the-badge&logo=github-actions)](https://github.com/jamie-humareso/SentinelPayWebsite/actions)

**Status**: Multiple deployment options available - choose what works best for you!

## 🚀 **Quick Deploy Options**

### Option 1: Netlify Drop (Recommended for Drafts)
```bash
# Build and prepare for Netlify Drop
./deploy-netlify.sh

# Then go to https://app.netlify.com/drop and drag the 'out' folder
```

### Option 2: S3 + CloudFront (AWS)
```bash
# Deploy to S3 with CloudFront
./deploy-s3.sh

# URLs:
# S3: http://sentinel-pay-website.s3-website.us-east-2.amazonaws.com
# CloudFront: https://d3psf3ynte8tar.cloudfront.net
```

### Option 3: Manual Build
```bash
npm run build
# Serve the 'out' folder with any static host
```

## 🌐 **Live URLs**

- **Netlify Drop**: Build with `./deploy-netlify.sh` then deploy at https://app.netlify.com/drop
- **S3 Website**: http://sentinel-pay-website.s3-website.us-east-2.amazonaws.com (account restrictions apply)
- **CloudFront**: https://d3psf3ynte8tar.cloudfront.net (CDN, faster)

# 🚀 Sentinel Website Builder - Advanced Playwright Edition

**Professional-grade automation for building amazing Squarespace marketing websites**

This system uses **Playwright** to automatically build your entire Sentinel Pay Analytics website from markdown content, running completely in the background while you continue working elsewhere.

## ✨ Features

- **🎭 Playwright Automation** - Modern, reliable web automation
- **🌙 Background Operation** - Runs headless, no browser windows
- **📊 Real-time Progress** - Live updates and logging
- **🎨 Template System** - Consistent layouts for different page types
- **📱 Responsive Design** - Mobile-optimized content
- **🔒 Secure Credentials** - Environment-based configuration
- **📝 Comprehensive Logging** - Full audit trail of all operations

## 🚀 Quick Start

### 1. Install Dependencies
```bash
# Install Python packages
pip install -r requirements.txt

# Install Playwright browsers
playwright install chromium
```

### 2. Configure Environment
```bash
# Copy environment template
cp env_example.txt .env

# Edit .env with your credentials
nano .env
```

### 3. Launch Website Builder
```bash
# Run the quick start script
python quick_start.py

# Or run directly
python sentinel_website_builder.py
```

## 🔧 Configuration

### Environment Variables
```bash
# Required
SQUARESPACE_EMAIL=your-email@example.com
SQUARESPACE_PASSWORD=your-password

# Optional
SQUARESPACE_SITE_URL=your-site-name
HEADLESS_MODE=true
LOG_LEVEL=INFO
```

### Content Structure
Your markdown files are automatically parsed and converted to Squarespace pages:

- **Hero Pages** (`homepage.md`, `why-now.md`) - Full-width layouts with CTAs
- **Content Pages** (`how-it-works.md`, `use-cases.md`) - Standard content layouts
- **Special Pages** (`demo.md`, `pricing.md`, `our-experts.md`) - Custom templates

## 📁 File Structure

```
SentinelPayWebsite/
├── sentinel_website_builder.py    # Main automation engine
├── quick_start.py                 # Setup and launch script
├── requirements.txt               # Python dependencies
├── .env                          # Your credentials (create from env_example.txt)
├── *.md                          # Your content files
├── sentinel_build.log            # Build progress log
└── output/                       # Generated assets
```

## 🎯 How It Works

### 1. **Content Parsing**
- Reads your markdown files
- Extracts headlines, sections, and CTAs
- Structures content for Squarespace

### 2. **Page Creation**
- Creates new pages in Squarespace
- Applies appropriate templates
- Adds content blocks systematically

### 3. **Template Application**
- **Hero Template**: Large headlines, CTAs, full-width sections
- **Content Template**: Standard content with navigation
- **Special Templates**: Custom layouts for specific page types

### 4. **Publishing**
- Saves each page
- Publishes to live site
- Updates progress tracking

## 🔍 Monitoring & Progress

### Real-time Updates
- Console output with emojis and progress bars
- Detailed logging to `sentinel_build.log`
- Progress notifications every 25% completion

### Build Status
```
🚀 Starting Sentinel Website Builder
🔐 Logging into Squarespace...
✅ Successfully logged in
🏠 Navigating to site...
📚 Building all pages...
📄 Building page: Homepage
🎨 Applying hero template
✅ Page saved
✅ Page published
📊 Progress: 1/8 pages (12.5%)
```

## 🛠️ Troubleshooting

### Common Issues

**Login Failed**
- Verify credentials in `.env` file
- Check if 2FA is enabled (may need app password)

**Page Creation Failed**
- Ensure you have admin access to the site
- Check if site is in maintenance mode

**Content Upload Issues**
- Verify markdown file syntax
- Check Squarespace page limits

### Debug Mode
```bash
# Run with visible browser for debugging
HEADLESS_MODE=false python sentinel_website_builder.py
```

## 🎨 Customization

### Adding New Page Types
1. Add to `page_mappings` in the builder
2. Create template method (e.g., `_apply_custom_template`)
3. Update content parsing if needed

### Custom Templates
```python
def _apply_custom_template(self, content: PageContent):
    """Apply custom template layout"""
    # Add custom blocks and styling
    self._add_text_block(f"<h1>{content.title}</h1>")
    # ... custom implementation
```

## 📱 Background Operation

The system is designed to run completely in the background:

- **Headless Mode**: No browser windows
- **Process Persistence**: Continues running if terminal is closed
- **Error Recovery**: Automatic retries and graceful failures
- **Resource Management**: Efficient memory and CPU usage

## 🔒 Security

- Credentials stored in `.env` file (never committed to git)
- Secure Playwright browser launch
- No sensitive data in logs
- Environment variable validation

## 📈 Performance

- **Parallel Processing**: Efficient page creation
- **Rate Limiting**: Respects Squarespace API limits
- **Memory Optimization**: Minimal resource usage
- **Fast Execution**: Typically 2-5 minutes for full site

## 🎯 Next Steps

After the build completes:

1. **Review Content** - Check all pages in Squarespace
2. **Add Images** - Upload hero images and graphics
3. **Configure Navigation** - Set up menus and site structure
4. **Test Functionality** - Verify forms and CTAs work
5. **Launch** - Make your site live!

## 🆘 Support

### Logs
- Check `sentinel_build.log` for detailed error information
- Console output shows real-time progress

### Common Commands
```bash
# View build log
tail -f sentinel_build.log

# Check environment
python -c "from dotenv import load_dotenv; load_dotenv(); import os; print(os.getenv('SQUARESPACE_EMAIL'))"

# Test Playwright installation
playwright --version
```

---

**Built with ❤️ for Sentinel Pay Analytics**

*Transform your markdown content into a professional marketing website in minutes, not hours.* 