// Import playwright module
import { test, expect } from "@playwright/test";

test.beforeAll(async () => {
  console.log(`Running before all tests...`);
});

test.beforeEach(async ({ page }) => {
  console.log(`Running before each tests...`);
  await page.goto("https://www.youtube.com/@TestersTalk");
});

test.afterEach(async () => {
  console.log(`Running after each tests...`);
});

test.afterAll(async () => {
  console.log(`Running after all tests...`);
});

/**
 * Author Testers Talk
 */
test("Test 1", async ({ page }) => {
  console.log("Test1 execution started...");

  // Wait for the page to load
  await page.waitForLoadState("domcontentloaded");

  // Verify the page title
  await expect(page).toHaveTitle("Testers Talk - YouTube");

  // Verify the channel name is visible
  await expect(
    page.getByText("Testers Talk", { exact: true }).first(),
  ).toBeVisible();
});

/**
 * Author Testers Talk
 */
test("Test 2", async ({ page }) => {
  console.log("Test2 execution started...");
  
  // Wait for the page to load
  await page.waitForLoadState("domcontentloaded");

  // Verify the page title
  await expect(page).toHaveTitle("Testers Talk - YouTube");

  // Verify the channel name is visible
  await expect(
    page.getByText("Testers Talk", { exact: true }).first(),
  ).toBeVisible();
});

/* Running 2 tests using 1 worker
[1/2] [Google Chrome] › tests/Chapter02/04_Hooks_Test.spec.ts:24:5 
[Google Chrome] › tests/Chapter02/04_Hooks_Test.spec.ts:24:5 › Test 1
Running before all tests...
Running before each tests...
Test1 execution started...
Running after each tests...
[2/2] [Google Chrome] › tests/Chapter02/04_Hooks_Test.spec.ts:44:5 
[Google Chrome] › tests/Chapter02/04_Hooks_Test.spec.ts:44:5 › Test 2
Running before each tests...
Test2 execution started...
Running after each tests...
Running after all tests...
  2 passed (1.9s)
 */
