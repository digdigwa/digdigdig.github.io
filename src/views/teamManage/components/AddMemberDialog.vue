<template>
  <div>
        <el-dialog
            title="添加成员"
            :visible.sync="dialogVisible"
            width="50%"
            :before-close="onCancel">

            <el-form ref="form" :model="form" label-width="80px" size='small'>
                <el-form-item label="用户名称">
                    <el-input v-model="form.userName" maxlength="12" show-word-limit style="width:300px" placeholder="请填写用户登录名"></el-input>
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
import { addTeamMember } from '../../../service/team'
const ON_CLOSE = 'onClose'
const ON_SUCCESS = 'onSuccess'
export default {
  data () {
    return {
      dialogVisible: true,
      form: {
        userName: ''
      }
    }
  },
  methods: {
    async onSubmit () {
      const res = await addTeamMember({ userName: this.form.userName, teamId: this.$route.query.teamId })
      if (res) {
        this.$message({
          type: 'success',
          message: '添加成功',
          onClose: () => {
            // window.location.reload()
            this.$emit(ON_SUCCESS)
          }
        })
      }
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
