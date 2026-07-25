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

  await page.goto("https://cgi-lib.berkeley.edu/ex/fup.html");

  //single upload:
  await page
    .locator("input[name='upfile']")
    .setInputFiles("screenshots/homepage.png");
  await page.waitForTimeout(2000);

  //deselect files:
  await page.locator("input[name='upfile']").setInputFiles([]);
  await page.waitForTimeout(2000);
});

test("Single File Upload  from buffer memory", async () => {
  const browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome",
  });
  const page: Page = await browser.newPage();

  await page.goto("https://cgi-lib.berkeley.edu/ex/fup.html");

  await page.locator("input[name='upfile']").setInputFiles({
    name: "shilpa_resume.txt",
    mimeType: "text/plain",
    buffer: Buffer.from("this is naveen resume"),
  });

  await page.waitForTimeout(2000);
});

test("Single File using file chooser ", async () => {
  const browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome",
  });
  const page: Page = await browser.newPage();

  await page.goto(
    "https://www.roberthalf.com/au/en/find-jobs/upload-resume/app",
  );
  await page.locator("//button[text()='Accept All Cookies']").click();

  const fileChooserPromise = page.waitForEvent("filechooser");
  await page.getByLabel("Upload resume").first().click();

  const fileChooser = await fileChooserPromise;
  await fileChooser.setFiles(path.join(__dirname, "screenshots/homepage.png"));
});
