import { expect, test } from "@nuxt/test-utils/playwright";

test.beforeEach(async ({ goto }) => {
  await goto("/", { waitUntil: "hydration" });
});

test.describe("Home Page test", () => {
  test("should display the correct page title and header", async ({ page }) => {
    // Check the page header
    const header = page.locator("header");
    await expect(header).toHaveText("This is the header");
  });
});
