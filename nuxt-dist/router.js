import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _74838c02 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _10762d18 = () => interopDefault(import('../pages/attend.vue' /* webpackChunkName: "pages/attend" */))
const _80dfe5d0 = () => interopDefault(import('../pages/expand.vue' /* webpackChunkName: "pages/expand" */))
const _55a08b48 = () => interopDefault(import('../pages/food.vue' /* webpackChunkName: "pages/food" */))
const _0ed41713 = () => interopDefault(import('../pages/recovery.vue' /* webpackChunkName: "pages/recovery" */))
const _4686ba10 = () => interopDefault(import('../pages/space.vue' /* webpackChunkName: "pages/space" */))
const _3513d678 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/about",
      component: _74838c02,
      name: "about"
    }, {
      path: "/attend",
      component: _10762d18,
      name: "attend"
    }, {
      path: "/expand",
      component: _80dfe5d0,
      name: "expand"
    }, {
      path: "/food",
      component: _55a08b48,
      name: "food"
    }, {
      path: "/recovery",
      component: _0ed41713,
      name: "recovery"
    }, {
      path: "/space",
      component: _4686ba10,
      name: "space"
    }, {
      path: "/",
      component: _3513d678,
      name: "index"
    }],

    fallback: false
  })
}
