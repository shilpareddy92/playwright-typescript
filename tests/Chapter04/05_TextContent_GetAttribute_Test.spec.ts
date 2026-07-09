// Import playwright module
import { test, expect } from "@playwright/test";

test("Get Text & Get attribute value in playwright1", async ({ page }) => {
  // Go to URL
  await page.goto("https://github.com/ShilpaVallapureddy");

  // Get element text & assert
  const name = await page
    .locator("//span[@itemprop='additionalName']")
    .textContent();
  const finalName = name?.trim();
  console.log(`Name is : ${finalName}`);
  expect(finalName).toBe("shilpavallapureddy");
});

test("Get Text value in playwright2", async ({ page }) => {
  // Go to URL
  await page.goto("https://github.com/ShilpaVallapureddy");

  // Get element text & assert
  const name = await page
    .locator("//span[@itemprop='additionalName']")
    .innerText();
  const finalName = name?.trim();
  console.log(`Name is : ${finalName}`);
  expect(finalName).toBe("shilpavallapureddy");
});

test("Get attribute value in playwright", async ({ page }) => {
  // Go to URL
  await page.goto("https://github.com/ShilpaVallapureddy");
  // Get attribute value
  const attributeValue = await page
    .getByTestId("repositories")
    .first()
    .getAttribute("data-selected-links");
  console.log(`Attribute value is : ${attributeValue}`);
});
