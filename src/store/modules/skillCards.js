import * as API from '@/api/api_center'

const state = {

}

const mutations = {

}

const actions = {
  GetCards({ commit }) {
    return API.getCards().then(res => {
      if (res.status === 200) {
        if (res.data.code === 0) {
          return res
        }
      }
    }).catch(err => {
      return Promise.reject(err)
    })
  }
}

const getters = {

}

export const skillCards = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
