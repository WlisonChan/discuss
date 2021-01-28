<template>
<div>
  <Index v-if="login.flag"></Index>
  <Discuss v-else></Discuss>
</div>

</template>

<script>
import Vue from 'vue'
import Index from "./components/Index";
import VueRouter from 'vue-router'
import VueCookies from 'vue-cookies'
//import css
import 'vue-beauty/package/style/vue-beauty.min.css'

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
    Index
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
</style>
