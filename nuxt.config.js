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
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
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
  env: {
    cockpit: {
      apiUrl: 'http://vchdesign.ca/stuible/cockpit/api',
      apiToken: 'ab9d712bf8f8be698edcdfc206c628',
      baseUrl: 'https://<cockpit-url>'
    }
  },
  // css: [
  //   // '@/assets/scss/base.scss'
  // ],
  modules: [
    ['nuxt-sass-resources-loader', '@/assets/scss/base.scss'],
  ],
  // sassResources: [
  //   resolve(__dirname, "./assets/scss/base.scss")
  //   // '@/assets/scss/variables.scss'
  // ]
}

