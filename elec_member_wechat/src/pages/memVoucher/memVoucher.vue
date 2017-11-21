<template>
  <div>
    <mt-navbar v-model="selected" style="position:fixed;top:0;left:0;right:0;">
      <mt-tab-item id="1">未使用</mt-tab-item>
      <mt-tab-item id="3">已使用</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected" style="margin-top:49px;">
      <mt-tab-container-item id="1">
        <scroller lock-x>
          <div>
            <router-link :to="{path:'/memVouDetail', query:{id:o.crl_id}}" style="display:flex;background-color:#fff;margin-top:1px;" v-for="o in list">
              <div style="width:70px;height:70px;display:flex;align-items:center;justify-content:center;">
                <img :src="o.picture" style="width:64px;height:64px;">
              </div>
              <div style="flex:1;">
                <div style="font-size:1em;margin-left:5px;margin-top:10px;">{{o.coupon_name}}</div>
                <div style="display:flex;font-size:0.9em;margin-left:5px;">
                  <div style="flex:1;">
                    <div style="color:#78797a;">有效期：{{o.expiry_date_start | unix('YYYY-MM-DD', 'ms')}} ~ {{o.expiry_date_end | unix('YYYY-MM-DD', 'ms')}}</div>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </scroller>
      </mt-tab-container-item>

      <mt-tab-container-item id="3">
        <scroller lock-x>
          <div>
            <router-link :to="{path:'/memVouDetail', query:{id:o.crl_id}}" style="display:flex;background-color:#fff;margin-top:1px;" v-for="o in list2">
              <div style="width:70px;height:70px;display:flex;align-items:center;justify-content:center;">
                <img :src="o.picture" style="width:64px;height:64px;">
              </div>
              <div style="flex:1;">
                <div style="font-size:1em;margin-left:5px;margin-top:10px;">{{o.coupon_name}}</div>
                <div style="display:flex;font-size:0.9em;margin-left:5px;">
                  <div style="flex:1;">
                    <div style="color:#78797a;">有效期：{{o.expiry_date_start | unix('YYYY-MM-DD', 'ms')}} ~ {{o.expiry_date_end | unix('YYYY-MM-DD', 'ms')}}</div>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </scroller>
      </mt-tab-container-item>

    </mt-tab-container>
  </div>
</template>
<script>

import { Scroller } from 'vux'
import global from '../../../src/components/common/Global.vue'
const { apiHost, mallId } = global;
import moment from 'moment';
import {
  mapState,
} from 'vuex';
export default {
  components:{
    Scroller,
  },
  filters: {
    unix: (value, format, unit) => {
      return moment.unix((unit == 'ms') ? (value / 1000) : value).format(format)
    }
  },
  computed: {
    ...mapState({
      member_id: state => state.member_id,
    }),
  },
  data(){
    return{
      list: [],
      list2: [],
      selected:'1',
    }
  },
  async mounted(){
    try{
      this.list= (await this.$http.post(`${apiHost}/member/${this.member_id}/couponList`, {
        couponStatus: 1, mallId, page:1, size:200
      })).data
    }catch(e){
      this.list = [];
    }

    try{
      this.list2 = (await this.$http.post(`${apiHost}/member/${this.member_id}/couponList`, {
        couponStatus: 2, mallId, page:1, size:200
      })).data

    }catch(e){
      this.list2 = [];
    }
  },
  methods:{

  },
}
</script>
<style lang="less" scoped>
.mint-navbar .mint-tab-item.is-selected{
  color: #07C0AE;
  margin-bottom: 0;
  border-bottom: 3px solid #07C0AE;
}
</style>
