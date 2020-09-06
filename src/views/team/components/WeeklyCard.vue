<template>
  <div class="card" @click="jump(weekly.weeklyId)">
      <img :src="weekly.coverUrl">
      <div class="content">
          <div class="title">{{weekly.weeklyTitle}}</div>
          <div class="time">{{weekly.nickName}} 发布于 {{format}}</div>
      </div>
  </div>
</template>

<script>
import { dateFormat } from '../../../utils/tools'
export default {
  props: ['weekly'],
  methods: {
    jump (weeklyId) {
      this.$router.push({ path: '/weeklyArticle', query: { weeklyId } })
    }
  },
  computed: {
    format () {
      return dateFormat('yyyy-MM-dd hh:mm:ss', new Date(this.weekly.createTime))
    }
  }
}
</script>

<style scoped lang='scss'>
.card{
    width: 284px;
    // height: 230px;
    border: 3px solid #f8f8f8;
    margin: 0 5px 10px 5px;
    cursor:pointer;
    img{
        width: 284px;
        height: 180px;
    }
    .content{
        padding: 0 10px 10px 10px;
        .title{
            color: #5a5a5a;
            font-size: 14px
        }
        .time{
            margin-top: 5px;
            color: #999999;
            font-size: 12px;
        }
    }
}
.card:hover{
    border: 2px solid #ff6136;
    .title{
        color: black;
    }
}
</style>
