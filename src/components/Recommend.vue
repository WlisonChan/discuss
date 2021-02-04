<template>
<div>
  <v-header :style="{background:'#fff',fontSize:'large'}">
    <v-tag color="cyan-inverse">推荐学习网站</v-tag>
    </v-header>
  <v-content :style="{padding:'10px'}">
    <div class="tile" :style="{margin:'20px'}">
      <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1041087881,3157133186&fm=26&gp=0.jpg" alt=""/>
      <div class="text">
        <h1 ></h1>
        <h2 class="animate-text">leetCode网站</h2>
        <p class="animate-text" :style="{color:'black'}">面试中的算法题出处</p>
        <div class="dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    <div class="tile" :style="{margin:'20px'}">
      <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1041087881,3157133186&fm=26&gp=0.jpg" alt=""/>
      <div class="text">
        <h1 ></h1>
        <h2 class="animate-text">leetCode网站</h2>
        <p class="animate-text" :style="{color:'black'}">面试中的算法题出处</p>
        <div class="dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </v-content>
  <v-footer></v-footer>
</div>
</template>

<script>
export default {
  name: "Recommend"
}
</script>

<style scoped>
.tile{
  width:200px;
  height:200px;
  margin:10px;
  background-color:#99aeff;
  display:inline-block;
  background-size:cover;
  position:relative;
  cursor:pointer;
  transition: all 0.4s ease-out;
  box-shadow: 0px 35px 77px -17px rgba(0,0,0,0.44);
  overflow:hidden;
  color:white;
  font-family:'Microsoft YaHei',sans-serif;
}
.tile img{
  height:100%;
  width:100%;
  position:absolute;
  top:0;
  left:0;
  z-index:0;
  transition: all 0.4s ease-out;
}

.tile .text{
  z-index:99;
  position:absolute;
  padding:30px;
  height:calc(100% - 60px);
}
.tile h1{
  font-weight:300;
  margin:0;
  text-shadow: 2px 2px 10px rgba(0,0,0,0.3);
}
.tile h2{
  font-weight:100;
  margin:20px 0 0 0;
  font-style:italic;
  transform: translateX(200px);
}
.tile p{
  font-weight:300;
  margin:20px 0 0 0;
  line-height: 25px;
  transform: translateX(-200px);
  transition-delay: 0.2s;
}
.animate-text{
  opacity:0;
  transition: all 0.6s ease-in-out;
}
.tile:hover{
  box-shadow: 0px 35px 77px -17px rgba(0,0,0,0.64);
  transform:scale(1.05);
}
.tile:hover img{
  opacity: 0.2;
}
.tile:hover .animate-text{
  transform:translateX(0);
  opacity:1;
}
</style>
