import apiT from './base.js'
const api = apiT.api

export function getCards(params) {
  return api.get('/api/json/skillCards.json', params)
}
