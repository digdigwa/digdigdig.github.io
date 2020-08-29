<template>
  <PageFrame>
      <div class="container">
          <el-card class="main">
              <el-tabs v-model="active" @tab-click="handleClick">
                <el-tab-pane label="登录" name="login"><SignIn /></el-tab-pane>
                <el-tab-pane label="注册" name="register"><SignUp /></el-tab-pane>
            </el-tabs>
          </el-card>
      </div>
  </PageFrame>
</template>

<script>
import PageFrame from '../../components/PageFrame.vue'
import SignIn from './components/SignIn.vue'
import SignUp from './components/SignUp.vue'
export default {
  data () {
    return {
      active: 'login'
    }
  },
  components: {
    PageFrame,
    SignIn,
    SignUp
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style scoped lang="scss">
.container{
    display: flex;
    justify-content:center;
}
.main{
    width: 400px;
    // height: 300px;
    margin-top: 20px;
}

::v-deep #tab-login, ::v-deep #tab-register{
    width: 177px;
    text-align: center;
    font-size: 16px;
    color: #969696;
    letter-spacing: 5px;
}
::v-deep .el-tabs__active-bar{
    background-color: #ea6f5a;
}
::v-deep .is-active{
    color: #ea6f5a !important;
}
</style>
