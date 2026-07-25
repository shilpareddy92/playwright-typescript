import { test as setup, expect } from "@playwright/test";

setup("Authenticate", async ({ page }) => {
  await page.goto("https://www.scaler.com/users/sign_in/");
  await page
    .locator('input[name="user[email]"]')
    .fill("dshilpareddy92@gmail.com");
  await page.locator('input[name="user[password]"]').fill("Iamgr80!0");

  await page.locator('button[name="commit"]').click();

  await page.waitForTimeout(2000)
  await page.context().storageState({
    path: "auth.user.json",
  });
});
