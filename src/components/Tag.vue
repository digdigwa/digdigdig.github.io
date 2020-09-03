<template>
  <div>
      <span class="tag">{{tag.tagName}}</span>
  </div>
</template>

<script>
export default {
  props: ['tag']
}
</script>

<style scoped lang='scss'>
.tag{
  border: 1px solid #e0dbdb;
  padding: 3px 8px;
  border-radius: 6px;
  color: #565353;
}
</style>
