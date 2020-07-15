import Vue from 'vue'
import VueI18n from 'vue-i18n'

// 使用插件
Vue.use(VueI18n)

const locale = localStorage.getItem('locale') || 'cn'

export const i18n = new VueI18n({
  locale,
  messages: {}
})

export default i18n