# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: NaveenTests/03_auth.spec.ts >> auth test
- Location: tests/NaveenTests/03_auth.spec.ts:11:5

# Error details

```
Error: page.goto: net::ERR_INVALID_AUTH_CREDENTIALS at https://the-internet.herokuapp.com/basic_auth
Call log:
  - navigating to "https://the-internet.herokuapp.com/basic_auth", waiting until "load"

```

# Test source

```ts
  1  | import {
  2  |   test,
  3  |   expect,
  4  |   Browser,
  5  |   Page,
  6  |   Locator,
  7  |   BrowserContext,
  8  | } from "@playwright/test";
  9  | import { webkit, chromium, firefox } from "playwright";
  10 | 
  11 | test("auth test", async () => {
  12 |   const browser: Browser = await chromium.launch({ headless: false });
  13 |   const context: BrowserContext = await browser.newContext();
  14 |   const page: Page = await context.newPage();
  15 | 
  16 |   const username = "admin";
  17 |   const password = "admin";
  18 |   const authHeader = "Basic " + btoa(username + ":" + password);
> 19 |   await page.goto("https://the-internet.herokuapp.com/basic_auth");
     |              ^ Error: page.goto: net::ERR_INVALID_AUTH_CREDENTIALS at https://the-internet.herokuapp.com/basic_auth
  20 | });
  21 | 
```