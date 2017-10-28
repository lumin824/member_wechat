<template>
  <div>
<!--    <mt-header>
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
        <mt-button  icon="close">关闭</mt-button>
      </router-link>
    </mt-header>-->
    <img src="static/img/activeTest.jpg" alt="">
    <h1>大师书法展</h1>
    <div class="detail">
  <!--    <figure>
        <figcaption>券详情</figcaption>
        <img src="static/img/hgds.jpg" alt="">
      </figure>-->
      <ul>
        <li><h1>活动详情</h1></li>
        <li>活动时间&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2016-09-15~2016-09-15&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li>
           活动地点&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>上海世博中国馆</span>
        </li>
        <li style="border-bottom: none;">
           剩余人数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>14</span>
        </li>
      </ul>
    </div>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;每张优惠券具有一定的使用条件和期限,优惠券使用一般性规则如下:优惠券有使用期限限制,过了有效期不能使用;订单中包含特价商品
      时不能使用优惠券,优惠券不能和其他优惠(如促销活动)同时使用;
    </p>

     <!--<m-button>已报名</m-button>-->
    <m-button style="background-color: #25AFA2;height: 0.6rem;" @click.native="abc">我要报名</m-button>

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
</style>
