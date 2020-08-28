<template>
  <PageFrame>
      <div class="body">
          <TeamCard v-for="info in list" :key="info"/>
      </div>
  </PageFrame>
</template>

<script>
import PageFrame from '../../components/PageFrame'
import TeamCard from './components/TeamCard'
export default {
  data () {
    return {
      list: [1, 2, 3, 4, 5]
    }
  },
  components: {
    PageFrame,
    TeamCard
  }
}
</script>

<style scoped lang="scss">
.body{
    display: flex;
    flex-wrap: wrap;
    margin-top: 15px;
}
</style>
