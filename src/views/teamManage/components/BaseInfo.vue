<template>
  <div>
      <Title title="基本信息"/>
      <div class="content">
          <el-form ref="form" :model="form" label-width="80px" size='small'>
            <el-form-item label="团队名称">
                <el-input v-model="form.name" maxlength="20" show-word-limit></el-input>
            </el-form-item>
            <el-form-item label="团队介绍">
                <el-input type="textarea" v-model="form.desc" maxlength="1000" show-word-limit rows="10"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">保存</el-button>
            </el-form-item>
        </el-form>
      </div>
  </div>
</template>

<script>
import Title from './Title.vue'
export default {
  data () {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  components: {
    Title
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    }
  }
}
</script>

<style scoped lang='scss'>
.content{
    margin-top: 20px;
}
</style>
