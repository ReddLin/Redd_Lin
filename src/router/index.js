import Vue from 'vue'
import VueRouter from 'vue-router'
// import { component } from 'vue/types/umd'
// import App from '@/App.vue'

Vue.use(VueRouter)

export const router = [
  {
    path: '/',
    redirect: '/intro',
    name: 'index',
    component: () => import('@/views/layout/Layout'),
    meta: {
      title: 'Redd Lin Profile'
    },
    children: [
      {
        path: '/intro',
        name: 'intro',
        meta: {
          title: 'Intro'
        },
        component: () => import('@/views/intro/Intro')
      },
      {
        path: '/experience',
        name: 'experience',
        meta: {
          title: 'Experience'
        },
        component: () => import('@/views/experience/Experience')
      },
      {
        path: '/skill',
        name: 'skill',
        meta: {
          title: 'Skill'
        },
        component: () => import('@/views/skill/Skill')
      }
    ]
  }
]

export default new VueRouter({
  mode: 'hash', // require service support
  base: '/Redd_Lin',
  scrollBehavior: () => ({ y: 0 }),
  routes: router
})
