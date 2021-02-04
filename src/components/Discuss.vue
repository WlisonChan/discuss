<template>
  <div>
    <div id="particles-js" :style="{position:'absolute',width:'100%',height: '100%'}">
      <vue-particles
        color="#a7dcff"
        :particleOpacity="1"
        :particlesNumber="50"
        shapeType="star"
        :particleSize="10"
        linesColor="#a7dcff"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="false"
        clickMode="push"
        class="lizi"
      >
      </vue-particles>
    </div>
    <v-row class="demo-row" >
      <v-col class="demo-col demo-col-1" span="24" @mouseenter.native="showTime()"
             @mouseleave.native="unShowTime()">
        <Time v-show="showTimes"
        ></Time>
        <div id="nav-tab">
          <div class="nav-tab-item" :class="{'active':activeIndex == index}" v-for="(item,index) in items"
               @click="change(item.content,index)">
            <i :class="['nav-tab-item_icon','iconfont',item.icon]"></i>
            <p class="nav-tab-item_label">{{ item.label }}</p>
          </div>

          <div class="nav-tab-item" :class="{'active':true}"
               :style="{textAlign: 'right',padding: '0 50px',marginLeft:'auto'}">
            <v-avatar size="large" icon="user" src="http://q1.qlogo.cn/g?b=qq&nk=840454995&s=640"></v-avatar>
            <v-dropdown
              class="nav-tab-item_label"
              :data="userInfo"
              trigger="click"
              @item-click="test"
              :style="{textAlign: 'right',padding: '0 10px',position: 'relative',zIndex:'1000'}">
              <a href="javascript:void(0)" class="ant-dropdown-link ant-dropdown-trigger" style="font-size: small">
                {{ user.label }}
                <v-icon type="down"></v-icon>
              </a>
            </v-dropdown>
          </div>
          <div class="nav-tab-overlay" :style="{'left':activeIndex * 130 + 'px'}">
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row class="demo-row" :style="{marginTop:'10px'}">
      <v-col class="demo-col demo-col-2" span="1"></v-col>
      <v-col class="demo-col demo-col-3" span="22"
             :style="{background:'rgba(255,255,255,0.5)',height:'100%',minHeight:'500px',borderRadius:'10px',padding:'10px'}">
        <div>
          <router-view :style="{background:'rgba(255,255,255,0.5)'}"></router-view>
        </div>
      </v-col>
      <v-col class="demo-col demo-col-3" span="1"></v-col>
      <v-col class="demo-col demo-col-1" span="24">

      </v-col>
    </v-row>
  </div>

</template>

<script>
import Time from "./Time";

export default {
  name: "Discuss",
  components:{
    Time
  },
  mounted() {
    this.$router.push({
      path: 'introduction'
    })
  },
  data() {
    return {
      showTimes:false,
      user: {
        icon: 's',
        label: 'William',
      },
      userInfo: [
        {content: '个人中心'},
        {content: '文章管理'},
        {content: '帖子管理'},
        {content: '退出登录'},
      ],
      items: [
        {
          icon: 'icon-shouye',
          label: '首页',
          content: 'introduction'
        },
        {
          icon: 'icon-guanzhu',
          label: '学习',
          content: 'discussPost'
        },
        {
          icon: 'icon-faxian',
          label: '匿名发表',
          content: 'anonymous'
        },
        {
          icon: 'icon-xiaoxizhongxin',
          label: '推荐网站',
          content: 'recommend'
        },
        {
          icon: 'icon-paper',
          label: '文章',
          content: 'paper'
        }
      ],
      activeIndex: 0,
    }
  },
  methods: {
    change(e, index) {
      this.activeIndex = index
      this.$router.push({
        path: e.toString()
      })
    },
    test(e) {
      console.log(e.content)
    },
    showTime(){
      this.showTimes = true;
    },
    unShowTime(){
      this.showTimes = false;
    }
  }
}
</script>

<style scoped>
html,body{
  cursor: url('../assets/cursor/normal.png'),pointer;
}
</style>


<!--
<template>
  <div id="components-layout-demo-side">
    <v-layout>
      <v-sider collapsible v-model="collapsed">
        <div class="logo"></div>
        <v-menu theme="dark" :mode="collapsed?'vertical':'inline'" :data="menuData3">
          <template slot-scope="{data}">
            <div @click="change(data.path)">
              <i v-if="data.icon" :class="'anticon anticon-' + data.icon"></i>
              <span :class="{'nav-text':data.icon}">{{ data.name }}</span>
            </div>
          </template>
        </v-menu>
      </v-sider>
      <v-layout>
        <v-header id="header">
          <div :style="{textAlign: 'right',padding: '0 50px'}">
            <v-avatar size="large" icon="user" :style="{verticalAlign:'middle'}"></v-avatar>
            <v-dropdown
              :data="userInfo"
              trigger="click"
              @item-click="test"
              :style="{textAlign: 'right',padding: '0 10px'}">
              <a href="javascript:void(0)" class="ant-dropdown-link ant-dropdown-trigger" >
                Click me
                <v-icon type="down" ></v-icon>
              </a>
            </v-dropdown>
          </div>
        </v-header>
        <v-content :style="{ padding: '0 50px' }">
          <v-breadcrumb :style="{ margin: '12px 0' }">
            <v-breadcrumb-item>Home</v-breadcrumb-item>
            <v-breadcrumb-item href="">List</v-breadcrumb-item>
            <v-breadcrumb-item href="">App</v-breadcrumb-item>
          </v-breadcrumb>
          <div style="padding: 24px; background: #fff; min-height: 360px;">
            <router-view></router-view>
          </div>
        </v-content>
        <v-footer :style="{ textAlign: 'center' }">
          Discuss Design ©2021 Created by William
        </v-footer>
      </v-layout>
    </v-layout>
  </div>
</template>

<style>
#header {
  background: #fff;
  padding: 0px;
}

#components-layout-demo-side .logo {
  height: 32px;
  background: #333;
  border-radius: 6px;
  margin: 16px;
}

#components-layout-demo-side .ant-layout-sider-collapsed .anticon {
  font-size: 16px;
  margin-left: 8px;
}

#components-layout-demo-side .ant-layout-sider-collapsed .nav-text {
  display: none;
}

#components-layout-demo-side .ant-layout-sider-collapsed .ant-menu-submenu-vertical > .ant-menu-submenu-title:after {
  display: none;
}

</style>

<script>
export default {
  name: 'Discuss',
  mounted() {
    this.$router.push({
      path: 'introduction'
    })
  },
  data() {
    return {
      userInfo: [
        {content: '个人中心'},
        {content: '文章管理'},
        {content: '帖子管理'},
        {content: '退出登录'},
      ],
      collapsed: false,
      menuData3: [{
        name: '学习区',
        icon: 'user',
        path: 'discussPost'
      }, {
        name: '讨论区',
        icon: 'team',
        path: 'anonymous'
      }, {
        name: '网站推荐',
        icon: 'file',
        path: 'Recommend',
        selected: true
      }]
    }
  },
  methods: {
    change(e) {
      this.$router.push({
        path: e.toString()
      })
    },
    test(e){
      console.log(e.content)
    }
  }
}
</script>
-->
