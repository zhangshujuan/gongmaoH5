<template>
  <div class="app-container">
    <section class="balance-wrapper">
      <article class="list-item flex-h">
        <div class="date">03-07</div>
        <div class="flex-a-i">
          <p class="operate">提现</p>
          <p class="source">招行 0527</p>
        </div>
        <div class="money state-red">-7500.0</div>
      </article>

      <article class="list-item flex-h">
        <div class="date">03-06</div>
        <div class="flex-a-i">
          <p class="operate">发薪</p>
          <p class="source">杭州工猫</p>
        </div>
        <div class="money state-green">+7500.0</div>
      </article>

      <article class="list-item flex-h">
        <div class="date">03-07</div>
        <div class="flex-a-i">
          <p class="operate">提现</p>
          <p class="source">招行 0527</p>
        </div>
        <div class="money state-red">-7500.0</div>
      </article>

      <article class="list-item flex-h">
        <div class="date">03-06</div>
        <div class="flex-a-i">
          <p class="operate">发薪</p>
          <p class="source">杭州工猫</p>
        </div>
        <div class="money state-green">+7500.0</div>
      </article>
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
  .app-container{
    background: #f2f2f2;
  }

  .balance-wrapper{
    .list-item{
      height: 3rem;
      padding: 0 0.75rem;
      background-color: #fff;
      background-image: -webkit-linear-gradient(#f0f0f0, #f0f0f0 50%, transparent 50%);
      background-image: -o-linear-gradient(#f0f0f0, #f0f0f0 50%, transparent 50%);
      background-image: linear-gradient(#f0f0f0, #f0f0f0 50%, transparent 50%);
      background-size: 120% 1px;
      background-repeat: no-repeat;
      background-position: top left;
      background-origin: content-box;

      &:first-child{
        background-image: none;
      }

      .date{
        width: 4rem;
        font-size: 0.9rem;
        color: #333;
        line-height: 3rem;
      }

      .flex-a-i{
        .operate{
          margin-top: 0.55rem;
          font-size: 0.75rem;
          color: #333;
          line-height: 1.05rem;
        }

        .source{
          margin-top: 0.2rem;
          font-size: 0.5rem;
          color: #666;
          line-height: 0.75rem;
        }
      }

      .money{
        font-size: 0.75rem;
        line-height: 3rem;

        &.state-green{
          color: #009245;
        }

        &.state-red{
          color: #ee5164;
        }
      }
    }
  }

</style>