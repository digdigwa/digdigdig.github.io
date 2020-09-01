import { handleResult } from './result'
import http from './http'
import * as API from './api.js'

// 获取用户信息
export async function getUserInfo () {
  const { status, data, message } = await http({ url: API.GET_USER_INFO, method: 'get' })
  return handleResult({ status, data, message })
}
// 修改用户信息
export async function modifyUserInfo (param) {
  const { status, data, message } = await http({ url: API.MODIFY_USER_INFO, param, method: 'post' })
  return handleResult({ status, data, message })
}
