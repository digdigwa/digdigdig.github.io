import { handleResult } from './result'
import http from './http'
import * as API from './api.js'

// 创建文档
export async function createDoc (param) {
  const { status, data, message } = await http({ url: API.CREATE_DOC, param, method: 'post' })
  return handleResult({ status, data, message })
}

// 首页未发布的文章
export async function getNoPublishDocsByTeamId (teamId) {
  const { status, data, message } = await http({ url: API.GET_NO_PUBLISH_DOCS, param: { teamId }, method: 'get' })
  return handleResult({ status, data, message })
}

// 首页获取数据
export async function getDocsForPage (param) {
  const { status, data, message } = await http({ url: API.GET_DOCS_FOR_PAGE, param, method: 'post' })
  return handleResult({ status, data, message })
}

// 个人中心-我的推荐
export async function getMyDocs (param) {
  const { status, data, message } = await http({ url: API.GET_MY_DOCS, param, method: 'post' })
  return handleResult({ status, data, message })
}

// 按ID删除我发布的文章
export async function delMyDocById (docId) {
  const { status, data, message } = await http({ url: API.DELETE_MY_DOC_BY_ID, param: { docId }, method: 'get' })
  return handleResult({ status, data, message })
}
