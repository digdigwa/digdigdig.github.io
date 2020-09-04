import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/home/Home.vue'
import Search from '../views/search/Search.vue'
import Login from '../views/login/Login.vue'
import Profile from '../views/profile/Profile.vue'
import Team from '../views/team/Team.vue'
import TeamList from '../views/team/TeamList.vue'
import TeamManage from '../views/teamManage/TeamManage.vue'
import TeamManageInfo from '../views/teamManage/components/BaseInfo.vue'
import TeamManageMembers from '../views/teamManage/components/Members.vue'
import TeamManagePublish from '../views/teamManage/components/Publish.vue'
import WeeklyArticle from '../views/team/WeeklyArticle.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/team',
    name: 'Team',
    component: Team
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/weeklyArticle',
    name: 'weeklyArticle',
    component: WeeklyArticle
  },
  {
    path: '/teamList',
    name: 'TeamList',
    component: TeamList
  },
  {
    path: '/teamManage',
    name: 'TeamManage',
    component: TeamManage,
    children: [
      { path: 'info', component: TeamManageInfo },
      { path: 'members', component: TeamManageMembers },
      { path: 'publish', component: TeamManagePublish }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
