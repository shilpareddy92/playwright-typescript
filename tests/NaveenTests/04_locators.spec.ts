import {
  test,
  expect,
  Browser,
  Page,
  Locator,
  BrowserContext,
} from "@playwright/test";
import { webkit, chromium, firefox } from "playwright";

test("locator test part_I", async () => {
  const browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome",
  });
  const page: Page = await browser.newPage();
  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/register",
  );

  //crate a web element(locator) + perform action on it(click, fill)
  //1. Id:unique
  const firstName: Locator = page.locator("#input-firstname");
  const lastName: Locator = page.locator("#input-lastname");

  await firstName.fill("Shilpa");
  await lastName.fill("Software Engineer");

  //2. class name:
  const imageLocator: Locator = page.locator(".img-responsive");
  const logoExist = await imageLocator.isEnabled();
  console.log(logoExist);

  //3. text:
  const header: Locator = page.locator("text=Register Account");
  const headerExist = await header.isEnabled();
  console.log(headerExist);

  const continueBtn: Locator = page.locator("text=Continue");
  const continueBtnExist = await continueBtn.isEnabled();
  console.log(continueBtnExist);

  const forgotPwdLink: Locator = page.locator("text=Forgotten Password");
  const forgotPwdLinkExist = await forgotPwdLink.isEnabled();
  console.log(forgotPwdLinkExist);

  const email: Locator = page.locator("css=input#input-email");
  const telephone: Locator = page.locator('css=input[name="telephone"]');
  const privacyCheckBox: Locator = page.locator('css=input[type="checkbox"]');

  await email.fill("naveen@gmail.com");
  await telephone.fill("88888888");
  console.log("checkbox is checked " + await privacyCheckBox.isChecked());
  await privacyCheckBox.click();

  console.log("checkbox is checked " +await  privacyCheckBox.isChecked());
  //5. xpath:
  const password: Locator = page.locator('xpath=//input[@id="input-password"]');
  const search: Locator = page.locator(
    'xpath=//input[@name="search" and @type="text"]',
  );

  await password.fill("test@123");
  await search.fill("macbook");
});
