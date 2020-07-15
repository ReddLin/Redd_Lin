import Vue from 'vue'
import VueRouter from 'vue-router'
// import App from '@/App.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: resolve => require(['../views/layout/Layout'], resolve)
    }
  ]
})

export default router
