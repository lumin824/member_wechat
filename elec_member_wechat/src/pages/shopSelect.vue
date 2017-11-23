<template>
  <scroller lock-x>
    <div>
      <div @click="choose(o)" style="display:flex;background-color:#fff;margin-top:1px;" v-for="o in list">
        <div style="width:70px;height:70px;display:flex;align-items:center;justify-content:center;">
          <img :src="o.logo" style="width:64px;height:64px;">
        </div>
        <div style="flex:1;">
          <div style="font-size:1em;margin-left:5px;margin-top:10px;">{{o.shop_name}}</div>
          <div style="display:flex;font-size:0.9em;margin-left:5px;">
            <div style="flex:1;">
              <div style="color:#78797a;">{{o.industry_name}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </scroller>
</template>

<script>
import global from '../../src/components/common/Global.vue'
const { mallId } = global;
import { Checker, CheckerItem, TransferDom, Popup, Scroller } from 'vux'
import _ from 'lodash'
export default {
  directives: {
    TransferDom
  },
  components: {
    Popup, Scroller,Checker, CheckerItem,
  },
  data() {
    return {
      popup: false,
      popupTitle: '',
      popupKey: null,
      popupSelected: null,
      list: [],
    }
  },
  methods: {
    choose({shop_id,shop_name}){
      this.$router.back();
      this.$store.commit('staffshop', {shopId:shop_id,shopName:shop_name})
    },
  },
  async mounted(){
    this.list = (await this.$http.post(`/api/shop`, {
      mall_id: mallId, page:1, size:200})).data
  }
}
</script>


<style lang="less" scoped>
</style>
