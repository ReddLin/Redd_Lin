import Vue from 'vue'
import VueRouter from 'vue-router'
// import { component } from 'vue/types/umd'
// import App from '@/App.vue'

Vue.use(VueRouter)

export const router = [
  {
    path: '/Redd_Lin/',
    redirect: '/Redd_Lin/intro',
    name: 'index',
    component: () => import('@/views/layout/Layout'),
    meta: {
      title: 'Redd Lin Profile'
    },
    children: [
      {
        path: '/Redd_Lin/intro',
        name: 'intro',
        meta: {
          title: 'Intro'
        },
        component: () => import('@/views/intro/Intro')
      },
      {
        path: '/Redd_Lin/experience',
        name: 'experience',
        meta: {
          title: 'Experience'
        },
        component: () => import('@/views/experience/Experience')
      },
      {
        path: '/Redd_Lin/skill',
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
  mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: router
})
