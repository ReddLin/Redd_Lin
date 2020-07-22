import Vue from 'vue'
import VueI18n from 'vue-i18n'

import tw from '@/lang/tw'

// 使用插件
Vue.use(VueI18n)

const locale = localStorage.getItem('locale') || 'tw'

export const i18n = new VueI18n({
  locale,
  messages: {
    tw
  }
})

export default i18n
