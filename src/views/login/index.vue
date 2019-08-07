<template>
  <div class="container">
    <el-card class="box-card">
      <!-- logo -->
      <img src="../../assets/images/logo_index.png" alt />
      <el-form ref="loginForm" :model="loginForm" :rules="loginRules" status-icon>
        <el-form-item prop="mobile">
          <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input
            v-model="loginForm.code"
            placeholder="请输入验证码"
            style="width:237px;margin-right:10px"
          ></el-input>
          <el-button>发送验证码</el-button>
        </el-form-item>
        <el-form-item>
          <!-- `checked` 为 true 或 false -->
          <el-checkbox :value="true">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width:100%" @click="login()">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    const checkMobile = (rule, value, callback) => {
      if (!/^1[3-9]\d{9}/.test(value)) {
        return callback(new Error('手机号码格式不正确'))
      }
      callback()
    }
    return {
      // 表单数据对象
      loginForm: {
        mobile: '',
        code: ''
      },
      // 表单校验规则对象
      loginRules: {
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          // validator:自定义校验规则
          { validator: checkMobile, trigger: 'change' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { len: 6, message: '请输入6位验证码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          // alert('submit')
          this.$http
            .post('http://ttapi.research.itcast.cn/mp/v1_0/authorizations',
              this.loginForm)
            .then(res => {
              // console.log(res.data)
              this.$router.push('/')
            })
            .catch(() => {
              this.$message.error('手机号或验证码错误')
            })
        }
      })
    }
  }
}
</script>

<!-- scoped 仅仅在当前组件下生效 -->
<style scoped lang='less'>
.container {
  width: 100%;
  height: 100%;
  position: absolute;
  // 背景图尺寸 - cover 等比缩放铺满容器，多余被裁剪
  // - contain 等比缩放完全显示在当前页面，可能会存在留白
  background: url(../../assets/images/login_bg.jpg) no-repeat center / cover;
  .box-card {
    width: 400px;
    height: 350px;
    // margin: 0 auto;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    img {
      width: 200px;
      display: block;
      margin: 6px auto;
    }
  }
}
</style>
