<template>
  <div>
      <Title title="基本信息"/>
      <div class="content">
          <el-form ref="form" :model="form" label-width="80px" size='small'>
            <el-form-item label="用户名">{{form.userName}}</el-form-item>
            <el-form-item label="邮件地址">{{form.email}}</el-form-item>
            <el-form-item label="用户昵称">
                <el-input v-model="form.nickName" maxlength="10" show-word-limit style="width:300px"></el-input>
            </el-form-item>
            <el-form-item label="密码修改">
                <el-input v-model="form.password" type="password" maxlength="12" show-word-limit style="width:300px"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">保存</el-button>
            </el-form-item>
        </el-form>
      </div>
  </div>
</template>

<script>
import Title from '../../../components/TabContentTitle'
import { getUserInfo, modifyUserInfo } from '../../../service/profile'
export default {
  data () {
    return {
      form: {
        userName: '',
        nickName: '',
        email: ''
      }
    }
  },
  components: {
    Title
  },
  async created () {
    const user = await getUserInfo()
    this.form = { userName: user.userName, nickName: user.nickName, email: user.email }
  },
  methods: {
    async onSubmit () {
      const res = await modifyUserInfo(this.form)
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
</style>
