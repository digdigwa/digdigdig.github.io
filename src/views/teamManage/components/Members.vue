<template>
  <div>
    <div class="title">
      <div>团队成员</div>
      <div><el-button type="primary" @click="onAdd" size='small' round>添加</el-button></div>
    </div>
    <div class="menbers">
      <div>shadow</div>
      <div>shadow</div>
      <div>shadow</div>
      <div>shadow</div>
    </div>
    <AddMemberDialog v-if="dialogShow" @onClose="onDialogClose"/>
  </div>
</template>

<script>
import AddMemberDialog from './AddMemberDialog.vue'
export default {
  data () {
    return {
      dialogShow: false
    }
  },
  components: {
    AddMemberDialog
  },
  methods: {
    onAdd () {
      this.dialogShow = true
    },
    onDialogClose () {
      this.dialogShow = false
    }
  }
}
</script>

<style scoped lang="scss">
.title{
    border-bottom: 1px solid #f0f0f0;
    padding-bottom: 5px;
    display: flex;
    justify-content:space-between;
}
.menbers>div{
  padding: 15px 10px;
  border-bottom: 1px solid #f0f0f0;
}
</style>
