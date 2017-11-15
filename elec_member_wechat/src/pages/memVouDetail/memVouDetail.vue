<template>
  <div>
    <div style="background-color:#FFFFFF;margin-left:0.2rem;margin-right:0.2rem">
      <div class="bbody" style="width:100%;">
        <div style="border-left:2px solid black;height:0.2rem;width:0.02rem;margin-top:0.2rem"></div>
        <div style="padding-left:0.2rem;margin-top:-0.2rem;color:black" class="Coupon" >券详情</div>
      </div>
      <div class="bbody" style="color:#767676;padding-bottom:0.1rem;padding-top:90%">
        <div class="divx">
          <div class="div1"><img src="static/img/hgds.jpg" alt=""></div>
          <div class="div2"><h2>哈根达斯满百减十</h2></div>       
          <div class="div3">有效期&nbsp;&nbsp;&nbsp;&nbsp;2018-01-01~2018-09-11</div>
          <div class="div4">状态&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:red;">未激活</span></div>
        </div>
        <div class="divi"><img src="static/img/1510724764.png"/></div>
      </div>
    </div>
    <div>
      <p class="p1">每张优惠券具有一定的使用条件和期限,优惠券使用一般性规则如下:<br/>
      优惠券有使用期限限制,过了有效期不能使用。<br/>
      订单中包含特价商品时不能使用优惠券,优惠券不能和其他优惠(如促销活动)同时使用。</p>
    </div>
    <router-link to="/carDetail">
      <div style="background-color:#46D0C3;height:50px;text-align:center;padding-top:0.2rem;position:fixed;right:0;left:0;bottom:0;">
        <label style="color:white;font-size:0.2rem">积分不足</label>
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
  width: 45%;
  top: 39%;
  left: 50%;
  transform: translate(-50%, -50%);
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
  margin: 0.2rem 0.2rem;
  font-size: 0.13rem;
  color: #333;
  height: 0.2rem;
  line-height: 0.2rem;
}
.bbody{
  font-family: "Helvetica Neue", Helvetica, Arial, "Microsoft Yahei UI", "Microsoft YaHei", SimHei, "\5B8B\4F53", simsun, sans-serif;
}
</style>
