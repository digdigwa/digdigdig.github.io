import { handleResult } from './result'
import http from './http'
import * as API from './api.js'

// 获取所有标签
export async function getAlltags () {
  const { status, data, message } = await http({ url: API.GET_ALL_TAGS, method: 'get' })
  return handleResult({ status, data, message })
}

// 标签云获取标签数据
export async function getAllTagsAndCount () {
  const { status, data, message } = await http({ url: API.GET_ALL_TAGS_AND_COUNT, method: 'get' })
  return handleResult({ status, data, message })
}

// 获取标签下的文档数据
export async function getDocsByTagId (param) {
  const { status, data, message } = await http({ url: API.GET_DOCS_BY_TAG_ID, param, method: 'post' })
  return handleResult({ status, data, message })
}
