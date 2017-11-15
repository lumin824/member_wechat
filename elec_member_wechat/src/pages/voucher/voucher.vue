<template>
  <div>
    <div style="position:fixed;top:0;left:0;right:15px;display:flex;height:30px;margin-top:20px;">
      <div style="font-size:0.9em;width:90px;padding:5px 10px;text-align:center;line-height:15px;color:#fff;" @click="show10=true">{{typeName}} <span class="iconfont icon-unfold"></span></div>
      <div style="display:flex;flex:1;background-color:#fff;border-radius:15px;align-items:center;">
        <input style="font-size:0.9em;background-color:transparent;border-style:none;outline:none;margin-left:15px;flex:1;" type="text" placeholder="请输入搜索关键字">
        <div style="width:20px;height:20px;margin-right:15px;">
          <img src="static/img/search.png" style="width:20px;height:20px;">
        </div>
      </div>
    </div>

    <div style="height:200px;background-color:green;">
    </div>

    <div style="margin-top:20px;">
      <router-link to="/voucherDetail" style="display:flex;background-color:#fff;margin-top:1px;" v-for="o in list">
        <div style="width:96px;height:96px;display:flex;align-items:center;justify-content:center;">
          <img src="static/img/hgds.jpg" style="width:90px;height:90px;">
        </div>
        <div style="flex:1;">
          <div style="font-size:1em;margin-left:5px;margin-top:10px;">哈根达斯满百减十</div>
          <div style="display:flex;font-size:0.9em;margin-left:5px;">
            <div style="flex:1;">
              <div style="color:#78797a;">市场价：20元</div>
              <div style="color:#00cfaf;">优惠价：10元</div>
            </div>
            <div style="display:flex;align-items:center;margin-right:10px;">
              <div style="border:1px solid #ff9100;color:#ff9100;border-radius:3px;padding:2px 5px;">立即支付</div>
            </div>
          </div>
        </div>
      </router-link>
    </div>

    <div v-transfer-dom>
      <popup v-model="show10" position="top" :popup-style="{backgroundColor:'#fff', marginTop:'60px'}" :is-transparent="true">
        <div class="type-list">
          <div v-for="o in typeList" @click="type=o.id;show10=false;" :class="{'active': o.id==type }" style="display:flex;align-items:center;height:40px;border-bottom:1px solid #ddd;padding-left:20px;">{{o.name}}</div>
        </div>
      </popup>
    </div>

      <!-- <div class="voucher" style="background-image:url(/static/img/voucherLogo.4d27212.jpg);height:180px;background-size:100% auto;background-repeat: no-repeat;">
         <div style="display:flex;align-items: center;">
           <div class="div1">
             <select name="vouSel" id="vouSel "style="font-size:0.15rem;padding-left:-1%;width:100%">
                  <option value="">券</option>
                  <option value="">积分券</option>
                  <option value="">停车券</option>
              </select>
           </div>

           <div class="div2">
             <img style="width: 0.1rem;height: 0.07rem;" src="static/img/xx.png" alt="" class="xia">
           </div>

           <div class="div3">
            <input type="text" placeholder="请输入搜索关键字" class="sou" style="height:0.33rem;width:65%">
            <img class="sercher" style="width: 0.2rem;height: 0.2rem;margin-right: 15px; " src="static/img/search.png" alt="">
           </div>

         </div>
              <div style="margin-top:-0.3rem;margin-left:80%;width:1rem">
                  <router-link to="/register" style="padding-top:-1rem">
                    <h2 style="width:0.9rem; padding-left: 25%;margin-top: -30%;" class="add">立即注册 >></h2>
                  </router-link>
              </div>
      </div>
     <m-vList style="margin-top: 0.12rem;"></m-vList> -->
  </div>
</template>

<script>
import voucherList  from '../../components/common/voucherList.vue'
import voucherLogo from '../../../static/img/voucherLogo.jpg'

import { TransferDom, Popup } from 'vux'
import _ from 'lodash'

export  default {
  directives: {
    TransferDom
  },
  components:{
    'm-vList':voucherList,
    Popup,
  },
  data(){
    return{
      show10: false,
      logo:voucherLogo,
      list: [1,2,3,4,5,6,7,8],
      type: 1,
      typeList: [{id:1, name:'免费领券'}, {id:2, name:'团购券'}, {id:3, name:'停车券'}],
    }
  },
  computed: {
    typeName() {
      return (_.find(this.typeList, {id: this.type}) || {}).name;
    }
  },
  methods:{
  }
}
</script>

<style lang="less" scoped>
.type-list div.active {
  color: #ff9a00;
}
</style>
