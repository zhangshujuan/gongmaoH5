<template>
  <div class="app-container">
    <section class="bank-wrapper">
      <img src="/static/bank/gongshang.png" class="bank-logo">

      <h1 class="bank-name">工商银行</h1>

      <h2 class="bank-code">2356 **** **** 2356</h2>

      <mt-button type="primary" @click.native="" class="btn-bankUnBind">解除绑定</mt-button>
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
      
    }
  }
</script>


<style lang="scss" scoped>
  .bank-wrapper{
    .bank-logo{
      display: block;
      width: 3rem;
      height: 3rem;
      margin: 2.75rem auto 0;
    }
    
    .bank-name,
    .bank-code{
      font-size: 0.75rem;
      color: #333;
      text-align: center;
      line-height: 1.05rem;
    }

    .bank-name{
      margin-top: 1.1rem;
    }

    .bank-code{
      margin-top: 0.2rem;
    }

    .btn-bankUnBind{
      margin: 3rem auto 1rem;
    }
  }

</style>