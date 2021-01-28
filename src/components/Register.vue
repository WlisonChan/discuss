<template>
  <div>
    <v-form direction="horizontal" :model="customForm" :rules="customRules" ref="customRuleForm">
      <v-form-item label="用户名" :label-col="labelCol" :wrapper-col="wrapperCol">
        <v-input type="text" placeholder="请输入账号" size="large"></v-input>
      </v-form-item>
      <v-form-item label="密码" :label-col="labelCol" :wrapper-col="wrapperCol" prop="pass" has-feedback>
        <v-input type="password" size="large" v-model="customForm.pass"></v-input>
      </v-form-item>
      <v-form-item label="确认密码" :label-col="labelCol" :wrapper-col="wrapperCol" prop="checkPass" has-feedback>
        <v-input type="password" size="large" v-model="customForm.checkPass"></v-input>
      </v-form-item>
      <v-form-item label="邮箱" :label-col="labelCol" :wrapper-col="wrapperCol" prop="email"
                   :rules="[
                { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
            ]"
      >
        <v-input size="large" v-model="dynamicValidateForm.email"></v-input>
      </v-form-item>
      <v-form-item label="邮箱验证码" :label-col="labelCol" :wrapper-col="wrapperCol">
        <v-col class="demo-col demo-col-4" span="16">
          <v-input placeholder="请输入验证码" class="demo-col demo-col-4" span="16"></v-input>
        </v-col>
        <v-col class="demo-col demo-col-5" span="8">
          <v-button class="demo-col demo-col-5" span="8">发送邮件</v-button>
        </v-col>
      </v-form-item>

      <v-form-item :wrapper-col="{offset:6, span: 14 }">
        <button type="submit" class="submit_btn" id="btnSubmit">注册</button>
      </v-form-item>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    var checkAge = (rule, value, callback) => {
      var age = parseInt(value, 10);

      setTimeout(() => {
        if (!Number.isInteger(age)) {
          callback(new Error('请输入数字值'));
        } else {
          if (age < 18) {
            callback(new Error('必须年满18岁'));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.customForm.checkPass !== '') {
          this.$refs.customRuleForm.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.customForm.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      dynamicValidateForm: {
        domains: [{
          value: ''
        }],
        email: ''
      },
      labelCol: {
        span: 6
      },
      wrapperCol: {
        span: 14
      },
      customForm: {
        pass: '',
        checkPass: '',
        age: ''
      },
      customRules: {
        pass: [{
          required: true,
          message: '请输入密码'
        },
          {
            validator: validatePass
          }
        ],
        checkPass: [{
          required: true,
          message: '请再次输入密码'
        },
          {
            validator: validatePass2
          }
        ],
        age: [{
          required: true,
          message: '请填写年龄'
        },
          {
            validator: checkAge
          }
        ]
      },
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  }
}


</script>

<style scoped>
.submit_btn{
  width: 92%;
  box-shadow: none;
  border:0;
  line-height: 45px;
  font-size: 15px;
  display: block;
  margin:20px 0;
  color: #fff;
  background-color: #0f88eb;
  border-radius: 3px;
}
</style>
