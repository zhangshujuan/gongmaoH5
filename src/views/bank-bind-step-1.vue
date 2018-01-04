<template>
  <div class="app-container">
    <section class="bank-wrapper">
      <div class="tips">请绑定您本人的储蓄卡</div>

      <div class="bind-wrapper">
        <mt-field label="持卡人" placeholder="请输入持卡人姓名" class="mint-field-text"></mt-field>
        <mt-field label="卡号" placeholder="请输入银行卡号" type="number" class="mint-field-text"></mt-field>
        <mt-field label="开户行" placeholder="请选择" class="mint-field-text mint-field-select">
          <select class="bank-select">
            <option value="1">工商银行</option>
            <option value="1">工商银行</option>
            <option value="1">工商银行</option>
            <option value="1">工商银行</option>
            <option value="1">工商银行</option>
          </select>
        </mt-field>
        <mt-field label="手机号" placeholder="请输入银行预留手机号" type="tel" class="mint-field-text"></mt-field>
      </div>

      <mt-button type="primary" @click.native="nextStep" class="btn-nextStep">下一步</mt-button>
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