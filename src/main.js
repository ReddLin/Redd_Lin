import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import i18n from './lang/i18n'
import animated from 'animate.css'
import { ObserveVisibility } from 'vue-observe-visibility'

Vue.use(animated)
Vue.directive('observe-visibility', ObserveVisibility)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
