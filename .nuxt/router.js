import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _328cba92 = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _259b6e47 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _e3eab9fe = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _0f14b741 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _64c2418b = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _26bde0d5 = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _14420ae4 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _328cba92,
    children: [{
      path: "/",
      component: _259b6e47,
      name: "home"
    }, {
      path: "/login",
      component: _e3eab9fe,
      name: "login"
    }, {
      path: "/register",
      component: _e3eab9fe,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _0f14b741,
      name: "profile"
    }, {
      path: "/settings",
      component: _64c2418b,
      name: "settings"
    }, {
      path: "/editor",
      component: _26bde0d5,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _14420ae4,
      name: "article"
    }]
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
