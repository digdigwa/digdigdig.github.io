<template>
    <el-tabs :tab-position="tabPosition" class="tabs">
        <el-tab-pane label="基本信息"><BaseInfo /></el-tab-pane>
        <el-tab-pane label="我的团队"><MyTeams /></el-tab-pane>
    </el-tabs>
</template>
<script>
import BaseInfo from './components/BaseInfo'
import MyTeams from './components/MyTeams'
export default {
  data () {
    return {
      tabPosition: 'left'
    }
  },
  components: {
    BaseInfo,
    MyTeams
  }
}
</script>

<style scoped lang="scss">
.tabs {
    margin-top:20px
}
::v-deep .el-tabs__item{
    width: 200px;
    font-size: 14px;
    color: #666666;
    font-weight: normal;
    text-align: center !important;
}
::v-deep .el-tabs__item:hover{
    background: #F0F5F3;
}
::v-deep .el-tabs__active-bar{
    background-color: #ea6f5a
}
::v-deep .is-active{
    color: #ea6f5a;
}
</style>
