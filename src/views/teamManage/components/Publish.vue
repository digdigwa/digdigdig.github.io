<template>
  <div>
    <div class="title">
      <div>待发布</div>
      <div><el-button type="primary" @click="onPublish" size='small' round>发布</el-button></div>
    </div>
    <div>
      <ArticleCard v-for="info in list" :key="info"/>
    </div>
    <PublishDialog v-if="dialogShow" @onClose="onDialogClose"/>
  </div>
</template>

<script>
import PublishDialog from './PublishDialog.vue'
import ArticleCard from '../../../components/ArticleCard'
export default {
  data () {
    return {
      dialogShow: false,
      list: [1, 2, 3, 4, 5]
    }
  },
  components: {
    PublishDialog,
    ArticleCard
  },
  methods: {
    onPublish () {
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
.actions{
  margin-top: 20px;
}
</style>
