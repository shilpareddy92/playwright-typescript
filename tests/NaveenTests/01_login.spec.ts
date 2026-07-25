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
  const privayCB = page.locator("//input[@name='agree']");
  const loginButton: Locator = page.locator("[value='Continue']");

  await continueButton.click();
  await firstName.fill("Test");
  await page.waitForTimeout(2000);
  await lastName.type("type1234566778888888888888");
  await page.waitForTimeout(2000);
  await email.fill("Testmine@gmail.com");
  await phoneNumber.fill("1234567");
  await password.fill("Test@g!23");
  await confirmPassword.fill("Test@g!23");
  await privayCB.click();
  await loginButton.click();
  await page.waitForTimeout(5000);

  //await browser.close();await page.locator('body').click();
  //await new Promise(() => {}); // prevents your script from exiting!
});

test("Verify Dashboard", async ({ page }) => {
  await page.goto("https://www.scaler.com");

  // Verify user is already logged in
  await expect(page).toHaveURL("scalar");

  // Or verify some element visible after login
  // await expect(page.locator("text=My Dashboard")).toBeVisible();
});

test("Verify text", async ({ page }) => {
  await page.goto("https://practicetestautomation.com/practice-test-login/");

  // Verify user is already logged in
  console.log(await page.locator("#username").innerHTML());
  console.log(await page.locator("#username").textContent());
  console.log(await page.locator("#username").innerText());
  const field = page.locator("#username");
  console.log(await field.evaluate((e1) => window.getComputedStyle(e1).color));
  console.log(await field.evaluate((e1) => window.getComputedStyle(e1).backgroundColor));
  console.log(await field.evaluate((e1) => window.getComputedStyle(e1).borderColor));
});

test("text methods demo", async ({}) => {
  const number = [1, 2, 3, 4, 5];
  console.log(number.filter((e) => e % 2 == 0));
  console.log(number.map((e) => e * 2));
  console.log(number.reduce((acc, value) => value + acc, 0));
});
