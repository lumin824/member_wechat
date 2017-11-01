<template>
  <div>
   <!-- <mt-header title="商户简介">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
        <mt-button  icon="close">关闭</mt-button>
      </router-link>
    </mt-header>-->
     <div>
        <!--  <mt-swipe-item v-for="v in pictures">
            <img :src="v.mapUrl">
          </mt-swipe-item>
          -->
        <div class="test" style="height:2rem;width: 100%;">
          <mt-swipe :auto="4000">
           <!-- <mt-swipe-item @click.native="clickItem"><img src="static/img/1.jpg"  alt=""></mt-swipe-item>
            <mt-swipe-item><img src="static/img/2.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="static/img/3.jpg" alt=""></mt-swipe-item>-->
            <mt-swipe-item v-if="pictures!=''" v-for="v in pictures" :key="v.id">
                  <img :src="v.mapUrl" >
            </mt-swipe-item>
          </mt-swipe>
         </div>
        </div>
        <div class="sellAdv" style="background-color:#FFFFFF;height:1.1rem;border-top:1px solid #D9D9D9;border-bottom:1px solid #D9D9D9">
              <div style="padding-top:10px"> 
               <img  v-if="logo!=''" style="float: left;padding-right:0.2rem;margin-botton:0.2rem;width:1.2rem;height:0.85rem" :src="logo[0]['mapUrl']" alt="">
               <img  v-else style="float: left;"  src="" alt="">
                <ul>
                    <li><h3>{{sell.shop_name}}</h3></li>
                    <li style="font-size: 0.13rem;color: #666;margin-top: 0.09rem;">积分热度&nbsp;&nbsp;{{sell.points}}</li>
                    <li style="font-size: 0.13rem;color: #666;margin-top: 0.1rem;">{{sell.industry_name}}</li>
                </ul>
              </div>  
        </div>

        <div class="sellInfo" style="clear: both;background-color:#FFFFFF;margin-top:0.15rem;height:1.2rem;padding-left:0.2rem;border-top:1px solid #D9D9D9;border-bottom:1px solid #D9D9D9">
          
          <h2 style="color:#979797;padding-top:0.15rem;">商家信息</h2>
          <hr>
          <ul>
            <li style="font-weight: bold;font-size: 0.13rem;">
              <img src="static/img/jf.png" style="width:0.12rem;height: 0.18rem;" class="imgPosition" alt="">
              <div  style="margin-top:-0.27rem;margin-left:0.4rem"><a :href="lcmap[0]['mapUrl']">{{sell.berth_number}}</a></div>
            </li>
            <li style="margin-top:0.1rem"><img src="static/img/phone.png" alt="">
            <div  style="margin-top:-0.22rem;margin-left:0.4rem"><a style="color:rgba(6,193,174,50);" @click="phone">{{tel}}</a></div></li>
          </ul>
        </div>
        <div class="sqareDeil" style="background-color:#FFFFFF;margin-top:0.15rem;padding-left:0.2rem;margin-bottom:0.2rem;border-top:1px solid #D9D9D9;border-bottom:1px solid #D9D9D9">
          <h2 style="color:#A4A4A4;padding-top:0.15rem">商家介绍</h2>
          <hr >
          <p v-html="content" >
          </p>
          <hr style="padding-bottom:2rem">
        </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        tel:'',
        //商户
        sell:'',
        sell_id:'',
        content:'',
        //logo
        logo:'',
        //图片
        pictures:'',
        lcmap:'',
      }
    },
    methods:{
      phone() {
        let telphone = this.tel;
        window.location.href=`tel:${telphone}`
      },
    },
    mounted(){
     this.sell_id = this.$route.query.sell_id;
     this.$http.get('http://121.196.208.176:9001/shop/'+this.sell_id).then((data) =>{
          this.sell = data.data;
          this.content=this.sell.intro;
          this.tel=this.sell.phone;
          this.lcmap = JSON.parse(this.sell.map_picture);
          if(this.sell.logo.length>0){
            this.logo = JSON.parse(this.sell.logo);
          }
          if(this.sell.pictures.length>0){
            this.pictures = JSON.parse(this.sell.pictures);
          }

      });
    }
  }
</script>
<style lang="less" scoped>
   .test img{
       width: 100%;
       height: 2rem;
   }
   .sellAdv img{
     height: 0.7rem;
     width: 0.7rem;
     margin-right: 0.1rem;
     margin-left: 0.2rem;
   }
   .sellAdv li{
     margin-left: 0.1rem;
   }
   .sellInfo{
    margin-top: 0.5rem;
  }
  .sellInfo h3{
    font-size: 0.15rem;
    font-weight: normal;
    color:#666;
    margin-left: 0.2rem;
  }

  .sellInfo hr{
    height:0;
    border-top:0.01rem solid #ccc;
    border-right:0;
    border-bottom:0;
    border-left:0;
  }
  .sellInfo ul{
    margin-top:0.2rem;
  }
  .sellInfo ul li{
    color: #666;
    font-size: 0.12rem;
    margin-bottom: 0.1rem;
    letter-spacing: 0.005rem;
  }
  .sellInfo ul li img{
    width: 0.11rem;
    height: 0.16rem;
    display: inline-block;
    margin-left: 0.15rem;
    margin-right: 0.08rem;
  }

  .sqareDeil{
    margin-top: 0.2rem;
  }
  .sqareDeil h3{
    font-size: 0.15rem;
    font-weight: normal;
    color: #666;
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
    font-size: 0.13rem;
    padding:0 0.15rem;
    line-height: 0.25rem;
    color: #666;
  }
  .sqareDeil ul{
    margin-top:0.2rem;
  }
  .sqareDeil ul li{
    color: #ccc;
    font-size: 0.12rem;
    margin-bottom: 0.1rem;
    margin-left: 0.15rem;
    margin-right: 0.08rem;
  }
  .sqareDeil ul li a{
    color:rgba(6,193,174,50);
  }
</style>
