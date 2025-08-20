#!/usr/bin/env python3
"""
Sentinel Pay Analytics - Quick Start Guide

This script helps you get started with uploading content to Squarespace.
It will guide you through the setup process and run the appropriate automation.
"""

import os
import sys
import subprocess
from pathlib import Path

def check_python_version():
    """Check if Python version is compatible"""
    if sys.version_info < (3, 7):
        print("❌ Python 3.7 or higher is required")
        print(f"Current version: {sys.version}")
        return False
    return True

def check_dependencies():
    """Check if required packages are installed"""
    required_packages = ['selenium', 'webdriver-manager', 'python-dotenv']
    missing_packages = []
    
    for package in required_packages:
        try:
            __import__(package.replace('-', '_'))
        except ImportError:
            missing_packages.append(package)
    
    if missing_packages:
        print(f"❌ Missing packages: {', '.join(missing_packages)}")
        print("Installing required packages...")
        
        try:
            subprocess.check_call([sys.executable, '-m', 'pip', 'install'] + missing_packages)
            print("✅ Packages installed successfully")
            return True
        except subprocess.CalledProcessError:
            print("❌ Failed to install packages")
            return False
    
    return True

def setup_environment():
    """Set up environment file"""
    env_file = Path('.env')
    
    if env_file.exists():
        print("✅ Environment file already exists")
        return True
    
    print("📝 Creating environment file...")
    
    # Copy from example
    example_file = Path('env_example.txt')
    if example_file.exists():
        with open(example_file, 'r') as f:
            content = f.read()
        
        with open(env_file, 'w') as f:
            f.write(content)
        
        print("✅ Environment file created")
        print("📋 Please edit .env file with your Squarespace credentials")
        return True
    else:
        print("❌ env_example.txt not found")
        return False

def get_user_choice():
    """Get user's preferred upload method"""
    print("\n🚀 Choose your upload method:")
    print("1. Manual Copy-Paste (Recommended for beginners)")
    print("2. Browser Automation (Semi-automated)")
    print("3. API Integration (Fully automated)")
    print("4. View setup guide only")
    
    while True:
        choice = input("\nEnter your choice (1-4): ").strip()
        if choice in ['1', '2', '3', '4']:
            return choice
        print("Please enter a valid choice (1-4)")

def run_manual_guide():
    """Show manual upload guide"""
    print("\n📋 Manual Upload Guide:")
    print("=" * 50)
    print("1. Go to squarespace.com and create an account")
    print("2. Choose a template (Bedford or York recommended)")
    print("3. Create pages for each of your markdown files:")
    print("   - Homepage")
    print("   - Why Pay Equity Now")
    print("   - How It Works")
    print("   - See the Platform")
    print("   - Use Cases")
    print("   - Our Experts")
    print("   - Trust & Privacy")
    print("   - Pricing")
    print("4. Copy content from markdown files and paste into Squarespace")
    print("5. Format using Squarespace's built-in tools")
    print("\n📖 See squarespace_setup_guide.md for detailed instructions")

def run_browser_automation():
    """Run browser automation"""
    print("\n🤖 Starting browser automation...")
    
    # Check if .env is configured
    if not os.getenv('SQUARESPACE_EMAIL'):
        print("❌ Please configure your .env file with Squarespace credentials")
        print("📋 Edit .env file and add your email, password, and site URL")
        return False
    
    try:
        # Import and run the uploader
        from squarespace_content_uploader import main as run_uploader
        run_uploader()
        return True
    except ImportError as e:
        print(f"❌ Error importing uploader: {e}")
        return False
    except Exception as e:
        print(f"❌ Error running automation: {e}")
        return False

def run_api_integration():
    """Run API integration"""
    print("\n🔌 Starting API integration...")
    
    # Check if API credentials are configured
    if not os.getenv('SQUARESPACE_API_KEY'):
        print("❌ Please configure your .env file with API credentials")
        print("📋 You'll need a Squarespace Developer account and API key")
        return False
    
    try:
        # Import and run the API automation
        from squarespace_content_automation import main as run_api
        run_api()
        return True
    except ImportError as e:
        print(f"❌ Error importing API automation: {e}")
        return False
    except Exception as e:
        print(f"❌ Error running API integration: {e}")
        return False

def main():
    """Main function"""
    print("🚀 Sentinel Pay Analytics - Quick Start")
    print("=" * 50)
    
    # Check prerequisites
    if not check_python_version():
        return
    
    if not check_dependencies():
        return
    
    if not setup_environment():
        return
    
    # Get user choice
    choice = get_user_choice()
    
    # Execute chosen method
    if choice == '1':
        run_manual_guide()
    elif choice == '2':
        run_browser_automation()
    elif choice == '3':
        run_api_integration()
    elif choice == '4':
        print("\n📖 Opening setup guide...")
        guide_file = Path('squarespace_setup_guide.md')
        if guide_file.exists():
            print(f"📄 Guide available at: {guide_file.absolute()}")
        else:
            print("❌ Setup guide not found")
    
    print("\n✅ Setup complete!")
    print("\nNext steps:")
    print("1. Review your content in Squarespace")
    print("2. Add images and graphics")
    print("3. Configure navigation and forms")
    print("4. Test everything before going live")

if __name__ == "__main__":
    main() 