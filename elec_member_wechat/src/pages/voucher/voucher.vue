<template>
  <div>
    <scroller lock-x @on-scroll="handleScroll">
      <div>
        <div style="height:200px;background-image:url(static/img/quan.jpg);background-repeat:no-repeat;background-size: auto 100%;background-position:center;background-color:#64d9a6;position:relative;">
          <router-link :to="{ path: member_id ? '/memVoucher':'/register' }" style="position:absolute;bottom:0;right:0;padding:10px;color:#ffed00;">
            {{member_id?'查看我的券':'立即注册 》'}}
          </router-link>
        </div>
        <div style="margin-top:20px;">
          <router-link :to="{path:'/voucherDetail', query:{id:o.coupon_id}}" style="display:flex;background-color:#fff;margin-top:1px;" key="coupon_id" v-for="o in list">
            <div style="width:96px;height:96px;display:flex;align-items:center;justify-content:center;">
              <img :src="o.picture" style="width:80px;height:80px;">
            </div>
            <div style="flex:1;">
              <div style="font-size:1em;margin-left:5px;margin-top:10px;">{{o.coupon_name}}</div>
              <div style="display:flex;font-size:0.9em;margin-left:5px;" v-if="o.receive_method==0">
                <div style="flex:1;">
                  <div style="color:#78797a;">市场价：{{o.price}}</div>
                  <div style="color:#00cfaf;">兑换积分：{{o.required_points}}</div>
                </div>
                <div style="display:flex;align-items:center;margin-right:15px;">
                  <div style="border:1px solid #ff9100;color:#ff9100;border-radius:3px;padding:2px 5px;">
                    积分兑换
                  </div>
                </div>
              </div>
              <div style="display:flex;font-size:0.9em;margin-left:5px;" v-else-if="o.receive_method==2">
                <div style="flex:1;">
                  <div style="color:#78797a;">市场价：{{o.price}}</div>
                  <div style="color:#00cfaf;height:23px;"></div>
                </div>
                <div style="display:flex;align-items:center;margin-right:15px;">
                  <div style="border:1px solid #ff9100;color:#ff9100;border-radius:3px;padding:2px 5px;">
                    免费领取
                  </div>
                </div>
              </div>
            </div>
          </router-link>
        </div>

        <div v-transfer-dom>
          <popup v-model="popup" position="top" :popup-style="{backgroundColor:'#fff', marginTop:'60px'}" :is-transparent="true">
            <div class="type-list">
              <div v-for="o in typeList" @click="changeType(o.id)" :class="{'active': o.id==type }" style="display:flex;align-items:center;height:40px;border-bottom:1px solid #ddd;padding-left:20px;">{{o.name}}</div>
            </div>
          </popup>
        </div>
      </div>
    </scroller>
    <div :style="{backgroundColor:scrollTop>140?'#00bf8d':'transparent'}" style="position:fixed;top:0;left:0;right:0;display:flex;height:30px;padding-top:15px;padding-right:15px;padding-bottom:15px;">
      <div style="font-size:0.9em;width:100px;padding:5px 0;text-align:center;line-height:15px;color:#fff;" @click="popup=true">{{typeName}} <span class="iconfont icon-unfold"></span></div>
      <div style="display:flex;flex:1;background-color:#fff;border-radius:15px;align-items:center;">
        <input v-model="keywords" style="font-size:0.9em;background-color:transparent;border-style:none;outline:none;margin-left:15px;flex:1;" type="text" placeholder="请输入搜索关键字">
        <div style="width:20px;height:20px;margin-right:15px;line-height:20px;">
          <span class="iconfont icon-search" style="color:#797979;"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { TransferDom, Popup, Scroller } from 'vux'
import _ from 'lodash'
import global from '../../../src/components/common/Global.vue'
const { mallId } = global;

import {
  mapState,
} from 'vuex';

export  default {
  directives: {
    TransferDom
  },
  components:{
    Popup, Scroller,
  },
  data(){
    return{
      keywords: '',
      scrollTop: 0,
      popup: false,
      list: [],
      type: undefined,
      typeList: [{id: undefined, name:'全部'}, {id:0, name:'积分兑换'}, {id:2, name:'免费领取'}],
    }
  },
  computed: {
    typeName() {
      return (_.find(this.typeList, {id: this.type}) || {}).name;
    },
    ...mapState({
      member_id: state => state.member_id,
    }),
  },
  methods:{
    handleScroll({top}) {
      this.scrollTop = top;
    },
    changeType(id){
      this.type=id;
      this.popup=false;
      this.reload();
    },
    async reload(){
      const receiveMethod = this.type;
      const keywords = this.keywords
      try{
        this.list = (await this.$http.post(`/api/coupon/list`, {
          mallId, page:1, receiveMethod, size:200, keywords
        })).data
      }catch(e){
        this.list = [];
      }
    }
  },
  watch: {
    keywords(curVal, oldVal){
      this.reload()
    }
  },
  async mounted(){
    this.reload()
  }
}
</script>

<style lang="less" scoped>
.type-list div.active {
  color: #ff9a00;
}
</style>
