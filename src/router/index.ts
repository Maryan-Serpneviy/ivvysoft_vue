import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Products',
    component: () => import(/* webpackChunkName: "products" */ '@/pages/Products.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
