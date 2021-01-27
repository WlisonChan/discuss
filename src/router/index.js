import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../components/Login";
import Register from "../components/Register";

Vue.use(VueRouter)

export default new VueRouter({
  mode:'history',
  linkActiveClass:'switch_btn',
  linkExactActiveClass:'switch_btn on',
  routes:[
    {
     path:'/',
     name:'index',
     redirect:'/login'
    },
    {
      path:'/register',
      name: 'register',
      component: Register
    },
    {
      path:'/login',
      name:'login',
      component: Login
    }
  ]
})
