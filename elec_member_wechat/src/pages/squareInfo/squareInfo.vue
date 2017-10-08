<template>
  <div>
        <mt-header title="紫荆广场购物中心">
            <router-link to="/" slot="left">
              <mt-button icon="back">返回</mt-button>
              <mt-button  icon="close">关闭</mt-button>
            </router-link>
        </mt-header>
    <div style="height:1.5rem;width: 100%;">
      <mt-swipe :auto="4000">
        <mt-swipe-item @click.native="clickItem"><img src="static/img/1.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="static/img/2.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="static/img/3.jpg" alt=""></mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="sqareDeil">
           <h3>紫荆广场购物中心</h3>
            <hr>
           <p>
             &nbsp;&nbsp;&nbsp;&nbsp;紫荆广场是由南京康益房地产开发有限公司开发建设的商业地产项目,项目位于南京卡子门商圈,紫荆花路和宁溧路交汇处。该商圈经过多年
             打造已经开成汽车贸易、家具市场为核心的商业格局。宜家、红星美凯龙、月星家居等商业巨头云集此地。交通便捷成熟、地铁三号线,宁溧快速
             通道、机场高速环绕左右,已经投入使用的高铁南站近在咫尺。此处本项目紧邻南京宁南高档住宅区,该住宅区域内有10万常住人口
           </p>
          <hr>
          <ul>
            <li><img src="static/img/address.png" alt="">地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址：控江路1628号<router-link to="/getPosition"><img style="width: 0.2rem;height: 0.2rem;position: relative;left:-0.1rem;"  src="static/img/gdmap.png" alt=""></router-link></li>
            <li><img src="static/img/optime.png" alt="">营业时间：周一至周日10:00-22:00</li>
            <li><img style="width: 0.2rem;height: 0.12rem; margin-right: 0.07rem;  margin-left: 0.12rem;" src="static/img/carstop.png" alt="">停车信息：24小时地下车库,12元/小时</li>
            <li><img src="static/img/phone.png" alt="">联系电话：<a @click="phone">{{tel}}</a></li>
          </ul>
    </div>
  </div>
</template>
<script>
   export default {
     data(){
       return {
         tel:'021-65708888',
       }
     },
     methods:{
       phone() {
          let telphone = this.tel;
          window.location.href=`tel:${telphone}`
       },
     }
   }



</script>
<style lang="less" scoped>
  .sqareDeil{
       margin-top: 0.08rem;
  }
  .sqareDeil h3{
     font-size: 0.15rem;
     font-weight: normal;
     color:rgba(6,193,174,50);
     margin-left: 0.2rem;
  }
   .sqareDeil hr{
     height:0;
     border-top:1px solid #ccc;
     border-right:0;
     border-bottom:0;
     border-left:0;
   }
    .sqareDeil p{
      font-size: 0.12rem;
      padding:0 0.15rem;
      line-height: 0.2rem;
      color: #666;
    }
   .sqareDeil ul{
      margin-top:0.2rem;
   }
  .sqareDeil ul li{
    color: #666;
    font-size: 0.12rem;
    margin-bottom: 0.1rem;
    letter-spacing: 0.005rem;
  }
  .sqareDeil ul img{
     width: 0.16rem;
     height: 0.16rem;
     display: inline-block;
     margin-left: 0.15rem;
     margin-right: 0.08rem;
  }
  .sqareDeil ul li a{
    color:rgba(6,193,174,50);

  }


</style>
