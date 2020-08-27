<template>
  <div class="card" @click="jump">
      <img src="http://muchstudy.com/2020/04/19/%E5%AE%9E%E9%99%85%E6%A1%88%E4%BE%8B%E8%81%8A%E8%81%8A%E7%B3%BB%E7%BB%9F%E5%BB%BA%E6%A8%A1%E4%B8%8E%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E8%AE%BE%E8%AE%A1/%E4%BB%A5%E5%AE%9E%E9%99%85%E6%A1%88%E4%BE%8B%E8%81%8A%E8%81%8A%E7%B3%BB%E7%BB%9F%E5%BB%BA%E6%A8%A1%E4%B8%8E%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E8%AE%BE%E8%AE%A1.jpg">
      <div class="content">
          <div class="title">家政前端技术</div>
      </div>
  </div>
</template>

<script>
export default {
  methods: {
    jump () {
      this.$router.push({ path: '/team' })
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
