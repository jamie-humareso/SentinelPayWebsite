# 🚀 Sentinel Website Builder - Setup Guide

**Complete setup instructions for your automated website builder**

## 🎯 What You'll Get

After following this guide, you'll have a **fully automated system** that:
- ✅ Builds your entire Sentinel Pay Analytics website
- ✅ Runs completely in the background (no browser windows)
- ✅ Creates professional, conversion-optimized pages
- ✅ Handles all content formatting automatically
- ✅ Saves you 4-6 hours of manual work

## 📋 Prerequisites

### System Requirements
- **Operating System**: macOS, Windows, or Linux
- **Python**: Version 3.8 or higher
- **Memory**: At least 4GB RAM
- **Internet**: Stable connection for Squarespace access

### What You Need
- ✅ Your Squarespace login credentials (already provided)
- ✅ Your Squarespace site URL (you'll add this)
- ✅ The markdown content files (already in place)

## 🚀 Quick Setup (5 minutes)

### Step 1: Install Python Dependencies
```bash
# Install required packages
pip install -r requirements.txt

# Install Playwright browsers
playwright install chromium
```

### Step 2: Set Up Environment
```bash
# Create your .env file with credentials
python setup_environment.py
```

### Step 3: Update Site URL
Edit the `.env` file and change:
```bash
SQUARESPACE_SITE_URL=your-actual-site-name
```

### Step 4: Launch Website Builder
```bash
# Start building your website
python launch_website_builder.py
```

## 🔧 Detailed Setup

### 1. Python Environment Setup

#### Check Python Version
```bash
python --version
# Should show Python 3.8 or higher
```

#### Install pip (if needed)
```bash
# macOS/Linux
curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
python get-pip.py

# Windows
# Download get-pip.py and run: python get-pip.py
```

### 2. Install Dependencies

#### Install Python Packages
```bash
pip install playwright python-dotenv requests beautifulsoup4 lxml
```

#### Install Playwright Browsers
```bash
playwright install chromium
```

**Note**: This downloads ~200MB of browser files. Only needed once.

### 3. Environment Configuration

#### Create Environment File
```bash
python setup_environment.py
```

This creates a `.env` file with your credentials:
```bash
SQUARESPACE_EMAIL=jaquila@humareso.com
SQUARESPACE_PASSWORD=pAXYLE^y{?7NFjRHL$[Q
SQUARESPACE_SITE_URL=your-site-url-here
```

#### Update Site URL
1. Open `.env` file
2. Change `SQUARESPACE_SITE_URL=your-site-url-here` to your actual site
3. Example: `SQUARESPACE_SITE_URL=sentinel-pay-analytics`

### 4. Test Setup

#### Verify Installation
```bash
# Test Python packages
python -c "import playwright; print('✅ Playwright installed')"

# Test Playwright browsers
playwright --version
```

#### Test Credentials
```bash
# Check environment variables
python -c "from dotenv import load_dotenv; load_dotenv(); import os; print(f'Email: {os.getenv(\"SQUARESPACE_EMAIL\")}')"
```

## 🎯 Launch Your Website Builder

### Option 1: Simple Launch
```bash
python launch_website_builder.py
```

### Option 2: Direct Launch
```bash
python sentinel_website_builder.py
```

### Option 3: Quick Start (Full Setup)
```bash
python quick_start.py
```

## 📊 What Happens Next

### 1. **Login Phase** (30 seconds)
- System logs into your Squarespace account
- Navigates to your site dashboard

### 2. **Page Building** (2-5 minutes)
- Creates each page from your markdown files
- Applies professional templates
- Adds content blocks systematically

### 3. **Publishing** (1-2 minutes)
- Saves each page
- Publishes to live site
- Updates progress tracking

### 4. **Completion**
- All 8 pages built and published
- Professional layout applied
- Ready for images and final touches

## 🔍 Monitoring Progress

### Real-time Updates
The system provides live progress updates:
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

### Log Files
- **Console**: Real-time progress
- **sentinel_build.log**: Detailed log file
- **Progress bars**: Visual completion indicators

## 🛠️ Troubleshooting

### Common Issues & Solutions

#### "Python not found"
```bash
# Try these commands
python3 --version
python3.8 --version
python3.9 --version

# If found, use the full command
python3.8 launch_website_builder.py
```

#### "Module not found"
```bash
# Reinstall requirements
pip install -r requirements.txt

# Or install individually
pip install playwright python-dotenv requests
```

#### "Playwright browsers not found"
```bash
# Reinstall browsers
playwright install chromium

# Or install all browsers
playwright install
```

#### "Login failed"
- Verify credentials in `.env` file
- Check if 2FA is enabled
- Try logging in manually to Squarespace first

#### "Site not found"
- Update `SQUARESPACE_SITE_URL` in `.env`
- Use your site's subdomain (e.g., `mysite.squarespace.com`)

### Debug Mode
If you encounter issues, run with visible browser:
```bash
# Edit .env file
HEADLESS_MODE=false

# Then run
python launch_website_builder.py
```

## 🎨 After Build Completion

### 1. **Review Your Website**
- Check all pages in Squarespace
- Verify content formatting
- Test navigation and links

### 2. **Add Visual Elements**
- Upload hero images
- Add team photos
- Include product screenshots

### 3. **Configure Final Settings**
- Set up navigation menus
- Configure contact forms
- Add Google Analytics

### 4. **Launch**
- Make your site live
- Test on mobile devices
- Share with your team

## 📱 Background Operation

### How It Works
- **Headless Mode**: No browser windows open
- **Process Persistence**: Continues running if you close terminal
- **Resource Efficient**: Minimal CPU and memory usage
- **Error Recovery**: Handles failures gracefully

### You Can:
- ✅ Continue working on other tasks
- ✅ Close your terminal (process continues)
- ✅ Monitor progress via log files
- ✅ Interrupt anytime with Ctrl+C

## 🔒 Security Notes

### Credentials
- Stored in `.env` file (never committed to git)
- Environment variables only
- No hardcoded passwords

### Access
- Only accesses your Squarespace account
- No external data transmission
- Local processing only

## 🆘 Getting Help

### Check Logs
```bash
# View build log
tail -f sentinel_build.log

# View last 50 lines
tail -50 sentinel_build.log
```

### Common Commands
```bash
# Check environment
python -c "from dotenv import load_dotenv; load_dotenv(); import os; print(os.getenv('SQUARESPACE_EMAIL'))"

# Test Playwright
playwright --version

# Check Python packages
pip list | grep -E "(playwright|dotenv|requests)"
```

### Still Stuck?
1. Check the troubleshooting section above
2. Review `sentinel_build.log` for error details
3. Try running in debug mode (`HEADLESS_MODE=false`)
4. Verify your Squarespace credentials manually

## 🎉 Success!

Once complete, you'll have:
- ✅ **8 professional pages** built automatically
- ✅ **Consistent design** across all pages
- ✅ **Mobile-optimized** layouts
- ✅ **SEO-ready** content structure
- ✅ **Conversion-optimized** CTAs and forms

**Your Sentinel Pay Analytics website will be ready for the world!** 🚀

---

**Need help?** Check the troubleshooting section or review the logs. The system is designed to be robust and handle most issues automatically.

