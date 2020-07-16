import Vue from 'vue'
import VueRouter from 'vue-router'
// import { component } from 'vue/types/umd'
// import App from '@/App.vue'

Vue.use(VueRouter)

export const router = [
  {
    path: '/Redd_Lin/',
    name: 'index',
    component: () => import('@/views/layout/Layout'),
    children: [
      {
        path: '/Redd_Lin/second',
        name: 'second',
        component: () => import('@/views/second/Second')
      }
    ]
  }
]

export default new VueRouter({
  mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: router
})
