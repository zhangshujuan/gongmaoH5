<template>
  <div class="app-container">
    <section class="register-wrapper">
      <section class="logo-wrapper">
        <h2>请完善个人信息</h2>
      </section>
      
      <mt-field label="真实姓名" placeholder="请输入您的真实姓名" type="tel" class="mint-field-icon icon-user"></mt-field>
      <mt-field label="身份证号码" placeholder="请填写身份证号码" type="tel" class="mint-field-icon icon-idcards"></mt-field>

      <mt-button type="primary" @click.native="handleSubmit" class="btn-submit">完成</mt-button>
    </section>
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
        let instance = Toast({
          message: '注册成功'
        });

        setTimeout(() => {
          instance.close();
          this.$router.push({ path: '/login' });
        }, 2000);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .register-wrapper{
    .logo-wrapper{
      height: 5rem;
      overflow: hidden;

      h2{
        margin-top: 2.5rem;
        font-size: 0.9rem;
        line-height: 1.35rem;
        text-align: center;
        color: #a1c4fd;
      }
    }

    .btn-submit{
      margin-top: 2rem;
    }
  }

</style>