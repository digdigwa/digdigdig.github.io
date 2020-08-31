<template>
  <div class="body">
    <div class="title">家政前端技术周刊 - 第18期</div>
    <div class="author">Shadow 发布于 2020/06/11</div>
    <ArticleCard v-for="info in list" :key="info"/>
  </div>
</template>

<script>
import ArticleCard from '../../components/ArticleCard'
export default {
  data () {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 17, 8, 9]
    }
  },
  components: {
    ArticleCard
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
