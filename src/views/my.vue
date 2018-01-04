<template>
  <div class="app-container">
    <section class="myinfo">
      <img src="/static/logo.png" class="avatar"></a>

      <p class="user">张某某</p>
      <p class="mobile">13575458888</p>
      <p class="idcards">(330125********3512)</p>
    </section>

    <section class="my-wrapper">
      <div class="block-content">
        <mt-cell title="提现" is-link to="/withdraw"></mt-cell>
        <mt-cell title="账户明细" is-link to="/balance"></mt-cell>
      </div>

      <div class="block-content">
        <mt-cell title="通知公告" is-link to="/notification">
          <span class="icon-red"></span>
        </mt-cell>
        <mt-cell title="银行卡" is-link to="/bank"></mt-cell>
        <mt-cell title="合同" is-link></mt-cell>
      </div>

      <div class="block-content">
        <mt-cell title="修改密码" is-link to="/forgetStep2"></mt-cell>
        <mt-cell title="在线咨询" is-link></mt-cell>
        <mt-cell title="关于我们" is-link to="/aboutus"></mt-cell>
      </div>

      <mt-button type="primary" @click.native="handleLoginOut" class="btn-loginout">退出登录</mt-button>
    </section>

    <section class="tabnavbar">
      <mt-button type="primary" @click.native="linkToSalary" class="tabnavbar-item">工资</mt-button>
      <mt-button type="primary" class="tabnavbar-item tabnavbar-item-selected">个人中心</mt-button>
    </section>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui';

  export default {
    data() {
      return {
        
      };
    },
    methods: {
      handleLoginOut: function() {
        Toast({
          message: '注销成功',
          position: 'bottom',
          duration: 2000
        });
      },
      linkToSalary: function() {
        this.$router.push({ path: '/salary' });
      }
    }
  }
</script>

<style lang="scss" scoped>
  .app-container{
    background: #f2f2f2;
  }

  .myinfo{
    position: relative;
    height: 8.5rem;
    padding-left: 6.75rem;
    background: url('/static/mybg.png') no-repeat center center;
    background-size: 100% 100%;
    overflow: hidden;

    .avatar{
      position: absolute;
      z-index: 3;
      top: 2.25rem;
      left: 1.375rem;
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      background: #aaa;
    }

    .user{
      margin-top: 2.625rem;
      font-size: 0.75rem;
      color: #333;
      line-height: 1.05rem;
    }

    .mobile{
      margin-top: 0.675rem;
      font-size: 0.75rem;
      color: #333;
      line-height: 1.05rem;
    }

    .idcards{
      margin-top: 0.125rem;
      font-size: 0.5rem;
      color: #666;
      line-height: 0.75rem;
    }
  }
  
  .my-wrapper{
    overflow: hidden;

    .block-content{
      margin-top: 0.5rem;

      .mint-cell{
        .mint-cell-wrapper{
          .mint-cell-value{
            .icon-red{
              width: 0.4rem;
              height: 0.4rem;
              border-radius: 50%;
              background-color: #ee5164;
            }
          }
        }
      }
    }

    .btn-loginout{
      width: 92%;
      margin: 2rem auto 4rem;
      background: #ddd !important;
    }
  }

</style>