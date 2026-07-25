# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: NaveenTests/01_login.spec.ts >> sample
- Location: tests/NaveenTests/01_login.spec.ts:79:5

# Error details

```
TimeoutError: locator.fill: Timeout 10000ms exceeded.
Call log:
  - waiting for getByRole('textbox', { name: 'user[email]' })

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic:
    - img [ref=e6] [cursor=pointer]
    - text:     
    - generic [ref=e7]:
      - img [ref=e8]
      - generic [ref=e9]: Need Help? Talk to us at08047939623or
      - generic [ref=e10] [cursor=pointer]: Request a Call
  - banner [ref=e11]:
    - link "Scaler" [ref=e14] [cursor=pointer]:
      - /url: /
      - img "Scaler" [ref=e15]
    - generic [ref=e19]:
      - generic [ref=e22] [cursor=pointer]: Login
      - link "Talk To Our Experts 08047939623" [ref=e23] [cursor=pointer]:
        - /url: tel:08047939623
        - img [ref=e25]
        - generic [ref=e26]:
          - paragraph [ref=e27]: Talk To Our Experts
          - paragraph [ref=e28]: "08047939623"
  - generic [ref=e30]:
    - generic [ref=e31]:
      - heading "Log in to your account" [level=2] [ref=e32]
      - heading "LOG IN USING" [level=5] [ref=e33]
    - generic [ref=e34]:
      - link "facebook-oauth" [ref=e36] [cursor=pointer]:
        - /url: /users/auth/facebook/
        - img "facebook-oauth" [ref=e37]
      - link "linkedin-oauth" [ref=e39] [cursor=pointer]:
        - /url: /users/auth/linkedin/
        - img "linkedin-oauth" [ref=e40]
      - link "github-oauth" [ref=e42] [cursor=pointer]:
        - /url: /users/auth/github/
        - img "github-oauth" [ref=e43]
      - link "google-oauth" [ref=e45] [cursor=pointer]:
        - /url: /users/auth/google_oauth2/
        - img "google-oauth" [ref=e46]
    - generic [ref=e48]:
      - generic [ref=e49]:
        - generic [ref=e52]: Email *
        - textbox "Enter your email" [ref=e54]
      - generic [ref=e55]:
        - generic [ref=e58]: Password *
        - textbox "Enter your password" [ref=e60]
      - generic [ref=e62]:
        - checkbox "Remember Me" [checked] [ref=e63]
        - text: Remember Me
      - generic [ref=e66]:
        - button "Login" [ref=e67] [cursor=pointer]
        - link "Login using mobile" [ref=e68] [cursor=pointer]:
          - /url: /users/sign_in/mobile/
    - generic [ref=e69]:
      - link "Forgot password?" [ref=e70] [cursor=pointer]:
        - /url: /users/password/new/
      - link "Didn't receive confirmation instructions?" [ref=e71] [cursor=pointer]:
        - /url: /users/confirmation/new/
      - generic [ref=e72]:
        - text: Don't have an account?
        - link "Sign up" [ref=e73] [cursor=pointer]:
          - /url: /users/sign_up/
  - generic [ref=e74]:
    - generic [ref=e75]:
      - generic [ref=e76]:
        - generic [ref=e77]:
          - link "Scaler" [ref=e78] [cursor=pointer]:
            - /url: /
            - img "Scaler" [ref=e79]
          - generic [ref=e81]:
            - generic [ref=e82]:
              - text: Engineered with
              - generic [ref=e83]: 
              - text: by
            - img "InterviewBit Academy" [ref=e84]
          - generic [ref=e85]:
            - generic [ref=e86]:
              - generic [ref=e87]: Download the App
              - link "Download Scaler's App on Google Play" [ref=e89] [cursor=pointer]:
                - /url: https://play.google.com/store/apps/details?id=com.scaler.app&utm_source=scaler-footer-menu&utm_campaign=scaler-app&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1
                - img "Download Scaler's App on Google Play" [ref=e90]
            - link "qr_code" [ref=e92] [cursor=pointer]:
              - /url: https://play.google.com/store/apps/details?id=com.scaler.app&utm_source=scaler-footer-menu&utm_campaign=scaler-app&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1
              - img "qr_code" [ref=e93]
        - generic [ref=e94]:
          - generic [ref=e96]: Explore Scaler
          - list [ref=e97]:
            - listitem [ref=e98]:
              - link "Scaler Academy" [ref=e99] [cursor=pointer]:
                - /url: /academy/
            - listitem [ref=e100]:
              - link "Scaler Data Science & ML" [ref=e101] [cursor=pointer]:
                - /url: /data-science-course/
            - listitem [ref=e102]:
              - link "Scaler Advanced AI & Machine Learning" [ref=e103] [cursor=pointer]:
                - /url: /ai-machine-learning-course/
            - listitem [ref=e104]:
              - link "Scaler DevOps and Cloud Computing" [ref=e105] [cursor=pointer]:
                - /url: /devops-course/
            - listitem [ref=e106]:
              - link "Scaler School of Technology" [ref=e107] [cursor=pointer]:
                - /url: /school-of-technology/
            - listitem [ref=e108]:
              - link "Scaler School of Business" [ref=e109] [cursor=pointer]:
                - /url: /school-of-business/
            - listitem [ref=e110]:
              - link "Scaler Neovarsity" [ref=e111] [cursor=pointer]:
                - /url: /neovarsity/
            - listitem [ref=e112]:
              - link "Become a Mentor" [ref=e113] [cursor=pointer]:
                - /url: /mentor/
            - listitem [ref=e114]:
              - link "Become a TA" [ref=e115] [cursor=pointer]:
                - /url: /teaching-assistant/
            - listitem [ref=e116]:
              - link "Become a Career Coach" [ref=e117] [cursor=pointer]:
                - /url: /career-coach/
        - generic [ref=e118]:
          - generic [ref=e120]: Resources
          - list [ref=e121]:
            - listitem [ref=e122]:
              - link "Blog" [ref=e123] [cursor=pointer]:
                - /url: /blog/
            - listitem [ref=e124]:
              - link "About us" [ref=e125] [cursor=pointer]:
                - /url: /about/
            - listitem [ref=e126]:
              - link "Contact Us" [ref=e127] [cursor=pointer]:
                - /url: /contact/
            - listitem [ref=e128]:
              - link "Careers" [ref=e129] [cursor=pointer]:
                - /url: /careers/
            - listitem [ref=e130]:
              - link "Review" [ref=e131] [cursor=pointer]:
                - /url: /review/
            - listitem [ref=e132]:
              - link "Join Our Discord" [ref=e133] [cursor=pointer]:
                - /url: /discord/
            - listitem [ref=e134]:
              - link "Terms of Use" [ref=e135] [cursor=pointer]:
                - /url: /terms/
            - listitem [ref=e136]:
              - link "Privacy Policy" [ref=e137] [cursor=pointer]:
                - /url: /privacy/
        - generic [ref=e138]:
          - generic [ref=e140]: Follow us on
          - list [ref=e141]:
            - listitem [ref=e142]:
              - link " Youtube" [ref=e143] [cursor=pointer]:
                - /url: https://www.youtube.com/scaler?sub_confirmation=1
                - generic [ref=e144]: 
                - text: Youtube
            - listitem [ref=e145]:
              - link " LinkedIn" [ref=e146] [cursor=pointer]:
                - /url: https://www.linkedin.com/school/scaleracademy
                - generic [ref=e147]: 
                - text: LinkedIn
            - listitem [ref=e148]:
              - link " Facebook" [ref=e149] [cursor=pointer]:
                - /url: https://www.facebook.com/scalerofficial
                - generic [ref=e150]: 
                - text: Facebook
            - listitem [ref=e151]:
              - link " Twitter" [ref=e152] [cursor=pointer]:
                - /url: https://twitter.com/scaler_official
                - generic [ref=e153]: 
                - text: Twitter
            - listitem [ref=e154]:
              - link " Instagram" [ref=e155] [cursor=pointer]:
                - /url: https://www.instagram.com/scaler_official/
                - generic [ref=e156]: 
                - text: Instagram
            - listitem [ref=e157]:
              - link " Reviews on Quora" [ref=e158] [cursor=pointer]:
                - /url: https://www.quora.com/What-is-your-review-of-Scaler-Academy
                - generic [ref=e159]: 
                - text: Reviews on Quora
      - generic [ref=e161]:
        - generic [ref=e163]: Tutorials
        - generic [ref=e165]:
          - generic [ref=e166]:
            - link "Data Structures Tutorial" [ref=e167] [cursor=pointer]:
              - /url: /topics/data-structures/
            - generic [ref=e168]: "|"
          - generic [ref=e169]:
            - link "Python Tutorial" [ref=e170] [cursor=pointer]:
              - /url: /topics/python/
            - generic [ref=e171]: "|"
          - generic [ref=e172]:
            - link "Java Tutorial" [ref=e173] [cursor=pointer]:
              - /url: /topics/java/
            - generic [ref=e174]: "|"
          - generic [ref=e175]:
            - link "DBMS Tutorial" [ref=e176] [cursor=pointer]:
              - /url: /topics/dbms/
            - generic [ref=e177]: "|"
          - generic [ref=e178]:
            - link "C Tutorial" [ref=e179] [cursor=pointer]:
              - /url: /topics/c/
            - generic [ref=e180]: "|"
          - generic [ref=e181]:
            - link "JavaScript Tutorial" [ref=e182] [cursor=pointer]:
              - /url: /topics/javascript/
            - generic [ref=e183]: "|"
          - generic [ref=e184]:
            - link "C++ Tutorial" [ref=e185] [cursor=pointer]:
              - /url: /topics/cpp/
            - generic [ref=e186]: "|"
          - generic [ref=e187]:
            - link "SQL Tutorial" [ref=e188] [cursor=pointer]:
              - /url: /topics/sql/
            - generic [ref=e189]: "|"
          - generic [ref=e190]:
            - link "Data Science Tutorial" [ref=e191] [cursor=pointer]:
              - /url: /topics/data-science/
            - generic [ref=e192]: "|"
          - generic [ref=e193]:
            - link "Software Engineering Tutorial" [ref=e194] [cursor=pointer]:
              - /url: /topics/software-engineering/
            - generic [ref=e195]: "|"
          - generic [ref=e196]:
            - link "HTML Tutorial" [ref=e197] [cursor=pointer]:
              - /url: /topics/html/
            - generic [ref=e198]: "|"
          - link "CSS Tutorial" [ref=e200] [cursor=pointer]:
            - /url: /topics/css/
    - paragraph [ref=e203]:
      - text: Copyright
      - img "copyright" [ref=e204]
      - text: 2026 InterviewBit Technologies Pte. Ltd. All Rights Reserved.
  - iframe [ref=e205]:
    - generic [ref=f13e3] [cursor=pointer]:
      - generic [ref=f13e8]: We want to start sending you push notifications. Click Allow to subscribe.
      - generic [ref=f13e9]:
        - button "I'll do this later" [ref=f13e10]
        - button "Allow" [ref=f13e11]
```

# Test source

```ts
  1  | import { test, expect, Browser, Page, Locator } from "@playwright/test";
  2  | import { chromium } from "playwright";
  3  | 
  4  | test("login test", async ({}) => {
  5  |   //open the browser
  6  |   const browser: Browser = await chromium.launch({
  7  |     headless: false,
  8  |     channel: "chrome",
  9  |   });
  10 | 
  11 |   const page: Page = await browser.newPage();
  12 | 
  13 |   //enter the url
  14 |   await page.goto(
  15 |     "https://naveenautomationlabs.com/opencart/index.php?route=account/login",
  16 |   );
  17 | 
  18 |   //create three locators username, password, login button
  19 |   const emailId: Locator = page.locator("#input-email");
  20 |   const password: Locator = page.locator("#input-password");
  21 |   const loginButton: Locator = page.locator("[value='Login']");
  22 |   // Enter username
  23 |   await emailId.fill("dshilpareddy92@gmail.com");
  24 |   await password.fill("Test@!23");
  25 |   await loginButton.click();
  26 | 
  27 |   const title = await page.title();
  28 |   console.log("home page title: ", title);
  29 |   await page.screenshot({ path: "./screenshots/homepage.png" });
  30 |   expect(title).toEqual("My Account");
  31 |   await browser.close();
  32 |   //await new Promise(() => {}); // prevents your script from exiting!
  33 | });
  34 | 
  35 | 
  36 | test("Registration page", async ({}) => {
  37 |   //open the browser
  38 |   const browser: Browser = await chromium.launch({
  39 |     headless: false,
  40 |     channel: "chrome",
  41 |   });
  42 | 
  43 |   const page: Page = await browser.newPage();
  44 | 
  45 |   //enter the url
  46 |   await page.goto(
  47 |     "https://naveenautomationlabs.com/opencart/index.php?route=account/login",
  48 |   );
  49 | 
  50 |   const continueButton: Locator = page.getByRole("link", { name: "Continue" });
  51 |   const firstName: Locator = page.locator("#input-firstname");
  52 |   const lastName: Locator = page.locator("#input-lastname");
  53 |   const email: Locator = page.locator("#input-email");
  54 |   const phoneNumber: Locator = page.locator("#input-telephone");
  55 |   const password: Locator = page.locator("#input-password");
  56 |   const confirmPassword: Locator = page.locator("#input-confirm");
  57 |   const privayCB = page.locator("//input[@name='agree']")
  58 |   const loginButton: Locator = page.locator("[value='Continue']");
  59 | 
  60 |   await continueButton.click();
  61 |   await firstName.fill("Test");
  62 |    await page.waitForTimeout(2000);
  63 |   await lastName.type("type1234566778888888888888");
  64 |   await page.waitForTimeout(2000);
  65 |   await email.fill("Testmine@gmail.com");
  66 |   await phoneNumber.fill("1234567");
  67 |   await password.fill("Test@g!23");
  68 |   await confirmPassword.fill("Test@g!23");
  69 |   await privayCB.click()
  70 |   await loginButton.click();
  71 |   await page.waitForTimeout(5000);
  72 | 
  73 |   
  74 | 
  75 |   //await browser.close();await page.locator('body').click();
  76 |   //await new Promise(() => {}); // prevents your script from exiting!
  77 | });
  78 | 
  79 | test("sample", async ({}) => {
  80 |   //open the browser
  81 |   const browser: Browser = await chromium.launch({
  82 |     headless: false,
  83 |     channel: "chrome",
  84 |   });
  85 | 
  86 |   const page: Page = await browser.newPage();
  87 | 
  88 |   //enter the url
  89 |   await page.goto('https://www.scaler.com/users/sign_in/');
> 90 |   await page.getByRole("textbox", {name:"user[email]"}).fill("dshilpareddy92");
     |                                                         ^ TimeoutError: locator.fill: Timeout 10000ms exceeded.
  91 | });
  92 | 
```