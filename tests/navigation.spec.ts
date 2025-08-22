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
    // Check platform link (use first instance)
    const platformLink = page.locator('a[href="/platform"]').first();
    await expect(platformLink).toBeVisible();
    await expect(platformLink).toContainText('Platform');
    
    // Check how-it-works link (use first instance)
    const howItWorksLink = page.locator('a[href="/how-it-works"]').first();
    await expect(howItWorksLink).toBeVisible();
    await expect(howItWorksLink).toContainText('How It Works');
    
    // Check experts link (use first instance)
    const expertsLink = page.locator('a[href="/experts"]').first();
    await expect(expertsLink).toBeVisible();
    await expect(expertsLink).toContainText('Our Experts');
    
    // Check pricing link (use first instance)
    const pricingLink = page.locator('a[href="/pricing"]').first();
    await expect(pricingLink).toBeVisible();
    await expect(pricingLink).toContainText('Pricing');
    
    // Check resources link (use first instance)
    const resourcesLink = page.locator('a[href="/resources"]').first();
    await expect(resourcesLink).toBeVisible();
    await expect(resourcesLink).toContainText('Resources');
  });

  test('should have CTA button', async ({ page }) => {
    // Check for CTA button (use first instance)
    const ctaButton = page.locator('button:has-text("Schedule Demo")').first();
    await expect(ctaButton).toBeVisible();
  });

  test('should be responsive on mobile', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Check if mobile menu button is visible
    const mobileMenuButton = page.locator('button[aria-label="Open menu"]');
    await expect(mobileMenuButton).toBeVisible();
  });

  test('should open mobile menu', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Click mobile menu button
    const mobileMenuButton = page.locator('button[aria-label="Open menu"]');
    await mobileMenuButton.click();
    
    // Check if mobile menu is visible
    const mobileMenu = page.locator('.fixed.top-0.right-0.h-full');
    await expect(mobileMenu).toBeVisible();
    
    // Check if mobile menu has navigation links (expect 6 now including Contact)
    const mobileNavLinks = mobileMenu.locator('a');
    await expect(mobileNavLinks).toHaveCount(6); // Platform, How It Works, Our Experts, Pricing, Resources, Contact
  });

  test('should navigate to platform page', async ({ page }) => {
    // Use first platform link
    const platformLink = page.locator('a[href="/platform"]').first();
    await platformLink.click();
    
    // Check if we're on the platform page
    await expect(page).toHaveURL('/platform');
  });

  test('should navigate to how-it-works page', async ({ page }) => {
    // Use first how-it-works link
    const howItWorksLink = page.locator('a[href="/how-it-works"]').first();
    await howItWorksLink.click();
    
    // Check if we're on the how-it-works page
    await expect(page).toHaveURL('/how-it-works');
  });
});
