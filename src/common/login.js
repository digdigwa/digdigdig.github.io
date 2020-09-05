/**
 * 登录相关封装
 */
const D_TOKEN = 'dToken'
const D_ID = 'dId'
const D_AVATAR = 'dAvatar'

// 退出登录
export const exit = function () {
  sessionStorage.setItem(D_TOKEN, '')
  sessionStorage.setItem(D_ID, '')
  sessionStorage.setItem(D_AVATAR, '')
  // 跳转到首页
  window.location.href = location.origin
}

// 获取登录信息
export const getLoginInfo = function () {
  return {
    token: sessionStorage.getItem(D_TOKEN) || '',
    id: sessionStorage.getItem(D_ID) || '',
    avatar: sessionStorage.getItem(D_AVATAR) || 0
  }
}

// 设置登录信息
export const setLoginInfo = function ({ token, id, avatar }) {
  sessionStorage.setItem(D_TOKEN, token)
  sessionStorage.setItem(D_ID, id)
  sessionStorage.setItem(D_AVATAR, avatar)
}

// 登录状态更新头像
export const updateAvatar = function (avatar) {
  sessionStorage.setItem(D_AVATAR, avatar)
}
