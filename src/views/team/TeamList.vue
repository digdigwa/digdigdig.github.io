<template>
  <div>
      <Header />
      <div class="body">
          <TeamCard v-for="info in list" :key="info"/>
      </div>
  </div>
</template>

<script>
import Header from '../../components/Header'
import TeamCard from './components/TeamCard'
export default {
  data () {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 17, 8, 9]
    }
  },
  components: {
    Header,
    TeamCard
  }
}
</script>

<style scoped lang="scss">
.body{
    width: 900px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
}
</style>
