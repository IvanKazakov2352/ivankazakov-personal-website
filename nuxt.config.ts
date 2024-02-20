export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: true,
  typescript: {
    typeCheck: true,
    strict: true
  },
  css: ['~/assets/scss/styles.scss'],
  app: {
    head: {
      link: [{ rel: "icon", type: "image/svg", href: "/siba.svg" }],
      htmlAttrs: {
        lang: "ru",
      },
    },
  },
  modules: [
    "@nuxtjs/google-fonts",
    "@nuxtjs/robots",
    "nuxt-security",
    '@nuxtjs/sitemap',
  ],
  googleFonts: {
    families: {
      Raleway: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
    prefetch: true,
    preload: true,
    preconnect: true,
    useStylesheet: true,
  },
  security: {
    headers: {
      xXSSProtection: "1",
    },
    nonce: true,
    hidePoweredBy: true
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  devServer: {
    https: {
      key: 'localhost-key.pem',
      cert: 'localhost.pem'
    }
  },
})
