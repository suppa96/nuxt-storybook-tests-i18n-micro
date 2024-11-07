import type { StorybookConfig } from '@nuxtjs/storybook'
import { mergeConfig } from 'vite'

const config: StorybookConfig = {
  stories: ['../app/components/**/*.stories.ts'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: {
    name: '@storybook-vue/nuxt',
    options: {},
  },
  docs: {},
  core: {
    disableTelemetry: true,
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          vue: 'vue/dist/vue.esm-bundler.js',
        },
      },
    })
  },
}
export default config
