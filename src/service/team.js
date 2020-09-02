import { handleResult } from './result'
import http from './http'
import * as API from './api.js'

// 获取当前用户加入的团队列表
export async function getMyJoinTeams () {
  const { status, data, message } = await http({ url: API.GET_MY_JOIN_TEAMS, method: 'get' })
  return handleResult({ status, data, message })
}
// 获取团队信息
export async function getTeamInfo (teamId) {
  const { status, data, message } = await http({ url: API.GET_TEAM_INFO, param: { teamId }, method: 'get' })
  return handleResult({ status, data, message })
}
// 修改团队信息
export async function modifyTeamInfo (param) {
  const { status, data, message } = await http({ url: API.MODIFY_TEAM_INFO, param, method: 'post' })
  return handleResult({ status, data, message })
}
// 增加团队成员
export async function addTeamMember (param) {
  const { status, data, message } = await http({ url: API.ADD_TEAM_MEMBER, param, method: 'post' })
  return handleResult({ status, data, message })
}
// 获取团队成员列表
export async function getMembers (teamId) {
  const { status, data, message } = await http({ url: API.GET_MEMBERS, param: { teamId }, method: 'get' })
  return handleResult({ status, data, message })
}
// 删除团队成员
export async function deleteMember (id) {
  const { status, data, message } = await http({ url: API.DELETE_MEMBER, param: { id }, method: 'get' })
  return handleResult({ status, data, message })
}
// 获取所有团队列表
export async function getAllTeams () {
  const { status, data, message } = await http({ url: API.GET_ALL_TEAMS, method: 'get' })
  return handleResult({ status, data, message })
}
