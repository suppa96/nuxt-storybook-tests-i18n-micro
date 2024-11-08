import type { StorybookConfig } from '@nuxtjs/storybook'
import { mergeConfig } from 'vite'

const config: StorybookConfig = {
  stories: ['../app/components/**/*.stories.ts'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/experimental-addon-test',
    '@storybook/addon-a11y',
    '@chromatic-com/storybook'
  ],
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
