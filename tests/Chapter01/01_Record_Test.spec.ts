import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await test.step("Navigating to Url", async () => {
    await page.goto("https://www.facebook.com/");
  });
  await test.step("Enter the Email", async () => {
    await page
      .getByRole("textbox", { name: "Email address or mobile number" })
      .fill("zzzzzz");
  });

  await test.step("Enter the password", async () => {
    await page.getByRole("textbox", { name: "Password" }).click();
    await page.getByRole("textbox", { name: "Password" }).fill("zzzzzzzzzzz");
  });

  await test.step("Click on  Login", async () => {
    await page.getByRole("button", { name: "Log in" }).click();
  });
});
