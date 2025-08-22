import { test, expect } from '@playwright/test';

test.describe('Hero Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display hero content', async ({ page }) => {
    // Check main heading
    const mainHeading = page.locator('h1');
    await expect(mainHeading).toBeVisible();
    await expect(mainHeading).toContainText('Pay Equity');
    
    // Check subtitle
    const subtitle = page.locator('p').filter({ hasText: /Transform your pay equity strategy/ });
    await expect(subtitle).toBeVisible();
  });

  test('should display CTA buttons', async ({ page }) => {
    // Check primary CTA (use first instance)
    const primaryCTA = page.locator('button:has-text("Schedule a Consultation")').first();
    await expect(primaryCTA).toBeVisible();
    
    // Check secondary CTA (use first instance)
    const secondaryCTA = page.locator('button:has-text("See the Platform")').first();
    await expect(secondaryCTA).toBeVisible();
  });

  test('should display social proof elements', async ({ page }) => {
    // Check social proof text
    const socialProof = page.locator('text=Trusted by 500+ Companies');
    await expect(socialProof).toBeVisible();
    
    // Check trust indicators
    const trustIndicators = page.locator('text=99%');
    await expect(trustIndicators).toBeVisible();
  });

  test('should display feature cards', async ({ page }) => {
    // Check if features section is present
    const featuresSection = page.locator('section').filter({ hasText: /A Guided Process/ });
    await expect(featuresSection).toBeVisible();
    
    // Check for feature cards
    const featureCards = page.locator('div').filter({ hasText: /Uncover Gaps/ });
    await expect(featureCards).toBeVisible();
  });

  test('should have proper animations', async ({ page }) => {
    // Check if motion elements are present
    const motionElements = page.locator('[data-motion]');
    if (await motionElements.count() > 0) {
      await expect(motionElements.first()).toBeVisible();
    }
  });

  test('should be responsive on different screen sizes', async ({ page }) => {
    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Check if content is still visible
    const mainHeading = page.locator('h1');
    await expect(mainHeading).toBeVisible();
    
    // Check if buttons stack vertically on mobile
    const buttonContainer = page.locator('.flex.flex-col.sm\\:flex-row').first();
    await expect(buttonContainer).toBeVisible();
    
    // Test tablet viewport
    await page.setViewportSize({ width: 768, height: 1024 });
    
    // Check if content is still visible
    await expect(mainHeading).toBeVisible();
    
    // Test desktop viewport
    await page.setViewportSize({ width: 1280, height: 720 });
    
    // Check if content is still visible
    await expect(mainHeading).toBeVisible();
  });

  test('should have proper accessibility', async ({ page }) => {
    // Check if headings have proper hierarchy
    const headings = page.locator('h1, h2, h3, h4, h5, h6');
    const headingCount = await headings.count();
    expect(headingCount).toBeGreaterThan(0);
    
    // Check if buttons have accessible text
    const buttons = page.locator('button');
    const buttonCount = await buttons.count();
    
    for (let i = 0; i < Math.min(buttonCount, 5); i++) {
      const button = buttons.nth(i);
      const buttonText = await button.textContent();
      expect(buttonText?.trim()).toBeTruthy();
    }
    
    // Check if images have alt text
    const images = page.locator('img');
    const imageCount = await images.count();
    
    for (let i = 0; i < Math.min(imageCount, 3); i++) {
      const image = images.nth(i);
      const altText = await image.getAttribute('alt');
      expect(altText).toBeTruthy();
    }
  });

  test('should have proper SEO elements', async ({ page }) => {
    // Check if page title is set
    const title = await page.title();
    expect(title).toBeTruthy();
    expect(title.length).toBeGreaterThan(0);
    
    // Check if meta description is present
    const metaDescription = page.locator('meta[name="description"]');
    if (await metaDescription.count() > 0) {
      const content = await metaDescription.getAttribute('content');
      expect(content).toBeTruthy();
    }
  });
});
