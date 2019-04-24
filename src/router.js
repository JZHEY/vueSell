import Vue from 'vue'
import Router from 'vue-router'
import eatNumber from '@/components/eatnumber/eatnumber.vue'
import preorder from '@/components/preorder/preorder.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'eatNumber',
      component: eatNumber
    },
    {
        path: '/shopDetail',
        name: 'shopDetail',
        component: () => import(/* webpackChunkName: "about" */ '@/components/shopdetail/shopdetail.vue')
      },
    {
      path: '/preorder',
      name: 'preorder',
      component: () => import(/* webpackChunkName: "about" */ '@/components/preorder/preorder.vue')
    },
      
  ]
})