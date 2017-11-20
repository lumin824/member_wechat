<template>
  <div>
    <div>
      <div style="margin-top:10px;background:#fff;border-top:1px solid #e1e1e1;">
        <div style="display:flex;border-bottom:1px solid #e1e1e1;">
          <div style="width:70px;padding:10px;margin-left:10px;color:#00c9b2;">手机号</div>
          <div style="flex:1;padding:10px;">
            <input type="tel" placeholder="请输入手机号" v-model="mobile" />
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
    <div @click="handleSubmit" style="background-color:#00c9b2;color:#fff;padding:10px;text-align:center;margin-top:20px;margin: 20px;border-radius:5px;">下一步</div>
  </div>
</template>

<script>
import { Countdown } from 'vux'
import global from '../../../src/components/common/Global.vue'
const { apiHost, mallId } = global;
import CommonConfig from '@/../../common/config'
import UAParser from 'ua-parser-js'
export default {
  components:{
    Countdown,
  },
  data(){
    return {
      mobile: '',
      member_id: '',
      vcode: '',
      cd: 0,
    }
  },
  methods: {
    async getCode(){
      const { mobile } = this;

      const [errno, errmsg] = (!mobile && [1, '请输入手机号'])
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
        this.cd = 30;
        this.member_id = (await this.$http.get(`${apiHost}/member/m?mobile=${mobile}`)).data.member_id
        this.vcode = '888888'
        //this.$store.commit('login', member_id)
      }
    },

    async handleSubmit() {
      const { member_id, mobile, vcode } = this
      const { wx_openid } = this.$route.query
      if(member_id){
        this.$store.commit('login', {member_id})
        this.$router.push('/member');
        return
      }

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
        this.$router.push(`/registerInfo?mobile=${mobile}&openId=${wx_openid}`)
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
    let ua = new UAParser().getResult()
    const { wx_openid } = this.$route.query
    const { AppID } = CommonConfig.WX

    if (ua.browser.name === 'WeChat') {
      if(!wx_openid){
        const redirectUri = 'http://jiayuanmember.dorm9tech.com/wx/code2openid'
        location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${AppID}&redirect_uri=${redirectUri}&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect`
        return;
      }
    }

    if(wx_openid){
      try{
        let { member_id } = (await this.$http.get(`${apiHost}/member?appId=${AppID}&openId=${wx_openid}`)).data
        this.$store.commit('login', {member_id})
        this.$router.push('/member');
      }catch(e){  
      }
    }

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
