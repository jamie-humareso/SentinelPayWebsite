import { test, expect } from '@playwright/test';

test.describe('Navigation System', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display navigation bar', async ({ page }) => {
    // Check if navigation is present
    const navigation = page.locator('nav');
    await expect(navigation).toBeVisible();
    
    // Check if brand name is visible
    const brandName = page.locator('text=Sentinel').first();
    await expect(brandName).toBeVisible();
  });

  test('should have working navigation links', async ({ page }) => {
    // Check main navigation links
    const whyNowLink = page.locator('a[href="/why-now"]').first();
    await expect(whyNowLink).toBeVisible();
    await expect(whyNowLink).toContainText('Why Now');
    
    const platformLink = page.locator('a[href="/platform"]').first();
    await expect(platformLink).toBeVisible();
    await expect(platformLink).toContainText('Platform');
    
    const useCasesLink = page.locator('a[href="/use-cases"]').first();
    await expect(useCasesLink).toBeVisible();
    await expect(useCasesLink).toContainText('Use Cases');
    
    const expertsLink = page.locator('a[href="/experts"]').first();
    await expect(expertsLink).toBeVisible();
    await expect(expertsLink).toContainText('Our Experts');
    
    const pricingLink = page.locator('a[href="/pricing"]').first();
    await expect(pricingLink).toBeVisible();
    await expect(pricingLink).toContainText('Pricing');
    
    const resourcesLink = page.locator('a[href="/resources"]').first();
    await expect(resourcesLink).toBeVisible();
    await expect(resourcesLink).toContainText('Resources');
  });

  test('should have CTA button', async ({ page }) => {
    // Check for CTA button
    const ctaButton = page.locator('button:has-text("Schedule Demo")').first();
    await expect(ctaButton).toBeVisible();
  });

  test('should navigate to key pages', async ({ page }) => {
    // Test navigation to Why Now page
    const whyNowLink = page.locator('a[href="/why-now"]').first();
    await whyNowLink.click();
    await expect(page).toHaveURL('/why-now');
    
    // Go back to home
    await page.goto('/');
    
    // Test navigation to Platform page
    const platformLink = page.locator('a[href="/platform"]').first();
    await platformLink.click();
    await expect(page).toHaveURL('/platform');
    
    // Go back to home
    await page.goto('/');
    
    // Test navigation to Use Cases page
    const useCasesLink = page.locator('a[href="/use-cases"]').first();
    await useCasesLink.click();
    await expect(page).toHaveURL('/use-cases');
  });

  test('should have footer with important links', async ({ page }) => {
    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    
    // Check if footer is visible
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
    
    // Check for Trust & Privacy link in footer
    const trustPrivacyLink = page.locator('footer a[href="/trust-privacy"]');
    await expect(trustPrivacyLink).toBeVisible();
    
    // Check for Contact link in footer
    const contactLink = page.locator('footer a[href="/contact"]');
    await expect(contactLink).toBeVisible();
  });
});
