// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  },

  compatibilityDate: "2024-04-03",

  future: {
    compatibilityVersion: 4,
  },

  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
});