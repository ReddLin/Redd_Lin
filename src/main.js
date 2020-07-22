import Vue from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './lang/i18n'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
