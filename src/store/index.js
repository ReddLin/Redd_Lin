import Vue from 'vue'
import Vuex from 'vuex'

import { skillCards } from './modules/skillCards'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    skillCards
  }
})

export default store
