<template>
  <div>
      <Header />
      <div class="body">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import Header from './Header.vue'
export default {
  components: {
    Header
  }
}
</script>

<style scoped lang="scss">
.body{
    margin: 0 auto;
    width: 900px;
}
</style>
