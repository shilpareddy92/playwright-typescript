# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: NaveenTests/05_locators.spec.ts >> Aria Role locator test
- Location: tests/NaveenTests/05_locators.spec.ts:28:5

# Error details

```
Error: page.waitForTimeout: Target page, context or browser has been closed
```

# Test source

```ts
  1  | import {
  2  |   test,
  3  |   expect,
  4  |   Browser,
  5  |   BrowserContext,
  6  |   Page,
  7  |   Locator,
  8  |   FrameLocator,
  9  | } from "@playwright/test";
  10 | import { log } from "console";
  11 | import { webkit, chromium, firefox } from "playwright";
  12 | 
  13 | test("locator test part_II", async () => {
  14 |   const browser: Browser = await chromium.launch({
  15 |     headless: false,
  16 |     channel: "chrome",
  17 |   });
  18 |   const page: Page = await browser.newPage();
  19 |   await page.goto("http://127.0.0.1:5500/app/app.html");
  20 |   await page.waitForLoadState("domcontentloaded");
  21 |  
  22 | 
  23 |   await page.getByTestId("username").fill("naveenautomation");
  24 |   await page.getByTestId("password").fill("naveen123");
  25 |   await page.getByTestId("login").click();
  26 | });
  27 | 
  28 | test("Aria Role locator test", async () => {
  29 |   const browser: Browser = await chromium.launch({
  30 |     headless: false,
  31 |     channel: "chrome",
  32 |   });
  33 |   const page: Page = await browser.newPage();
  34 | 
  35 |   //const page: Page = await browser.newPage();
  36 |   await page.goto(
  37 |     "https://naveenautomationlabs.com/opencart/index.php?route=account/register",
  38 |   );
  39 |   await page.waitForLoadState("domcontentloaded");
  40 | 
  41 |   await expect(
  42 |     page.getByRole("heading", { name: "Register Account" }),
  43 |   ).toBeVisible();
  44 | 
  45 |   await page.pause()
  46 | 
  47 |   await expect(
  48 |     page.getByRole("link", { name: "Forgotten Password" }),
  49 |   ).toBeVisible();
  50 | 
  51 |   await expect(page.getByRole("radio", { name: "Yes" })).toBeVisible();
  52 |   await page.getByRole("radio", { name: "No" }).click();
  53 | 
  54 |   await expect(page.getByRole("checkbox")).toBeVisible();
  55 |   await page.getByRole("checkbox").click();
  56 | 
  57 |   await expect(page.getByRole("button", { name: "Continue" })).toBeVisible();
  58 |   await page.getByRole("button", { name: "Continue" }).click();
  59 | 
> 60 |   await page.waitForTimeout(5000);
     |              ^ Error: page.waitForTimeout: Target page, context or browser has been closed
  61 | });
  62 | 
```