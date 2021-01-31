<template>
  <div id="container">
    <!-- particles.js container -->
    <Magic></Magic>
    <div id="wrapper">
      <div id="logo-img">
        <img id="discuss-logo" src="../assets/img/discuss-logo.png"/>
        <h2>Come and share your world</h2>
      </div>
      <nav class="switch_nav">
        <router-link :to="{name:'register'}">注册</router-link>
        <router-link :to="{name:'login'}">登录</router-link>
        <div class="switch_bottom" id="switch_bottom"></div>
      </nav>
      <router-view></router-view>
      <div id="footer">
        <span>&copy;2021 William</span><span>·</span><a href="javascript:;">圆桌</a><span>·</span><a
        href="javascript:;">发现</a><span>·</span><a href="javascript:;">移动应用</a><span>·</span><a href="javascript:;">使用机构账号登录</a><span>·</span><a
        href="javascript:;">联系我们</a><span>·</span><a href="javascript:;">工作来Tencent</a><br/>
        <span>·</span><a
        href="javascript:;">京ICP证******号</a><span>·</span><span>京公网安备**********号</span><span>·</span><a
        href="javascript:;">出版物经营许可证</a>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueParticles from 'vue-particles'
import Register from "./Register";
import Login from "./Login";
import Magic from "./Magic";

Vue.use(VueParticles)

export default {
  name: "Index",
  components: {
    Register, Login,Magic
  }
}

</script>

<style scoped>
@import "../assets/css/base.css";
@import "../assets/css/style.css";
@import "../assets/css/login.css";

#container {
  width: 100%;
  height: 100%;
  background: #ffffff;
  text-align: center;
}

#logo-img {
  text-align: left;
}

#discuss-logo {
  position: relative;

  width: 600px;
  height: 150px;
}

h2 {
  text-align: center;
}
</style>
