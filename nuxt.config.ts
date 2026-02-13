// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["@/assets/scss/main.scss"],
  modules: ["@nuxtjs/google-fonts", "@nuxt/icon", "@nuxt/image"],
  googleFonts: {
    families: {
     "Exo 2" : true,
    },
  },
});
