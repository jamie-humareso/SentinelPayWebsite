import { test, expect } from '@playwright/test';

test.describe('Hero Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display hero content', async ({ page }) => {
    // Check main heading
    const mainHeading = page.locator('h1');
    await expect(mainHeading).toBeVisible();
    await expect(mainHeading).toContainText('Black Box');
    
    // Check subtitle
    const subtitle = page.locator('p').filter({ hasText: /Sentinel combines/ });
    await expect(subtitle).toBeVisible();
  });

  test('should display CTA buttons', async ({ page }) => {
    // Check primary CTA
    const primaryCTA = page.locator('button:has-text("Schedule a Consultation")').first();
    await expect(primaryCTA).toBeVisible();
    
    // Check secondary CTA
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

  test('should have basic page structure', async ({ page }) => {
    // Check if page title is set
    const title = await page.title();
    expect(title).toBeTruthy();
    expect(title.length).toBeGreaterThan(0);
    
    // Check if main content is visible
    const mainContent = page.locator('main');
    await expect(mainContent).toBeVisible();
  });
});
