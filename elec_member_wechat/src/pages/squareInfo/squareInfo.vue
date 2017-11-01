<template>
  <div>
      <!--  <mt-header :title="title">
            <router-link to="/" slot="left">
              <mt-button icon="back">返回</mt-button>
              <mt-button  icon="close">关闭</mt-button>
            </router-link>
        </mt-header>-->
      <div class="test" style="height:2rem;width: 100%;">
        <mt-swipe :auto="4000">
         <!-- <mt-swipe-item v-for="(item,index) in pictures">
             <img src="{{item.mapUrl}}" alt="">
          </mt-swipe-item>-->
       <!--   <template v-for="(v,k) in pictures">
            <mt-swipe-item><img src="static/img/2.jpg" alt=""></mt-swipe-item>
          </template>-->
          <mt-swipe-item v-for="v in pictures" :key="v.id">
               <img :src="v.mapUrl">
          </mt-swipe-item>
         <!-- <mt-swipe-item><img src="static/img/2.jpg" alt=""></mt-swipe-item>
          <mt-swipe-item><img src="static/img/3.jpg" alt=""></mt-swipe-item>-->
        </mt-swipe>
      </div>
      <div class="sqareDeil">
             <h3 style="font-size:20px;color:#13C2A1;margin-bottom:0.1rem"><strong>{{title}}</strong></h3>
              <hr>
             <strong><p class="njky" v-html="content" style="color:#797979;line-height:20px;" >
               <!--紫荆广场是由南京康益房地产开发有限公司开发建设的商业地产项目,项目位于南京卡子门商圈,紫荆花路和宁溧路交汇处。该商圈经过多年
               打造已经开成汽车贸易、家具市场为核心的商业格局。宜家、红星美凯龙、月星家居等商业巨头云集此地。交通便捷成熟、地铁三号线,宁溧快速
               通道、机场高速环绕左右,已经投入使用的高铁南站近在咫尺。此处本项目紧邻南京宁南高档住宅区,该住宅区域内有10万常住人口-->
            </p> </strong>
            <hr>
            <ul>
                  <li class="main" style="font-size:0.15rem;height:0.24rem"><img src="static/img/address.png" alt="" style="width:0.2rem;height:0.2rem;">
                  <div style="margin-left:0.04rem">地</div><div style="margin-left:0.31rem">址</div>：{{address}}
                  <router-link :to="{ path: '/getPosition', query: { longitude: position[0],latitude:position[1] }}"><img style="width: 0.2rem;height: 0.2rem;position: relative;left:-0.1rem;"  src="static/img/gdmap.png" alt=""></router-link></li>
                  <li style="margin-top:0.02rem;font-size:0.15rem"><img src="static/img/optime.png" alt="" style="width:0.2rem;height:0.2rem;color:#4ADBCA">
                  <div style="margin-left:0.48rem;margin-top:-0.23rem">营业时间：{{openTime}}</div>
                  </li>
                 <!-- <li><img style="width: 0.2rem;height: 0.12rem; margin-right: 0.07rem;  margin-left: 0.12rem;" src="static/img/carstop.png" alt="">停车信息：24小时地下车库,12元/小时</li>-->
                  <li style="font-size:0.15rem;margin-top:0.03rem;"><img src="static/img/phone.png" alt="" style="width:0.2rem;height:0.2rem;color:#4CD39B">
                  <div style="margin-left:0.48rem;margin-top:-0.2rem">联系电话：<a @click="phone">{{tel}}</a></div></li>
            </ul>
        <br><br>
      </div>
  </div>
</template>
<script>
   import global from '../../../src/components/common/Global.vue'
   export default {
     data(){
       return {
            //地址
             address:'',
           //营业时间
             openTime:'',
           // tel:'021-65708888',
           //联系电话
            tel:'',
           //高德地图坐标
            position:[],
             //标题
            title:'',
             //内容
            content:'',
             //图片
            pictures:'',
       }
     },
     mounted(){
       this.$http.get(`http://121.196.208.176:9001/mall/${global.appId}`).then(data =>{
           //是否还有下一页，加个方法判断，没有下一页要禁止上拉
           // this.isHaveMore(data.result.haveMore);
           this.tel = data.data.mall_phone;
           this.openTime = data.data.business_hours;
           this.address= data.data.address;
           this.position = [data.data.longitude,data.data.latitude];
          // this.position = [118.751661,31.972437];
          // this.pictures = data.data.pictures;
           this.title=data.data.mall_name;
           this.content = data.data.intro;
           console.log(data);
           this.pictures = JSON.parse(data.data.pictures);
       });
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
  .test img{
    width: 100%;
    height: 2rem;

  }
  .sqareDeil{
       background-color: #fff;
  }
  .sqareDeil h3{
     font-size: 0.15rem;
     font-weight: normal;
     color:rgba(6,193,174,50);
     margin-left: 0.2rem;
     position: relative;
     top:0.05rem;
  }
   .sqareDeil hr{
     height:0;
     border-top:1px solid #e6e6e6;
     border-right:0;
     border-bottom:0;
     border-left:0;
   }
    .sqareDeil p{
      padding:0 0.15rem;
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
   .main{
     display: flex;
     width: 3rem;
     lign-items:flex-start;
   }
   .njky{
      font-family: Tahoma, Helvetica, Arial, "Microsoft Yahei","微软雅黑", STXihei, "华文细黑", sans-serif;
   }

</style>
