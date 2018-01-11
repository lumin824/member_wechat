<template>
<scroller lock-x ref="scrollerEvent">
  <div style="background-color:#F4F4F4">
    <div>
      <div style="height:6rem;">
        <mt-swipe :auto="4000">
          <mt-swipe-item v-if="pictures!=''" v-for="v in pictures" :key="v.id">
            <img :src="v.mapUrl" style="height:6rem;width:100%;" >
          </mt-swipe-item>
        </mt-swipe>
      </div>
    </div>
    <div style="display:flex;background-color:#fff;border-top:1px solid #D9D9D9;border-bottom:1px solid #D9D9D9;" >
      <div style="width:2.2rem;height:2rem;display:flex;align-items:center;justify-content:center;">
        <img :src="logo" style="max-width:2rem;max-height:1.8rem;">
      </div>
      <div style="flex:1;margin-right:0.25rem;padding:0.2rem;">
        <div style="display:flex;font-size:0.4rem;margin-left:0.2rem;">
          <div style="flex:1">{{sell.shop_name}}</div>
          <!-- <div style="color:#78797a;"><span class="iconfont icon-favorfill" style="color:#ffd656;margin-right:5px;"></span>{{o.points}}</div> -->
        </div>
        <div style="display:flex;font-size:0.3rem;margin-left:0.2rem;">
          <div style="flex:1;">
            <div style="color:#ff4352;"><span class="iconfont icon-location"></span>{{sell.berth_number}}</div>
            <div style="color:#78797a;">{{sell.industry_name}}</div>
          </div>
        </div>
      </div>
    </div>

    <div style="margin-top:0.5rem;background-color:#FFFFFF;padding:0.125rem;border-top:1px solid #D9D9D9;border-bottom:1px solid #D9D9D9;">
      <div style="color:#979797;font-size:0.4rem;margin-left:0.5rem;">商家信息</div>

      <div style="border-top:1px solid #D9D9D9;font-size:0.4rem;">
        <div style="display:flex;margin:0.25rem;align-items: center;">
          <img src="static/img/jf.png" style="width:0.5rem;height:0.5rem;" alt="">
          <a style="margin-left:0.25rem;" :href="lcmap">{{sell.berth_number}}</a>
        </div>
        <div style="display:flex;margin:0.25rem;align-items: center;">
          <img src="static/img/phone.png" style="width:0.4rem;height:0.4rem;" alt="">
          <a style="margin-left:0.25rem;color:rgba(6,193,174,50);" @click="phone">{{tel}}</a>
        </div>
      </div>
    </div>
    <div style="margin-top:0.5rem;background-color:#FFFFFF;padding:0.125rem;border-top:1px solid #D9D9D9;border-bottom:1px solid #D9D9D9;">
      <div style="color:#979797;font-size:0.4rem;margin-left:0.5rem;">商家介绍</div>
      <div style="border-top:1px solid #D9D9D9;font-size:0.4rem;">
        <p v-html="content" style="padding-bottom:0.2rem"></p>
      </div>
    </div>
  </div>
</scroller>
</template>
<script>
import { Scroller } from 'vux'
import _ from 'lodash'
  export default {
     components: {
    Scroller
  },
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
      document.title = '商户'
     this.sell_id = this.$route.query.sell_id;
     this.$http.get('/api/shop/'+this.sell_id).then((data) =>{
          this.sell = data.data;
          this.content=this.sell.intro;
          this.tel=this.sell.phone;
          this.lcmap = this.sell.map_picture ? this.sell.map_picture.replace(/^http:\/\/.+?\//,'/') : '';


          if(this.sell.logo.length>0){
            this.logo = this.sell.logo ? this.sell.logo.replace(/^http:\/\/.+?\//,'/') : '';
          }
          if(this.sell.pictures.length>0){
            var jsonStr =this.sell.pictures;
             var jsonObj =  JSON.parse(jsonStr)
             jsonObj = _.map(jsonObj, o=>({
               ...o,
               mapUrl: o.mapUrl ? o.mapUrl.replace(/^http:\/\/.+?\//,'/') : ''
             }))
           this.pictures = jsonObj;
          }
      });
    }
  }
</script>
<style lang="less" scoped>

</style>
