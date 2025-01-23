export default defineNuxtConfig({
  modules: ["@nuxtjs/storybook", "@nuxt/icon", "nuxt-i18n-micro"],
  icon: {
    customCollections: [
      {
        prefix: "icon",
        dir: "./app/assets/icons",
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
