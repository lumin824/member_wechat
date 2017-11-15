<template>
  <div class="act" >
    <ul style="background-color:#fff;padding:8px;">
      <router-link v-for="o in list" to="/activeDetail" tag="li" style="padding-bottom:10px;border-bottom:1px solid #ddd;">
        <figure style="background:url('static/img/activeTest.jpg');height:2rem">
          <figcaption>
            <div style="flex:1;"></div>
            <div style="font-size:0.6em;background-color: rgba(0,0,0,0.6);color:#FFF; padding: 5px;">缤纷天地万圣市集距离开始时间已不足24小事。。。</div>
          </figcaption>
        </figure>
        <div class="time" style="border:1px solied;background;">
          <div style="font-size:0.6em;color:#999;">2017.09.14~2017.09.15</div>
          <div style="font-size:0.6em;color:#059CFF;">未签到</div>
        </div>
      </router-link> 
    </ul>
    <div style="text-align:center;width:100%">更多活动敬请期待...</div>
  </div>
</template>

<script>
  import  global from '../../../src/components/common/Global.vue'
  export  default {
    data() {
      return {
        list: [1,2,3,4,5,6]
      }
    }, 
    async mounted(){

      // const list = await this.$http.post('http://121.196.208.176:9001/activity')
      // console.log(list)
    }
  }
</script>
<style lang="less" scoped>
  .act{
      font-family:-apple-system-font, "Helvetica Neue", sans-serif

  }
  div ul li{
   margin-bottom: 0.1rem;


  }
  .time{
    display: flex;
    width: 90%;
    margin-left: 5%;
    justify-content: space-between;
    margin-top: 0.1rem;


  }
  li div h1{
    font-weight: normal;
    color:#999;
    font-size: 0.14rem;



  }
  figure img{
    width: 100%;
    height: 2rem;
  }
  figure figcaption{
    display: flex;
    flex-direction: column;
    text-align: justify;
    color: #333;
    height: 100%;
  }
  button{
    border-radius: 0.03rem;
    background-color: #fff;
    border: 0;
    outline: none;
    color: #999;
    padding: 0.02rem 0.05rem;
  }

</style>
