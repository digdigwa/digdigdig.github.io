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
