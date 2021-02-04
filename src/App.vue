<template>
<div>
  <Index v-if="login.flag"></Index>
  <Discuss v-else></Discuss>
<!--  <Temp></Temp>-->
</div>
</template>

<script>
import Vue from 'vue'
import Index from "./components/Index";
import VueRouter from 'vue-router'
import VueCookies from 'vue-cookies'
import Temp from "./components/Temp";
//import css
import 'vue-beauty/package/style/vue-beauty.min.css'
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/line'
Vue.component('chart', ECharts)

//import components
import vueBeauty from 'vue-beauty'
import Discuss from "./components/Discuss";

Vue.use(VueRouter)
Vue.use(vueBeauty)
Vue.use(VueCookies)

export default {

  name: 'App',
  components: {
    Discuss,
    Index,
    Temp
  },
  data: () => ({
    login:{
      flag:false
    },
    labelCol: {
      span: 6
    },
    wrapperCol: {
      span: 10
    }
  })
}

</script>

<style>
@import "assets/css/navbar.css";
@import "https://at.alicdn.com/t/font_1471409_g6hvg6yqo15.css";
.components-layout-demo-basic {
  margin: 2rem;
}

.components-layout-demo-basic .ant-layout-header,
.components-layout-demo-basic .ant-layout-footer {
  background: #ffffff;
  color: #fff;
}

.components-layout-demo-basic .ant-layout-footer {
  line-height: 1.5;
}

.components-layout-demo-basic .ant-layout-sider {
  background: #ffffff;
  color: #fff;
  line-height: 120px;
}

.components-layout-demo-basic .ant-layout-content {
  background: #ffffff;
  color: #fff;
  min-height: 120px;
  line-height: 120px;
}
html,body{
  cursor: url('./assets/cursor/normal.png'),auto;
}
</style>
