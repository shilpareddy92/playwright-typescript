import { test, devices, chromium } from "@playwright/test";

const device = devices["iPhone 15"];
test("", async ({}) => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ ...device });
  const page = await context.newPage();
  await page.goto("https://www.youtube.com/");
  

  await page.waitForLoadState("domcontentloaded");
  await page.screenshot({ path: "youtube-mobile.png" });
});
