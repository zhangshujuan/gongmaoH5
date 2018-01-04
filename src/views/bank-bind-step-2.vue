<template>
  <div class="app-container">
    <section class="bank-wrapper">
      <div class="tips">请输入手机接收到的验证码</div>

      <div class="bind-wrapper">
        <mt-field label="验证码" placeholder="请输入验证码" type="number" class="mint-field-text">
          <mt-button type="primary" class="button-link btn-code">重发</mt-button>
        </mt-field>
      </div>

      <mt-button type="primary" @click.native="nextStep" class="btn-nextStep">完成绑定</mt-button>
    </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        
      };
    },
    methods: {
      nextStep: function() {
        this.$router.push({ path: '/bankBindStep2' });
      }
    }
  }
</script>

<style lang="scss" scoped>
  .app-container{
    background: #f2f2f2;
  }
</style>

<style lang="scss">
  .bank-wrapper{
    .tips{
      padding-left: 0.75rem;
      font-size: 0.65rem;
      color: #999;
      line-height: 2.5rem;
    }

    .bind-wrapper{
      background: #fff;
    }

    .btn-nextStep{
      margin: 1.85rem auto 1rem;
    }
  }

</style>