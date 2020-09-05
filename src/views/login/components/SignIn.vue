<template>
  <div>
      <el-form ref="loginForm" :model="form" class="form" :rules="rules">
        <el-form-item prop="userName">
            <el-input v-model="form.userName" maxlength="12" show-word-limit prefix-icon="el-icon-user" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <!-- 增加回车事件 -->
            <el-input
            v-model="form.password" type="password"
            @keyup.enter.native="onSubmit"
            maxlength="12" show-word-limit prefix-icon="el-icon-unlock" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit" round class="btn">登录</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { login } from '../../../service/login'
import { setLoginInfo } from '../../../common/login'
export default {
  data () {
    return {
      dialogVisible: true,
      form: {
        userName: '',
        password: ''
      },
      rules: {
        userName: [{ required: true, message: '请输用户名', trigger: 'blur' }],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit () {
      this.$refs.loginForm.validate(async (valid) => {
        if (valid) {
          const res = await login(this.form)
          if (res) {
            // cookie.set('d_token', res.token, { domain: 'digdigdig.vip' })
            // cookie.set('d_id', res.id, { domain: 'digdigdig.vip' })
            // 设置登录信息在sessionStorage中
            setLoginInfo({ token: res.token, id: res.id, avatar: res.avatar })

            this.$refs.loginForm.resetFields()
            window.location.href = location.origin
          }
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.form{
    margin: 20px 30px 0 30px;
    text-align: center;
}
.btn{
    width: 200px;
}
</style>
