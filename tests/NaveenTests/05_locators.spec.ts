import {
  test,
  expect,
  Browser,
  BrowserContext,
  Page,
  Locator,
  FrameLocator,
} from "@playwright/test";
import { log } from "console";
import { webkit, chromium, firefox } from "playwright";

test("locator test part_II", async () => {
  const browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome",
  });
  const page: Page = await browser.newPage();
  await page.goto("http://127.0.0.1:5500/app/app.html");
  await page.waitForLoadState("domcontentloaded");

  await page.getByTestId("username").fill("naveenautomation");
  await page.getByTestId("password").fill("naveen123");
  await page.getByTestId("login").click();
});

test("Aria Role locator test", async () => {
  const browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome",
  });
  const page: Page = await browser.newPage();

  //const page: Page = await browser.newPage();
  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/register",
  );
  await page.waitForLoadState("domcontentloaded");

  await expect(
    page.getByRole("heading", { name: "Register Account" }),
  ).toBeVisible();

  await expect(
    page.getByRole("link", { name: "Forgotten Password" }),
  ).toBeVisible();

  await expect(page.getByRole("radio", { name: "Yes" })).toBeVisible();
  await page.getByRole("radio", { name: "No" }).click();

  await expect(page.getByRole("checkbox")).toBeVisible();
  await page.getByRole("checkbox").click();

  await expect(page.getByRole("button", { name: "Continue" })).toBeVisible();
  await page.getByRole("button", { name: "Continue" }).click();

  await page.waitForTimeout(5000);
});
