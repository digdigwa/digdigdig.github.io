<template>
  <div>
    <Title title="我的推荐"></Title>
    <div class="my-docs">
      <ArticleCard v-for="item in list" :key="item.doc.docId" :doc="item.doc" :tags="item.tags" :canDel="true" @onDelSuccess="onDelSuccess"/>
      <div class="more" v-if="loadMore" @click="onLoadMore">加载更多</div>
    </div>
  </div>
</template>

<script>
import { getMyDocs } from '../../../service/doc'
import Title from '../../../components/TabContentTitle'
import ArticleCard from '../../../components/ArticleCard'
export default {
  data () {
    return {
      curPage: 1,
      pageSize: 5,
      list: [],
      loadMore: true
    }
  },
  components: {
    Title,
    ArticleCard
  },
  async created () {
    this.getData()
  },
  methods: {
    async getData () {
      const res = await getMyDocs({ curPage: this.curPage, pageSize: this.pageSize })
      this.list = this.list.concat(res)
      if (res.length < this.pageSize) {
        this.loadMore = false
      }
    },
    onLoadMore () {
      this.curPage = this.curPage + 1
      this.getData()
    },
    onDelSuccess (docId) {
      for (let i = 0; i < this.list.length; i++) {
        const doc = this.list[i].doc
        if (doc.docId === docId) {
          // 删除元素
          this.list.splice(i, 1)
          break
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.my-docs{
  padding: 0 15px;
  margin-bottom: 20px;
}
.more{
  text-align: center;
  margin-top: 10px;
  font-size: 14px;
  cursor: pointer;
}
</style>
