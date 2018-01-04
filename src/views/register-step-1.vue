<template>
  <div class="app-container">
    <section class="register-wrapper">
      <section class="logo-wrapper">
        <img src="/static/logo.png" class="logo">
      </section>

      <mt-field label="手机号" placeholder="请输入手机号" type="tel" class="mint-field-icon icon-mobile"></mt-field>
      <mt-field label="网站" placeholder="请输入密码" type="password" class="mint-field-icon icon-password"></mt-field>

      <mt-button type="primary" @click.native="nextStep" class="btn-submit">下一步</mt-button>
      
      <div class="tips">
        点击"下一步"，表示您同意
        <mt-button type="primary" @click.native="linkToAgreement" class="button-link">《工猫用户协议》</mt-button>
      </div>

      <div class="tips tips-login">
        已有账号，立即 
        <mt-button type="primary" @click.native="linkToLogin" class="button-link">登录</mt-button>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        logining: false,
      };
    },
    methods: {
      nextStep: function() {
        this.$router.push({ path: '/registerStep2' });
      },
      linkToLogin: function() {
        this.$router.push({ path: '/login' });
      },
      linkToAgreement: function() {
        this.$router.push({ path: '/agreement' });
      }
    }
  }
</script>

<style lang="scss" scoped>
  .register-wrapper{
    .logo-wrapper{
      height: 7.625rem;
      overflow: hidden;

      .logo{
        display: block;
        width: 4.425rem;
        margin: 2.3rem auto 0;
        border-radius: 50%;
      }
    }

    .btn-submit{
      margin-top: 2rem;
    }

    .tips{
      margin-top: 0.9rem;
      text-align: center;
      font-size: 0.65rem;
      color: #aaa;

      .button-link{
        color: #a1c4fd;
      }

      &.tips-login{
        margin-top: 2rem;
      }
    }
  }

</style>