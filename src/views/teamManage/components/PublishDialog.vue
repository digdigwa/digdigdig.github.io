<template>
  <div>
        <el-dialog
            title="基本信息"
            :visible.sync="dialogVisible"
            width="50%"
            :before-close="onCancel">

            <el-form ref="form" :model="form" label-width="80px" size='small' :rules="rules">
                <el-form-item label="标题" prop="weeklyTitle">
                    <el-input v-model="form.weeklyTitle" maxlength="100" show-word-limit placeholder="XXXX技术周刊 - 第XXX期"></el-input>
                </el-form-item>
                <el-form-item label="封面地址" prop="coverUrl">
                    <el-input v-model="form.coverUrl" maxlength="500" show-word-limit placeholder="请填写封面图链接"></el-input>
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
import { createWeekly } from '../../../service/weekly'
const ON_CLOSE = 'onClose'
export default {
  data () {
    return {
      dialogVisible: true,
      form: {
        weeklyTitle: '',
        coverUrl: ''
      },
      rules: {
        weeklyTitle: [{ required: true, message: '标题不能为空', trigger: 'blur' }],
        coverUrl: [{ required: true, message: '封面图链接不能为空', trigger: 'blur' }]
      }
    }
  },
  methods: {
    onSubmit () {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          const res = await createWeekly(Object.assign({ teamId: this.$route.query.teamId }, this.form))
          if (res) {
            this.$message.success('发布成功')
            this.$emit(ON_CLOSE)
          }
        }
      })
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
