import axios from 'axios'

const httpDefaultConfig = {
  // 自定义的请求头  //后台限制了请求，后台要加个允许加请求头的参数
  headers: {
    // 'X-Requested-With': 'XMLHttpRequest',
    // 'Cache-Control': 'no-cache',
    // 'Content-Type': 'application/x-www-form-urlencoded'
  },
  baseURL: '',
  // 超时设置
  timeout: 60000,
  // 跨域是否带Token
  // 响应的数据格式 json / blob /document /arraybuffer / text / stream
  responseType: 'json',
  // XSRF 设置
  xsrfCookieName: 'XSRF-TOKEN',
  // xsrfHeaderName: 'X-XSRF-TOKEN',
  crossDomain: true,
  async: true
}

const service = axios.create(httpDefaultConfig)

const api = {
  post(url, data, headers) {
    return service({
      method: 'post',
      url,
      data: data,
      headers: headers,
      validateStatus: (status) => {
        return status >= 200 && status < 300
      }
    })
  },

  get(url, data) {
    return service({
      method: 'get',
      url,
      params: data
    })
  }
}

export default { api }
