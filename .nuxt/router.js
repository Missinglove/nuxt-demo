import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1bbd92d8 = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _98dcbfe6 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _824aac0a = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _4bfee7bb = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _75c3bf5e = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _0feeb91b = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _32c92b08 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _1bbd92d8,
    children: [{
      path: "",
      component: _98dcbfe6,
      name: "home"
    }, {
      path: "/login",
      component: _824aac0a,
      name: "login"
    }, {
      path: "/register",
      component: _824aac0a,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _4bfee7bb,
      name: "profile"
    }, {
      path: "/settings",
      component: _75c3bf5e,
      name: "settings"
    }, {
      path: "/editor",
      component: _0feeb91b,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _32c92b08,
      name: "article"
    }]
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
