<template>
  <div>
      <Title title="基本信息"/>
      <div class="content">
          <el-form ref="form" :model="form" label-width="80px" size='small'>
            <!-- 头像 -->
            <div class="avatar">
              <div id="avatarId"></div>
              <el-button type="success" round size="mini" @click="changeAvatar">
                {{ generateAvatarStatus?'咔嚓':'换一个'}}
              </el-button>
              <el-input v-model="form.avatar" style="display:none"></el-input>
            </div>
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
import avatar from '../../../utils/multiavatar'
import { getUUID } from '../../../utils/tools'
import { getLoginInfo, updateAvatar } from '../../../common/login'
export default {
  data () {
    return {
      intervalObj: null,
      generateAvatarStatus: false,
      form: {
        avatar: '',
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
  mounted () {
    const loginInfo = getLoginInfo()
    const userId = loginInfo.id
    if (userId) {
      this.$nextTick(() => {
        this.createAvatar(loginInfo.avatar)
      })
    }
  },
  methods: {
    changeAvatar () {
      if (this.generateAvatarStatus) {
        clearInterval(this.intervalObj)
        this.generateAvatarStatus = false
      } else {
        this.intervalObj = setInterval(() => {
          this.form.avatar = getUUID()
          this.createAvatar(this.form.avatar)
        }, 100)
        this.generateAvatarStatus = true
      }
    },
    createAvatar (id) {
      const iSVG = avatar.multiavatar(id)
      document.getElementById('avatarId').innerHTML = iSVG
    },
    async onSubmit () {
      const res = await modifyUserInfo(this.form)
      if (res) {
        this.$message({
          type: 'success',
          message: '修改成功',
          onClose: () => {
            // 更新starage中的头像信息
            updateAvatar(this.form.avatar)
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
.avatar{
  margin-left: 30px;
  margin-bottom: 20px;
  text-align: center;
  #avatarId{
    height: 100px;
    width: 100px;
    margin: 0 auto;
    margin-bottom: 10px;
  }
}
</style>
