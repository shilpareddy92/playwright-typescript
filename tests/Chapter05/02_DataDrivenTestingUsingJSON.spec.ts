import { test, expect } from "@playwright/test";
import testData from "../../test-data/qa/testdata.json";

type TestData = {
  TestDatSet1: {
    Skill1: string;
    Skill2: string;
  };
  TestDatSet2: {
    Skill1: string;
    Skill2: string;
  };
};
const typedTestData = testData as TestData;

for (const data in typedTestData) {
  const skill = typedTestData[data as keyof TestData];
  /* console.log(skill.Skill1);
  console.log(skill.Skill2); */

  test(`Data Driven Testing Using JSON file in playwright: ${skill.Skill1}`, async ({
    page,
  }) => {
    // Go to URL
    await page.goto(`${process.env.YOUTUBE_URL}`);
    // Wait for the page to load
    await page.waitForLoadState("domcontentloaded");

    // Verify URL, title, text, count,
    await page.locator("//input[@name='search_query']").first().click();
    await page.locator("//input[@name='search_query']").fill(skill.Skill1);
    await page.locator("//input[@name='search_query']").press("Enter");
    console.log(await page.title());
    console.log(skill.Skill1 + " - YouTube");
    await expect(page).toHaveTitle(skill.Skill1 + " - YouTube");
  });

  test(`Data Driven Testing Using JSON file in playwright: ${skill.Skill2}`, async ({
    page,
  }) => {
    // Go to URL
    await page.goto(`${process.env.YOUTUBE_URL}`);
    // Wait for the page to load
    await page.waitForLoadState("domcontentloaded");

    // Verify URL, title, text, count,
    await page.locator("//input[@name='search_query']").first().click();
    await page.locator("//input[@name='search_query']").fill(skill.Skill2);
    await page.locator("//input[@name='search_query']").press("Enter");
    console.log(await page.title());
    console.log(skill.Skill2 + " - YouTube");
    await expect(page).toHaveTitle(skill.Skill2 + " - YouTube");
  });
}
