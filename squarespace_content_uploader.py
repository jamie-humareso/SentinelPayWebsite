#!/usr/bin/env python3
"""
Sentinel Pay Analytics - Squarespace Content Uploader

This script uses browser automation to upload content to Squarespace.
This is more reliable than API methods for content creation.

Requirements:
- Python 3.7+
- selenium
- webdriver-manager
- python-dotenv

Install: pip install selenium webdriver-manager python-dotenv
"""

import os
import time
import json
from pathlib import Path
from dotenv import load_dotenv
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager

# Load environment variables
load_dotenv()

class SquarespaceUploader:
    def __init__(self):
        self.email = os.getenv('SQUARESPACE_EMAIL')
        self.password = os.getenv('SQUARESPACE_PASSWORD')
        self.site_url = os.getenv('SQUARESPACE_SITE_URL')
        
        # Setup Chrome driver
        service = Service(ChromeDriverManager().install())
        self.driver = webdriver.Chrome(service=service)
        self.wait = WebDriverWait(self.driver, 10)
    
    def login_to_squarespace(self):
        """Login to Squarespace"""
        print("🔐 Logging into Squarespace...")
        
        self.driver.get("https://www.squarespace.com/login")
        
        # Wait for login form and enter credentials
        email_field = self.wait.until(EC.presence_of_element_located((By.NAME, "email")))
        email_field.send_keys(self.email)
        
        password_field = self.driver.find_element(By.NAME, "password")
        password_field.send_keys(self.password)
        
        # Click login button
        login_button = self.driver.find_element(By.CSS_SELECTOR, "button[type='submit']")
        login_button.click()
        
        # Wait for dashboard to load
        self.wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, ".dashboard")))
        print("✅ Successfully logged in")
    
    def navigate_to_site(self):
        """Navigate to the specific site"""
        print(f"🏠 Navigating to site: {self.site_url}")
        
        # Navigate to site dashboard
        self.driver.get(f"https://www.squarespace.com/dashboard/sites")
        
        # Find and click on the specific site
        site_link = self.wait.until(EC.element_to_be_clickable(
            (By.XPATH, f"//a[contains(@href, '{self.site_url}')]")
        ))
        site_link.click()
        
        # Wait for site editor to load
        self.wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, ".site-editor")))
        print("✅ Successfully navigated to site")
    
    def create_page(self, page_name, page_slug):
        """Create a new page"""
        print(f"📄 Creating page: {page_name}")
        
        # Click "Add Page" button
        add_page_button = self.wait.until(EC.element_to_be_clickable(
            (By.CSS_SELECTOR, "[data-test='add-page-button']")
        ))
        add_page_button.click()
        
        # Select page type (Blank Page)
        blank_page_option = self.wait.until(EC.element_to_be_clickable(
            (By.XPATH, "//div[contains(text(), 'Blank Page')]")
        ))
        blank_page_option.click()
        
        # Enter page name
        page_name_field = self.wait.until(EC.presence_of_element_located(
            (By.CSS_SELECTOR, "input[placeholder='Page Name']")
        ))
        page_name_field.clear()
        page_name_field.send_keys(page_name)
        
        # Enter page slug
        page_slug_field = self.driver.find_element(By.CSS_SELECTOR, "input[placeholder='Page URL']")
        page_slug_field.clear()
        page_slug_field.send_keys(page_slug)
        
        # Click "Create Page"
        create_button = self.driver.find_element(By.XPATH, "//button[contains(text(), 'Create Page')]")
        create_button.click()
        
        # Wait for page editor to load
        self.wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, ".page-editor")))
        print(f"✅ Successfully created page: {page_name}")
    
    def add_text_block(self, text, block_type="text"):
        """Add a text block to the page"""
        # Click "Add Block" button
        add_block_button = self.wait.until(EC.element_to_be_clickable(
            (By.CSS_SELECTOR, "[data-test='add-block-button']")
        ))
        add_block_button.click()
        
        # Select text block
        text_block_option = self.wait.until(EC.element_to_be_clickable(
            (By.XPATH, "//div[contains(text(), 'Text')]")
        ))
        text_block_option.click()
        
        # Wait for text editor to appear
        text_editor = self.wait.until(EC.presence_of_element_located(
            (By.CSS_SELECTOR, ".text-editor")
        ))
        
        # Clear and enter text
        text_editor.clear()
        text_editor.send_keys(text)
        
        # Click outside to save
        self.driver.find_element(By.CSS_SELECTOR, "body").click()
        time.sleep(1)
    
    def add_button_block(self, button_text, button_url="#"):
        """Add a button block to the page"""
        # Click "Add Block" button
        add_block_button = self.wait.until(EC.element_to_be_clickable(
            (By.CSS_SELECTOR, "[data-test='add-block-button']")
        ))
        add_block_button.click()
        
        # Select button block
        button_block_option = self.wait.until(EC.element_to_be_clickable(
            (By.XPATH, "//div[contains(text(), 'Button')]")
        ))
        button_block_option.click()
        
        # Enter button text
        button_text_field = self.wait.until(EC.presence_of_element_located(
            (By.CSS_SELECTOR, "input[placeholder='Button Text']")
        ))
        button_text_field.clear()
        button_text_field.send_keys(button_text)
        
        # Enter button URL
        button_url_field = self.driver.find_element(By.CSS_SELECTOR, "input[placeholder='URL']")
        button_url_field.clear()
        button_url_field.send_keys(button_url)
        
        # Click outside to save
        self.driver.find_element(By.CSS_SELECTOR, "body").click()
        time.sleep(1)
    
    def add_image_block(self, image_path):
        """Add an image block to the page"""
        # Click "Add Block" button
        add_block_button = self.wait.until(EC.element_to_be_clickable(
            (By.CSS_SELECTOR, "[data-test='add-block-button']")
        ))
        add_block_button.click()
        
        # Select image block
        image_block_option = self.wait.until(EC.element_to_be_clickable(
            (By.XPATH, "//div[contains(text(), 'Image')]")
        ))
        image_block_option.click()
        
        # Upload image
        file_input = self.wait.until(EC.presence_of_element_located(
            (By.CSS_SELECTOR, "input[type='file']")
        ))
        file_input.send_keys(image_path)
        
        # Wait for upload to complete
        time.sleep(3)
        
        # Click outside to save
        self.driver.find_element(By.CSS_SELECTOR, "body").click()
        time.sleep(1)
    
    def save_page(self):
        """Save the current page"""
        # Click save button
        save_button = self.wait.until(EC.element_to_be_clickable(
            (By.CSS_SELECTOR, "[data-test='save-button']")
        ))
        save_button.click()
        
        # Wait for save confirmation
        self.wait.until(EC.presence_of_element_located(
            (By.CSS_SELECTOR, ".save-confirmation")
        ))
        print("✅ Page saved successfully")
    
    def publish_page(self):
        """Publish the current page"""
        # Click publish button
        publish_button = self.wait.until(EC.element_to_be_clickable(
            (By.CSS_SELECTOR, "[data-test='publish-button']")
        ))
        publish_button.click()
        
        # Confirm publish
        confirm_button = self.wait.until(EC.element_to_be_clickable(
            (By.XPATH, "//button[contains(text(), 'Publish')]")
        ))
        confirm_button.click()
        
        print("✅ Page published successfully")
    
    def upload_page_content(self, page_name, page_slug, content_data):
        """Upload complete page content"""
        print(f"📝 Uploading content for: {page_name}")
        
        # Create the page
        self.create_page(page_name, page_slug)
        
        # Add hero section
        if content_data.get('headline'):
            self.add_text_block(f"<h1>{content_data['headline']}</h1>")
        
        if content_data.get('subheadline'):
            self.add_text_block(f"<p>{content_data['subheadline']}</p>")
        
        # Add CTA buttons
        for cta in content_data.get('cta_buttons', []):
            self.add_button_block(cta['text'], cta.get('url', '#'))
        
        # Add content sections
        for section in content_data.get('sections', []):
            if section.get('title'):
                self.add_text_block(f"<h2>{section['title']}</h2>")
            
            if section.get('content'):
                content_text = '<br>'.join(section['content'])
                self.add_text_block(f"<p>{content_text}</p>")
        
        # Save and publish
        self.save_page()
        self.publish_page()
        
        print(f"✅ Completed upload for: {page_name}")
    
    def batch_upload_content(self, content_directory):
        """Batch upload all content from markdown files"""
        content_dir = Path(content_directory)
        markdown_files = list(content_dir.glob('*.md'))
        
        # Page mappings
        page_mappings = {
            'homepage.md': {'name': 'Homepage', 'slug': 'home'},
            'why-now.md': {'name': 'Why Pay Equity Now', 'slug': 'why-pay-equity-now'},
            'how-it-works.md': {'name': 'How It Works', 'slug': 'how-it-works'},
            'demo.md': {'name': 'See the Platform', 'slug': 'see-the-platform'},
            'use-cases.md': {'name': 'Use Cases', 'slug': 'use-cases'},
            'our-experts.md': {'name': 'Our Experts', 'slug': 'our-experts'},
            'trust-and-privacy.md': {'name': 'Trust & Privacy', 'slug': 'trust-and-privacy'},
            'pricing.md': {'name': 'Pricing', 'slug': 'pricing'}
        }
        
        for md_file in markdown_files:
            if md_file.name in page_mappings:
                print(f"\n📄 Processing: {md_file.name}")
                
                # Parse markdown content
                content_data = self.parse_markdown_file(md_file)
                
                # Upload to Squarespace
                page_info = page_mappings[md_file.name]
                self.upload_page_content(
                    page_info['name'],
                    page_info['slug'],
                    content_data
                )
                
                # Wait between pages
                time.sleep(2)
    
    def parse_markdown_file(self, file_path):
        """Parse markdown file and extract structured content"""
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Simple parsing (you can enhance this)
        lines = content.split('\n')
        parsed_content = {
            'headline': '',
            'subheadline': '',
            'sections': [],
            'cta_buttons': []
        }
        
        current_section = None
        
        for line in lines:
            line = line.strip()
            
            # Extract headline
            if line.startswith('**Headline:**'):
                parsed_content['headline'] = line.replace('**Headline:**', '').strip()
            
            # Extract subheadline
            elif line.startswith('**Subheadline:**'):
                parsed_content['subheadline'] = line.replace('**Subheadline:**', '').strip()
            
            # Extract CTA buttons
            elif '**Primary CTA Button:**' in line:
                cta_text = line.replace('**Primary CTA Button:**', '').strip()
                parsed_content['cta_buttons'].append({'text': cta_text, 'url': '#'})
            elif '**Secondary CTA Button:**' in line:
                cta_text = line.replace('**Secondary CTA Button:**', '').strip()
                parsed_content['cta_buttons'].append({'text': cta_text, 'url': '#'})
            
            # Extract sections
            elif line.startswith('## '):
                if current_section:
                    parsed_content['sections'].append(current_section)
                current_section = {
                    'title': line[3:],
                    'content': []
                }
            elif current_section and line:
                current_section['content'].append(line)
        
        if current_section:
            parsed_content['sections'].append(current_section)
        
        return parsed_content
    
    def close(self):
        """Close the browser"""
        self.driver.quit()

def main():
    """Main execution function"""
    print("🚀 Sentinel Pay Analytics - Squarespace Content Uploader")
    print("=" * 60)
    
    # Check credentials
    if not all([os.getenv('SQUARESPACE_EMAIL'), 
                os.getenv('SQUARESPACE_PASSWORD'), 
                os.getenv('SQUARESPACE_SITE_URL')]):
        print("❌ Missing credentials. Please set:")
        print("- SQUARESPACE_EMAIL")
        print("- SQUARESPACE_PASSWORD") 
        print("- SQUARESPACE_SITE_URL")
        return
    
    # Initialize uploader
    uploader = SquarespaceUploader()
    
    try:
        # Login and navigate
        uploader.login_to_squarespace()
        uploader.navigate_to_site()
        
        # Batch upload content
        print("\n📤 Starting batch content upload...")
        uploader.batch_upload_content('.')
        
        print("\n✅ Content upload complete!")
        print("\nNext steps:")
        print("1. Review uploaded content in Squarespace")
        print("2. Add images and graphics")
        print("3. Configure navigation and menus")
        print("4. Set up forms and CTAs")
        
    except Exception as e:
        print(f"❌ Error during upload: {e}")
    
    finally:
        # Keep browser open for manual review
        input("\nPress Enter to close browser...")
        uploader.close()

if __name__ == "__main__":
    main() 