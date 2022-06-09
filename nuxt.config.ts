import { defineNuxtConfig } from 'nuxt'
import { resolve } from 'path'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Work+Sans:wght@900&display=swap' }
      ],
    }
  },
  alias: {
    components: resolve(__dirname, './components'),
    utils: resolve(__dirname, './utils'),
  },
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
                        @use "sass:color";
                        @import "@/assets/scss/main.scss";
                    `,
        },
      },
    },
  },
})
