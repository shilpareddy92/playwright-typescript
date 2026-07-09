import { test, expect } from "@playwright/test";
import { urlToHttpOptions } from "url";

test("dropdown1", async ({ page }) => {
  // Go to URL
  await page.goto("https://www.facebook.com/");
  await page.getByRole("link", { name: "Create new account" }).click();

  // Select dropdown using value
  await page.getByRole("combobox", { name: "Select day" }).click();
  await page.getByRole("option", { name: "15" }).click();

  // Select dropdown using visible text
  await page.getByRole("combobox", { name: "Select year" }).click();
  await page.getByText("1991", { exact: true }).click();

  await page.getByRole("combobox", { name: "Select month" }).click();
  const options = page.getByRole("option");
  const actualOptions = await options.allTextContents();
  console.log(actualOptions);
});

test("dropdown2", async ({ page }) => {
  // Go to URL
  await page.goto("https://testautomationpractice.blogspot.com/");

  // Select dropdown using value
  await page.getByLabel("country").selectOption("france");

  // Select dropdown using visible text
  await page.getByLabel("country").selectOption({ label: "Australia" });

  //Select by index
  await page.getByLabel("country").selectOption({ index: 2 });

  const options = await page
    .getByLabel("country")
    .locator("option")
    .allTextContents();

  console.log(options);
});
