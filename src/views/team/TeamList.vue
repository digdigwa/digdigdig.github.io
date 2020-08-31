<template>
  <div class="body">
      <TeamCard v-for="info in list" :key="info"/>
  </div>
</template>

<script>
import TeamCard from './components/TeamCard'
export default {
  data () {
    return {
      list: [1, 2, 3, 4, 5]
    }
  },
  components: {
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
