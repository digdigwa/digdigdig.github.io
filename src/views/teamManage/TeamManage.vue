<template>
  <div>
      <Header />
      <div class="body">
          <div class="nav">
              <div @click="jump('/teamManage/info')">基本信息</div>
              <div @click="jump('/teamManage/members')">团队成员</div>
              <div @click="jump('/teamManage/publish')">周刊发布</div>
          </div>
          <div class="content">
            <router-view/>
          </div>
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
  },
  methods: {
    jump (path) {
      if (this.$route.path !== path) {
        this.$router.push({ path })
      }
    }
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
    margin-right: 15px;
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
.content{
  flex-grow: 1;
}
</style>
