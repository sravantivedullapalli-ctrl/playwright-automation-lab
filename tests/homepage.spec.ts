import { test, expect } from '@playwright/test';

test('Playwright site: navigate to Get started', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(page).toHaveTitle(/Playwright/);

  const getStarted = page.getByRole('link', { name: 'Get started' });
  await expect(getStarted).toBeVisible();

  await getStarted.click();

  await expect(page).toHaveURL(/.*intro/);
});