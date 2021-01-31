<template>
  <div :style="{background: '#ECECEC',padding: '5px',minHeight:'500px',position:'relative'}">
    <v-header :style="{background: '#fff'}">
      <v-tag color="cyan-inverse">默认</v-tag>丨
      <v-tag color="cyan">最新发表</v-tag>丨
      <v-tag color="cyan">最热</v-tag>
    </v-header>
    <v-content>
      <v-row>
        <v-col :span="12" style="padding: 5px">
          <div :to="{name:'postDetail'}">
            <v-card :bordered="false" style="padding: 0px">
              <v-col class="demo-col demo-col-2" span="2">
                <v-avatar size="large" icon="user" src="http://q1.qlogo.cn/g?b=qq&nk=840454995&s=640"></v-avatar>
              </v-col>
              <v-col class="demo-col demo-col-2 title" span="22">
                <a>春招如何备战？21届最新校招经验分享（23个岗位方向） 置顶</a>
              </v-col>
              <v-col class="demo-col demo-col-2 msg" span="22" :style="{marginTop:'5px'}">
                <a class="name">William </a> &nbsp&nbsp于&nbsp&nbsp <span class="time">2021-01-10</span> 发表
              </v-col>
            </v-card>
          </div>
        </v-col>

        <v-col :span="12" style="padding: 5px">
          <router-link :to="{name:'postDetail'}">
            <v-card :bordered="false" style="padding: 0px">
              <v-col class="demo-col demo-col-2" span="2">
                <v-avatar size="large" icon="user"></v-avatar>
              </v-col>
              <v-col class="demo-col demo-col-2" span="22">
                春招如何备战？21届最新校招经验分享（23个岗位方向） 置顶
              </v-col>
              <v-col class="demo-col demo-col-2" span="22">
                晗江雪 2021-01-10 发表在 [站内公告] 10天前回复
              </v-col>
            </v-card>
          </router-link>
        </v-col>

        <v-col :span="12" style="padding: 5px">
          <router-link :to="{name:'postDetail'}">
            <v-card :bordered="false" style="padding: 0px">
              <v-col class="demo-col demo-col-2" span="2">
                <v-avatar size="large" icon="user"></v-avatar>
              </v-col>
              <v-col class="demo-col demo-col-2" span="22">
                春招如何备战？21届最新校招经验分享（23个岗位方向） 置顶
              </v-col>
              <v-col class="demo-col demo-col-2" span="22">
                晗江雪 2021-01-10 发表在 [站内公告] 10天前回复
              </v-col>
            </v-card>
          </router-link>
        </v-col>

        <v-col :span="12" style="padding: 5px">
          <router-link :to="{name:'postDetail'}">
            <v-card :bordered="false" style="padding: 0px">
              <v-col class="demo-col demo-col-2" span="2">
                <v-avatar size="large" icon="user"></v-avatar>
              </v-col>
              <v-col class="demo-col demo-col-2" span="22">
                春招如何备战？21届最新校招经验分享（23个岗位方向） 置顶
              </v-col>
              <v-col class="demo-col demo-col-2" span="22">
                晗江雪 2021-01-10 发表在 [站内公告] 10天前回复
              </v-col>
            </v-card>
          </router-link>
        </v-col>

      </v-row>
    </v-content>
    <v-footer :style="{bottom:'0px',textAlign:'center'}">
      <v-pagination show-quick-jumper :total="500"></v-pagination>
    </v-footer>
  </div>
</template>
<script>
export default {
  name: 'DiscussPost',
}
</script>
<style>
.name {
  color: red;
}
.title {
  font-size: small;
  font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
}
</style>
