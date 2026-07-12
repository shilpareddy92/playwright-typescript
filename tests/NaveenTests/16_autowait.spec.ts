import {
  test,
  expect,
  Browser,
  Page,
  Locator,
  FrameLocator,
} from "@playwright/test";
import { log } from "console";
import path from "path";
import { webkit, chromium, firefox } from "playwright";

test.use({
    actionTimeout:8000
})
test("auto wait ", async () => {
  const browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome",
  });
  const page: Page = await browser.newPage();
  //page.setDefaultTimeout(15000);

  await page.goto("https://classic.freecrm.com/register/");

  await page.locator("input[name='agreeTerms']").check();
  
});

test("auto wait 2", async () => {
  const browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome",
  });
  const page: Page = await browser.newPage();
  //page.setDefaultTimeout(15000);

  await page.goto("https://classic.freecrm.com/register/");

  await page.locator("input[name='agreeTerms']").check();
  await page.locator("xpath=input[(name = 'first_name_')]").click({ timeout: 7000 });
});

test("auto wait 3", async () => {
  const browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome",
  });
  const page: Page = await browser.newPage();
  //page.setDefaultTimeout(15000);

  await page.goto("https://classic.freecrm.com/register/");

  await page.locator("input[name='agreeTerms']").check();
  await page.locator("xpath=input[(name = 'first_name_')]").click();
});
