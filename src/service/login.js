import { handleResult } from './result'
import http from './http'
import * as API from './api.js'

// 检查用户名是否已被注册
export async function checkUserName (userName) {
  const { status, data, message } = await http({ url: API.CHECK_USER_NAME, param: { userName }, method: 'get' })
  return handleResult({ status, data, message })
}
// 检查昵称是否已被使用
export async function checkNickName (nickName) {
  const { status, data, message } = await http({ url: API.CHECK_NICK_NAME, param: { nickName }, method: 'get' })
  return handleResult({ status, data, message })
}
// 检查邮箱是否已被使用
export async function checkEmail (email) {
  const { status, data, message } = await http({ url: API.CHECK_EMAIL, param: { email }, method: 'get' })
  return handleResult({ status, data, message })
}
// 用户注册
export async function register (param) {
  const { status, data, message } = await http({ url: API.CREATE_USER, param, method: 'post' })
  return handleResult({ status, data, message })
}
// 登录
export async function login (param) {
  const { status, data, message } = await http({ url: API.LOGIN, param, method: 'post' })
  return handleResult({ status, data, message })
}
