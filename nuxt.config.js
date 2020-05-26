module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Simulation',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Vancouver Coastal Health Simulation website' },
      // { name: 'msapplication-TileColor', content='#ffffff'},
      { name: 'theme-color', content: '#ffffff' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400' },
      {
        rel: "stylesheet", href: "https://use.fontawesome.com/releases/v5.2.0/css/all.css", integrity: "sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ",
        crossorigin: "anonymous"
      },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5FE3C4" }

    ]
  },
  router: {
    base: '/',
  },
  mode: 'spa',
  generate: {
    fallback: true
  },
  css : [
    // '~/assets/scss/base.scss'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#5FE3C4' },
  babel: {
    presets: [
      ['vue-app', {
        useBuiltIns: true,
        targets: { ie: 11, uglify: true }
      }
      ]
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['SmoothScroll'],
    styleResources: {
      scss: ['./assets/scss/variables.scss', './assets/scss/breakpoints.scss', './assets/scss/animation.scss']
      // scss: 
    },
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },

  },
  env: {
    cockpit: {
      apiUrl: 'https://admin.simulation.vchlearn.ca/api',
      apiToken: 'ab9d712bf8f8be698edcdfc206c628',
      baseURL: 'https://admin.simulation.vchlearn.ca'
    }
  },
  // css: [
  //   // '@/assets/scss/base.scss'
  // ],
  modules: [
    // ['nuxt-sass-resources-loader', '@/assets/scss/variables.scss'],
    '@nuxtjs/style-resources',
    ['@nuxtjs/google-analytics', {
      id: 'UA-136341129-1'
    }]
    // ["nuxt-imagemin", {
    //   jpegtran: true,
    //   svgo: {
    //     minifyStyles: true,
    //     cleanupIDs: true,
    //     mergePaths: true,
    //   }

    // }]
  ],
  plugins: [
    '~plugins/filters.js',
    { src: '~/plugins/smooth-scroll.js', ssr: false },
    '~plugins/lazyloadbackground',
    { src: '~/plugins/nuxt-client-init.js', ssr: false }
  ],
  // sassResources: [
  //   resolve(__dirname, "./assets/scss/base.scss")
  //   // '@/assets/scss/variables.scss'
  // ]
}

