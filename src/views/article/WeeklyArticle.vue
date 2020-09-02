<template>
  <div class="body">
    <div class="title">家政前端技术周刊 - 第18期</div>
    <div class="author">Shadow 发布于 2020/06/11</div>
    <ArticleCard v-for="item in list" :key="item.docId" :doc="item"/>
  </div>
</template>

<script>
import { getDocsByWeeklyId } from '../../service/doc'
import ArticleCard from '../../components/ArticleCard'
export default {
  data () {
    return {
      list: []
    }
  },
  components: {
    ArticleCard
  },
  async created () {
    this.list = await getDocsByWeeklyId(this.$route.query.weeklyId)
  }
}
</script>

<style scoped lang='scss'>
.body{
  padding-top: 20px;
}
.title{
  text-align: center;
  font-size: 22px;
  font-weight: 700;
}
.author{
  text-align: center;
  color: #b4b4b4;
  font-size: 12px;
  margin-top: 10px;
}
</style>
