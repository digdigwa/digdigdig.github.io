<template>
  <div>
      <div class="header">
        <span class="logo" @click="jump('/about')">DDD</span>
        <div class="nav">
            <span @click="jump('/')">首页</span>
            <span @click="jump('/team')">团队空间</span>
            <span @click="jump('/teamList')">其他团队</span>
        </div>
        <div class="operate">
            <span class="login" @click="login">登录</span>
            <span class="recommend" @click="recommed">推荐</span>
        </div>
    </div>
    <!-- 推荐表单 -->
    <Recommend v-if="recommedShow" @onClose='onRecommedClose'/>
  </div>
</template>

<script>
import Recommend from './Recommend'
export default {
  data () {
    return {
      recommedShow: false
    }
  },
  components: {
    Recommend
  },
  methods: {
    jump (path) {
      if (this.$route.path !== path) {
        this.$router.push({ path })
      }
    },
    login () {
      console.log(1)
    },
    recommed () {
      this.recommedShow = true
    },
    onRecommedClose () {
      this.recommedShow = false
    }
  }
}
</script>

<style scoped>
.header{
    line-height: 80px;
    border-bottom: 1px solid #f0f0f0;
    padding: 0 20px;
}
.logo{
    font-size: 36px;
    font-weight: 800;
    color: #ce1b1b;
    letter-spacing:2px;
    position: absolute;
    cursor: pointer;
}
.nav{
    width: 900px;
    margin: 0 auto;
}
.nav>span{
    margin-right: 40px;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
}
.operate{
    display: inline-block;
    position: absolute;
    right: 50px;
    top: 0;
}
.login{
    margin-right: 25px;
    cursor:pointer;
}

.recommend{
    display: inline-block;
    width: 88px;
    height: 40px;
    line-height: 40px;
    border-radius: 20px;
    text-align: center;
    font-size: 15px;
    color: #fff;
    background-color: #ea6f5a;
    cursor:pointer;
}
</style>
