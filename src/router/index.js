import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../components/Login";
import Register from "../components/Register";
import Paper from "../components/Paper";
import Introduction from "../components/Introdution";
import DiscussPost from "../components/DiscussPost"

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new VueRouter({
  mode:'history',
  linkActiveClass:'switch_btn',
  linkExactActiveClass:'switch_btn on',
  routes:[
    {
     path:'/s',
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
    },
    {
      path:'/paper',
      name:'paper',
      component: Paper
    },
    {
      path:'/introduction',
      name:'introduction',
      component: Introduction
    },
    {
      path:'/discussPost',
      name:'discussPost',
      component: DiscussPost
    }
  ]
})
