import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3ac6a66d = () => interopDefault(import('..\\pages\\manage.vue' /* webpackChunkName: "pages/manage" */))
const _34423b40 = () => interopDefault(import('..\\pages\\projects\\index.vue' /* webpackChunkName: "pages/projects/index" */))
const _2e015bc0 = () => interopDefault(import('..\\pages\\twitter\\callback.vue' /* webpackChunkName: "pages/twitter/callback" */))
const _7a52b37a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _12a7c5e0 = () => interopDefault(import('..\\pages\\_project\\index.vue' /* webpackChunkName: "pages/_project/index" */))
const _3dd0391a = () => interopDefault(import('..\\pages\\_project\\sales.vue' /* webpackChunkName: "pages/_project/sales" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/manage",
    component: _3ac6a66d,
    name: "manage"
  }, {
    path: "/projects",
    component: _34423b40,
    name: "projects"
  }, {
    path: "/twitter/callback",
    component: _2e015bc0,
    name: "twitter-callback"
  }, {
    path: "/",
    component: _7a52b37a,
    name: "index"
  }, {
    path: "/:project",
    component: _12a7c5e0,
    name: "project"
  }, {
    path: "/:project/sales",
    component: _3dd0391a,
    name: "project-sales"
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
