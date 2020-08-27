<template>
  <div>
      <Header />
      <div class="body">
          <div class="title">为什么要做这个网站？</div>

          <body class="htmledit_views cke_editable cke_editable_themed cke_contents_ltr cke_show_borders" contenteditable="true" spellcheck="false"><h3>主要想解决如下几个痛点</h3><ul><li><p>离职，无法再看到内网的每周好文章分享</p></li><li><p>解决文章的关键字查询问题</p></li><li><p>解决个人分享归档问题</p></li></ul><h3>预期</h3><p>在信息爆炸的社会，我们可以很方便的获取信息，但是获取高质量的信息很困难。需要一个个的人肉验证信息的质量是否够高，希望这里成为高质量信息的集散地，相互节约各自人肉高质量信息的时间。</p><h3>计划</h3><ul><li><p>增加评论系统</p></li><li><p>增加积分系统</p></li><li><p>增加关注系统</p></li><li><p>增加收藏系统</p></li><li><p>增加个人推荐与收藏导出markdown</p></li><li><p>增加类Stackoverflow的权限系统</p></li><li><p>有想要的功能可以在github上提issue，或者自己撸起衣袖干！</p></li></ul><blockquote><p>GitHub: https://github.com/digdigwa/digdigdig.github.io.git</p></blockquote></body>

      </div>
  </div>
</template>

<script>
import Header from '../components/Header'
export default {
  data () {
    return {
    }
  },
  components: {
    Header
  }
}
</script>

<style scoped lang="scss">
.body{
    width: 900px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    padding: 20px 0;
}
.title{
  font-size: 24px;
  font-weight: 700;
}
</style>
