<template>
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
</template>

<script>
export default {
  data () {
    return {

    }
  },
  components: {
  },
  methods: {
    jump (path) {
      if (this.$route.path !== path) {
        this.$router.push({ path, query: { teamId: this.$route.query.teamId } })
      }
    }
  }
}
</script>

<style scoped lang="scss">
.body{
    display: flex;
    flex-wrap: nowrap;
    padding: 20px 0;
}
.nav{
    flex-shrink: 0;
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
