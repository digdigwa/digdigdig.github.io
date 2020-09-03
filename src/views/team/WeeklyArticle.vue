<template>
  <div class="body">
    <div class="title">{{info.weeklyTitle}}</div>
    <div class="author">{{info.nickName}} 发布于 {{format}}</div>
    <ArticleCard v-for="item in list" :key="item.doc.docId" :doc="item.doc" :tags="item.tags"/>
  </div>
</template>

<script>
import { getDocsByWeeklyId, getWeeklyBaseInfoById } from '../../service/weekly'
import ArticleCard from '../../components/ArticleCard'
import { dateFormat } from '../../utils/tools'
export default {
  data () {
    return {
      info: {},
      list: []
    }
  },
  components: {
    ArticleCard
  },
  async created () {
    this.info = await getWeeklyBaseInfoById(this.$route.query.weeklyId)
    this.list = await getDocsByWeeklyId(this.$route.query.weeklyId)
  },
  computed: {
    format () {
      return dateFormat('yyyy-MM-dd hh:mm:ss', new Date(this.info.createTime))
    }
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
