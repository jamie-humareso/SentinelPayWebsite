# Sentinel Pay Analytics - Website Automation

This project provides multiple methods to autonomously upload your Sentinel Pay Analytics content to Squarespace, transforming your markdown files into a modern, conversion-optimized website.

## 🚀 Quick Start

The fastest way to get started:

```bash
# Run the quick start script
python quick_start.py
```

This will guide you through the setup process and choose the best upload method for your needs.

## 📋 What's Included

### Content Files
- `homepage.md` - Main landing page content
- `why-now.md` - Pay equity urgency and risks
- `how-it-works.md` - Process explanation
- `demo.md` - Platform demonstration
- `use-cases.md` - Persona-specific solutions
- `our-experts.md` - Team and expertise
- `trust-and-privacy.md` - Security and compliance
- `pricing.md` - Plans and pricing

### Automation Tools
- `quick_start.py` - Guided setup and execution
- `squarespace_content_uploader.py` - Browser automation
- `squarespace_content_automation.py` - API integration
- `squarespace_setup_guide.md` - Comprehensive guide

## 🛠️ Upload Methods

### Method 1: Manual Copy-Paste (Recommended)
**Best for:** Beginners, immediate results
- ✅ No technical setup required
- ✅ Full control over formatting
- ✅ Immediate visual feedback
- ⏱️ Time: 2-3 hours

### Method 2: Browser Automation
**Best for:** Semi-automated, consistent formatting
- ✅ Automated page creation
- ✅ Batch content upload
- ✅ Consistent formatting
- ⏱️ Time: 30 minutes + 1 hour review

### Method 3: API Integration
**Best for:** Fully automated, programmatic control
- ✅ Fully automated
- ✅ Version control friendly
- ✅ Easy content updates
- ⏱️ Time: 15 minutes setup + 30 minutes execution

## 📦 Installation

### Prerequisites
- Python 3.7 or higher
- Chrome browser (for browser automation)
- Squarespace account

### Setup
```bash
# Clone or download this repository
cd SentinelPayAnalytics

# Install dependencies
pip install selenium webdriver-manager python-dotenv

# Run quick start
python quick_start.py
```

## 🔧 Configuration

### Environment Setup
1. Copy `env_example.txt` to `.env`
2. Add your Squarespace credentials:

```env
# For browser automation
SQUARESPACE_EMAIL=your-email@example.com
SQUARESPACE_PASSWORD=your-password
SQUARESPACE_SITE_URL=your-site-name

# For API integration (optional)
SQUARESPACE_API_KEY=your-api-key
SQUARESPACE_SITE_ID=your-site-id
```

### Squarespace Setup
1. Create a Squarespace account
2. Choose a template (Bedford or York recommended)
3. Get your site URL from the dashboard
4. For API access, create a developer account

## 📊 Content Structure

The automation will create this site structure:

```
Homepage
├── Why Pay Equity Now
├── How It Works
├── See the Platform (Interactive Demo)
├── Use Cases
│   ├── For HR Leaders
│   ├── For DEI Leaders
│   └── For Legal/Compliance
├── Our Experts
├── Trust & Privacy
└── Pricing & Plans
```

## 🎨 Design Recommendations

### Template Selection
- **Bedford** - Clean, professional B2B
- **York** - Modern, spacious services
- **Henson** - Bold, confident tech
- **Montauk** - Elegant, trustworthy consulting

### Brand Colors
- **Primary:** Hunter Green (#2D5016)
- **Accent:** Aqua Blue (#00B4D8)
- **Fonts:** Serif headings, sans-serif body

### Image Requirements
- **Hero Images:** 1920x1080px
- **Team Photos:** 800x800px
- **Product Screenshots:** 1200x800px
- **Icons:** 64x64px SVG

## 🔄 Workflow

### 1. Content Preparation
- [ ] Review all markdown files
- [ ] Prepare images and graphics
- [ ] Finalize copy and CTAs

### 2. Squarespace Setup
- [ ] Create account and choose template
- [ ] Configure basic settings
- [ ] Set up navigation structure

### 3. Content Upload
- [ ] Choose upload method
- [ ] Run automation or manual process
- [ ] Review and adjust formatting

### 4. Post-Upload
- [ ] Add images and graphics
- [ ] Configure forms and CTAs
- [ ] Set up analytics and tracking
- [ ] Test everything thoroughly

## 📈 Success Metrics

Track these KPIs after launch:
- **Page Views:** 1000+ monthly
- **Time on Site:** 2+ minutes
- **Bounce Rate:** <50%
- **Conversion Rate:** 2-5%
- **Lead Generation:** Consultation requests

## 🛠️ Troubleshooting

### Common Issues

**Content Not Formatting**
- Use Squarespace's built-in editor
- Check for special characters
- Use HTML tags for advanced formatting

**Images Not Uploading**
- Check file size (max 20MB)
- Verify format (JPG, PNG, SVG)
- Try different browser

**Automation Errors**
- Verify credentials in `.env`
- Check internet connection
- Ensure Chrome is installed

### Getting Help
- **Squarespace Support:** 24/7 live chat
- **Documentation:** `squarespace_setup_guide.md`
- **Community:** Squarespace forums

## 💰 Cost Considerations

### Squarespace Plans
- **Business:** $23/month (recommended)
- **Commerce:** $27/month (if selling)
- **Enterprise:** Custom pricing

### Additional Costs
- **Custom Domain:** $20/year
- **Email Marketing:** $5-20/month
- **Analytics Tools:** $0-50/month

## 🚀 Next Steps

After successful upload:

1. **Review & Optimize**
   - Check all pages and links
   - Optimize for mobile
   - Test contact forms

2. **Add Visual Elements**
   - Upload product screenshots
   - Add team photos
   - Include custom graphics

3. **Configure Marketing**
   - Set up Google Analytics
   - Configure email capture
   - Add social proof

4. **Launch & Monitor**
   - Go live with custom domain
   - Monitor performance
   - Optimize based on data

## 📚 Resources

- [Squarespace Help Center](https://help.squarespace.com)
- [Squarespace Developer Portal](https://developers.squarespace.com)
- [Squarespace Templates](https://www.squarespace.com/templates)
- [Google Analytics Setup](https://analytics.google.com)

## 🤝 Support

For questions or issues:
1. Check the troubleshooting section
2. Review `squarespace_setup_guide.md`
3. Contact Squarespace support
4. Review automation logs

---

**Ready to get started?** Run `python quick_start.py` to begin your automated website setup! 