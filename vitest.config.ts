import { defineConfig, mergeConfig } from "vitest/config";
import { storybookTest } from "@storybook/experimental-addon-test/vitest-plugin";
import { storybookVuePlugin } from "@storybook/vue3-vite/vite-plugin";

import { loadNuxt, buildNuxt } from "@nuxt/kit";

// https://github.com/nuxt/nuxt/issues/14534
async function getViteConfig() {
  const nuxt = await loadNuxt({
    cwd: process.cwd(),
    dev: false,
    set
    overrides: { ssr: false },
  });
  return new Promise((resolve, reject) => {
    nuxt.hook("vite:extendConfig", (config, { isClient }) => {
      if (isClient) {
        resolve(config);
        throw new Error("_stop_");
      }
    });
    buildNuxt(nuxt).catch((err) => {
      if (!err.toString().includes("_stop_")) {
        reject(err);
      }
    });
  }).finally(() => nuxt.close());
}

const viteConfig = await getViteConfig();

// More info at: https://storybook.js.org/docs/writing-tests/vitest-plugin
export default mergeConfig(
  viteConfig!,
  defineConfig({
    plugins: [
      // See options at: https://storybook.js.org/docs/writing-tests/vitest-plugin#storybooktest
      storybookTest({
        configDir: ".storybook",
        // This should match your package.json script to run Storybook
        // The --ci flag will skip prompts and not open a browser
        storybookScript: "bun storybook --ci",
        //storybookUrl: process.env.SB_URL || 'http://localhost:6006',
      }),
      storybookVuePlugin(),
    ],
    test: {
      name: "storybook",
      // Make sure to adjust this pattern to match your stories files.
      include: ["./app/components/**/*.stories.ts"],
      // Enable browser mode
      browser: {
        enabled: true,
        headless: true,
        name: "chromium",
        // Make sure to install Playwright
        provider: "playwright",
      },
      // Speed up tests and better match how they run in Storybook itself
      // https://vitest.dev/config/#isolate
      // Consider removing this if you have flaky tests
      // isolate: false,
      setupFiles: [".storybook/vitest.setup.ts", "tests/unit-setup.ts"],
    },
  })
);
