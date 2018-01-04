<template>
  <div class="app-container">
    <section class="notification-wrapper">
      <h1 class="title">关于xxx的通知</h1>
      <h2 class="date">03-05</h2>
      <div class="detail">
        <p>通知，是向特定受文对象告知或转达有关事项或文件，让对象知道或执行的公文。通报的含义：通报适用于表彰先进，批评错误，传达重要精神或情况。通报的特点：1、内容的真实性。真实是通报的生命。通报的任何情况、事实都必须是真实的，不能有差错。2、目的的告知性。</p>
        <p><br /></p>
        <p>通知适用于批转下级机关的公文，转发上级机关和不相隶属机关的公文；发布规章：传达要求下级机关办理和有关单位需要周知或共同执行的事项，任免和聘用干部。</p>
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
  .notification-wrapper{
    overflow: hidden;

    .title{
      margin-top: 1.3rem;
      font-size: 0.9rem;
      text-align: center;
      color: #333;
      line-height: 1.8rem;
    }

    .date{
      font-size: 0.65rem;
      text-align: center;
      color: #666;
      line-height: 1.2rem;
    }

    .detail{
      margin-top: 0.9rem;
      padding: 0 1.5rem;

      p{
        font-size: 0.65rem;
        color: #333;
        line-height: 1.2rem;
      }
    }
  }

</style>