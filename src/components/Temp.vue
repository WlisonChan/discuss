<template>
  <div id="nav-tab">
    <div class="nav-tab-item" :class="{'active':activeIndex == index}" v-for="(item,index) in items"
         @click="activeIndex = index">
      <i :class="['nav-tab-item_icon','iconfont',item.icon]"></i>
      <p class="nav-tab-item_label">{{ item.label }}</p>
    </div>
    <div class="nav-tab-overlay" :style="{'left':activeIndex * 130 + 'px'}"></div>
  </div>
</template>

<script>
export default {
  name: "Temp",
  el: '#nav-tab',
  data() {
    return {
      items: [
        {icon: 'icon-shouye', label: '首页'},
        {icon: 'icon-guanzhu', label: '关注'},
        {icon: 'icon-faxian', label: '发现'},
        {icon: 'icon-xiaoxizhongxin', label: '消息中心'},
      ],
      activeIndex: 0,
    }
  },
}
</script>

<style scoped>

</style>
