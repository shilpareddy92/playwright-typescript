import {
  test,
  expect,
  Browser,
  Page,
  Locator,
  BrowserContext,
} from "@playwright/test";
import { chromium } from "playwright";

test("browser context", async ({}) => {
  //open the browser
  const browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome",
  });

  //browsercontext1:
  const browserContext_1: BrowserContext = await browser.newContext();
  const page: Page = await browserContext_1.newPage();

  //enter the url
  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/login",
  );

  //create three locators username, password, login button
  const emailId: Locator = page.locator("#input-email");
  const password: Locator = page.locator("#input-password");
  const loginButton: Locator = page.locator("[value='Login']");
  // Enter username
  await emailId.fill("dshilpareddy92@gmail.com");
  await password.fill("Test@!23");
  await loginButton.click();

  const title = await page.title();
  console.log("home page title: ", title);
  await page.screenshot({ path: "./screenshots/homepage.png" });
  expect(title).toEqual("My Account");
  
  

  //browsercontext2:
  const browserContext_2: BrowserContext =  await browser.newContext();
  const page2:Page =  await browserContext_2.newPage();

  await page2.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/login",
  );

  const continueButton: Locator = page2.getByRole("link", { name: "Continue" });
  const firstName: Locator = page2.locator("#input-firstname");
  const lastName: Locator = page2.locator("#input-lastname");
  const email: Locator = page2.locator("#input-email");
  const phoneNumber: Locator = page2.locator("#input-telephone");
   const Password: Locator = page2.locator("#input-password");
  const confirmPassword: Locator = page2.locator("#input-confirm");
  const privayCB = page2.locator("//input[@name='agree']")
  const confirmButton: Locator = page2.locator("[value='Continue']");

  await continueButton.click();
  await firstName.fill("Test");
  await lastName.fill("Test");
  await email.fill("Testmine@gmail.com");
  await phoneNumber.fill("1234567");
  await Password.fill("Test@g!23");
  await confirmPassword.fill("Test@g!23");
  await privayCB.click()
  await confirmButton.click();
  await page2.waitForTimeout(5000);

  await browserContext_1.close()
  await browserContext_2.close()
});
