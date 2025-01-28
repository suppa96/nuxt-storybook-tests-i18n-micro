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
  staticDirs: ["../storybook_locales"],
  async viteFinal(config, { configType }) {
    // const serverConfig = {
    //   ...config.server,
    //   proxy: {
    //     "/_locales": {
    //       target: "http://localhost:3000", // Replace with your Nuxt server URL
    //       changeOrigin: true,
    //       secure: false,
    //     },
    //   },
    // };
    return mergeConfig(config, {
      //   server: serverConfig,
      resolve: {
        alias: {
          vue: "vue/dist/vue.esm-bundler.js",
        },
      },
    });
  },
  webpackFinal: async (config, { configType }) => {
    // Configure Webpack proxy for localization files
    config.devServer = {
      ...config.devServer,
      proxy: {
        "/_locales": {
          target: "http://localhost:3000", // Replace with your Nuxt server URL
          changeOrigin: true,
          secure: false,
        },
      },
    };

    return config;
  },
};

export default config;
