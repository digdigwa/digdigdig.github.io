<template>
  <div>
      <Title title="基本信息"/>
      <div class="content">
          <el-form ref="form" :model="form" label-width="80px" size='small'>
            <el-form-item label="团队名称">
                <el-input v-model="form.teamName" maxlength="20" show-word-limit></el-input>
            </el-form-item>
            <el-form-item label="封面图">
                <el-input v-model="form.coverUrl" maxlength="500" show-word-limit></el-input>
            </el-form-item>
            <el-form-item v-if="form.coverUrl" style="height:200px">
                <img :src="form.coverUrl" class="cover-img"/>
            </el-form-item>
            <el-form-item label="团队介绍">
                <el-input type="textarea" v-model="form.introduction" maxlength="1000" show-word-limit rows="10"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">保存</el-button>
            </el-form-item>
        </el-form>
      </div>
  </div>
</template>

<script>
import Title from './Title.vue'
import { getTeamInfo, modifyTeamInfo } from '../../../service/team'

export default {
  data () {
    return {
      form: {
        teamId: '',
        teamName: '',
        coverUrl: '',
        introduction: ''
      }
    }
  },
  components: {
    Title
  },
  async created () {
    const team = await getTeamInfo(this.$route.query.teamId)
    this.form = team
  },
  methods: {
    async onSubmit () {
      const res = await modifyTeamInfo(this.form)
      if (res) {
        this.$message({
          type: 'success',
          message: '修改成功',
          onClose: () => {
            window.location.reload()
          }
        })
      }
    }
  }
}
</script>

<style scoped lang='scss'>
.content{
    margin-top: 20px;
}
.cover-img{
  height: 200px;
}
</style>
