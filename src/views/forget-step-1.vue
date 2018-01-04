<template>
  <div class="app-container">
    <section class="register-wrapper">
      <section class="logo-wrapper">
        <img src="/static/logo.png" class="logo">
      </section>
      
      <mt-field label="手机号" placeholder="请输入手机号" type="tel" class="mint-field-icon icon-mobile"></mt-field>
      <mt-field label="验证码" placeholder="请输入验证码" type="tel" class="mint-field-icon icon-code">
        <mt-button type="primary" class="button-link btn-code">重发</mt-button>
      </mt-field>

      <mt-button type="primary" @click.native="nextStep" class="btn-submit">下一步</mt-button>
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
        this.$router.push({ path: '/forgetStep2' });
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
  }

</style>