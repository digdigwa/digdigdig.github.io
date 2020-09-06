<template>
  <div class="body">
    <div class="title">{{tagName}}</div>
    <!-- <div class="author">{{info.nickName}} 发布于 {{format}}</div> -->
    <ArticleCard v-for="doc in list" :key="doc.docId" :doc="doc"/>
    <div class="more" v-if="loadMore" @click="onLoadMore">加载更多</div>
  </div>
</template>

<script>
import { getDocsByTagId } from '../../service/tag'
import ArticleCard from '../../components/ArticleCard'
export default {
  data () {
    return {
      tagId: this.$route.query.tagId,
      tagName: this.$route.query.tagName,
      curPage: 1,
      pageSize: 10,
      loadMore: true,
      list: []
    }
  },
  components: {
    ArticleCard
  },
  created () {
    this.getData()
  },
  methods: {
    async getData () {
      // 带查询参数则走模糊查询接口
      const res = await getDocsByTagId({ curPage: this.curPage, pageSize: this.pageSize, tagId: this.tagId })
      this.list = this.list.concat(res)
      if (res.length < this.pageSize) {
        this.loadMore = false
      }
    },
    onLoadMore () {
      this.curPage = this.curPage + 1
      this.getData()
    }
  }
}
</script>

<style scoped lang='scss'>
.body{
  padding-top: 20px;
}
.title{
  text-align: center;
  font-size: 22px;
  font-weight: 700;
}
.more{
  text-align: center;
  margin-top: 10px;
  font-size: 14px;
  cursor: pointer;
}
</style>
