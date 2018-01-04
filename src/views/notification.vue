<template>
  <div class="app-container">
    <section class="notification-wrapper">
      <div class="block-content">
        <mt-cell title="03-01" label="关于XXX的通知" is-link to="/notificationDetail/1"></mt-cell>
        <mt-cell title="03-02" label="关于XXX的通知" is-link to="/notificationDetail/2"></mt-cell>
        <mt-cell title="03-03" label="关于XXX的通知" is-link to="/notificationDetail/3"></mt-cell>
        <mt-cell title="03-04" label="关于XXX的通知" is-link to="/notificationDetail/4"></mt-cell>
        <mt-cell title="03-05" label="关于XXX的通知" is-link to="/notificationDetail/5"></mt-cell>
      </div>
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
</style>

<style lang="scss">
  .notification-wrapper{
    .block-content{
      .mint-cell{
        .mint-cell-wrapper{
          .mint-cell-title{
            padding: 0.6rem 0 0.7rem;
            .mint-cell-text{
              font-size: 0.65rem;
              line-height: 0.9rem;
              color: #666;
            }

            .mint-cell-label{
              margin-top: 0.25rem;
              font-size: 0.75rem;
              line-height: 1.05rem;
              color: #333;
            }
          }
        }
      }
    }
  }

</style>