<template>
  <div>
    <div class="title">
      <div>待发布</div>
      <div><el-button type="primary" @click="onPublish" size='small' round>发布</el-button></div>
    </div>
    <div>
      <ArticleCard v-for="doc in list" :key="doc.docId" :doc="doc"/>
      <div class="empty" v-if="list.length===0">没有待发布内容</div>
    </div>
    <PublishDialog v-if="dialogShow" @onClose="onDialogClose"/>
  </div>
</template>

<script>
import { getNoPublishDocsByTeamId } from '../../../service/doc'
import PublishDialog from './PublishDialog.vue'
import ArticleCard from '../../../components/ArticleCard'
export default {
  data () {
    return {
      dialogShow: false,
      list: []
    }
  },
  components: {
    PublishDialog,
    ArticleCard
  },
  async created () {
    this.getData()
  },
  methods: {
    async getData () {
      this.list = await getNoPublishDocsByTeamId(this.$route.query.teamId)
    },
    onPublish () {
      this.dialogShow = true
    },
    onDialogClose () {
      this.getData()
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
.actions{
  margin-top: 20px;
}
.empty{
  text-align: center;
  font-size: 14px;
  margin-top: 20px;
  color:#cac3c3;
}
</style>
