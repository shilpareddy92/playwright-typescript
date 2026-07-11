import { test, expect } from '@playwright/test';

test('Codegen_Test_spec',{ tag: ['@PlaywrightWithJenkins'] }, async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('playwright by test');
  await page.goto('https://www.youtube.com/watch?v=2poXBtifpzA&list=PLUeDIlio4THEgPRVJRqZRS8uw8hhVNQCM');
  await expect(page.getByRole('link', { name: 'Playwright by Testers Talk ✅' })).toBeVisible();
});

test('Test 2 will fail', { tag: ['@PlaywrightWithJenkins'] }, async ({ page }) => {
  await page.goto('https://www.youtube.com/@testerstalk');
  expect(true).toBe(false);
});