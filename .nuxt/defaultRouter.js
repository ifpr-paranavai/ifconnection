import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c41c57dc = () => interopDefault(import('../src/pages/auth/index.vue' /* webpackChunkName: "pages/auth/index" */))
const _1b8f4bfd = () => interopDefault(import('../src/pages/dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _4288eed2 = () => interopDefault(import('../src/pages/login.vue' /* webpackChunkName: "pages/login" */))
const _8069185e = () => interopDefault(import('../src/pages/singup.vue' /* webpackChunkName: "pages/singup" */))
const _8369b41e = () => interopDefault(import('../src/pages/users.vue' /* webpackChunkName: "pages/users" */))
const _12b1f7fb = () => interopDefault(import('../src/pages/auth/reset_password.vue' /* webpackChunkName: "pages/auth/reset_password" */))
const _78e14bbb = () => interopDefault(import('../src/pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/auth",
    component: _c41c57dc,
    name: "auth"
  }, {
    path: "/dashboard",
    component: _1b8f4bfd,
    name: "dashboard"
  }, {
    path: "/login",
    component: _4288eed2,
    name: "login"
  }, {
    path: "/singup",
    component: _8069185e,
    name: "singup"
  }, {
    path: "/users",
    component: _8369b41e,
    name: "users"
  }, {
    path: "/auth/reset_password",
    component: _12b1f7fb,
    name: "auth-reset_password"
  }, {
    path: "/",
    component: _78e14bbb,
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
