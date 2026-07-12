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

test("Single File Upload ", async () => {
  const browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome",
  });
  const page: Page = await browser.newPage();

  await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");

  //multiple files:
  await page
    .locator("input[name='filesToUpload']")
    .setInputFiles([
      path.join("notes.txt"),
      path.join("screenshots/homepage.png"),
      path.join("junit-test-report.xml"),
    ]);

  await page.waitForTimeout(2000);

  //deselect files:
  await page.locator("input[name='filesToUpload']").setInputFiles([]);

  await page.waitForTimeout(2000);

  //single upload:
  await page
    .locator("input[name='filesToUpload']")
    .setInputFiles("screenshots/homepage.png");
  await page.waitForTimeout(2000);
});
