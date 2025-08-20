# Squarespace Content Upload Guide

## Overview

This guide provides multiple methods to autonomously upload your Sentinel Pay Analytics content to Squarespace, from simple copy-paste to fully automated solutions.

## Method 1: Manual Copy-Paste (Recommended for Start)

### Setup Steps

1. **Create Squarespace Account**
   - Go to [squarespace.com](https://www.squarespace.com)
   - Sign up for a Business plan (recommended for advanced features)
   - Choose a template (we recommend "Bedford" or "York" for business sites)

2. **Set Up Site Structure**
   ```
   Homepage
   ├── Why Pay Equity Now
   ├── How It Works  
   ├── See the Platform
   ├── Use Cases
   ├── Our Experts
   ├── Trust & Privacy
   └── Pricing
   ```

3. **Content Upload Process**
   - Create each page in Squarespace
   - Copy content from markdown files
   - Paste into Squarespace text blocks
   - Format using Squarespace's built-in tools

### Advantages
- ✅ No technical setup required
- ✅ Full control over formatting
- ✅ Immediate visual feedback
- ✅ Easy to make adjustments

### Time Estimate
- **Setup:** 30 minutes
- **Content Upload:** 2-3 hours
- **Formatting:** 1-2 hours

## Method 2: Browser Automation (Semi-Automated)

### Prerequisites
```bash
# Install Python dependencies
pip install selenium webdriver-manager python-dotenv

# Install Chrome browser (if not already installed)
```

### Setup Steps

1. **Create Environment File**
   ```bash
   # Create .env file
   touch .env
   ```

2. **Add Credentials**
   ```env
   SQUARESPACE_EMAIL=your-email@example.com
   SQUARESPACE_PASSWORD=your-password
   SQUARESPACE_SITE_URL=your-site-name
   ```

3. **Run Automation Script**
   ```bash
   python squarespace_content_uploader.py
   ```

### What the Script Does
- ✅ Logs into your Squarespace account
- ✅ Creates pages automatically
- ✅ Uploads content from markdown files
- ✅ Adds text blocks and buttons
- ✅ Saves and publishes pages

### Advantages
- ✅ Automated page creation
- ✅ Batch content upload
- ✅ Consistent formatting
- ✅ Time-saving for large sites

### Time Estimate
- **Setup:** 15 minutes
- **Content Upload:** 30 minutes
- **Review/Adjustments:** 1 hour

## Method 3: API Integration (Fully Automated)

### Prerequisites
```bash
pip install requests beautifulsoup4 python-dotenv
```

### Setup Steps

1. **Get Squarespace API Credentials**
   - Go to [Squarespace Developer Portal](https://developers.squarespace.com)
   - Create a new API key
   - Get your site ID from Squarespace dashboard

2. **Configure Environment**
   ```env
   SQUARESPACE_API_KEY=your-api-key
   SQUARESPACE_SITE_ID=your-site-id
   ```

3. **Run API Script**
   ```bash
   python squarespace_content_automation.py
   ```

### Advantages
- ✅ Fully automated
- ✅ Programmatic control
- ✅ Easy to update content
- ✅ Version control friendly

### Limitations
- ❌ Requires API access (Developer plan)
- ❌ More complex setup
- ❌ Limited formatting control

## Method 4: CSV Import (For Structured Data)

### Use Cases
- Team member profiles
- Pricing tables
- Product features
- Testimonials

### CSV Format Example
```csv
Name,Title,Bio,Image URL
John Doe,CEO,Former labor economist...,https://example.com/john.jpg
Jane Smith,Head of Data Science,PhD in Statistics...,https://example.com/jane.jpg
```

### Import Process
1. Create CSV file with your data
2. Go to Squarespace Pages
3. Click "Import" 
4. Select your CSV file
5. Map columns to fields
6. Import and review

## Content Preparation Checklist

### Before Upload
- [ ] Review all markdown files for consistency
- [ ] Prepare images and graphics (recommended sizes below)
- [ ] Create navigation structure
- [ ] Set up contact forms
- [ ] Configure SEO settings

### Image Requirements
- **Hero Images:** 1920x1080px (16:9 ratio)
- **Team Photos:** 800x800px (square)
- **Product Screenshots:** 1200x800px
- **Icons:** 64x64px (SVG preferred)
- **File Formats:** JPG for photos, PNG for graphics, SVG for icons

### SEO Optimization
- [ ] Page titles (50-60 characters)
- [ ] Meta descriptions (150-160 characters)
- [ ] URL slugs (clean and descriptive)
- [ ] Header tags (H1, H2, H3 hierarchy)
- [ ] Alt text for images

## Squarespace Template Recommendations

### Business Templates
1. **Bedford** - Clean, professional, great for B2B
2. **York** - Modern, spacious, excellent for services
3. **Henson** - Bold, confident, perfect for tech companies
4. **Montauk** - Elegant, trustworthy, ideal for consulting

### Customization Tips
- Use consistent color scheme (hunter green + aqua blue)
- Implement serif fonts for headings
- Add subtle animations for engagement
- Ensure mobile responsiveness

## Post-Upload Tasks

### Immediate (Day 1)
- [ ] Review all pages for formatting
- [ ] Test navigation and links
- [ ] Check mobile responsiveness
- [ ] Verify contact forms work
- [ ] Set up Google Analytics

### Week 1
- [ ] Add custom CSS for branding
- [ ] Configure email marketing integration
- [ ] Set up lead capture forms
- [ ] Create blog section (if needed)
- [ ] Test page load speeds

### Month 1
- [ ] Monitor analytics and conversions
- [ ] A/B test different CTAs
- [ ] Optimize based on user behavior
- [ ] Add customer testimonials
- [ ] Create case studies

## Troubleshooting

### Common Issues

**Content Not Formatting Correctly**
- Use Squarespace's built-in text editor
- Check for special characters
- Use HTML tags for advanced formatting

**Images Not Uploading**
- Check file size (max 20MB)
- Verify file format (JPG, PNG, GIF, SVG)
- Try different browser

**Navigation Issues**
- Check page visibility settings
- Verify URL slugs are unique
- Test all internal links

**Form Not Working**
- Check form settings in Squarespace
- Verify email notifications are set up
- Test form submission process

### Getting Help
- **Squarespace Support:** 24/7 live chat
- **Community Forum:** [forum.squarespace.com](https://forum.squarespace.com)
- **Documentation:** [help.squarespace.com](https://help.squarespace.com)

## Cost Considerations

### Squarespace Plans
- **Personal:** $16/month (basic features)
- **Business:** $23/month (recommended)
- **Commerce:** $27/month (if selling products)
- **Enterprise:** Custom pricing

### Additional Costs
- **Custom Domain:** $20/year
- **Email Marketing:** $5-20/month
- **Analytics Tools:** $0-50/month
- **Design Services:** $500-2000 (optional)

## Success Metrics

### Track These KPIs
- **Page Views:** Target 1000+ monthly
- **Time on Site:** Target 2+ minutes
- **Bounce Rate:** Target <50%
- **Conversion Rate:** Target 2-5%
- **Lead Generation:** Track consultation requests

### Tools to Use
- **Google Analytics:** Free website analytics
- **Google Search Console:** SEO performance
- **Hotjar:** User behavior analysis
- **Squarespace Analytics:** Built-in insights

## Next Steps

1. **Choose Your Method:** Start with manual copy-paste for immediate results
2. **Set Up Environment:** Create Squarespace account and configure settings
3. **Prepare Assets:** Gather images, graphics, and finalize content
4. **Execute Upload:** Use your chosen method to upload content
5. **Review & Optimize:** Test everything and make improvements
6. **Launch & Monitor:** Go live and track performance

---

**Need Help?** The automation scripts are designed to handle most of the heavy lifting, but manual review and adjustment is always recommended for the best results. 