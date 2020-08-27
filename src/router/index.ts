import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/home/Home.vue'
import Team from '../views/team/TeamHome.vue'
import TeamList from '../views/team/TeamList.vue'
import TeamManage from '../views/teamManage/TeamManage.vue'
import TeamManageInfo from '../views/teamManage/components/BaseInfo.vue'
import TeamManageMembers from '../views/teamManage/components/Members.vue'
import TeamManagePublish from '../views/teamManage/components/Publish.vue'
import Article from '../views/article/WeeklyArticle.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/team',
    name: 'Team',
    component: Team
  },
  {
    path: '/article',
    name: 'Article',
    component: Article
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
