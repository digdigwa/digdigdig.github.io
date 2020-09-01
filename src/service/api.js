const base = '/node/i'

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
// 团队成员
export const ADD_TEAM_MEMBER = base + '/addTeamMember'
export const GET_MEMBERS = base + '/getMembers'
export const DELETE_MEMBER = base + '/deleteMember'
