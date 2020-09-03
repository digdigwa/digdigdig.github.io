<template>
  <div>
      <div class="header">
        <span class="logo" @click="jump('/about')">DDD</span>
        <div class="nav">
            <span @click="jump('/')">首页</span>
            <!-- <span @click="jump('/team')">团队空间</span> -->
            <span @click="jump('/teamList')">所有团队</span>
        </div>
        <div class="operate">
            <span class="avatar" v-if="uuid" @click="jump('/profile')">
              <el-popover
                placement="bottom"
                width="50px"
                trigger="hover">
                <div>
                  <div class="avatar-item" @click="loginOut">
                    <div class="el-icon-switch-button icon"></div>
                    <div>退出</div>
                  </div>
                </div>
                <div id="identicon" slot="reference"></div>
              </el-popover>
            </span>
            <span class="login" v-else @click="jump('/login')">登录</span>
            <span class="recommend" @click="recommed" v-if="uuid">推荐</span>
        </div>
    </div>
    <!-- 推荐表单 -->
    <Recommend v-if="recommedShow" @onClose='onRecommedClose'/>
    <!-- <script src="../utils/multiavatar"></script> -->
  </div>
</template>

<script>
import Recommend from './Recommend'
import avatar from '../utils/multiavatar'
import { exit, getLoginInfo } from '../common/login'

export default {
  data () {
    return {
      uuid: '',
      recommedShow: false
    }
  },
  components: {
    Recommend
  },
  mounted () {
    // this.uuid = cookie.get('d_id')
    const loginInfo = getLoginInfo()
    this.uuid = loginInfo.id
    if (this.uuid) {
      this.$nextTick(function () {
        const iSVG = avatar.multiavatar(this.uuid)
        document.getElementById('identicon').innerHTML = iSVG
      })
    }
  },
  methods: {
    jump (path) {
      if (this.$route.path !== path) {
        this.$router.push({ path })
      }
    },
    recommed () {
      this.recommedShow = true
    },
    onRecommedClose () {
      this.recommedShow = false
    },
    // 退出
    loginOut () {
      exit()
    }
  }
}
</script>

<style scoped lang="scss">
.header{
    line-height: 80px;
    border-bottom: 1px solid #f0f0f0;
    padding: 0 20px;
}
.logo{
    font-size: 36px;
    font-weight: 800;
    color: #ce1b1b;
    letter-spacing:2px;
    position: absolute;
    cursor: pointer;
}
.nav{
    width: 900px;
    margin: 0 auto;
}
.nav>span{
    margin-right: 40px;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
}
.operate{
    display: flex;
    align-items: center;
    position: absolute;
    height: 80px;
    right: 50px;
    top: 0;
}
.avatar{
  margin-right: 25px;
  cursor:pointer;
}
#identicon{
  border-radius: 50%;
  width: 36px;
  height: 36px;
  line-height: normal;
}
// 个人头像下的操作项
.avatar-item{
  display: flex;
  align-items: center;
  padding: 0 10px;
  color: #333;
  height: 36px;
  cursor:pointer;
  .icon{
    margin-right: 10px;
    color: #ea6f5a;
    font-size: 18px;
  }
}
.avatar-item:hover{
  background-color: #f5f5f5;
}

@mixin btn{
  display: inline-block;
  width: 88px;
  height: 40px;
  line-height: 40px;
  border-radius: 20px;
  text-align: center;
  font-size: 15px;
  color: #fff;
  background-color: #ea6f5a;
  cursor:pointer;
}
.login{
    margin-right: 25px;
    @include btn;
}

.recommend{
    @include btn;
}
</style>
