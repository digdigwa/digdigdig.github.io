import axios from 'axios'
import { getLoginInfo } from '../common/login'
// 使用axios实例
const axiosInstance = axios.create()
// 正在请求数组变量，防止重复提交请求
const fetchingArr = []
// axios提供的接口，用于终止请求
const CancelToken = axios.CancelToken

// 删除接口请求的唯一标识
const deleteRequestRecord = function (fetchKey) {
  const index = fetchingArr.indexOf(fetchKey)
  if (index > -1) {
    fetchingArr.splice(index, 1)
  }
}

axiosInstance.interceptors.request.use(config => {
//   const { params, data, url, method } = config
  config.fetchKey = JSON.stringify(config)
  // 一个请求对应一个唯一source对象
  const source = CancelToken.source()
  // 请求的唯一token，必传，否则axios无法终止指定请求
  config.cancelToken = source.token
  // 检测当前url是否正在提交，若存在停止执行，防止重复提交
  if (fetchingArr.includes(config.fetchKey)) {
    // 重复提交时，阻止该请求
    source.cancel(`stop repeated request url: ${config.url}`)
  } else {
    // 添加url至请求队列
    fetchingArr.push(config.fetchKey)
  }
  return config
}, error => {
  return Promise.reject(error)
})

axiosInstance.interceptors.response.use(response => {
  const { config } = response
  const { fetchKey } = config
  deleteRequestRecord(fetchKey)
  return response
}, error => {
  const { config } = error
  // 正常请求时，删除fetchKey
  // 终止重复请求时，返回值为{message: '终止重复请求'}，跳过此步骤
  if (config) {
    const { fetchKey } = config
    deleteRequestRecord(fetchKey)
  }
  return Promise.reject(error)
})

/**
 * 异步请求数据方法封装
 * @param {String} url 请求URL地址
 * @param {Object} param 请求参数
 * @param {String} method 请求方式，默认POST
 * @param {Boolean} isCodeAutoHandle 是否自动处理接口返回数据code
 * @param {String} contentType header contentType默认'application/x-www-form-urlencoded'
 * @param {Number} connectTimeout 超时时间， 默认5000ms
 * @param {Object} customHeaders 自定义header，传customHeaders会覆盖传入的contentType
 * @param {Boolean} withCredentials 跨域携带cookie等，默认true
 * @param {Object} originalOptions 原生axios参数透传
 * @return {Object} 返回接口数据
 */

async function http ({ url, param, method = 'POST', isCodeAutoHandle = false, contentType, connectTimeout = 5000, customHeaders, withCredentials = true, originalOptions = {} }) {
  const fetchCallBack = (res) => {
    const data = res.data
    if (isCodeAutoHandle) {
      if (!parseInt(data.code) && !isNaN(parseInt(data.code))) {
        return Promise.resolve(data)
      } else {
        return Promise.reject(data)
      }
    } else {
      return Promise.resolve(data)
    }
  }
  const errorCallBack = (err) => {
    return Promise.reject(err)
  }
  const loginInfo = getLoginInfo()
  const headers = customHeaders || {
    // 'Content-Type': contentType || 'application/x-www-form-urlencoded'
    'Content-Type': contentType || 'application/json',
    'd-token': loginInfo.token,
    'd-id': loginInfo.id
  }
  const options = Object.assign({
    headers,
    withCredentials: withCredentials,
    timeout: connectTimeout
  }, originalOptions)
  if (method.toLocaleUpperCase() === 'POST') {
    return axiosInstance.post(url, param, options).then(fetchCallBack).catch(errorCallBack)
  } else {
    return axiosInstance.get(url, Object.assign({}, { params: param }, options)).then(fetchCallBack).catch(errorCallBack)
  }
}

export default http
