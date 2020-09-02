<template>
  <div class="card" @click="jump(team.teamId)">
      <img :src="team.coverUrl">
      <div class="content">
          <div class="title">{{ team.teamName}}</div>
      </div>
  </div>
</template>

<script>
export default {
  props: ['team'],
  methods: {
    jump (teamId) {
      this.$router.push({ path: '/team', query: { teamId } })
    }
  }
}
</script>

<style scoped lang='scss'>
.card{
    width: 284px;
    // height: 230px;
    border: 3px solid #f8f8f8;
    margin: 0 5px 10px 5px;
    cursor:pointer;
    img{
        width: 284px;
    }
    .content{
        padding: 0 10px 10px 10px;
        .title{
            color: #5a5a5a;
            font-size: 14px
        }
        .time{
            margin-top: 5px;
            color: #999999;
            font-size: 12px;
        }
    }
}
.card:hover{
    border: 2px solid #ff6136;
    .title{
        color: black;
    }
}
</style>
