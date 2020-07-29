import apiT from './base.js'
const api = apiT.api

export function inquiryGlobalSettingGroup() {
  return api.get('')
}
