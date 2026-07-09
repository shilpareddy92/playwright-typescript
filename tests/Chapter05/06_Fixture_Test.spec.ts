//import { test, expect } from "@playwright/test";
// Import playwright module
import { test } from '../../src/fixture/TestFixture'
import { HomePage } from "../../src/pages/HomePage";
import { ResultPage } from "../../src/pages/ResultPage";
import { PlaylistPage } from "../../src/pages/PlaylistPage";

test("Implementing fixture in Playwright", async ({ page }) => {
  //npx playwright test --only-changed
  //To execute only changed file and we must have git integrated
  console.log("Text execution started");

  await page.setViewportSize({width:1000,height:1000})
  // Create object of homepage
  const homePage = new HomePage(page);
  await homePage.goToURL();
  await homePage.searchWithKeywords(`${process.env.SEARCH_KEYWORDS}`);

  // Create object of resultpage
  const resultPage = new ResultPage(page);
  await resultPage.clickOnPlaylist(`${process.env.SEARCH_KEYWORDS}`);

  // Create object of playlistpage
  const playlistPage = new PlaylistPage(page);
  await playlistPage.validatePageTitle(
    `${process.env.SEARCH_KEYWORDS}` + " - YouTube",
  );

  console.log("Text execution ended");
});
