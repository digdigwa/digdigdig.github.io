<template>
  <PageFrame>
      <div class="title">
        <span>家政前端技术</span>
        <i class="el-icon-setting" title="团队管理" @click="jump"></i>
      </div>
      <div class="content">
        <WeeklyCard v-for="info in list" :key="info"/>
      </div>
  </PageFrame>
</template>

<script>
import PageFrame from '../../components/PageFrame'
import WeeklyCard from './components/WeeklyCard'
export default {
  data () {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 17, 8, 9]
    }
  },
  components: {
    PageFrame,
    WeeklyCard
  },
  methods: {
    jump () {
      this.$router.push({ path: '/teamManage/info' })
    }
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
  i{
    margin-left: 10px;
    font-size: 18px;
    color:#ea6f5a;
    cursor: pointer;
  }
}
.content{
  display: flex;
  flex-wrap: wrap;
}
</style>
