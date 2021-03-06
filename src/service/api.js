
// const base = '/node/i'
let base = 'https://zhuhao.ink/node/i'
// 开发环境
if (process.env.NODE_ENV === 'development') {
  base = 'http://local.djtest.cn:10001/node/i'
}
// 登录注册相关
export const CHECK_NICK_NAME = base + '/checkNickName'
export const CHECK_USER_NAME = base + '/checkUserName'
export const CHECK_EMAIL = base + '/checkEmail'
export const CREATE_USER = base + '/createUser'
export const LOGIN = base + '/login'
// 个人中心相关
export const GET_USER_INFO = base + '/getUserInfo'
export const MODIFY_USER_INFO = base + '/modifyUserInfo'
// Team相关
export const GET_MY_JOIN_TEAMS = base + '/getMyJoinTeams'
export const GET_TEAM_INFO = base + '/getTeamInfo'
export const MODIFY_TEAM_INFO = base + '/modifyTeamInfo'
export const GET_ALL_TEAMS = base + '/getAllTeams'
// 团队成员
export const ADD_TEAM_MEMBER = base + '/addTeamMember'
export const GET_MEMBERS = base + '/getMembers'
export const DELETE_MEMBER = base + '/deleteMember'
// 标签相关
export const GET_ALL_TAGS = base + '/getAllTags'
export const GET_ALL_TAGS_AND_COUNT = base + '/getAllTagsAndCount'
export const GET_DOCS_BY_TAG_ID = base + '/getDocsByTagId'
// 文章相关
export const CREATE_DOC = base + '/createDoc'
export const GET_NO_PUBLISH_DOCS = base + '/getNoPublishDocsByTeamId'
export const GET_DOCS_FOR_PAGE = base + '/getDocsForPage'
export const GET_MY_DOCS = base + '/getMyDocs'
export const DELETE_MY_DOC_BY_ID = base + '/delMyDocById'
export const DOC_SEARCH = base + '/docSearch'
// 周刊相关
export const CREATE_WEEKLY = base + '/createWeekly'
export const GET_WEEKLY_LIST = base + '/getWeeklyByTeamId'
export const GET_WEEKLY_DOCS = base + '/getDocsByWeeklyId'
export const GET_WEEKLY_INFO = base + '/getWeeklyBaseInfoById'
