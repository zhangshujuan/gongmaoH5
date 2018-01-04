<template>
  <div class="app-container">
    <section class="salary-balance">
      <p class="text">账户余额</p>
      <p class="money">14056.2</p>
    </section>

    <section class="salary-list">
      <article class="list-item">
        <div class="item-header">
          <h1 class="title">2014年03月工资条</h1>
          <div class="flex-h">
            <p class="company flex-a-i">杭州工猫科技有限公司</p>
            <p class="money">4921.0</p>
          </div>
        </div>

        <div class="item-footer">
          <div class="detail">
            <div class="detail-item flex-h">
              <p class="company flex-a-i">应发工资</p>
              <p class="money">5000.0</p>
            </div>
            <div class="detail-item flex-h">
              <p class="company flex-a-i">餐补</p>
              <p class="money">+200.0</p>
            </div>
            <div class="detail-item flex-h">
              <p class="company flex-a-i">个人所得税</p>
              <p class="money">-212.5</p>
            </div>
          </div>
          <div class="toolbar">
            <mt-button type="primary" @click.native="" class="button-link">对工资条有疑问？</mt-button>
            <mt-button type="primary" @click.native="" class="btn-toggle"></mt-button>
          </div>
        </div>
      </article>

      <article class="list-item">
        <div class="item-header">
          <h1 class="title">2014年03月工资条</h1>
          <div class="flex-h">
            <p class="company flex-a-i">杭州工猫科技有限公司</p>
            <p class="money">4921.0</p>
          </div>
        </div>

        <div class="item-footer" style="display: none;">
          <div class="detail">
            <div class="detail-item flex-h">
              <p class="company flex-a-i">应发工资</p>
              <p class="money">5000.0</p>
            </div>
            <div class="detail-item flex-h">
              <p class="company flex-a-i">餐补</p>
              <p class="money">+200.0</p>
            </div>
            <div class="detail-item flex-h">
              <p class="company flex-a-i">个人所得税</p>
              <p class="money">-212.5</p>
            </div>
          </div>
          <div class="toolbar">
            <mt-button type="primary" @click.native="" class="button-link">对工资条有疑问？</mt-button>
            <mt-button type="primary" @click.native="" class="btn-toggle"></mt-button>
          </div>
        </div>
      </article>
    </section>

    <section class="tabnavbar">
      <mt-button type="primary" class="tabnavbar-item tabnavbar-item-selected">工资</mt-button>
      <mt-button type="primary" @click.native="linkToMy" class="tabnavbar-item">个人中心</mt-button>
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
  .app-container{
    background: #f2f2f2;
  }

  .salary-balance{
    height: 7.75rem;
    background: #fff;
    overflow: hidden;

    .text{
      margin-top: 2.075rem;
      font-size: 0.75rem;
      color: #aaa;
      line-height: 1.05rem;
      text-align: center;
    }

    .money{
      margin-top: 0.75rem;
      font-size: 1.5rem;
      color: #ee5164;
      line-height: 2rem;
      text-align: center;
    }
  }

  .salary-list{
    overflow: hidden;
    padding-bottom: 2.95rem;

    .list-item{
      background: #fff;
      margin-top: 0.5rem;

      .item-header{
        padding: 0.7rem 0.75rem 0.4rem;

        .title{
          font-size: 0.75rem;
          color: #333;
          line-height: 1.05rem;
        }

        .flex-h{
          .company{
            font-size: 0.6rem;
            color: #333;
            line-height: 1.35rem;
          }

          .money{
            font-size: 0.9rem;
            color: #ee5164;
            line-height: 1.35rem;
          }
        }
      }

      .item-footer{
        padding: 0 0.75rem;

        .detail{
          padding: 0.5rem 0 0 0;

          .detail-item{
            padding: 0.3rem 0;

            .company,
            .money{
              font-size: 0.6rem;
              color: #666;
              line-height: 0.9rem;
            }
          }
        }

        .toolbar{
          position: relative;
          padding: 0.75rem;
          font-size: 0.6rem;
          line-height: 0.9rem;
          text-align: right;

          .button-link{
            color: #a1c4fd;
          }

          .btn-toggle{
            position: absolute;
            z-index: 3;
            top: 0.75rem;
            left: 50%;
            margin-left: -0.45rem;
            padding: 0;
            width: 0.9rem;
            height: 0.9rem;
            background: url('/static/icon/shangla.png') no-repeat center center;
            background-size: 100% 100%;
            border-radius: 50%;
          }
        }
      }
    }
  }
</style>