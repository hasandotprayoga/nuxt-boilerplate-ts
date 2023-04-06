// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Landing Page",
      htmlAttrs: {
        lang: "id",
      },
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/fontaine", "nuxt-icons"],
  nitro: {
    compressPublicAssets: true,
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_API_BASE_URL,
      appCdnUrl: process.env.NUXT_APP_CDN_URL,
      nodeEnv: process.env.NUXT_NODE_ENV,
    },
  },
});
