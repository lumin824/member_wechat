<template>
  <div>
<!--    <mt-header>
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
        <mt-button  icon="close">关闭</mt-button>
      </router-link>
    </mt-header>-->
    <img src="static/img/activeTest.jpg" alt="">
    <h1 style="font-size:0.2rem">大师书法展</h1>
    <div style="background-color:#FFFFFF;margin-left:0.1rem;margin-right:0.1rem">
        <div class="bbody" style="width:100%">
            <div style="border-left:2px solid black;height:0.2rem;width:0.02rem;margin-top:0.2rem"></div>
            <div style="padding-left:0.3rem;margin-top:-0.2rem;font-size:0.2rem;color:black">活动详情</div>
        </div>
        <div class="bbody" style="width:3.75rem;border-bottom:1px solid #E3E3E3;margin-left:0.3rem;color:#767676;padding-bottom:0.1rem;padding-top:0.1rem">
            活动时间<label style="padding-left:0.3rem">2017-07-28~2017-08-03</label>
        </div>
        <div class="bbody" style="width:3.75rem;border-bottom:1px solid #E3E3E3;margin-left:0.3rem;color:#767676;padding-bottom:0.1rem;padding-top:0.1rem">
            活动地点<label style="padding-left:0.3rem">上海世博中国馆</label>
        </div>
        <div class="bbody" style="width:3.75rem;border-bottom:1px solid #E3E3E3;margin-left:0.3rem;color:#767676;padding-bottom:0.1rem;padding-top:0.1rem">
            剩余人数<label style="padding-left:0.3rem;color:#FF8817">14</label>
        </div>
        <div class="bbody" style="width:3.75rem;border-bottom:1px solid #E3E3E3;margin-left:0.3rem;color:#767676;padding-bottom:0.1rem;padding-top:0.1rem">
            报名条件<label style="padding-left:0.3rem;color:#FF8817">10积分</label>
        </div>
        <div class="bbody" style="width:3.75rem;border-bottom:1px solid #E3E3E3;margin-left:0.3rem;color:#767676;padding-bottom:0.1rem;padding-top:0.1rem">
            活动奖励<label style="padding-left:0.3rem">签到获得10积分</label>
        </div>
    </div>
    <div class="bbody" style="margin-left:0.1rem;margin-right:0.1rem;color:#767676;padding-top:0.1rem;padding-bottom:1rem">
        &nbsp; &nbsp; &nbsp; &nbsp;书法作为中华文化中一种独特的审美现象，它不仅是方寸间的文明，更是中国传统文化的重要组成部分，是深受广大书法爱好者喜好的中华瑰宝。作为全国收藏家传统美德
        书法作为中华文化中一种独特的审美现象，它不仅是方寸间的文明，更是中国传统文化的重要组成部分，是深受广大书法爱好者喜好的中华瑰宝。作为全国收藏家传统美德
        书法作为中华文化中一种独特的审美现象，它不仅是方寸间的文明，更是中国传统文化的重要组成部分，是深受广大书法爱好者喜好的中华瑰宝。作为全国收藏家传统美德
        书法作为中华文化中一种独特的审美现象，它不仅是方寸间的文明，更是中国传统文化的重要组成部分，是深受广大书法爱好者喜好的中华瑰宝。作为全国收藏家传统美德
        书法作为中华文化中一种独特的审美现象，它不仅是方寸间的文明，更是中国传统文化的重要组成部分，是深受广大书法爱好者喜好的中华瑰宝。作为全国收藏家传统美德
    </div>
     <!--<m-button>已报名</m-button>-->
    <div style="background-color: #25AFA2;height: 0.6rem;color:#FFFFFF;text-align:center;position:fixed;right:0;left:0;bottom:0;" >
      <div style="padding-top:0.1rem;font-size:0.2rem;">我要报名</div>
    </div>

  </div>
</template>

<script>
  import  Button from '../../../src/components/common/button.vue'
  export default {
      components:{
          'm-button':Button,
      },
     methods:{
        abc(){
          alert('报名成功');
        }
     },
  }
</script>

<style lang="less" scoped>
  img{
    width: 100%;
    height: 2rem;


  }
  h1{
    text-align: center;
    color: #333;
    margin: 0.2rem 0;
  }
  .detail{
    background-color: #fff;
    margin: 0 0.2rem;
    display: flex;
    align-items: flex-end;
    border: 1px solid #E6E6E6;
  }
  .detail ul{
    font-size: 0.13rem;
    margin-bottom: 0.05rem;
    margin-left: 0.2rem;
    color: #666;
  }
  .detail ul li{
    height: 0.26rem;
    border-bottom: 1px solid #E6E6E6;
    line-height: 0.25rem;
    padding:0.05rem 0;
  }
  .detail ul li:nth-child(1){
    border:none;
  }
  .detail ul li:nth-child(1) h1{
    text-align: left;
    position: relative;
    top:-0.18rem;
    color:#666;
  }
  .detail ul li:nth-child(4) span{
    color: #F4AA5F;
  }
  .detail figure{
    padding: 0.1rem;
  }
  .detail figure figcaption{
    font-size: 0.16rem;
    margin-left: 0.05rem;
  }
  .detail figure img{
    height: 0.7rem;
    width: 0.7rem;
  }
  p{
    margin: 0.2rem 0.2rem;
    font-size: 0.13rem;
    color: #333;
    height: 0.2rem;
    line-height: 0.2rem;
  }
  .bbody{
    font-family: "Helvetica Neue", Helvetica, Arial, "Microsoft Yahei UI", "Microsoft YaHei", SimHei, "\5B8B\4F53", simsun, sans-serif
  }
</style>
