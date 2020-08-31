<template>
  <div>
      <el-form ref="signInForm" :model="form" class="form" :rules="rules">
        <el-form-item prop='nickName'>
            <el-input v-model="form.nickName" maxlength="12" show-word-limit prefix-icon="el-icon-s-custom" placeholder="昵称"></el-input>
        </el-form-item>
        <el-form-item prop='userName'>
            <el-input v-model="form.userName" maxlength="12" show-word-limit prefix-icon="el-icon-user" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item prop='password'>
            <el-input v-model="form.password" type="password" maxlength="12" show-word-limit prefix-icon="el-icon-unlock" placeholder="设置密码"></el-input>
        </el-form-item>
        <el-form-item prop='email'>
            <el-input v-model="form.email" maxlength="50" show-word-limit prefix-icon="el-icon-message" placeholder="邮箱地址"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="success" @click="onSubmit" round class="btn">注册</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { checkUserName, checkNickName, checkEmail, register } from '../../../service/login'
const ON_SUCCESS = 'onSuccess'

// 用户名校验规则
const userName = async (rule, value, callback) => {
  if (!value) { return callback(new Error('用户名不能为空')) }
  const res = await checkUserName(value)
  res ? callback(new Error('该用户名已被注册')) : callback()
}
// 昵称校验规则
const nickName = async (rule, value, callback) => {
  if (!value) { return callback(new Error('昵称不能为空')) }
  const res = await checkNickName(value)
  res ? callback(new Error('该用昵称已被使用')) : callback()
}
// 邮箱校验规则
const email = async (rule, value, callback) => {
  if (!value) { return callback(new Error('邮箱不能为空')) }
  const mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
  if (mailReg.test(value)) {
    // 是否已使用验证
    const res = await checkEmail(value)
    res ? callback(new Error('该邮箱已被使用')) : callback()
  } else {
    return callback(new Error('请输入正确的邮箱格式'))
  }
}

export default {
  data () {
    return {
      dialogVisible: true,
      form: {
        nickName: '',
        userName: '',
        password: '',
        email: ''
      },
      rules: {
        userName: [{ validator: userName, trigger: 'keyup' }],
        nickName: [{ validator: nickName, trigger: 'keyup' }],
        email: [{ validator: email, trigger: 'keyup' }],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit () {
      this.$refs.signInForm.validate(async (valid) => {
        if (valid) {
          const res = await register(this.form)
          this.$refs.signInForm.resetFields()
          this.$message.success(`恭喜你成为DDD第号${res.registerRank}成员.`)
          this.$emit(ON_SUCCESS)
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
