<template>
  <div class="card">
      <div class="title" @click="jump(doc.sourceUrl)">{{ doc.title }}</div>
      <div class="abstract">{{ doc.reason }}~</div>
      <div class="footer">
          <div>
            <Tag v-for="tag in tags" :key="tag.tagId" :tag="tag"/>
          </div>
          <div>{{`${doc.nickName} ${getDate}`}}</div>
      </div>
  </div>
</template>

<script>
import Tag from './Tag'
import { dateFormat } from '../utils/tools'
export default {
  props: ['doc', 'tags'],
  components: {
    Tag
  },
  methods: {
    jump (url) {
      window.open(url)
    }
  },
  computed: {
    getDate () {
      return dateFormat('yyyy-MM-dd hh:mm:ss', new Date(this.doc.createTime))
    }
  }
}
</script>

<style scoped lang='scss'>
.card{
    padding: 20px 2px 10px 0;
    border-bottom: 1px solid #f0f0f0;
}
.title{
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
    cursor: pointer;
}
.abstract{
    margin-top: 5px;
    font-size: 13px;
    line-height: 24px;
    color: #999;
}
.footer{
    padding: 0 5px;
    margin-top: 10px;
    color: #b4b4b4;
    font-size: 12px;
    display: flex;
    justify-content: space-between;
}
.footer>span{
    margin-right: 10px;
}
</style>
