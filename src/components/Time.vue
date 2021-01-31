<template>
  <div :style="{position: 'relative',right:'5px',width:'100%'}">
    <div class="clock_box">
      <div class="clock">
        <p id="time"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Time",
  mounted: function () {
    let time = document.querySelector("#time");
    this.timer = setInterval(() => {
      this.up(time)
    }, 1000);
  },
  data() {
    return {
      timer: ''
    }
  },
  methods: {
    up(time_el) {
      // 获取当前时间
      let date = new Date();
      // 获取时分秒
      let h = date.getHours();
      let m = date.getMinutes();
      let s = date.getSeconds();
      // 上午与下午
      let day_night = "AM";

      // 计算上午与下午
      if (h > 12) {
        h = h - 12;
        day_night = "PM";
      }

      // 如果时间小于10则前面补充0
      if (h < 10) {
        h = "0" + h;
      }
      if (m < 10) {
        m = "0" + m;
      }
      if (s < 10) {
        s = "0" + s;
      }

      // 拼接时间并且赋值给time元素的文本中，从而显示
      time_el.textContent = h + ":" + m + ":" + s + " " + day_night;

    }
  }
}
</script>

<style scoped>
html {
  font-size: 14px;
}

body {
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  display: flex;
  font-family: 'Montserrat', sans-serif, Arial, 'Microsoft Yahei';
}

.clock_box {
  position: relative;
  width: 100%;
  height: 45px;
  border-radius: 10px;
  background-image: linear-gradient(135deg, #c0ffff, #ffffff, #FFFF99);
  /* 居中 */
  display: flex;
  justify-content: center;
  align-items: center;
  animation: animate 4s linear infinite;
}

.clock p {
  font-size: 20px;
  font-weight: bold;
  color: transparent;
  letter-spacing: 2px;
  background-image: linear-gradient(135deg, #c0ffff, #ffffff, #FFFF99);
  /* text不是通用样式属性值 */
  background-clip: border-box;
  /* 这个是chrome */
  -webkit-background-clip: text;
}

.clock_box::after, .clock_box::before {
  position: absolute;
  content: "";
  /* 集成父级样式 */
  background-image: inherit;
  width: 100%;
  height: 100%;
  z-index: -1;
  border-radius: 10px;
  filter: blur(15px);
}

.clock_box::before {
  filter: blur(100px);
}

.clock {
  position: absolute;
  left: 10px;
  right: 10px;
  top: 10px;
  bottom: 10px;
  background-color: #2b2a2a;
  border-radius: 8px;
  /* 居中 */
  display: flex;
  justify-content: center;
  align-items: center;
}

@keyframes animate {
  100% {
    /* 色相变化 */
    filter: hue-rotate(360deg);
  }
}

</style>
