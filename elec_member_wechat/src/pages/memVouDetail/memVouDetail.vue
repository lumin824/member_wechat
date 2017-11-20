<template>
  <div>

    <div style="background-color:#fff;margin:15px;">
      <div style="display:flex;align-items:center;">
        <div style="border-left:2px solid #000;height:8px;"> </div>
        <div style="flex:1;margin:5px 10px;">券详情</div>
      </div>

      <div style="display:flex;background-color:#fff;margin-top:1px;border-bottom:1px solid #e1e1e1">
        <div style="width:116px;height:96px;display:flex;align-items:center;justify-content:center;">
          <img  style="width:110px;height:90px;">
        </div>
        <div style="flex:1;display:flex;flex-direction:column;">
          <div style="font-size:1em;margin-left:5px;margin-top:10px;">111111</div>
          <div style="flex:1;display:flex;font-size:0.9em;margin-left:5px;">
            <div style="flex:1;display:flex;flex-direction:column;">
              <div style="flex:1;color:#78797a;border-bottom:1px solid #e1e1e1;display:flex;align-items:center;"><span style="width:60px;display:inline-block;">有效期</span>22222</div>
              <div style="flex:1;color:#78797a;display:flex;align-items:center;"><span style="width:60px;display:inline-block;">状态</span>33333</div>
            </div>
          </div>
        </div>
      </div>
      <div style="display:flex;justify-content:center;">
        <!-- <vue-qr :dotScale="1" :text="qr" height="200" width="200"></vue-qr> -->
      </div>

    </div>


    <div style="margin:15px;font-size:0.8em;color:#707172;">
      每张优惠券具有一定的使用条件和期限,优惠券使用一般性规则如下:<br/>
      优惠券有使用期限限制,过了有效期不能使用。<br/>
      订单中包含特价商品时不能使用优惠券,优惠券不能和其他优惠(如促销活动)同时使用。
    </div>
  </div>
</template>

<script>
// import VueQr from 'vue-qr'
import global from '../../../src/components/common/Global.vue'
const { apiHost, mallId } = global;
import {
  mapState,
} from 'vuex';

export default {
  components:{
    VueQr
  },
  computed: {
    qr(){
      const { id } = this.$route.query;
      return `hello ${id}`
    },
    ...mapState({
      member_id: state => state.member_id,
    }),
  },
  data(){
    return{
      item: {},
    }
  },
  async mounted(){

    this.id = id;
    // this.item = (await this.$http.get(`${apiHost}/coupon/${id}?memberId=${this.member_id}`)).data
  },
  methods:{

  },
}
</script>

<style lang="less" scoped>

</style>
