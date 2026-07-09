import { test, expect } from "@playwright/test";

test("Verify Testers Talk YouTube channel opens successfully", async ({
  page,
}) => {
  // Navigate to the YouTube channel
  await page.goto("https://www.youtube.com/@TestersTalk");

  // Wait for the page to load
  await page.waitForLoadState("domcontentloaded");

  // Verify the page title
  await expect(page).toHaveTitle("Testers Talk - YouTube");

  // Verify the channel name is visible
  await expect(
    page.getByText("Testers Talk", { exact: true }).first(),
  ).toBeVisible();

  //screenshot:'only-on-failure'
  //screenshot:'on'
});
