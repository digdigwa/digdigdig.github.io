<template>
  <div>
    <Title title="团队成员">
      <div><el-button type="primary" @click="onAdd" size='small' round>添加</el-button></div>
    </Title>
    <div class="menbers">
      <div v-for="member in memberList" :key="member.id">
        <div>{{`ID：${member.userName} / NickName：${member.nickName}`}}</div>
        <div><i class="el-icon-delete" title="删除" @click="del(member.id)"></i></div>
      </div>
    </div>
    <AddMemberDialog v-if="dialogShow" @onClose="onDialogClose" @onSuccess="onSuccess"/>
  </div>
</template>

<script>
import Title from '../../../components/TabContentTitle'
import { getMembers, deleteMember } from '../../../service/team'
import AddMemberDialog from './AddMemberDialog.vue'
export default {
  data () {
    return {
      memberList: [],
      dialogShow: false
    }
  },
  components: {
    Title,
    AddMemberDialog
  },
  async created () {
    this.getData()
  },
  methods: {
    async getData () {
      this.memberList = await getMembers(this.$route.query.teamId)
    },
    onAdd () {
      this.dialogShow = true
    },
    onSuccess () {
      this.dialogShow = false
      this.getData()
    },
    del (id) {
      this.$confirm('移除该成员, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        const res = await deleteMember(id)
        if (res) {
          this.$message({ type: 'success', message: '移除成功!' })
          this.getData()
        }
      }).catch((err) => {
        console.error(err)
        this.$message({ type: 'info', message: '已取消删除' })
      })
    },
    onDialogClose () {
      this.dialogShow = false
    }
  }
}
</script>

<style scoped lang="scss">
.menbers>div{
  padding: 15px 10px;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  justify-content:space-between;
  font-size: 14px;
  i{
    color:#ea6f5a;
    cursor: pointer;
  }
}
</style>
