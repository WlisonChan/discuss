<template>
  <div id="app">
    <v-button>按钮</v-button>
  </div>
</template>

<script>
import Vue from 'vue'

//import css
import 'vue-beauty/package/style/vue-beauty.min.css'

//import components
import vueBeauty from 'vue-beauty'
Vue.use(vueBeauty)

export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
