module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Simulation',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt frontend for VCH&apos;s SIM Site' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400' },
      { rel: "stylesheet", href: "https://use.fontawesome.com/releases/v5.2.0/css/all.css", integrity: "sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ",
      crossorigin:"anonymous"}
    ]
  },
  router: {
    base: '/',
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#5FE3C4' },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['SmoothScroll'],
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

    // styleResources: {
    //   scss: './assets/scss/base.scss',
    //   // sass: ...,
    //   // scss: ...
    //   options: {
    //     // See https://github.com/yenshih/style-resources-loader#options
    //     // Except `patterns` property
    //   }
    // }
  },
  // module: { Doesn't do anything
  //   rules: [
  //     {
  //       test: /\.(png|jpe?g|gif|svg|webp)$/,
  //       loader: 'url-loader',
  //       query: {
  //         limit: 8000, // 1kB
  //         name: 'img/[name].[hash:7].[ext]'
  //       }
  //     },
  //   ]
  // },
  env: {
    cockpit: {
      apiUrl: 'http://admin.simulation.vchlearn.ca/api',
      apiToken: 'ab9d712bf8f8be698edcdfc206c628',
      baseURL: 'http://admin.simulation.vchlearn.ca'
    }
  },
  // css: [
  //   // '@/assets/scss/base.scss'
  // ],
  modules: [
    ['nuxt-sass-resources-loader', '@/assets/scss/base.scss'],
  ],
  plugins: [
    '~plugins/filters.js',
    {src: '~/plugins/smooth-scroll.js', ssr: false}
  ]
  // sassResources: [
  //   resolve(__dirname, "./assets/scss/base.scss")
  //   // '@/assets/scss/variables.scss'
  // ]
}

