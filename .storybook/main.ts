import type { StorybookConfig } from "@nuxtjs/storybook";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  stories: ["../layers/test/components/**/*.stories.ts"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/experimental-addon-test",
    "@storybook/addon-a11y",
  ],
  framework: {
    name: "@storybook-vue/nuxt",
    options: {},
  },
  docs: {},
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          vue: "vue/dist/vue.esm-bundler.js",
        },
      },
    });
  },
};

export default config;
