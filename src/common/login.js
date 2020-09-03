/**
 * 登录相关封装
 */
const D_TOKEN = 'dToken'
const D_ID = 'dId'

// 退出登录
export const exit = function () {
  sessionStorage.setItem(D_TOKEN, '')
  sessionStorage.setItem(D_ID, '')
  // 跳转到首页
  window.location.href = location.origin
}

// 获取登录信息
export const getLoginInfo = function () {
  return {
    token: sessionStorage.getItem(D_TOKEN) || '',
    id: sessionStorage.getItem(D_ID) || ''
  }
}

// 设置登录信息
export const setLoginInfo = function ({ token, id }) {
  sessionStorage.setItem(D_TOKEN, token)
  sessionStorage.setItem(D_ID, id)
}
