<template>
  <div class="app-container">
    <section class="withdraw-wrapper">
      <p class="tips">您的提现申请已提交成功<br />预计将在1个工作日后到账</p>

      <mt-button type="primary" @click.native="linkToMy" class="btn-ensure">确认</mt-button>
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
      linkToMy: function() {
        this.$router.push({ path: '/my' });
      }
    }
  }
</script>


<style lang="scss" scoped>
  .withdraw-wrapper{
    .tips{
      margin-top: 6.75rem;
      font-size: 0.75rem;
      color: #999;
      line-height: 1.2rem;
      text-align: center;
    }

    .btn-ensure{
      margin: 1.6rem auto 1rem;
    }
  }

</style>