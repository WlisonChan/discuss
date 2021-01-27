<template>
  <div id="container">
    <!-- particles.js container -->
    <div id="particles-js">
      <vue-particles
        color="#a7dcff"
        :particleOpacity="0.7"
        :particlesNumber="60"
        shapeType="polygon"
        :particleSize="4"
        linesColor="#a7dcff"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="2"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
        class="lizi"
      >
      </vue-particles>
    </div>
    <div id="wrapper">
      <div>
        <img src="../assets/img/zhihu_logo.png"/>
        <h2>与世界分享你的知识、经验和见解</h2>
      </div>
      <nav class="switch_nav">
        <router-link :to="{name:'register'}" >注册</router-link>
        <router-link :to="{name:'login'}" >登录</router-link>
        <div class="switch_bottom" id="switch_bottom"></div>
      </nav>
      <router-view></router-view>
      <div id="footer">
        <span>&copy;2017知乎</span><span>·</span><a href="javascript:;">知乎圆桌</a><span>·</span><a
        href="javascript:;">发现</a><span>·</span><a href="javascript:;">移动应用</a><span>·</span><a href="javascript:;">使用机构账号登录</a><span>·</span><a
        href="javascript:;">联系我们</a><span>·</span><a href="javascript:;">工作来知乎</a><br/>
        <span>·</span><a
        href="javascript:;">京ICP证110745号</a><span>·</span><span>京公网安备11010802010035号</span><span>·</span><a
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

Vue.use(VueParticles)
Vue.use(Register)

export default {
  name: "Index",
  components:{
    Register,Login
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
</style>
