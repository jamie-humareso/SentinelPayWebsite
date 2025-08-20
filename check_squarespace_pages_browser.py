#!/usr/bin/env python3
"""
Check existing Squarespace pages using browser automation
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

# Load environment variables
load_dotenv()

class SquarespacePageChecker:
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
        self.driver.get("https://www.squarespace.com/dashboard/sites")
        
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
        
        # Wait for site editor to load
        try:
            self.wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, ".site-editor")))
            print("✅ Successfully navigated to site")
        except:
            print("⚠️ Site editor not found, but continuing...")
    
    def get_all_pages(self):
        """Get all pages from the site"""
        print("📄 Getting all pages...")
        
        try:
            # Navigate to pages section
            self.driver.get(f"https://www.squarespace.com/dashboard/sites/{self.site_url}/pages")
            time.sleep(3)
            
            # Look for page elements
            page_elements = self.driver.find_elements(By.CSS_SELECTOR, "[data-test='page-item']")
            
            if not page_elements:
                # Try alternative selectors
                page_elements = self.driver.find_elements(By.CSS_SELECTOR, ".page-item")
            
            if not page_elements:
                # Try another approach
                page_elements = self.driver.find_elements(By.CSS_SELECTOR, "[class*='page']")
            
            pages = []
            for element in page_elements:
                try:
                    title = element.find_element(By.CSS_SELECTOR, "[data-test='page-title']").text
                except:
                    try:
                        title = element.find_element(By.CSS_SELECTOR, ".page-title").text
                    except:
                        title = element.text
                
                try:
                    url = element.find_element(By.CSS_SELECTOR, "a").get_attribute("href")
                except:
                    url = "N/A"
                
                pages.append({
                    'title': title,
                    'url': url,
                    'element': element
                })
            
            return pages
            
        except Exception as e:
            print(f"❌ Error getting pages: {e}")
            return []
    
    def check_for_sentinel_pages(self, pages):
        """Check specifically for Sentinel-related pages"""
        print("\n🎯 Checking for Sentinel Pay Analytics pages...")
        print("=" * 60)
        
        sentinel_keywords = [
            'homepage', 'home', 'main',
            'why', 'pay', 'equity', 'now',
            'how', 'works', 'process',
            'demo', 'platform', 'see',
            'use', 'cases', 'personas',
            'experts', 'team', 'about',
            'trust', 'privacy', 'security',
            'pricing', 'plans', 'cost',
            'sentinel'
        ]
        
        found_pages = []
        
        for page in pages:
            title = page.get('title', '').lower()
            
            # Check if page title contains Sentinel keywords
            for keyword in sentinel_keywords:
                if keyword in title:
                    found_pages.append(page)
                    break
        
        if found_pages:
            print(f"✅ Found {len(found_pages)} potential Sentinel pages:")
            print()
            
            for i, page in enumerate(found_pages, 1):
                print(f"{i}. {page.get('title', 'Untitled')}")
                print(f"   URL: {page.get('url', 'N/A')}")
                print()
        else:
            print("❌ No Sentinel-related pages found")
            print("This might mean:")
            print("- Pages haven't been created yet")
            print("- Pages have different names")
            print("- Pages are in draft status")
        
        return found_pages
    
    def take_screenshot(self, filename="squarespace_pages.png"):
        """Take a screenshot of the current page"""
        try:
            self.driver.save_screenshot(filename)
            print(f"📸 Screenshot saved as {filename}")
        except Exception as e:
            print(f"❌ Error taking screenshot: {e}")
    
    def list_all_pages(self):
        """List all pages found"""
        print("\n📋 All Pages in Site:")
        print("=" * 60)
        
        pages = self.get_all_pages()
        
        if not pages:
            print("📄 No pages found or could not access pages")
            print("This might mean:")
            print("- Site is empty")
            print("- Pages are in draft status")
            print("- Different page structure")
            
            # Take screenshot for debugging
            self.take_screenshot("no_pages_found.png")
            return []
        
        print(f"📄 Found {len(pages)} pages:")
        print()
        
        for i, page in enumerate(pages, 1):
            print(f"{i}. {page.get('title', 'Untitled')}")
            print(f"   URL: {page.get('url', 'N/A')}")
            print()
        
        return pages
    
    def close(self):
        """Close the browser"""
        self.driver.quit()

def main():
    """Main function"""
    print("🚀 Sentinel Pay Analytics - Squarespace Page Checker (Browser)")
    print("=" * 70)
    
    checker = SquarespacePageChecker()
    
    if not checker.email or not checker.password:
        return
    
    try:
        # Login and navigate
        checker.login_to_squarespace()
        checker.navigate_to_site()
        
        # Get all pages
        all_pages = checker.list_all_pages()
        
        # Check for Sentinel pages
        sentinel_pages = checker.check_for_sentinel_pages(all_pages)
        
        # Take screenshot for reference
        checker.take_screenshot("squarespace_dashboard.png")
        
        if sentinel_pages:
            print(f"\n✅ Found {len(sentinel_pages)} Sentinel-related pages!")
            print("You can now use the content upload scripts to update these pages.")
        else:
            print("\n📝 No existing Sentinel pages found.")
            print("You can create new pages using the content upload scripts.")
        
    except Exception as e:
        print(f"❌ Error during page check: {e}")
        checker.take_screenshot("error_screenshot.png")
    
    finally:
        # Keep browser open for manual review
        print("\n🔍 Browser will stay open for manual review...")
        print("Press Enter to close browser...")
        input()
        checker.close()

if __name__ == "__main__":
    main() 