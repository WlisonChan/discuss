import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../components/Login";
import Register from "../components/Register";
import Paper from "../components/Paper";
import Introduction from "../components/Introdution";
import DiscussPost from "../components/DiscussPost"
import Anonymous from "../components/Anonymous";
import Recommend from "../components/Recommend";
import PostDetail from "../components/PostDetail";

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
    },
    {
      path:'/anonymous',
      name:'anonymous',
      component: Anonymous
    },
    {
      path:'/recommend',
      name:'recommend',
      component: Recommend
    },
    {
      path:'/postDetail',
      name:'postDetail',
      component:PostDetail
    }
  ]
})
