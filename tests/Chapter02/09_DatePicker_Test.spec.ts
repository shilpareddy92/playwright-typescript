import { test, expect } from "@playwright/test";

test("Date Picker", async ({ page }) => {
  // Go to URL
  await page.goto("https://jqueryui.com/datepicker/");

  // Locate iframe
  const iframe = page.frameLocator('[class="demo-frame"]');

  //Enter the value manually - Hardcoded date
  await iframe.locator("#datepicker").fill("22/06/1992");

  console.log(await iframe.locator("#datepicker").inputValue());


   // Selecting dynamic date
   await iframe.locator('[id="datepicker"]').click();
   await iframe.locator('.ui-datepicker-today').click();

   console.log(await iframe.locator("#datepicker").inputValue());


   // Selecting past date
   await iframe.locator('[id="datepicker"]').click();
   await iframe.locator('[title="Prev"]').click();
   await iframe.locator('text="15"').click();
   console.log(await iframe.locator("#datepicker").inputValue());



   // Selecting future date
    await iframe.locator('[id="datepicker"]').click();
    await iframe.locator('[title="Next"]').click();
    await iframe.locator('text="17"').click();
    console.log(await iframe.locator("#datepicker").inputValue());
});
