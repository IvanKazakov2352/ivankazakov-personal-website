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
      link: [{ rel: "icon", type: "image/svg", href: "https://objects.ikazakov.com/siba.svg" }],
      htmlAttrs: {
        lang: "ru",
      },
    },
  },
  modules: [
    "@nuxtjs/google-fonts",
    "@nuxtjs/robots",
    "nuxt-security",
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
          'https://objects.ikazakov.com',
          "'self'",
          "data:",
          "'nonce-{{nonce}}'"
        ],
        'frame-ancestors': [
          "'self'"
        ]
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
