<template>
  <div id="login">
    <form method="post" action="">
      <ul class="group_input">
        <v-form-item label="用户名" :label-col="labelCol" :wrapper-col="wrapperCol">
          <v-input type="text" placeholder="请输入账号" size="large"></v-input>
        </v-form-item>
        <v-form-item label="密码" :label-col="labelCol" :wrapper-col="wrapperCol">
          <v-input type="password" placeholder="请输入密码" size="large"></v-input>
        </v-form-item>
      </ul>
      <button type="submit" class="submit_btn" id="btnSubmit">登录</button>
    </form>
    <div class="states">
      <span class="left"><a href="javascript:;">手机验证码登陆</a></span>
      <span class="right"><a href="javascript:;">无法登陆？</a></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login"
}
</script>

<style scoped>
@import "../assets/css/base.css";
@import "../assets/css/style.css";
@import "../assets/css/login.css";

</style>
