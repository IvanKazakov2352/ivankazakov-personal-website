export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: true,
  typescript: {
    typeCheck: true,
    strict: true
  },
  site: {
    url: "https://ikazakov.com",
    name: "Персональный веб-сайт разработчика и начинающего продукт менеджера - Ивана Казакова!"
  },
  sitemap: {
    enabled: true,
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/']
    }
  },
  css: ['~/assets/scss/styles.scss'],
  app: {
    head: {
      link: [{ rel: "icon", type: "image/svg", href: "https://cdn.ikazakov.com/siba.svg" }],
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
      contentSecurityPolicy: {
        'img-src': [
          'https://cdn.ikazakov.com',
          "'self'",
          "data:",
          "'nonce-{{nonce}}'"
        ],
      },
      crossOriginEmbedderPolicy: 'credentialless',
      xXSSProtection: "1"
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
  vite: {
    server: {
      hmr: {
        protocol: 'wss',
        host: 'localhost',
        port: 443,
        clientPort: 3000,
      }
    }
  }
})
