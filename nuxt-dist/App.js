import Vue from 'vue'
import NuxtLoading from './components/nuxt-loading.vue'

import '../assets/scss/index.scss'


import _6f6c098b from '../layouts/default.vue'

const layouts = { "_default": _6f6c098b }



export default {
  head: {"title":"妈咪呗呗月子中心 杭城首家复合型台式月子中心","meta":[{"name":"renderer","content":"webkit"},{"name":"force-rendering","content":"webkit"},{"http-equiv":"X-UA-Compatible","content":"IE=Edge,chrome=1"},{"name":"baidu-site-verification","content":"mREHhDF8nW"},{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"name":"keywords","content":"妈咪呗呗 月子中心 杭城首家复合型台式月子中心"},{"name":"format-detection","content":"telephone=no"},{"name":"pugbabu","content":"专业认真的建站态度"},{"hid":"description","name":"description","content":"妈咪呗呗中心室内总面积3500平方米，是目前杭城屈指可数的高端月子中心，汲取台湾三十多年月子理念精髓，结合专业护理团队照护模式，科学膳食营养，产后修复体质定制管理、艺术修养课程等孕产期一站式服务。团队核心由台湾籍及大陆籍专家共同构成，为妈咪呗呗的专业护理和系统管理层层把关。 护理部、营养部、产后修复部、客服部、房务部、司机六大服务团队为一个家庭的细分服务模式，服务项目多达150多项，服务体现于细节，这是一对一模式所无法带来的高端体验"},{"name":"360-site-verification","content":"850970beabd63bd397272b6dd73a1aba"},{"name":"sogou_site_verification","content":"y3fi8ttkxP"},{"name":"shenma-site-verification","content":"15230d9dfb2e66bfecf2408862f2462c_1537497601"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"}],"style":[],"script":[]},
  render(h, props) {
    const loadingEl = h('nuxt-loading', { ref: 'loading' })
    const layoutEl = h(this.layout || 'nuxt')
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [ layoutEl ])

    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      }
    }, [ templateEl ])

    return h('div',{
      domProps: {
        id: '__nuxt'
      }
    }, [
      loadingEl,
      transitionEl
    ])
  },
  data: () => ({
    layout: null,
    layoutName: ''
  }),
  beforeCreate () {
    Vue.util.defineReactive(this, 'nuxt', this.$options.nuxt)
  },
  created () {
    // Add this.$nuxt in child instances
    Vue.prototype.$nuxt = this
    // add to window so we can listen when ready
    if (typeof window !== 'undefined') {
      window.$nuxt = this
      
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
  },
  
  mounted () {
    this.$loading = this.$refs.loading
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },
  
  methods: {
    
    errorChanged () {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) this.$loading.fail()
        if (this.$loading.finish) this.$loading.finish()
      }
    },
    
    
    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      this.layoutName = layout
      this.layout = layouts['_' + layout]
      return this.layout
    },
    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      return Promise.resolve(layouts['_' + layout])
    }
    
  },
  components: {
    NuxtLoading
  }
}
