<template>
  <div class="app-container">
    <section class="withdraw-wrapper">
      

      <mt-button type="primary" @click.native="linkToSucc" class="btn-ensure">确认提现</mt-button>
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
      linkToSucc: function() {
        this.$router.push({ path: '/withdrawSucc' });
      }
    }
  }
</script>


<style lang="scss" scoped>
  .withdraw-wrapper{

    .btn-ensure{
      margin: 1.6rem auto 1rem;
    }
  }

</style>