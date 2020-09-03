import { handleResult } from './result'
import http from './http'
import * as API from './api.js'

// 发布周刊
export async function createWeekly (param) {
  const { status, data, message } = await http({ url: API.CREATE_WEEKLY, param, method: 'post' })
  return handleResult({ status, data, message })
}
// 获取周刊列表
export async function getWeeklyByTeamId (teamId) {
  const { status, data, message } = await http({ url: API.GET_WEEKLY_LIST, param: { teamId }, method: 'get' })
  return handleResult({ status, data, message })
}

// 获取周刊对应的文章
export async function getDocsByWeeklyId (weeklyId) {
  const { status, data, message } = await http({ url: API.GET_WEEKLY_DOCS, param: { weeklyId }, method: 'get' })
  return handleResult({ status, data, message })
}

// 获取周刊基本信息
export async function getWeeklyBaseInfoById (weeklyId) {
  const { status, data, message } = await http({ url: API.GET_WEEKLY_INFO, param: { weeklyId }, method: 'get' })
  return handleResult({ status, data, message })
}
