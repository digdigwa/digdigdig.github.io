<template>
  <div class="d_tags">
      <router-link class="tag"
      v-for="tag in tags"
      :to="{path: '/tag', query: {tagId: tag.tagId, tagName:tag.tagName }}"
      :key="tag.tagId">{{`${tag.tagName}（${tag.count}）`}}</router-link>
  </div>
</template>

<script>
import { getAllTagsAndCount } from '../../service/tag'
export default {
  data () {
    return {
      tags: []
    }
  },
  async created () {
    this.tags = await getAllTagsAndCount()
  }
}
</script>

<style scoped lang='scss'>
.d_tags{
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
// 标签多种颜色，来自于这里：https://blog.csdn.net/glyihu/article/details/77839151
.d_tags a:nth-child(9n){background-color: #4A4A4A;}
.d_tags a:nth-child(9n+1){background-color: #428BCA;}
.d_tags a:nth-child(9n+2){background-color: #5CB85C;}
.d_tags a:nth-child(9n+3){background-color: #D9534F;}
.d_tags a:nth-child(9n+4){background-color: #567E95;}
.d_tags a:nth-child(9n+5){background-color: #B433FF;}
.d_tags a:nth-child(9n+6){background-color: #00ABA9;}
.d_tags a:nth-child(9n+7){background-color: #B37333;}
.d_tags a:nth-child(9n+8){background-color: #FF6600;}

.d_tags a{
    opacity: 0.80;
    filter:alpha(opacity=80);
    color: #fff;
    background-color: #428BCA;
    display: inline-block;
    border-radius: 25px;
    height: 40px;
    line-height: 40px;
    padding: 8px 20px;
    margin: 15px;
    cursor: pointer;
    text-decoration: none;
}
.d_tags a:hover{
    opacity: 1;
    filter:alpha(opacity=100);
}
</style>
