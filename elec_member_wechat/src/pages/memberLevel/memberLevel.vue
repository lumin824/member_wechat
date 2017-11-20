<template>
  <div>
    <div style="display:flex;background-color:#fff;margin-top:20px;border-top:1px solid #e1e1e1;border-bottom:1px solid #e1e1e1;">
      <div>
        <img src="static/img/cat.jpg" style="border-radius:50%;width:80px;height:80px;margin:20px;">
      </div>
      <div>
        <div style="margin-top:20px;font-size:1.1em;">{{user.name}} <span v-if="user.level" style="background-color:#56ded3;color:#fff;padding:2px 5px;font-size:0.9em;border-radius:3px;">{{user.level}}</span></div>
        <div style="font-size:0.9em;color:#7f8081;">累计积分<span style="margin-left:10px;">{{user.cumulate_points}}</span></div>
        <div style="font-size:0.9em;color:#7f8081;">可用积分<span style="margin-left:10px;">{{user.usable_points}}</span></div>
      </div>
    </div>

    <div style="display:flex;background-color:#fff;text-align:center;">
      <div style="flex:1;padding:10px 0;border-bottom:3px solid #00c9b2;color:#00c9b2;">积分记录</div>
      <a href="https://mp.weixin.qq.com/s/N40si0A7iUNUXRK85sxjZQ" target="_blank" style="flex:1;padding:10px 0;">会员权益</a>
    </div>

    <div style="background-color:#fff;margin-top:20px;padding:0 15px;">
      <table style="width:100%;" border="0" cellspacing="0" cellpadding="0">
        <tr style="height:40px;">
          <td style="border-bottom:1px solid #e1e1e1;padding-left:10px;">时间</td>
          <td style="border-bottom:1px solid #e1e1e1;">积分</td>
          <td style="border-bottom:1px solid #e1e1e1;">金额</td>
          <td style="border-bottom:1px solid #e1e1e1;">商户</td>
        </tr>
        <tbody>
          <template v-for="o in list">
            <tr @click="detailId=((detailId==o.mplog_id) ? null : o.mplog_id)" :class="{active:detailId==o.mplog_id}" style="height:40px;" >
              <td style="padding-left:10px;">{{o.shopping_date | unix('YYYY-MM-DD', 'ms')}}</td>
              <td style="color:#00c9b2;">{{o.points}}</td>
              <td style="color:#00c9b2;">{{o.amount}}</td>
              <td>{{o.shop_name}}</td>
            </tr>
            <tr v-if="detailId==o.mplog_id" :class="{active:detailId==o.mplog_id}" >
              <td colspan="4" style="padding-left:10px;">
                <table style="color:#7f8081;font-size:0.8em;">
                  <tr>
                    <td>抵扣时间</td><td>{{o.shopping_date | unix('YYYY-MM-DD hh:mm', 'ms')}}</td>
                  </tr>
                  <tr>
                    <td>抵扣商户</td><td>{{o.shop_name}}</td>
                  </tr>
                  <tr>
                    <td>抵扣金额</td><td>{{o.amount}}</td>
                  </tr>
                  <tr>
                    <td>扣减积分</td><td>{{o.points}}</td>
                  </tr>
                </table>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
   </div>
</template>
<script>
import global from '../../../src/components/common/Global'
import moment from 'moment'
import {
  mapState,
} from 'vuex';
export default {
  components:{
  },
  computed: {
    ...mapState({
      member_id: state => state.member_id,
    }),
  },
  filters:{
    time(value){
      let date =  new Date(value);
      let y = 1900+date.getYear();
      let m = "0"+(date.getMonth()+1);
      let d = "0"+date.getDate();
      let H = date.getHours();
      let minu= date.getMinutes();
      return y+"/"+m.substring(m.length-2,m.length)+"/"+d.substring(d.length-2,d.length)+' '+H+':'+minu;
    },
    unix: (value, format, unit) => {
      return moment.unix((unit == 'ms') ? (value / 1000) : value).format(format)
    }
  },
  data(){
   /* this.$http.get('http://192.168.1.160/test').then(resp=>{
        console.log(resp);}*/
    return{
      user: {},
      list: [],
      detailId: null
    }
  },
  async mounted(){

    let member_id = this.member_id;
    this.user = (await this.$http.get(`${global.apiHost}/member/${this.member_id}?mallId=${global.mallId}`)).data

    this.list = (await this.$http.post(`${global.apiHost}/member/${this.member_id}/pointsList`, {
      mallId: global.mallId, page: 1, size: 200
    })).data
  },
  methods:{
  },
}
</script>
<style lang="less" scoped>
tr.active {
  background-color: #fafbfc;
}
</style>
