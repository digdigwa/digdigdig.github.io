<template>
  <div>
    <Title title="我的团队">
      <!-- <el-button type="primary" @click="onAdd" size='small' round>创建</el-button> -->
    </Title>
    <div class="members">
      <div v-for="team in teams" :key="team.teamId" class="team"  @click="jump(team.teamId)">
        <div>{{ team.teamName }}</div>
        <div><i class="el-icon-setting" title="团队管理"></i></div>
      </div>
    </div>
    <div class="notice" v-if="teams.length===0">目前暂不开放自定义创建团队，创建团队请微信联系yi_ying</div>
    <!-- <CreateTeamDialog v-if="dialogShow" @onClose="onDialogClose"/> -->
  </div>
</template>

<script>
import { getMyJoinTeams } from '../../../service/team'
import Title from '../../../components/TabContentTitle'
// import CreateTeamDialog from './CreateTeamDialog.vue'
export default {
  data () {
    return {
      // dialogShow: false
      teams: []
    }
  },
  components: {
    Title
    // CreateTeamDialog
  },
  async created () {
    this.teams = await getMyJoinTeams()
  },
  methods: {
    jump (teamId) {
      this.$router.push({ path: '/teamManage/info', query: { teamId } })
    }
    // onAdd () {
    //   this.dialogShow = true
    // },
    // onDialogClose () {
    //   this.dialogShow = false
    // }
  }
}
</script>

<style scoped lang="scss">
.members>div{
  padding: 15px 10px;
  font-size: 14px;
  border-bottom: 1px solid #f0f0f0;
}
.team{
  display: flex;
  justify-content:space-between;
  font-size: 14px;
  cursor: pointer;
  i{
    color:#ea6f5a;
    cursor: pointer;
  }
}
.notice{
  font-size: 12px;
  color: #666666;
  margin: 10px
}
</style>
