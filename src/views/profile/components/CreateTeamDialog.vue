<template>
  <div>
        <el-dialog
            title="添加成员"
            :visible.sync="dialogVisible"
            width="50%"
            :before-close="onCancel">

            <el-form ref="form" :model="form" label-width="80px" size='small'>
                <el-form-item label="用户ID">
                    <el-input v-model="form.name" maxlength="100" show-word-limit></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">确定</el-button>
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
