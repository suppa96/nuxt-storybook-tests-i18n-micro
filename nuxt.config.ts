// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  //   future: {
  //     compatibilityVersion: 4,
  //   },
  modules: ["@nuxtjs/storybook", "@nuxt/icon", "nuxt-i18n-micro"],
  devtools: { enabled: true },
  icon: {
    customCollections: [
      {
        prefix: "icon",
        dir: "./assets/icons",
      },
    ],
  },
  i18n: {
    locales: [
      { code: "en", iso: "en-US", dir: "ltr" },
      { code: "fr", iso: "fr-FR", dir: "ltr" },
    ],
    defaultLocale: "en",
    translationDir: "./locales",
    meta: true,
    debug: true,
    strategy: "prefix_except_default",
  },
});
