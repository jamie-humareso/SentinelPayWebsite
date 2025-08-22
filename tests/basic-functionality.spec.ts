import { test, expect } from '@playwright/test';

test.describe('Basic Functionality - No Errors', () => {
  test('homepage loads without errors', async ({ page }) => {
    // Listen for console errors
    const errors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    // Listen for page errors
    page.on('pageerror', error => {
      errors.push(error.message);
    });

    // Navigate to homepage
    await page.goto('/');
    
    // Wait for page to load
    await page.waitForLoadState('networkidle');
    
    // Check for any errors
    expect(errors).toHaveLength(0);
    
    // Basic content check
    await expect(page.locator('h1')).toBeVisible();
  });

  test('all main pages load without errors', async ({ page }) => {
    const pages = [
      '/why-now',
      '/platform', 
      '/use-cases',
      '/experts',
      '/pricing',
      '/resources'
    ];

    for (const pagePath of pages) {
      const errors: string[] = [];
      page.on('console', msg => {
        if (msg.type() === 'error') {
          errors.push(msg.text());
        }
      });

      page.on('pageerror', error => {
        errors.push(error.message);
      });

      // Navigate to page
      await page.goto(pagePath);
      
      // Wait for page to load
      await page.waitForLoadState('networkidle');
      
      // Check for any errors
      expect(errors).toHaveLength(0);
      
      // Basic content check - should have a heading
      await expect(page.locator('h1')).toBeVisible();
      
      // Check footer is present
      await expect(page.locator('footer')).toBeVisible();
    }
  });

  test('footer links work without errors', async ({ page }) => {
    await page.goto('/');
    
    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    
    // Check Trust & Privacy link
    const trustPrivacyLink = page.locator('footer a[href="/trust-privacy"]');
    await expect(trustPrivacyLink).toBeVisible();
    
    // Click and check for errors
    const errors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    page.on('pageerror', error => {
      errors.push(error.message);
    });

    await trustPrivacyLink.click();
    await page.waitForLoadState('networkidle');
    
    // Check for any errors
    expect(errors).toHaveLength(0);
    
    // Should be on trust-privacy page
    await expect(page).toHaveURL('/trust-privacy');
  });

  test('navigation between pages works smoothly', async ({ page }) => {
    await page.goto('/');
    
    // Test navigation to Why Now
    await page.locator('a[href="/why-now"]').first().click();
    await expect(page).toHaveURL('/why-now');
    
    // Test navigation to Platform
    await page.locator('a[href="/platform"]').first().click();
    await expect(page).toHaveURL('/platform');
    
    // Test navigation to Use Cases
    await page.locator('a[href="/use-cases"]').first().click();
    await expect(page).toHaveURL('/use-cases');
    
    // Test navigation back to home
    await page.locator('a[href="/"]').first().click();
    await expect(page).toHaveURL('/');
  });
});
