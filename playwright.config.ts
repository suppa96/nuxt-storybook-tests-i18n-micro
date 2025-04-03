import type { ConfigOptions } from "@nuxt/test-utils/playwright";
import { fileURLToPath } from "node:url";
import { defineConfig, devices } from "@playwright/test";
import { isCI } from "std-env";

// check how to setup the devices here: https://playwright.dev/docs/emulation#devices
const devicesToTest = [
  "Desktop Chrome",
  "Desktop Safari",
  // Test against mobile viewports.
  "Pixel 5",
  "iPhone 12",
] satisfies Array<string | (typeof devices)[string]>;
/* See https://playwright.dev/docs/test-configuration. */
export default defineConfig<ConfigOptions>({
  testDir: "./tests",
  testMatch: "**/tests/e2e/*.test.ts",
  /* Run tests in files in parallel */
  fullyParallel: !isCI,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!isCI,
  /* Retry on CI only */
  retries: isCI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: isCI ? 1 : undefined,
  timeout: 120 * 1000,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: isCI
    ? [["html", { outputFolder: "playwright-report" }], ["github"]]
    : [["html", { outputFolder: "playwright-report" }]],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  projects: devicesToTest.map((p) =>
    typeof p === "string" ? { name: p, use: devices[p] } : p
  ),
  use: {
    nuxt: {
      rootDir: fileURLToPath(new URL(".", import.meta.url)),
      host: "http://localhost:3000",
    },
    trace: "on-first-retry",
    ignoreHTTPSErrors: false, // true if the urls start with https
  },
  /* Run your local dev server before starting the tests */
  webServer: {
    command: "bun dev", // depending on your setup from package manager
    url: "http://localhost:3000",
    reuseExistingServer: !isCI,
    timeout: 120 * 1000,
    stdout: !isCI ? "ignore" : "pipe",
    ignoreHTTPSErrors: false, // true if the urls start with https, by default it is false
  },
});
