import { test, expect } from "@playwright/test";

test("keyboard actions", async ({ page }) => {
  await page.goto("https://www.youtube.com/@TestersTalk");

  // Wait for the page to load
  await page.waitForLoadState("domcontentloaded");

  await page.locator("//input[@name='search_query']").fill("My name is Shilpa");
  await page.locator("//input[@name='search_query']").press("Enter");
  const currentTitle = await page.title();
  //expect(currentTitle).toBe("My name is Shilpa - YouTube");
  await expect(page).toHaveTitle("My name is Shilpa - YouTube");

  await page.keyboard.press("Meta+A");
  await page.keyboard.press("Delete");
  const Title = await page.title();
  console.log(Title);

  await page.locator("//input[@name='search_query']").first().click();
  await page.keyboard.press("Tab");
  await page.keyboard.press("Enter");
  await page.locator(".style-scope ytd-popup-container permission").isVisible();
});
