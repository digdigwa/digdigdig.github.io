<template>
  <div class="card">
      <div class="title" @click="jump">游戏科学新作《黑神话：悟空》13分钟实机演示</div>
      <div class="abstract">国产单机游戏的高峰，还未正式发布即爆款！~</div>
      <div class="footer">
          <span>shadow</span>
          <span>2020-09-11</span>
      </div>
  </div>
</template>

<script>
export default {
  methods: {
    jump () {
      window.open('https://www.bilibili.com/video/BV1x54y1e7zf?from=search&seid=8792404065808697240')
    }
  }
}
</script>

<style scoped>
.card{
    padding: 20px 2px 10px 0;
    border-bottom: 1px solid #f0f0f0;
}
.title{
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
    cursor: pointer;
}
.abstract{
    margin-top: 5px;
    font-size: 13px;
    line-height: 24px;
    color: #999;
}
.footer{
    margin-top: 5px;
    color: #b4b4b4;
    font-size: 12px;
    display: flex;
    justify-content: flex-end;
}
.footer>span{
    margin-right: 10px;
}
</style>
