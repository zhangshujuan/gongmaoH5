<template>
  <div class="app-container">

    <div class="login-bg">
      <section class="logo-wrapper">
        <img src="/static/logo.png" class="logo">
      </section>

      <section class="login-wrapper">
        <mt-field label="手机号" placeholder="请输入手机号" type="tel" class="mint-field-icon icon-mobile"></mt-field>
        <mt-field label="网站" placeholder="请输入密码" type="password" class="mint-field-icon icon-password"></mt-field>

        <mt-button type="primary" @click.native="handleSubmit" class="btn-submit">登录</mt-button>
        
        <div class="tips">
          <mt-button type="primary" @click.native="linkToForget" class="button-link">忘记密码</mt-button>
        </div>

        <div class="line"></div>
        <mt-button type="primary" @click.native="linkToRegister" class="btn-register">注册</mt-button>
      </section>
    </div>

  </div>
</template>

<script>
  import { Toast } from 'mint-ui';

  export default {
    data() {
      return {
        logining: false,
      };
    },
    methods: {
      handleSubmit: function() {
        this.$router.push({ path: '/salary' });

        Toast({
          message: '登录成功',
          position: 'bottom',
          duration: 2000
        });
      },
      linkToForget: function() {
        this.$router.push({ path: '/forgetStep1' });
      },
      linkToRegister: function() {
        this.$router.push({ path: '/registerStep1' });
      }
    }
  }
</script>

<style lang="scss" scoped>
  .login-bg{
    background: url('/static/loginbg.png') no-repeat center top;
    background-size: 100% auto;
  }

  .logo-wrapper{
    height: 10rem;
    overflow: hidden;

    .logo{
      display: block;
      width: 4.425rem;
      margin: 2.3rem auto 0;
      border-radius: 50%;
    }
  }
  
  .login-wrapper{
    background-color: #fff;

    .btn-submit{
      margin-top: 2rem;
    }

    .tips{
      margin-top: 0.9rem;
      text-align: center;
    }

    .line{
      height: 0.425rem;
      margin: 3rem 0 1.5rem 0;
      background: url('/static/line.png') no-repeat center center;
      background-size: auto 100%;
    }

    .btn-register{
      margin-bottom: 2rem;
    }
  }

</style>