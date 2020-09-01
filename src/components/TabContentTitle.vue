<template>
  <div class="title">
    <div>{{ title }}</div>
    <div><slot /></div>
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style scoped lang="scss">
.title{
    border-bottom: 1px solid #f0f0f0;
    padding-bottom: 10px;
    padding-left: 10px;
    height: 44px;
    box-sizing: border-box;
    display: flex;
    justify-content:space-between;
    align-items: center;
}
</style>
