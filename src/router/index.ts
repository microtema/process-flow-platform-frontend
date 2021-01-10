import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import OktaVue, {LoginCallback} from '@okta/okta-vue'
import {OktaAuth} from '@okta/okta-auth-js'
import {Home} from '@/views'
import Axios from 'axios-observable'

const ISSUER = 'https://dev-1065782.okta.com/oauth2/default'
const CLIENT_ID = '0oa3h0mq2kwRxe9hO5d6'

const oktaAuth = new OktaAuth({
  issuer: ISSUER,
  clientId: CLIENT_ID,
  redirectUri: window.location.origin + '/implicit/callback',
  scopes: ['openid', 'profile', 'email']
})

Vue.use(VueRouter)
Vue.use(OktaVue, {oktaAuth})

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
    path: '/implicit/callback',
    name: 'Callback',
    component: LoginCallback
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const onAuthRequired = async (from: any, to: any, next: any) => {
  if (from.matched.some((record: any) => record.meta.requiresAuth) && !(await Vue.prototype.$auth.isAuthenticated())) {
    await Vue.prototype.$auth.signInWithRedirect()
  } else {
    const accessToken = await Vue.prototype.$auth.getAccessToken()
    Axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`
    sessionStorage.setItem('Authorization', Axios.defaults.headers.common.Authorization)
    next()
  }
}

router.beforeEach(onAuthRequired)

export default router
