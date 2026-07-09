import { test, expect } from "@playwright/test";

test("Handling Iframes, Drag and Drop element in playwrightF", async ({
  page,
}) => {
  // Go to URL
  await page.goto("https://jqueryui.com/droppable/");

  // Locate iframe
  const iframe = page.frameLocator('[class="demo-frame"]');

  // drag element, drop element
  const dragElement = iframe.locator("#draggable");
  const dropElement = iframe.locator("#droppable");

   // Perform drag and drop
  await dragElement.dragTo(dropElement);

  // Optional: verify drop happened
  await expect(dropElement).toHaveText(/Dropped!/);
});
