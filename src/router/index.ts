import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import { Home, Callback } from '@/views'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/definition',
    name: 'Definition',
    component: () => import('../views/definition/Definition.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/callback',
    name: 'Callback',
    component: Callback,
    meta: {
      requiresAuth: false
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  console.log('to', to.name, 'from', from.name)
  next()
})

export default router
