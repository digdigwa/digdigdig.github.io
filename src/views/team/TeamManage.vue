<template>
  <div>
      <Header />
      <div class="body">
          <div class="nav">
              <div>基本信息</div>
              <div>团队成员</div>
              <div>周刊发布</div>
          </div>
          <div></div>
      </div>
  </div>
</template>

<script>
import Header from '../../components/Header'
export default {
  data () {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 17, 8, 9]
    }
  },
  components: {
    Header
  }
}
</script>

<style scoped lang="scss">
.body{
    width: 900px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    padding: 20px 0;
}
.nav{
    width: 200px;
    font-size: 14px;
    color: #666666;
}
.nav>div{
    padding: 10px;
    cursor:pointer;
}
.nav>div:hover{
    background: #F0F5F3;
}
</style>
