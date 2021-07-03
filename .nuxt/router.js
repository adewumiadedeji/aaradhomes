import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _d2c7206c = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _3f73e66a = () => interopDefault(import('../pages/blog-details.vue' /* webpackChunkName: "pages/blog-details" */))
const _32c3769e = () => interopDefault(import('../pages/blog-left-sidebar.vue' /* webpackChunkName: "pages/blog-left-sidebar" */))
const _97337f5a = () => interopDefault(import('../pages/blog-right-sidebar.vue' /* webpackChunkName: "pages/blog-right-sidebar" */))
const _21ed6610 = () => interopDefault(import('../pages/case-details.vue' /* webpackChunkName: "pages/case-details" */))
const _63bc799d = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _2197bab2 = () => interopDefault(import('../pages/service-details.vue' /* webpackChunkName: "pages/service-details" */))
const _280b3db0 = () => interopDefault(import('../pages/team.vue' /* webpackChunkName: "pages/team" */))
const _93576ae2 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _d2c7206c,
    name: "about"
  }, {
    path: "/blog-details",
    component: _3f73e66a,
    name: "blog-details"
  }, {
    path: "/blog-left-sidebar",
    component: _32c3769e,
    name: "blog-left-sidebar"
  }, {
    path: "/blog-right-sidebar",
    component: _97337f5a,
    name: "blog-right-sidebar"
  }, {
    path: "/case-details",
    component: _21ed6610,
    name: "case-details"
  }, {
    path: "/contact",
    component: _63bc799d,
    name: "contact"
  }, {
    path: "/service-details",
    component: _2197bab2,
    name: "service-details"
  }, {
    path: "/team",
    component: _280b3db0,
    name: "team"
  }, {
    path: "/",
    component: _93576ae2,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
