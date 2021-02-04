<template>
  <div>
    <v-col class="demo-col demo-col-1" span="8">
      <div id="msgBox">
        <form>
          <h2>来 , 说说你在做什么 , 想什么</h2>
          <div>
            <input id="userName" class="f-text" value="" v-model="uName"/>
            <p id="face" >
              <img
                :style="{borderRadius:'100%'}"
                :src="item.url"
                v-for="item in imgData"
                :class="item.class"
                @click="turnOn(item,imgData)"/>
            </p>
          </div>
          <div><textarea id="conBox" class="f-text" v-model="textMsg"></textarea></div>
          <div class="tr">
            <p>
              <span class="countTxt">还能输入</span><strong class="maxNum">140</strong><span>个字</span>

              <input id="sendBtn" type="button" value="" title="快捷键 Ctrl+Enter" @click="broadcast()"/>
            </p>
          </div>
        </form>
        <div class="list">
          <h3><span>大家在说</span></h3>
          <ul>
            <li v-for="item in liData" :class="item.liClass"
                @mouseenter="liHover(true,item)" @mouseleave="liHover(false,item)" >
              <div class="userPic" :style="{borderRadius:'100%'}">
                <img :style="{borderRadius:'100%'}" :src="item.userPic"/>
              </div>
              <div class="content">
                <div class="userName"><a href="javascript:;" v-text="item.userName"></a>:</div>
                <div class="msgInfo" v-text="item.msgInfo"></div>
                <div class="times">
                  <span>07月05日 15:14</span>
                  <a href="javascript:;" :style="{display:'block'}" v-show="item.liClass" @click="deleteLi(item)">删除</a>
                </div>
              </div>
            </li>

          </ul>
        </div>
      </div>
    </v-col>
    <v-col class="demo-col demo-col-1" span="8"></v-col>
  </div>

</template>

<script>
export default {
  name: "Anonymous",
  data() {
    return {
      uName:'',
      textMsg:'',
      imgData:[
        {url:require('../assets/img/face1.gif'),class:'current'},
        {url:require('../assets/img/face2.gif'),class:''},
        {url:require('../assets/img/face3.gif'),class:''},
        {url:require('../assets/img/face4.gif'),class:''},
        {url:require('../assets/img/face5.gif'),class:''},
        {url:require('../assets/img/face6.gif'),class:''},
        {url:require('../assets/img/face7.gif'),class:''},
        {url:require('../assets/img/face8.gif'),class:''},
      ],
      liData:[
        {
          userPic:require('../assets/img/face.gif'),
          userName:'胡雨霏',
          msgInfo:'我代码贼6，还会灰',
          liClass:''
        },
      ],
      activeIndexSimple: ['1'],
    }
  },
  methods:{
    turnOn(item,items){
      for(let e of items){
        e.class=''
      }
      item.class='current';
    },
    liHover(e,item){
      if (e){
        item.liClass = 'hover'
      }else {
        item.liClass = ''
      }
    },
    broadcast(){
      let temp =''
      for(let e of this.imgData){
        if (e.class === 'current') {
          temp = e.url
        }
      }
      let list = {
        userPic:temp,
        userName:this.uName,
        msgInfo:this.textMsg,
        liClass:''
      }
      this.liData.push(list)
    },
    deleteLi(item){
      for(let e of this.liData){
        if (e===item){
          this.liData.splice(this.liData.indexOf(item),1)
        }
      }
    }
  }
}
</script>

<style scoped>
@import "../assets/css/aonymous.css";
</style>
