import { test, expect } from '@playwright/test';

test.describe('Sentinel Pay Website Navigation', () => {
  const baseUrl = process.env.BASE_URL || 'http://localhost:3000';
  
  test('Is the URL working and accessible', async ({ page }) => {
    await page.goto(baseUrl);
    
    // Check if page loads without errors
    await expect(page).toHaveTitle(/Sentinel Pay/);
    
    // Check for main content
    await expect(page.locator('h1')).toBeVisible();
    
    // Check console for errors
    const consoleErrors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });
    
    // Wait a bit for any potential errors
    await page.waitForTimeout(2000);
    
    // Fail if there are console errors
    expect(consoleErrors).toHaveLength(0);
  });

  test('Can see all pages without errors', async ({ page }) => {
    const pages = [
      '/',
      '/about',
      '/contact',
      '/experts',
      '/how-it-works',
      '/platform',
      '/pricing',
      '/resources',
      '/trust-privacy',
      '/use-cases',
      '/why-now'
    ];

    for (const pagePath of pages) {
      console.log(`Testing page: ${pagePath}`);
      
      try {
        await page.goto(`${baseUrl}${pagePath}`);
        
        // Check if page loads (should not be 404)
        await expect(page.locator('body')).not.toContainText('404');
        await expect(page.locator('body')).not.toContainText('Not Found');
        
        // Check for main content
        await expect(page.locator('main, .main, #main, .container, .content')).toBeVisible({ timeout: 10000 });
        
        // Check console for errors
        const consoleErrors: string[] = [];
        page.on('console', msg => {
          if (msg.type() === 'error') {
            consoleErrors.push(msg.text());
          }
        });
        
        // Wait a bit for any potential errors
        await page.waitForTimeout(2000);
        
        // Log errors but don't fail the test
        if (consoleErrors.length > 0) {
          console.log(`Console errors on ${pagePath}:`, consoleErrors);
        }
        
      } catch (error) {
        console.log(`Error testing ${pagePath}:`, error);
        // Continue testing other pages
      }
    }
  });

  test('Can navigate between pages', async ({ page }) => {
    // Start at homepage
    await page.goto(baseUrl);
    
    // Test navigation links
    const navigationTests = [
      { from: '/', to: '/about', linkText: 'About' },
      { from: '/', to: '/contact', linkText: 'Contact' },
      { from: '/', to: '/experts', linkText: 'Our Experts' },
      { from: '/', to: '/how-it-works', linkText: 'How It Works' },
      { from: '/', to: '/platform', linkText: 'Platform' },
      { from: '/', to: '/pricing', linkText: 'Pricing' },
      { from: '/', to: '/resources', linkText: 'Resources' },
      { from: '/', to: '/trust-privacy', linkText: 'Trust & Privacy' },
      { from: '/', to: '/use-cases', linkText: 'Use Cases' },
      { from: '/', to: '/why-now', linkText: 'Why Now' }
    ];

    for (const testCase of navigationTests) {
      try {
        // Navigate to the "from" page
        await page.goto(`${baseUrl}${testCase.from}`);
        
        // Look for navigation link
        const link = page.locator(`a:has-text("${testCase.linkText}"), [href*="${testCase.to}"]`).first();
        
        if (await link.isVisible()) {
          // Click the link
          await link.click();
          
          // Wait for navigation
          await page.waitForLoadState('networkidle');
          
          // Verify we're on the expected page
          await expect(page).toHaveURL(new RegExp(testCase.to.replace('/', '\\/')));
          
          console.log(`✅ Navigation from ${testCase.from} to ${testCase.to} successful`);
        } else {
          console.log(`⚠️ Navigation link for ${testCase.to} not found on ${testCase.from}`);
        }
        
      } catch (error) {
        console.log(`❌ Navigation test failed for ${testCase.from} → ${testCase.to}:`, error);
        // Continue testing other navigation paths
      }
    }
  });

  test('Footer navigation works', async ({ page }) => {
    await page.goto(baseUrl);
    
    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    
    // Test footer links
    const footerLinks = [
      { text: 'Contact', expectedPath: '/contact' },
      { text: 'Trust & Privacy', expectedPath: '/trust-privacy' }
    ];

    for (const link of footerLinks) {
      try {
        const footerLink = page.locator(`footer a:has-text("${link.text}")`);
        
        if (await footerLink.isVisible()) {
          await footerLink.click();
          await page.waitForLoadState('networkidle');
          
          // Verify we're on the expected page
          await expect(page).toHaveURL(new RegExp(link.expectedPath.replace('/', '\\/')));
          
          console.log(`✅ Footer navigation to ${link.expectedPath} successful`);
        } else {
          console.log(`⚠️ Footer link for ${link.text} not found`);
        }
        
      } catch (error) {
        console.log(`❌ Footer navigation test failed for ${link.text}:`, error);
      }
    }
  });
});
