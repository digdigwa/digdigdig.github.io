<template>
  <div class="main">
      <ArticleCard v-for="item in list" :key="item.doc.docId" :doc="item.doc" :tags="item.tags"/>
      <div class="more" v-if="loadMore" @click="onLoadMore">加载更多</div>
  </div>
</template>

<script>
import { getDocsForPage } from '../../../service/doc'
import ArticleCard from '../../../components/ArticleCard'
export default {
  data () {
    return {
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
      const res = await getDocsForPage({ curPage: this.curPage, pageSize: this.pageSize })
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

<style scoped lang="scss">
.main{
    padding-bottom: 30px;
}
.more{
  text-align: center;
  margin-top: 10px;
  font-size: 14px;
  cursor: pointer;
}
</style>
