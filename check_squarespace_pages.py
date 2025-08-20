#!/usr/bin/env python3
"""
Check existing Squarespace pages using the API
"""

import os
import requests
from dotenv import load_dotenv
import json

# Load environment variables
load_dotenv()

class SquarespacePageChecker:
    def __init__(self):
        self.api_key = os.getenv('SQUARESPACE_API_KEY')
        self.site_id = os.getenv('SQUARESPACE_SITE_ID')
        
        if not self.api_key or not self.site_id:
            print("❌ Missing API credentials. Please set:")
            print("- SQUARESPACE_API_KEY")
            print("- SQUARESPACE_SITE_ID")
            print("\nTo get these:")
            print("1. Go to Squarespace Developer Portal")
            print("2. Create a new API key")
            print("3. Get your site ID from your Squarespace dashboard")
            return
        
        self.base_url = f"https://api.squarespace.com/1.0/sites/{self.site_id}"
        self.headers = {
            'Authorization': f'Bearer {self.api_key}',
            'Content-Type': 'application/json'
        }
    
    def get_all_pages(self):
        """Get all pages from the site"""
        try:
            url = f"{self.base_url}/pages"
            response = requests.get(url, headers=self.headers)
            response.raise_for_status()
            
            pages = response.json()
            return pages
        except requests.exceptions.RequestException as e:
            print(f"❌ Error fetching pages: {e}")
            return None
    
    def get_page_details(self, page_id):
        """Get detailed information about a specific page"""
        try:
            url = f"{self.base_url}/pages/{page_id}"
            response = requests.get(url, headers=self.headers)
            response.raise_for_status()
            
            return response.json()
        except requests.exceptions.RequestException as e:
            print(f"❌ Error fetching page {page_id}: {e}")
            return None
    
    def list_pages(self):
        """List all pages with their details"""
        print("🔍 Checking Squarespace pages...")
        print(f"Site ID: {self.site_id}")
        print("=" * 60)
        
        pages = self.get_all_pages()
        if not pages:
            return
        
        if 'pages' not in pages or not pages['pages']:
            print("📄 No pages found in this site")
            return
        
        print(f"📄 Found {len(pages['pages'])} pages:")
        print()
        
        for i, page in enumerate(pages['pages'], 1):
            print(f"{i}. {page.get('title', 'Untitled')}")
            print(f"   ID: {page.get('id', 'N/A')}")
            print(f"   URL: {page.get('urlId', 'N/A')}")
            print(f"   Type: {page.get('type', 'N/A')}")
            print(f"   Status: {page.get('publishState', 'N/A')}")
            print(f"   Created: {page.get('createdOn', 'N/A')}")
            print(f"   Updated: {page.get('updatedOn', 'N/A')}")
            print()
        
        return pages['pages']
    
    def check_for_sentinel_pages(self):
        """Check specifically for Sentinel-related pages"""
        print("🎯 Checking for Sentinel Pay Analytics pages...")
        print("=" * 60)
        
        pages = self.get_all_pages()
        if not pages or 'pages' not in pages:
            return
        
        sentinel_keywords = [
            'homepage', 'home', 'main',
            'why', 'pay', 'equity', 'now',
            'how', 'works', 'process',
            'demo', 'platform', 'see',
            'use', 'cases', 'personas',
            'experts', 'team', 'about',
            'trust', 'privacy', 'security',
            'pricing', 'plans', 'cost'
        ]
        
        found_pages = []
        
        for page in pages['pages']:
            title = page.get('title', '').lower()
            url_id = page.get('urlId', '').lower()
            
            # Check if page title or URL contains Sentinel keywords
            for keyword in sentinel_keywords:
                if keyword in title or keyword in url_id:
                    found_pages.append(page)
                    break
        
        if found_pages:
            print(f"✅ Found {len(found_pages)} potential Sentinel pages:")
            print()
            
            for i, page in enumerate(found_pages, 1):
                print(f"{i}. {page.get('title', 'Untitled')}")
                print(f"   URL: {page.get('urlId', 'N/A')}")
                print(f"   Status: {page.get('publishState', 'N/A')}")
                print()
        else:
            print("❌ No Sentinel-related pages found")
            print("This might mean:")
            print("- Pages haven't been created yet")
            print("- Pages have different names")
            print("- API access is limited")
        
        return found_pages
    
    def get_page_content(self, page_id):
        """Get the content of a specific page"""
        try:
            url = f"{self.base_url}/pages/{page_id}/content"
            response = requests.get(url, headers=self.headers)
            response.raise_for_status()
            
            return response.json()
        except requests.exceptions.RequestException as e:
            print(f"❌ Error fetching page content: {e}")
            return None

def main():
    """Main function"""
    print("🚀 Sentinel Pay Analytics - Squarespace Page Checker")
    print("=" * 60)
    
    checker = SquarespacePageChecker()
    
    if not checker.api_key or not checker.site_id:
        return
    
    # List all pages
    print("\n📋 All Pages in Site:")
    all_pages = checker.list_pages()
    
    # Check for Sentinel pages
    print("\n🎯 Sentinel-Specific Pages:")
    sentinel_pages = checker.check_for_sentinel_pages()
    
    if sentinel_pages:
        print("\n📝 Would you like to see the content of any specific page?")
        print("Enter the page number (or 'q' to quit):")
        
        while True:
            choice = input("> ").strip()
            if choice.lower() == 'q':
                break
            
            try:
                page_index = int(choice) - 1
                if 0 <= page_index < len(sentinel_pages):
                    page = sentinel_pages[page_index]
                    page_id = page.get('id')
                    
                    print(f"\n📄 Content for: {page.get('title')}")
                    print("=" * 40)
                    
                    content = checker.get_page_content(page_id)
                    if content:
                        print(json.dumps(content, indent=2))
                    else:
                        print("No content found or content not accessible")
                else:
                    print("Invalid page number")
            except ValueError:
                print("Please enter a valid number or 'q' to quit")
    
    print("\n✅ Page check complete!")

if __name__ == "__main__":
    main() 