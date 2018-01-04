<template>
  <div class="app-container">
    <section class="bank-wrapper">
      <div class="block-content">
        <mt-cell title="工商银行" label="**** **** **** 2356" is-link to="/bankDetail/1">
          <img slot="icon" src="/static/bank/gongshang.png">
        </mt-cell>
        <mt-cell title="工商银行" label="**** **** **** 2356" is-link to="/bankDetail/2">
          <img slot="icon" src="/static/bank/gongshang.png">
        </mt-cell>
        <mt-cell title="工商银行" label="**** **** **** 2356" is-link to="/bankDetail/3">
          <img slot="icon" src="/static/bank/gongshang.png">
        </mt-cell>
        <mt-cell title="工商银行" label="**** **** **** 2356" is-link to="/bankDetail/4">
          <img slot="icon" src="/static/bank/gongshang.png">
        </mt-cell>
        <mt-cell title="工商银行" label="**** **** **** 2356" is-link to="/bankDetail/5">
          <img slot="icon" src="/static/bank/gongshang.png">
        </mt-cell>
        <mt-cell title="工商银行" label="**** **** **** 2356" is-link to="/bankDetail/6">
          <img slot="icon" src="/static/bank/gongshang.png">
        </mt-cell>
      </div>

      <mt-button type="primary" @click.native="linkToBankBind" class="btn-bankBind">绑定银行卡</mt-button>
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
      linkToBankBind: function() {
        this.$router.push({ path: '/bankBindStep1' });
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
    .block-content{
      .mint-cell{
        .mint-cell-wrapper{
          .mint-cell-title{
            position: relative;
            height: 4rem;
            padding: 0 2.35rem;
            overflow: hidden;

            img{
              position: absolute;
              z-index: 3;
              top: 1.25rem;
              left: 0;
              width: 1.5rem;
              height: 1.5rem;
            }

            .mint-cell-text{
              display: block;
              margin-top: 0.95rem;
              font-size: 0.75rem;
              line-height: 1.05rem;
              color: #333;
            }

            .mint-cell-label{
              display: block;
              margin-top: 0.125rem;
              font-size: 0.75rem;
              line-height: 1.05rem;
              color: #333;
            }
          }
        }
      }
    }

    .btn-bankBind{
      width: 92%;
      margin: 2.5rem auto 1rem;
    }
  }

</style>