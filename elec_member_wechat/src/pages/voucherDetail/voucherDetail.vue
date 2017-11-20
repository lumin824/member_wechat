<template>
  <div>
    <div style="text-align:center;margin:20px 0;">{{item.coupon_name}}</div>
    <div style="border:1px solid #ddd;background-color:#fff;margin:0 10px;">
      <div style="display:flex;align-items:center;">
        <div style="border-left:2px solid #000;height:8px;"> </div>
        <div style="flex:1;margin:5px 10px;">券详情</div>
      </div>

      <div style="display:flex;">
        <img src="static/img/hgds.jpg" style="width:96px;height:96px;">
        <div style="display:flex;color:#777879;font-size:0.7em;flex:1;">
          <div style="display:flex;flex-direction:column;">
            <div style="flex:1;border-bottom:1px solid #ddd;display:flex;align-items:center;">活动时间</div>
            <div style="flex:1;border-bottom:1px solid #ddd;display:flex;align-items:center;">已领取</div>
            <div style="flex:1;display:flex;align-items:center;">领取条件</div>
          </div>
          <div style="flex:1;display:flex;flex-direction:column;">
            <div style="flex:1;border-bottom:1px solid #ddd;display:flex;align-items:center;padding-left:0.5em;">2018-01-01 ~ 2018-09-11</div>
            <div style="flex:1;border-bottom:1px solid #ddd;display:flex;align-items:center;padding-left:0.5em;color:#ff8b00;">{{item.receivedTotal}}</div>
            <div style="flex:1;display:flex;align-items:center;padding-left:0.5em;color:#ff8b00;"> {{item.required_points}} 积分</div>
          </div>
        </div>

      </div>
    </div>

    <div style="color:#777879;font-size:0.8em;padding:15px;line-height:2em;">
      <div>每张优惠券具有一定的使用条件和期限,优惠券使用一般性规则如下:</div>
      <div>优惠券有使用期限限制,过了有效期不能使用;</div>
      <div>订单中包含特价商品时不能使用优惠券,优惠券不能和其他优惠(如促销活动)同时使用;</div>
    </div>

    <div :class="{active:item.limitPromptCode==6}" @click="item.limitPromptCode==6 && receiveCoupon()" style="position:fixed;bottom:0;left:0;right:0;background-color:#939393;color:#fff;text-align:center;padding:15px 0;">
      {{limitPromptCode}}
    </div>
  </div>
</template>

<script>
import global from '../../../src/components/common/Global.vue'
const { apiHost, mallId } = global;

import {
  mapState,
} from 'vuex';

export default {
  components:{
  },
  data(){
    return{
      item: {},
      limitPromptCodeMap: {
        '0': '已经终止发行',
        '1': '库存不足',
        '2': '当天已不能领取',
        '3': '已领取券组中的其它券',
        '4': '积分不足',
        '5': '已领取',
        '6': '领取'
      }
    }
  },
  computed: {
    limitPromptCode(){
      return this.limitPromptCodeMap[this.item.limitPromptCode] || this.item.limitPromptCode
    },
    ...mapState({
      member_id: state => state.member_id,
    }),
  },
  methods:{
    async receiveCoupon() {
      const { id } = this.$route.query;
      const { coupon_type: couponType, receive_method: receivedMethod, required_points: requiredPoints} = this.item;

      const doReceive = async () => {
        const { data } = await this.$http.post(`${apiHost}/member/${this.member_id}/receiveCoupon/${id}`, {
          couponType, mallId, receivedMethod, requiredPoints
        })

        const resultMap = {
          '7': '领取失败',
          '8': '领取成功'
        }
        this.$vux.toast.text(resultMap[data] || data)
        if(data == 8){
          
        }
      }

      let needConfirm = true
      if(needConfirm){
        this.$vux.confirm.show({
          content: '确认使用积分领取吗？',
          confirmText: '确定领取',
          cancelText: '暂不领取',
          onConfirm: doReceive
        })
      }else{
        doReceive()
      }



    }
  },
  async mounted() {
    const { id } = this.$route.query;

    this.item = (await this.$http.get(`${apiHost}/coupon/${id}?memberId=${this.member_id}`)).data
  }
}
</script>

<style lang="less" scoped>
.active {
  background-color: #00d6c6 !important;
}
</style>
