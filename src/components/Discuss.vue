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
        {content: '1st item'},
        {content: '个人信息'},
        {content: '退出登录'},
      ],
      collapsed: false,
      menuData3: [{
        name: 'User',
        icon: 'user',
        path: 'discussPost'
      }, {
        name: 'Team',
        icon: 'team',
        path: 'login'
      }, {
        name: 'File',
        icon: 'file',
        path: 'register',
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
