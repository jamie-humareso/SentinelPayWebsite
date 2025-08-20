#!/usr/bin/env python3
"""
Sentinel Pay Analytics - Squarespace Content Automation Script

This script helps automate the transfer of content from markdown files to Squarespace
using their API and web scraping techniques.

Requirements:
- Python 3.7+
- requests
- beautifulsoup4
- python-dotenv

Install: pip install requests beautifulsoup4 python-dotenv
"""

import os
import json
import requests
from bs4 import BeautifulSoup
from dotenv import load_dotenv
import time
from pathlib import Path

# Load environment variables
load_dotenv()

class SquarespaceContentManager:
    def __init__(self):
        self.api_key = os.getenv('SQUARESPACE_API_KEY')
        self.site_id = os.getenv('SQUARESPACE_SITE_ID')
        self.base_url = f"https://api.squarespace.com/1.0/sites/{self.site_id}"
        self.headers = {
            'Authorization': f'Bearer {self.api_key}',
            'Content-Type': 'application/json'
        }
    
    def read_markdown_content(self, file_path):
        """Read and parse markdown content from files"""
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Parse markdown structure
        lines = content.split('\n')
        parsed_content = {
            'title': '',
            'headline': '',
            'subheadline': '',
            'sections': [],
            'cta_buttons': []
        }
        
        current_section = None
        
        for line in lines:
            line = line.strip()
            
            # Extract title
            if line.startswith('# ') and not parsed_content['title']:
                parsed_content['title'] = line[2:]
            
            # Extract headline
            elif line.startswith('**Headline:**'):
                parsed_content['headline'] = line.replace('**Headline:**', '').strip()
            
            # Extract subheadline
            elif line.startswith('**Subheadline:**'):
                parsed_content['subheadline'] = line.replace('**Subheadline:**', '').strip()
            
            # Extract CTA buttons
            elif '**Primary CTA Button:**' in line:
                cta_text = line.replace('**Primary CTA Button:**', '').strip()
                parsed_content['cta_buttons'].append({'type': 'primary', 'text': cta_text})
            elif '**Secondary CTA Button:**' in line:
                cta_text = line.replace('**Secondary CTA Button:**', '').strip()
                parsed_content['cta_buttons'].append({'type': 'secondary', 'text': cta_text})
            
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
    
    def create_page_content(self, parsed_content):
        """Convert parsed content to Squarespace page structure"""
        squarespace_content = {
            'title': parsed_content['title'],
            'body': {
                'storage': {
                    'blocks': []
                }
            }
        }
        
        # Add hero section
        if parsed_content['headline']:
            squarespace_content['body']['storage']['blocks'].append({
                'type': 'text',
                'data': {
                    'text': f"<h1>{parsed_content['headline']}</h1>"
                }
            })
        
        if parsed_content['subheadline']:
            squarespace_content['body']['storage']['blocks'].append({
                'type': 'text',
                'data': {
                    'text': f"<p class='subheadline'>{parsed_content['subheadline']}</p>"
                }
            })
        
        # Add CTA buttons
        for cta in parsed_content['cta_buttons']:
            button_class = 'primary-cta' if cta['type'] == 'primary' else 'secondary-cta'
            squarespace_content['body']['storage']['blocks'].append({
                'type': 'button',
                'data': {
                    'text': cta['text'],
                    'url': '#',
                    'className': button_class
                }
            })
        
        # Add content sections
        for section in parsed_content['sections']:
            if section['title'] and section['content']:
                # Add section title
                squarespace_content['body']['storage']['blocks'].append({
                    'type': 'text',
                    'data': {
                        'text': f"<h2>{section['title']}</h2>"
                    }
                })
                
                # Add section content
                content_text = '<br>'.join(section['content'])
                squarespace_content['body']['storage']['blocks'].append({
                    'type': 'text',
                    'data': {
                        'text': f"<p>{content_text}</p>"
                    }
                })
        
        return squarespace_content
    
    def upload_content(self, page_slug, content):
        """Upload content to Squarespace page"""
        url = f"{self.base_url}/pages/{page_slug}"
        
        try:
            response = requests.put(url, headers=self.headers, json=content)
            response.raise_for_status()
            print(f"✅ Successfully uploaded content to {page_slug}")
            return response.json()
        except requests.exceptions.RequestException as e:
            print(f"❌ Error uploading to {page_slug}: {e}")
            return None
    
    def batch_upload_content(self, content_directory):
        """Batch upload all content from markdown files"""
        content_dir = Path(content_directory)
        markdown_files = list(content_dir.glob('*.md'))
        
        page_mappings = {
            'homepage.md': 'home',
            'why-now.md': 'why-pay-equity-now',
            'how-it-works.md': 'how-it-works',
            'demo.md': 'see-the-platform',
            'use-cases.md': 'use-cases',
            'our-experts.md': 'our-experts',
            'trust-and-privacy.md': 'trust-and-privacy',
            'pricing.md': 'pricing'
        }
        
        for md_file in markdown_files:
            if md_file.name in page_mappings:
                print(f"📝 Processing {md_file.name}...")
                
                # Parse markdown content
                parsed_content = self.read_markdown_content(md_file)
                
                # Convert to Squarespace format
                squarespace_content = self.create_page_content(parsed_content)
                
                # Upload to Squarespace
                page_slug = page_mappings[md_file.name]
                self.upload_content(page_slug, squarespace_content)
                
                # Rate limiting
                time.sleep(1)
    
    def create_content_template(self, template_name, content_structure):
        """Create reusable content templates"""
        template = {
            'name': template_name,
            'structure': content_structure
        }
        
        # Save template to file
        with open(f'templates/{template_name}.json', 'w') as f:
            json.dump(template, f, indent=2)
        
        print(f"📋 Created template: {template_name}")

def main():
    """Main execution function"""
    print("🚀 Sentinel Pay Analytics - Squarespace Content Automation")
    print("=" * 60)
    
    # Initialize content manager
    manager = SquarespaceContentManager()
    
    # Check if API credentials are available
    if not manager.api_key or not manager.site_id:
        print("❌ Missing API credentials. Please set SQUARESPACE_API_KEY and SQUARESPACE_SITE_ID")
        print("\nTo get these credentials:")
        print("1. Go to Squarespace Developer Portal")
        print("2. Create a new API key")
        print("3. Get your site ID from your Squarespace dashboard")
        return
    
    # Batch upload content
    print("📤 Starting batch content upload...")
    manager.batch_upload_content('.')
    
    print("\n✅ Content upload complete!")
    print("\nNext steps:")
    print("1. Review uploaded content in Squarespace")
    print("2. Add images and graphics")
    print("3. Configure navigation and menus")
    print("4. Set up forms and CTAs")

if __name__ == "__main__":
    main() 