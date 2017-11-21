<template>
  <scroller lock-x>
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

      <div>
        <div style="margin-top:10px;background:#fff;border-top:1px solid #e1e1e1;">
          <div style="display:flex;border-bottom:1px solid #e1e1e1;">
            <div style="width:70px;padding:10px;margin-left:10px;color:#00c9b2;">新手机号</div>
            <div style="flex:1;padding:10px;">
              <input type="tel" placeholder="请输入新手机号" v-model="mobile" />
            </div>
          </div>

          <div style="display:flex;border-bottom:1px solid #e1e1e1;">
            <div style="width:70px;padding:10px;margin-left:10px;color:#00c9b2;">验证码</div>
            <div style="flex:1;padding:10px;">
              <input type="number" placeholder="请输入验证码" v-model="vcode" />
            </div>
            <button :disabled="cd > 0" ref="code" @click="getCode" class="btn-code" style="padding:5px 10px;margin:5px;min-width:80px;">
              <div style="text-align:center;width:100%;">{{cd > 0 ? `${cd} 秒` : '获取验证码'}}</div>
            </button>
          </div>
        </div>
      </div>

      <countdown v-model="cd" :start="cd>0" v-show="false"></countdown>
      <div @click="handleSubmit" style="background-color:#00c9b2;color:#fff;padding:10px;text-align:center;margin-top:20px;margin: 20px;border-radius:5px;">提交修改</div>
    </div>
  </scroller>
</template>

<script>
import global from '../../../src/components/common/Global.vue'
const { apiHost, mallId } = global;

import { TransferDom, Scroller, Countdown } from 'vux'

import _ from 'lodash';
import moment from 'moment';
import {
  mapState,
} from 'vuex';
export default {
  directives: {
    TransferDom
  },
  components: {
    Scroller, Countdown
  },
  data() {
    return {
      mobile: '',
      vcode: '',
      user: {},
      cd: 0,
    }
  },
  computed: {
    ...mapState({
      member_id: state => state.member_id,
    }),
  },
  methods: {
    async getCode(){
      const { mobile } = this;

      const [errno, errmsg] = (!mobile && [1, '请输入新手机号'])
        || (!/1\d{10}/.test(mobile) && [2, '请输入正确的手机号'])
        || [];
      if(errno){
        this.$vux.toast.text(errmsg)
        return
      }

      try{
        await this.$http.post(`${apiHost}/member/vcode`,{mallId, mobile})
        this.cd = 30;
      }catch(e){
        this.$vux.toast.text(`该手机号已注册会员`)
      }
    },

    async handleSubmit() {
      const { member_id, mobile, vcode } = this

      const [errno, errmsg] = (!mobile && [1, '请输入手机号'])
                            || (!/1\d{10}/.test(mobile) && [2, '请输入正确的手机号'])
                            || (!vcode && [3, '请输入验证码'])
                            || [];
      if(errno){
        this.$vux.toast.text(errmsg)
        return
      }
      try{
        await this.$http.post(`${apiHost}/member/vcodeCheck`,{mobile,vcode})

        await this.$http.put(`${global.apiHost}/member`, {
          memberId: member_id, mobile
        })

        this.$vux.toast.text('手机号修改成功')
        this.$router.back();

      }catch(e){
        if(e.response){
          this.$vux.toast.text(e.response.data.content)
        }else{
          this.$vux.toast.text(e.message)
        }
      }
    },
  },
  async mounted(){
    let member_id = this.member_id;
    let { data } = await this.$http.get(`${global.apiHost}/member/${this.member_id}?mallId=${global.mallId}`)
    this.user=data;
  }
}
</script>
<style lang="less" scoped>
input {
  background-color:transparent;
  border-style:none;
  outline:none;
  width: 100%;
}
button.btn-code {
  border: 0;
  background-color:#00c9b2;
  color:#fff;
  font-size:0.8em;
  display:flex;
  align-items:center;
  border-radius:5px;
  outline:none;
}
button.btn-code:disabled {
  background-color:#7DD8CF !important;
}
</style>
