<template>

    <div>
      <img :src="item.picture" style="height:250px;width:100%;">

      <div style="text-align: center; margin: 20px 0px;">{{item.title}}</div>

      <div style="background-color:#FFFFFF;margin:0 10px;">
          <div style="display:flex;align-items:center;">
            <div style="border-left:2px solid #000;height:8px;"> </div>
            <div style="flex:1;margin:5px 10px;">活动详情</div>
          </div>
          <div class="bbody" style="border-bottom:1px solid #E3E3E3;color:#767676;padding: 5px;font-size:0.7em;">
              活动时间<label style="padding-left:15px;">{{item.activity_time_start | unix('YYYY-MM-DD', 'ms')}} ~ {{item.activity_time_end | unix('YYYY-MM-DD', 'ms')}}</label>
          </div>
          <div class="bbody" style="border-bottom:1px solid #E3E3E3;color:#767676;padding: 5px;font-size:0.7em;">
              活动地点<label style="padding-left:15px;">{{item.address}}</label>
          </div>
          <div class="bbody" style="border-bottom:1px solid #E3E3E3;color:#767676;padding: 5px;font-size:0.7em;">
              剩余人数<label style="padding-left: 16px;color: rgb(255, 136, 23);">{{item.sign_up_residue}}</label>
          </div>
          <div class="bbody" style="border-bottom:1px solid #E3E3E3;color:#767676;padding: 5px;font-size:0.7em;">
              报名条件<label style="padding-left: 16px;color: rgb(255, 136, 23);">{{item.sign_up_points}}积分</label>
          </div>
          <div class="bbody" style="border-bottom: 1px ; color: rgb(118, 118, 118); padding: 5px;font-size:0.7em;">
              活动奖励<label style="padding-left: 16px;">签到获得{{item.incentive_points}} 积分</label>
          </div>
      </div>

      <div v-html="item.intro" style="color:#777879;font-size:0.8em;padding:15px;line-height:2em;margin-bottom:50px;">
      </div>

      <div :class="{active:item.limitPromptCode==5}" @click="item.limitPromptCode==5 && signup()" style="position:fixed;bottom:0;left:0;right:0;background-color:#939393;color:#fff;text-align:center;padding:15px 0;">
        {{limitPromptCode}}
      </div>
    </div>
</template>

<script>
import { Scroller } from 'vux'
import global from '@/components/common/Global.vue'
const { mallId } = global;
import moment from 'moment'
import {
  mapState,
} from 'vuex';

export default {
  components:{
    Scroller
  },
  data(){
    return{
      item: {},
      enableSignInCode: 0,
      limitPromptCodeMap: {
        '0': '活动结束',
        '1': '已报名',
        '2': '报名已截止',
        '3': '名额已满',
        '4': '积分不足',
        '5': '可报名',
        '6': '不用报名'
      }
    }
  },
  filters: {
    unix: (value, format, unit) => {
      return moment.unix((unit == 'ms') ? (value / 1000) : value).format(format)
    }
  },
  computed: {
    limitPromptCode(){
      if(this.item.limitPromptCode == 1 && this.enableSignInCode == 3){
        return '已签到'

      }
      return this.limitPromptCodeMap[this.item.limitPromptCode] || this.item.limitPromptCode
    },
    ...mapState({
      member_id: state => state.member_id,
    }),
  },
  methods:{
    async signup() {
      const { id } = this.$route.query;
      const { coupon_type: couponType, receive_method: receivedMethod, required_points: requiredPoints} = this.item;

      const doReceive = async () => {

        let data = {}
        try {
          data = (await this.$http.put(`/api/member/${this.member_id}/activitySignUp/${id}`)).data
        }catch (e){
          if(e.response){
            data = e.response.data
          }
        }

        this.$vux.toast.text(data.content)
        this.$router.back()
      }

      let needConfirm = this.item.sign_up_points > 0;
      if(needConfirm){
        this.$vux.confirm.show({
          content: `确认使用${this.item.sign_up_points}积分报名吗？`,
          confirmText: '确定报名',
          cancelText: '暂不报名',
          onConfirm: doReceive
        })
      }else{
        doReceive()
      }
    },
  },
  async mounted(){
    document.title = '活动详情'
    const { id } = this.$route.query;
    this.item = (await this.$http.get(`/api/activity/${id}?memberId=${this.member_id}`)).data
    try {
      this.enableSignInCode = (await this.$http.get(`/api/member/${this.member_id}/enableSignIn/${id}?mallId=${mallId}`)).data
    }catch (e){
      if(e.response){
        this.enableSignInCode = e.response.data
      }
    }
    console.log(this.enableSignInCode)
  }
}
</script>

<style lang="less" scoped>
.active {
  background-color: #00d6c6 !important;
}
</style>
