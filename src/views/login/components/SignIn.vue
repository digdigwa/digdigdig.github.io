<template>
  <div>
      <el-form ref="form" :model="form" class="form">
        <el-form-item>
            <el-input v-model="form.name" maxlength="12" show-word-limit prefix-icon="el-icon-user" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item>
            <el-input v-model="form.name" maxlength="12" show-word-limit prefix-icon="el-icon-unlock" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit" round class="btn">登录</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>

<script>
const ON_CLOSE = 'onClose'
export default {
  data () {
    return {
      dialogVisible: true,
      form: {
        name: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit () {
      this.$emit(ON_CLOSE)
    },
    onCancel () {
      this.$emit(ON_CLOSE)
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
