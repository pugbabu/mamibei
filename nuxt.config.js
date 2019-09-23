const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: '妈咪呗呗母婴服务',
    meta: [
      { name: 'renderer', content: 'webkit'},
      { name: 'force-rendering', content: 'webkit'},
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=Edge,chrome=1'},
      { name: 'baidu-site-verification', content: 'mREHhDF8nW'},
      /*以上是设置双核浏览器默认状态下使用极速模式打开*/

      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: '杭州月子中心，萧山月子中心，杭州月子会所，萧山月子会所，杭州月子中心排名，萧山月子中心排名，杭州月子中心价格表，萧山月子中心价格表，杭州月子会所哪家好，萧山月子会所哪家好'},
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'pugbabu', content: '杭州月子中心，我选择妈咪呗-大雷建站，微信243931551' },
      { hid: 'description', name: 'description', content: '妈咪呗呗是国内孕产服务行业的领先品牌，专注母婴照护、产后康复、托育早教等领域，致力于为中国新家庭提供高品质、专业化的服务。' },

      /*新增搜狗、神马、360 */
      { name: '360-site-verification', content: '850970beabd63bd397272b6dd73a1aba' },
      { name: 'sogou_site_verification', content: 'y3fi8ttkxP' },
      { name: 'shenma-site-verification', content: '15230d9dfb2e66bfecf2408862f2462c_1537497601' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#e9546b' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/scss/index.scss',
    'swiper/dist/css/swiper.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: '~/plugins/vue-lazyload.js', ssr: false},
    {src: '~/plugins/swiper-plugin.js', ssr: false}
  ],

  //设置缓存
  cache: true,

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    proxy: true
  },
  proxy: {

  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  },
  buildDir: '.nuxt'
}
