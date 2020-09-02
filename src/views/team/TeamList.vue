<template>
  <div class="body">
      <TeamCard v-for="team in list" :key="team.teamId" :team="team"/>
  </div>
</template>

<script>
import { getAllTeams } from '../../service/team'

import TeamCard from './components/TeamCard'
export default {
  data () {
    return {
      list: []
    }
  },
  components: {
    TeamCard
  },
  async created () {
    this.list = await getAllTeams()
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
