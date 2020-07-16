import Vue from 'vue'
import VueRouter from 'vue-router'
// import App from '@/App.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/Redd_Lin/',
      name: 'index',
      component: () => import('@/views/layout/Layout')
    //   component: App
    }
  ]
})

export default router
