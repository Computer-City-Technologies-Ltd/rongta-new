const ssrStreamingEnabled = process.env.NODE_ENV !== "development";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  experimental: {
    ssrStreaming: ssrStreamingEnabled,
  },
  runtimeConfig: {
    public: {
      ssrStreamingEnabled,
    },
  },
  image: {
    quality: 80,
  },

  site: {
    name: "Rongta Bangladesh",
    url: "https://rongta.com.bd",
    description: "Rongta Bangladesh - Point of Sales Solution in Bangladesh",
  },
  ogImage: { enabled: false },

  modules: ["@nuxtjs/seo", "@nuxtjs/tailwindcss", "@nuxt/image"],
  tailwindcss: {
    cssPath: false,
  },
  css: ["~/assets/css/tailwind.css"],
});
