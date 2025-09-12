// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxt/ui', '@nuxt/icon', '@formkit/auto-animate/nuxt', 'nuxt-aos'],
  css: ['~/assets/css/main.css'],
  app: {
    rootAttrs: {
      dir: "rtl",
    },
    head: {
      charset: "utf-8",
    },
    pageTransition: {
      name: 'slide-left',
      mode: 'out-in',
    },
  },
  ui: {
    colorMode: false,
  }
})