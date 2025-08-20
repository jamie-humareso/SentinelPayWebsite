#!/usr/bin/env python3
"""
Sentinel Pay Analytics - Squarespace Content Uploader for Basic Plans
Creates all pages from scratch using browser automation
Works with any Squarespace plan (no API required)
"""

import os
import time
from pathlib import Path
from dotenv import load_dotenv
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.action_chains import ActionChains

# Load environment variables
load_dotenv()

class SquarespaceBasicUploader:
    def __init__(self):
        self.email = os.getenv('SQUARESPACE_EMAIL')
        self.password = os.getenv('SQUARESPACE_PASSWORD')
        self.site_url = os.getenv('SQUARESPACE_SITE_URL')
        
        if not self.email or not self.password:
            print("❌ Missing credentials. Please set in .env file:")
            print("- SQUARESPACE_EMAIL")
            print("- SQUARESPACE_PASSWORD")
            print("- SQUARESPACE_SITE_URL")
            return
        
        # Setup Chrome driver
        service = Service(ChromeDriverManager().install())
        self.driver = webdriver.Chrome(service=service)
        self.wait = WebDriverWait(self.driver, 15)
        self.actions = ActionChains(self.driver)
    
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
        self.driver.get("https://www.squarespace.com/dashboard/sites")
        time.sleep(3)
        
        # Find and click on the specific site
        try:
            site_link = self.wait.until(EC.element_to_be_clickable(
                (By.XPATH, f"//a[contains(@href, '{self.site_url}')]")
            ))
            site_link.click()
        except:
            # Try alternative approach - look for site by name
            try:
                site_link = self.wait.until(EC.element_to_be_clickable(
                    (By.XPATH, f"//div[contains(text(), '{self.site_url}')]")
                ))
                site_link.click()
            except:
                print("⚠️ Could not find specific site, showing all sites...")
        
        time.sleep(3)
        print("✅ Successfully navigated to site")
    
    def navigate_to_pages(self):
        """Navigate to the pages section"""
        print("📄 Navigating to pages section...")
        
        try:
            # Try to navigate directly to pages
            self.driver.get(f"https://www.squarespace.com/dashboard/sites/{self.site_url}/pages")
            time.sleep(3)
        except:
            # Alternative: click on Pages in the navigation
            try:
                pages_link = self.wait.until(EC.element_to_be_clickable(
                    (By.XPATH, "//a[contains(text(), 'Pages')]")
                ))
                pages_link.click()
                time.sleep(3)
            except:
                print("⚠️ Could not navigate to pages section")
    
    def create_new_page(self, page_name, page_slug):
        """Create a new page"""
        print(f"📄 Creating page: {page_name}")
        
        try:
            # Look for "Add Page" button
            add_page_button = self.wait.until(EC.element_to_be_clickable(
                (By.XPATH, "//button[contains(text(), 'Add Page')]")
            ))
            add_page_button.click()
            time.sleep(2)
            
            # Select "Blank Page" option
            blank_page_option = self.wait.until(EC.element_to_be_clickable(
                (By.XPATH, "//div[contains(text(), 'Blank Page')]")
            ))
            blank_page_option.click()
            time.sleep(2)
            
            # Enter page name
            page_name_field = self.wait.until(EC.presence_of_element_located(
                (By.CSS_SELECTOR, "input[placeholder*='Page Name']")
            ))
            page_name_field.clear()
            page_name_field.send_keys(page_name)
            
            # Enter page slug
            page_slug_field = self.driver.find_element(By.CSS_SELECTOR, "input[placeholder*='URL']")
            page_slug_field.clear()
            page_slug_field.send_keys(page_slug)
            
            # Click "Create Page"
            create_button = self.driver.find_element(By.XPATH, "//button[contains(text(), 'Create Page')]")
            create_button.click()
            
            # Wait for page editor to load
            time.sleep(5)
            print(f"✅ Successfully created page: {page_name}")
            return True
            
        except Exception as e:
            print(f"❌ Error creating page {page_name}: {e}")
            return False
    
    def add_text_block(self, text, is_heading=False):
        """Add a text block to the page"""
        try:
            # Click "Add Block" button
            add_block_button = self.wait.until(EC.element_to_be_clickable(
                (By.XPATH, "//button[contains(text(), 'Add Block')]")
            ))
            add_block_button.click()
            time.sleep(1)
            
            # Select text block
            text_block_option = self.wait.until(EC.element_to_be_clickable(
                (By.XPATH, "//div[contains(text(), 'Text')]")
            ))
            text_block_option.click()
            time.sleep(2)
            
            # Wait for text editor to appear and enter text
            text_editor = self.wait.until(EC.presence_of_element_located(
                (By.CSS_SELECTOR, "[contenteditable='true']")
            ))
            
            # Clear and enter text
            text_editor.clear()
            text_editor.send_keys(text)
            
            # If it's a heading, format it
            if is_heading:
                # Select all text
                text_editor.send_keys(Keys.CONTROL + 'a')
                time.sleep(1)
                
                # Try to format as heading (this might vary by template)
                try:
                    format_button = self.driver.find_element(By.CSS_SELECTOR, "[data-test='format-button']")
                    format_button.click()
                    time.sleep(1)
                    
                    heading_option = self.driver.find_element(By.XPATH, "//div[contains(text(), 'Heading')]")
                    heading_option.click()
                except:
                    print("⚠️ Could not format as heading, using plain text")
            
            # Click outside to save
            self.driver.find_element(By.CSS_SELECTOR, "body").click()
            time.sleep(2)
            
        except Exception as e:
            print(f"❌ Error adding text block: {e}")
    
    def add_button_block(self, button_text, button_url="#"):
        """Add a button block to the page"""
        try:
            # Click "Add Block" button
            add_block_button = self.wait.until(EC.element_to_be_clickable(
                (By.XPATH, "//button[contains(text(), 'Add Block')]")
            ))
            add_block_button.click()
            time.sleep(1)
            
            # Select button block
            button_block_option = self.wait.until(EC.element_to_be_clickable(
                (By.XPATH, "//div[contains(text(), 'Button')]")
            ))
            button_block_option.click()
            time.sleep(2)
            
            # Enter button text
            button_text_field = self.wait.until(EC.presence_of_element_located(
                (By.CSS_SELECTOR, "input[placeholder*='Button Text']")
            ))
            button_text_field.clear()
            button_text_field.send_keys(button_text)
            
            # Enter button URL
            try:
                button_url_field = self.driver.find_element(By.CSS_SELECTOR, "input[placeholder*='URL']")
                button_url_field.clear()
                button_url_field.send_keys(button_url)
            except:
                print("⚠️ Could not set button URL")
            
            # Click outside to save
            self.driver.find_element(By.CSS_SELECTOR, "body").click()
            time.sleep(2)
            
        except Exception as e:
            print(f"❌ Error adding button block: {e}")
    
    def save_page(self):
        """Save the current page"""
        try:
            # Look for save button
            save_button = self.wait.until(EC.element_to_be_clickable(
                (By.XPATH, "//button[contains(text(), 'Save')]")
            ))
            save_button.click()
            time.sleep(2)
            print("✅ Page saved successfully")
        except Exception as e:
            print(f"⚠️ Could not save page: {e}")
    
    def publish_page(self):
        """Publish the current page"""
        try:
            # Look for publish button
            publish_button = self.wait.until(EC.element_to_be_clickable(
                (By.XPATH, "//button[contains(text(), 'Publish')]")
            ))
            publish_button.click()
            time.sleep(2)
            
            # Confirm publish if needed
            try:
                confirm_button = self.driver.find_element(By.XPATH, "//button[contains(text(), 'Publish')]")
                confirm_button.click()
                time.sleep(2)
            except:
                pass
            
            print("✅ Page published successfully")
        except Exception as e:
            print(f"⚠️ Could not publish page: {e}")
    
    def upload_page_content(self, page_name, page_slug, content_data):
        """Upload complete page content"""
        print(f"📝 Uploading content for: {page_name}")
        
        # Navigate to pages section
        self.navigate_to_pages()
        
        # Create the page
        if not self.create_new_page(page_name, page_slug):
            return False
        
        # Add hero section
        if content_data.get('headline'):
            self.add_text_block(content_data['headline'], is_heading=True)
        
        if content_data.get('subheadline'):
            self.add_text_block(content_data['subheadline'])
        
        # Add CTA buttons
        for cta in content_data.get('cta_buttons', []):
            self.add_button_block(cta['text'], cta.get('url', '#'))
        
        # Add content sections
        for section in content_data.get('sections', []):
            if section.get('title'):
                self.add_text_block(section['title'], is_heading=True)
            
            if section.get('content'):
                content_text = ' '.join(section['content'])
                self.add_text_block(content_text)
        
        # Save and publish
        self.save_page()
        self.publish_page()
        
        print(f"✅ Completed upload for: {page_name}")
        return True
    
    def parse_markdown_file(self, file_path):
        """Parse markdown file and extract structured content"""
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Simple parsing
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
        
        successful_uploads = 0
        
        for md_file in markdown_files:
            if md_file.name in page_mappings:
                print(f"\n📄 Processing: {md_file.name}")
                
                # Parse markdown content
                content_data = self.parse_markdown_file(md_file)
                
                # Upload to Squarespace
                page_info = page_mappings[md_file.name]
                if self.upload_page_content(
                    page_info['name'],
                    page_info['slug'],
                    content_data
                ):
                    successful_uploads += 1
                
                # Wait between pages
                time.sleep(3)
        
        print(f"\n✅ Successfully uploaded {successful_uploads} out of {len(page_mappings)} pages")
        return successful_uploads
    
    def close(self):
        """Close the browser"""
        self.driver.quit()

def main():
    """Main function"""
    print("🚀 Sentinel Pay Analytics - Squarespace Content Uploader (Basic Plan)")
    print("=" * 70)
    
    uploader = SquarespaceBasicUploader()
    
    if not uploader.email or not uploader.password:
        return
    
    try:
        # Login and navigate
        uploader.login_to_squarespace()
        uploader.navigate_to_site()
        
        # Batch upload content
        print("\n📤 Starting batch content upload...")
        successful_uploads = uploader.batch_upload_content('.')
        
        print(f"\n✅ Content upload complete! {successful_uploads} pages created.")
        print("\nNext steps:")
        print("1. Review uploaded content in Squarespace")
        print("2. Add images and graphics")
        print("3. Configure navigation and menus")
        print("4. Set up forms and CTAs")
        
    except Exception as e:
        print(f"❌ Error during upload: {e}")
    
    finally:
        # Keep browser open for manual review
        print("\n🔍 Browser will stay open for manual review...")
        print("Press Enter to close browser...")
        input()
        uploader.close()

if __name__ == "__main__":
    main() 