import { handleResult } from './result'
import http from './http'
import * as API from './api.js'

// 获取所有标签
export async function getAlltags () {
  const { status, data, message } = await http({ url: API.GET_ALL_TAGS, method: 'get' })
  return handleResult({ status, data, message })
}
