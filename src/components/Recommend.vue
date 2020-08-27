<template>
  <div>
        <el-dialog
            title="推荐"
            :visible.sync="dialogVisible"
            width="50%"
            :before-close="onCancel">

            <el-form ref="form" :model="form" label-width="80px" size='small'>
                <el-form-item label="标题">
                    <el-input v-model="form.name" maxlength="100" show-word-limit></el-input>
                </el-form-item>
                <el-form-item label="链接地址">
                    <el-input v-model="form.name" maxlength="250" show-word-limit></el-input>
                </el-form-item>
                <el-form-item label="推荐理由">
                    <el-input type="textarea" v-model="form.desc" maxlength="500" show-word-limit rows="10"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">保存</el-button>
                    <el-button @click="onCancel">取消</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
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

<style>
.el-dialog__body{
    padding-top: 15px;
    padding-bottom: 10px;
}
</style>
