import { test, expect, Browser, Page, Locator } from "@playwright/test";
import { chromium } from "playwright";

test("login test", async ({}) => {
  //open the browser
  const browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome",
  });

  const page: Page = await browser.newPage();

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
  await browser.close();
  //await new Promise(() => {}); // prevents your script from exiting!
});


test("Registration page", async ({}) => {
  //open the browser
  const browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome",
  });

  const page: Page = await browser.newPage();

  //enter the url
  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/login",
  );

  const continueButton: Locator = page.getByRole("link", { name: "Continue" });
  const firstName: Locator = page.locator("#input-firstname");
  const lastName: Locator = page.locator("#input-lastname");
  const email: Locator = page.locator("#input-email");
  const phoneNumber: Locator = page.locator("#input-telephone");
  const password: Locator = page.locator("#input-password");
  const confirmPassword: Locator = page.locator("#input-confirm");
  const privayCB = page.locator("//input[@name='agree']")
  const loginButton: Locator = page.locator("[value='Continue']");

  await continueButton.click();
  await firstName.fill("Test");
  await lastName.fill("Test");
  await email.fill("Testmine@gmail.com");
  await phoneNumber.fill("1234567");
  await password.fill("Test@g!23");
  await confirmPassword.fill("Test@g!23");
  await privayCB.click()
  await loginButton.click();
  await page.waitForTimeout(5000);

  

  //await browser.close();await page.locator('body').click();
  //await new Promise(() => {}); // prevents your script from exiting!
});
