<template>
   <div>
        <h1>哈根达斯满百减十</h1>
        <div style="background-color:#FFFFFF;margin-left:0.2rem;margin-right:0.2rem">
          <div class="bbody" style="width:100%">
              <div style="border-left:2px solid black;height:0.2rem;width:0.02rem;margin-top:0.2rem"></div>
              <div style="padding-left:0.2rem;margin-top:-0.2rem;font-size:0.2rem;color:black">券详情</div>
          </div>
        <div class="bbody" style="color:#767676;padding-bottom:0.1rem;padding-top:0.1rem">
           <table style="width:100%">
              <tr> 
                <td style="width:30%;">
                  <img src="static/img/hgds.jpg" alt="">
                </td>
                <td style="width:100%">
                    <div style="border-bottom:1px solid #E6E6E6;padding-bottom:0.1rem">
                      活动时间<label style="padding-left:0.2rem">2018-01-01~2018-09-11</label>
                    </div>
                    <div style="border-bottom:1px solid #E6E6E6;padding-bottom:0.1rem;padding-top:0.1rem">
                      已领取<label style="color:#FF9700;padding-left:0.35rem;">14</label>
                    </div>
                    <div style="padding-top:0.1rem">领取条件
                      <label style="color:#FF9700;padding-left:0.12rem">10积分</label>
                    </div>
                </td>
              </tr>
           </table>
        </div>
    </div>
        <div style="width:3.85rem;margin-left:0.2rem;margin-right:0.2rem;margin-top:0.2rem">
             每张优惠券具有一定的使用条件和期限,优惠券使用一般性规则如下:<br>优惠券有使用期限限制,过了有效期不能使用;<br>订单中包含特价商品
            时不能使用优惠券,优惠券不能和其他优惠(如促销活动)同时使用;
        </div>
         <router-link to="/carDetail">
          <div style="background-color:#46D0C3;height:50px;text-align:center;padding-top:0.2rem;position:fixed;right:0;left:0;bottom:0;">
            <label style="color:white;font-size:0.2rem">积分不足</label>
          </div>
        </router-link>
    </div>
    </div>
        <!-- <div class="detail">
             <figure>
                 <figcaption>券详情</figcaption>
                 <img src="static/img/hgds.jpg" alt="">
             </figure>
              <ul>
                  <li>活动时间&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2016-09-15~2016-09-15</li>
                  <li>已领取&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>14</span></li>
                  <li style="border-bottom: none;">领取条件&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>10积分</span></li>
              </ul>
         </div>
         <p>每张优惠券具有一定的使用条件和期限,优惠券使用一般性规则如下:<br>优惠券有使用期限限制,过了有效期不能使用;<br>订单中包含特价商品
            时不能使用优惠券,优惠券不能和其他优惠(如促销活动)同时使用;
         </p>

          <m-button>已领取</m-button> -->

   
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
    font-family: "Helvetica Neue", Helvetica, Arial, "Microsoft Yahei UI", "Microsoft YaHei", SimHei, "\5B8B\4F53", simsun, sans-serif
  }
</style>
