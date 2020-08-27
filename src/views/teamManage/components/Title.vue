<template>
  <div class="title">{{ title }}</div>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style scoped lang="scss">
.title{
    border-bottom: 1px solid #f0f0f0;
    padding-bottom: 5px;
}
</style>
