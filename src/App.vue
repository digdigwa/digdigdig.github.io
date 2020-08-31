<template>
  <div id="app">
    <PageFrame>
      <router-view/>
    </PageFrame>
  </div>
</template>

<script>
import PageFrame from './components/PageFrame'
export default {
  components: {
    PageFrame
  }
}
</script>>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
