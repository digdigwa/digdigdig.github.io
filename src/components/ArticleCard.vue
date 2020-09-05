<template>
  <div class="card">
      <a class="title" :href="doc.sourceUrl" target="_blank">{{ doc.title }}</a>
      <div class="abstract">{{ doc.reason }}~</div>
      <div class="footer">
          <div>
            <Tag v-for="tag in tags" :key="tag.tagId" :tag="tag"/>
          </div>
          <div>
            <span>{{`${doc.nickName} ${getDate}`}}</span>
            <i class="el-icon-delete" title="删除" v-if="canDel" @click="delDoc"></i>
          </div>
      </div>
  </div>
</template>

<script>
import Tag from './Tag'
import { dateFormat } from '../utils/tools'
import { delMyDocById } from '../service/doc'
export default {
  props: {
    doc: Object,
    tags: Array,
    canDel: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Tag
  },
  methods: {
    delDoc () {
      this.$confirm('删除该推荐文章, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        const res = await delMyDocById(this.doc.docId)
        if (res) {
          this.$message({ type: 'success', message: '删除成功!' })
          this.$emit('onDelSuccess', this.doc.docId)
        }
      }).catch((err) => {
        console.error(err)
        this.$message({ type: 'info', message: '已取消删除' })
      })
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
    color: #333;
    text-decoration: none;
    background-color: transparent;
    cursor: pointer;
}
// .title:visited{
//   color: #969696;
// }
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
    i{
      margin-left: 10px;
      cursor: pointer;
      color: #ea6f5a;
    }
}
.footer>span{
    margin-right: 10px;
}
</style>
