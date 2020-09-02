<template>
  <div>
      <div class="title">
        <span>家政前端技术</span>
        <!-- <i class="el-icon-setting" title="团队管理" @click="jump"></i> -->
      </div>
      <div class="content">
        <WeeklyCard v-for="item in list" :key="item.weeklyId" :weekly="item"/>
      </div>
  </div>
</template>

<script>
import { getWeeklyByTeamId } from '../../service/weekly'
import WeeklyCard from './components/WeeklyCard'
export default {
  data () {
    return {
      list: []
    }
  },
  components: {
    WeeklyCard
  },
  async created () {
    this.list = await getWeeklyByTeamId(this.$route.query.teamId)
  },
  methods: {
    // jump () {
    //   this.$router.push({ path: '/teamManage/info' })
    // }
  }
}
</script>

<style scoped lang="scss">
.title{
  margin: 15px 0;
  padding-bottom: 10px;
  font-size: 22px;
  font-weight: 700;
  text-align: center;
  border-bottom: 1px solid #f0f0f0;
  // i{
  //   margin-left: 10px;
  //   font-size: 18px;
  //   color:#ea6f5a;
  //   cursor: pointer;
  // }
}
.content{
  display: flex;
  flex-wrap: wrap;
}
</style>
