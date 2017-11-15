<template>
  <div>
    <div style="background-color:#FFFFFF;margin-left:20px;margin-right:20px;">
      <div class="bbody">
        <div style="border-left:2px solid black;height:20px;width:0.02rem;margin-top:20px"></div>
        <div style="padding-left:20px;margin-top:-20px;color:black" class="Coupon" >券详情</div>
      </div>
      <div style="width:100%;height:120px;">
        <div style="width:35%;height:100%;float:left"><img src="static/img/hgds.jpg" alt=""></div>
        <div style="width:65%;height:70%;float:right;margin-top:20px">
            <div><h2>哈根达斯满百减十</h2></div>
            <div style="padding-top:10px;border-bottom : 1px solid #E6E6E6;margin-right:10px;color:#737373">
              <div>有效期<label style="padding-left:10%">2018-01-01~2018-09-11</label></div>
            </div>
            <div style="padding-top:10px;color:#737373">
              <div>状态 <label style="padding-left:12%;color:#FF951D">未激活</label></div>
            </div>
        </div>
        
      </div>
      <div style="border-bottom:1px solid #E6E6E6;margin-left:20px;margin-right:20px;margin-top:20px"></div>
      <div style="width:60%;margin-left:20%;padding-bottom:20px"><img src="static/img/1510724764.png"/></div>
    </div>

  
    <div>
      <p class="p1" style="color:#686868">每张优惠券具有一定的使用条件和期限,优惠券使用一般性规则如下:<br/>
      优惠券有使用期限限制,过了有效期不能使用。<br/>
      订单中包含特价商品时不能使用优惠券,优惠券不能和其他优惠(如促销活动)同时使用。</p>
    </div>
    <router-link to="/carDetail">
      <div style="background-color:#46D0C3;height:50px;text-align:center;padding-top:20px;position:fixed;right:0;left:0;bottom:0;">
        <label style="color:white;font-size:20px">积分不足</label>
      </div>
    </router-link>
  </div>
</template>

<script>
import  Button from '../../../src/components/common/button.vue'
export default {
  components:{
    'm-button':Button,
  },
}
</script>

<style lang="less" scoped>
.p1{
  font-size: 13px;
  line-height: 26px;
}
.divx{
  border-bottom:1px solid gainsboro; 
  margin-top: -60%;
}
.div1{
  flex: 1;
  width: 27%;
  float: left;
  position: absolute;
  top: 8.5%;
  z-index: 3;
}
.div2{
  position: absolute;
  width: 50%;
  left: 34%;
  color:#333;
  margin-top: -23%;
}
.div3{
  
  font-size: 13px;
  margin-top: -55%;
  padding-left: 31%;
  position: relative;
  top:-46px;
  border-bottom:1px solid gainsboro; 
}
.div4{
  position: absolute;
  left:33.5%;
  top:20%;
  font-size: 13px;
}
.divi{
  position: absolute;
  height: 25%;
  width:39%;
  padding-top: 53%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.detail{
  background-color: #fff;
  margin: 0 20px;
  display: flex;
  align-items: flex-end;
  border: 1px solid #E6E6E6;
}
.detail ul{
  font-size: 0.13rem;
  margin-bottom: 0.05rem;
  margin-left: 20px;
  color: #666;
}
.detail ul li{
  height: 0.26rem;
  border-bottom: 1px solid #E6E6E6;
  line-height: 0.25rem;
}
.detail ul li span{
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
  margin: 20px 20px;
  font-size: 0.13rem;
  color: #333;
  height: 20px;
  line-height: 20px;
}
.bbody{
  font-family: "Helvetica Neue", Helvetica, Arial, "Microsoft Yahei UI", "Microsoft YaHei", SimHei, "\5B8B\4F53", simsun, sans-serif;
}
</style>
