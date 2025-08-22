/**
 * Browser-side debugging utilities for Sentinel development
 * 
 * This module provides debugging tools that can be used in the browser console
 * during development to inspect components, test interactions, and debug issues.
 */

export interface DebugOptions {
  outline?: boolean;
  grid?: boolean;
  breakpoints?: boolean;
  performance?: boolean;
  accessibility?: boolean;
}

export class BrowserDebugger {
  private options: DebugOptions = {};
  private debugStyles: HTMLStyleElement | null = null;

  constructor(options: DebugOptions = {}) {
    this.options = { ...options };
    this.init();
  }

  private init() {
    if (typeof window !== 'undefined') {
      this.setupDebugStyles();
      this.setupConsoleHelpers();
    }
  }

  private setupDebugStyles() {
    if (this.debugStyles) return;

    this.debugStyles = document.createElement('style');
    this.debugStyles.id = 'sentinel-debug-styles';
    document.head.appendChild(this.debugStyles);
  }

  private setupConsoleHelpers() {
    if (typeof window !== 'undefined') {
      // Make debugger available globally
      (window as any).sentinelDebug = this;
      
      // Add console helpers
      console.log('🔍 Sentinel Debugger loaded!');
      console.log('Available commands:');
      console.log('- sentinelDebug.toggleOutline() - Toggle element outlines');
      console.log('- sentinelDebug.toggleGrid() - Toggle debug grid');
      console.log('- sentinelDebug.toggleBreakpoints() - Toggle breakpoint indicator');
      console.log('- sentinelDebug.inspectComponent(name) - Inspect specific component');
      console.log('- sentinelDebug.performance() - Check performance metrics');
      console.log('- sentinelDebug.accessibility() - Run accessibility checks');
    }
  }

  /**
   * Toggle element outlines for visual debugging
   */
  toggleOutline() {
    const hasOutline = document.body.classList.contains('debug-outline');
    
    if (hasOutline) {
      document.body.classList.remove('debug-outline');
      console.log('🔍 Element outlines disabled');
    } else {
      document.body.classList.add('debug-outline');
      console.log('🔍 Element outlines enabled');
    }
  }

  /**
   * Toggle debug grid overlay
   */
  toggleGrid() {
    const hasGrid = document.body.classList.contains('debug-grid');
    
    if (hasGrid) {
      document.body.classList.remove('debug-grid');
      console.log('🔍 Debug grid disabled');
    } else {
      document.body.classList.add('debug-grid');
      console.log('🔍 Debug grid enabled');
    }
  }

  /**
   * Toggle breakpoint indicator
   */
  toggleBreakpoints() {
    const hasBreakpoints = document.body.classList.contains('debug-breakpoints');
    
    if (hasBreakpoints) {
      document.body.classList.remove('debug-breakpoints');
      console.log('🔍 Breakpoint indicator disabled');
    } else {
      document.body.classList.add('debug-breakpoints');
      console.log('🔍 Breakpoint indicator enabled');
    }
  }

  /**
   * Inspect a specific component
   */
  inspectComponent(componentName: string) {
    console.log(`🔍 Inspecting component: ${componentName}`);
    
    switch (componentName.toLowerCase()) {
      case 'navigation':
        this.inspectNavigation();
        break;
      case 'hero':
        this.inspectHero();
        break;
      case 'features':
        this.inspectFeatures();
        break;
      default:
        console.log(`🔍 No specific inspection logic for ${componentName}`);
        console.log('Available components: navigation, hero, features');
    }
  }

  private inspectNavigation() {
    const nav = document.querySelector('nav');
    if (!nav) {
      console.error('❌ Navigation component not found');
      return;
    }

    console.log('🔍 Navigation Component Inspection:');
    console.log('- Element:', nav);
    console.log('- Classes:', nav.className);
    console.log('- Position:', getComputedStyle(nav).position);
    console.log('- Z-index:', getComputedStyle(nav).zIndex);
    
    // Check navigation links
    const links = nav.querySelectorAll('a');
    console.log(`- Navigation links: ${links.length}`);
    links.forEach((link, index) => {
      console.log(`  ${index + 1}. ${link.textContent?.trim()} -> ${link.getAttribute('href')}`);
    });

    // Check mobile menu
    const mobileMenu = document.querySelector('.fixed.top-0.right-0.h-full');
    if (mobileMenu) {
      console.log('- Mobile menu: Found');
    } else {
      console.log('- Mobile menu: Not found');
    }
  }

  private inspectHero() {
    const hero = document.querySelector('section');
    if (!hero) {
      console.error('❌ Hero section not found');
      return;
    }

    console.log('🔍 Hero Section Inspection:');
    console.log('- Element:', hero);
    console.log('- Classes:', hero.className);
    console.log('- Height:', getComputedStyle(hero).height);
    
    // Check headline
    const headline = hero.querySelector('h1');
    if (headline) {
      console.log('- Headline:', headline.textContent?.trim());
      console.log('- Font family:', getComputedStyle(headline).fontFamily);
      console.log('- Font size:', getComputedStyle(headline).fontSize);
    }

    // Check CTA buttons
    const buttons = hero.querySelectorAll('button');
    console.log(`- CTA buttons: ${buttons.length}`);
    buttons.forEach((button, index) => {
      console.log(`  ${index + 1}. ${button.textContent?.trim()}`);
    });

    // Check background elements
    const bgElements = hero.querySelectorAll('.absolute.inset-0.overflow-hidden > div');
    console.log(`- Background elements: ${bgElements.length}`);
  }

  private inspectFeatures() {
    const features = document.querySelectorAll('.bg-white\\/80');
    if (features.length === 0) {
      console.error('❌ Features section not found');
      return;
    }

    console.log('🔍 Features Section Inspection:');
    console.log(`- Feature cards: ${features.length}`);
    
    features.forEach((feature, index) => {
      const title = feature.querySelector('h3');
      const description = feature.querySelector('p');
      
      console.log(`  ${index + 1}. ${title?.textContent?.trim()}`);
      if (description) {
        console.log(`     Description: ${description.textContent?.trim()}`);
      }
    });
  }

  /**
   * Check performance metrics
   */
  performance() {
    console.log('🔍 Performance Metrics:');
    
    if ('performance' in window) {
      const perf = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      if (perf) {
        console.log('- DOM Content Loaded:', perf.domContentLoadedEventEnd - perf.domContentLoadedEventStart, 'ms');
        console.log('- Load Complete:', perf.loadEventEnd - perf.loadEventStart, 'ms');
        console.log('- Total Load Time:', perf.loadEventEnd - perf.fetchStart, 'ms');
      }
    }

    // Check for any console errors
    console.log('- Console errors: Check browser console for any errors');
    
    // Check for slow resources
    if ('performance' in window) {
      const resources = performance.getEntriesByType('resource');
      const slowResources = resources.filter((r: any) => r.duration > 1000);
      
      if (slowResources.length > 0) {
        console.log('- Slow resources detected:', slowResources.length);
        slowResources.forEach((r: any) => {
          console.log(`  ${r.name}: ${r.duration.toFixed(2)}ms`);
        });
      } else {
        console.log('- All resources loaded within acceptable time');
      }
    }
  }

  /**
   * Run basic accessibility checks
   */
  accessibility() {
    console.log('🔍 Accessibility Checks:');
    
    // Check for proper heading hierarchy
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    console.log(`- Headings found: ${headings.length}`);
    
    let h1Count = 0;
    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName.charAt(1));
      if (level === 1) h1Count++;
      
      console.log(`  ${index + 1}. ${heading.tagName}: ${heading.textContent?.trim()}`);
    });
    
    if (h1Count === 0) {
      console.warn('⚠️  No H1 headings found - accessibility issue');
    } else if (h1Count > 1) {
      console.warn('⚠️  Multiple H1 headings found - accessibility issue');
    } else {
      console.log('✅ Proper H1 heading structure');
    }

    // Check for alt text on images
    const images = document.querySelectorAll('img');
    let imagesWithoutAlt = 0;
    
    images.forEach((img, index) => {
      if (!img.alt) {
        imagesWithoutAlt++;
        console.warn(`⚠️  Image ${index + 1} missing alt text:`, img.src);
      }
    });
    
    if (imagesWithoutAlt === 0) {
      console.log('✅ All images have alt text');
    } else {
      console.warn(`⚠️  ${imagesWithoutAlt} images missing alt text`);
    }

    // Check for proper button text
    const buttons = document.querySelectorAll('button');
    let buttonsWithoutText = 0;
    
    buttons.forEach((button, index) => {
      if (!button.textContent?.trim()) {
        buttonsWithoutText++;
        console.warn(`⚠️  Button ${index + 1} missing text content`);
      }
    });
    
    if (buttonsWithoutText === 0) {
      console.log('✅ All buttons have text content');
    } else {
      console.warn(`⚠️  ${buttonsWithoutText} buttons missing text content`);
    }
  }

  /**
   * Enable all debug features
   */
  enableAll() {
    this.toggleOutline();
    this.toggleGrid();
    this.toggleBreakpoints();
    console.log('🔍 All debug features enabled');
  }

  /**
   * Disable all debug features
   */
  disableAll() {
    document.body.classList.remove('debug-outline', 'debug-grid', 'debug-breakpoints');
    console.log('🔍 All debug features disabled');
  }

  /**
   * Clean up debug elements
   */
  cleanup() {
    if (this.debugStyles) {
      this.debugStyles.remove();
      this.debugStyles = null;
    }
    
    document.body.classList.remove('debug-outline', 'debug-grid', 'debug-breakpoints');
    console.log('🔍 Debug cleanup completed');
  }
}

// Export singleton instance
export const browserDebugger = new BrowserDebugger();

// Auto-initialize in development
if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
  // Make available globally for console access
  (window as any).sentinelDebug = browserDebugger;
}
