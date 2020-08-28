<template>
  <div class="main">
      <ArticleCard v-for="info in list" :key="info"/>
  </div>
</template>

<script>
import ArticleCard from '../../../components/ArticleCard'
export default {
  data () {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 17, 8, 9]
    }
  },
  components: {
    ArticleCard
  }
}
</script>

<style scoped lang="scss">
.main{
    padding-bottom: 30px;
}
</style>
