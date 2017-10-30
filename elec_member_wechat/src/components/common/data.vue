<template>
  <div>
    <mt-field label="姓名" :placeholder="namePl" :state="nameSta" v-model="formData.name"></mt-field>
       <!--  <label class="radio radio1"><input name="radio" type="radio"><span></span>男</label>
         <label class="radio radio2"><input name="radio" type="radio"><span></span>女</label>-->
    <mt-cell title="性别">
                <label class="radio radio3" v-if="android==true"><input name="radio" value="0"  v-model="formData.sex"   type="radio">男</label>
                <label class="radio radio1" v-else><input name="radio" v-model="formData.sex"  type="radio" value="0">男</label>
                <label class="radio radio4" v-if="android==true"><input v-model="formData.sex"  name="radio" value="1" type="radio">女</label>
                <label class="radio radio2" v-else><input name="radio" v-model="formData.sex"  type="radio" value="1">女</label>
    </mt-cell>
    <mt-field label="生日" readonly :placeholder="brithday" :state="birthdatySta">
        <mt-button  @click="open('picker1')" size="small"><img src="static/img/date.png" alt=""></mt-button>
        <br>
        <mt-datetime-picker
          ref="picker1"
          type="date"
          v-model="value1"
          year-format="{value} 年"
          month-format="{value} 月"
          date-format="{value} 日"
          :startDate="startDate"
          :endDate="endDate"
          @confirm="handleChange">
        </mt-datetime-picker>
    </mt-field>
   <!-- <router-link to="/registerSucc"></router-link>-->
    <mt-button size="large" type="primary" @click="subInfo">注册</mt-button>
  </div>
</template>
<script>
  import  {setCookie} from '../../../src/util/util'
  import  {getCookie} from '../../../src/util/util'
  export default {
    data(){
        return {
            namePl:'请输入姓名',
            nameSta:'',
            birthdatySta:'',
            mall_id:1,
            formData: {
              phone:'',
              code:'',
              name:'',
              sex:'',
              birthday:'',
              openId:12345678,
            },
            value1: null,
            show: true,
            count: '',
            timer: null,
            startDate: new Date('1970-1-1'),
            endDate: new Date(),
            brithday:'请选择日期',
            android:false,
        }
    },
     mounted:function () {
        let u = navigator.userAgent;
        let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
          if(isAndroid){
              this.android=true;
          }
          this.formData.phone = this.getParam('phone');
     },
      methods:{
        getParam(name) {
             let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
             let r = window.location.search.substr(1).match(reg);
             if(r != null) return unescape(r[2]);
             return null;
        },
        open(picker) {
             this.$refs[picker].open();
        },
        handleChange(value) {

          this.formData.birthday=Date.parse(value)/1000;
          this.brithday=`${value.getFullYear()}年${value.getMonth()+1}月${value.getDate()}日`;
        },
        getCode(formData){
          if (!this.timer) {
            this.count = 60;
            this.show = false;
            this.timer = setInterval(() => {
              if (this.count > 0 && this.count <= 60) {
                this.count--;
              } else {
                this.show = true;
                clearInterval(this.timer);
                this.timer = null;
              }
            }, 1000)
          }
        },
          //提交注册资料
          subInfo(){
            if(this.formData.name==''){
              this.namePl='姓名不能为空';
              this.nameSta='error';
              return false;
            }else {
              this.nameSta='success';
            }
            if(this.formData.sex==''){
              this.$toast({
                message:'必须选择性别',
                possition:'top',
              });
              return false;
            }
            if(this.formData.birthday==''){
              this.birthdatySta='error';
              this.brithday='生日不能为空';
              return false;
            }else{
              this.birthdatySta='success';
            }
            this.$http.post('http://121.196.208.176:9001/member',{'birthday':this.formData.birthday,'mallId':this.mall_id,'mobile':this.formData.phone,'name':this.formData.name,'sex':this.formData.sex,'openId':this.formData.openId}).then(data =>{
              if(data.data.member_id!=undefined && data.data.member_id!=''){
                //保存cookie(设置1年有效期)
                setCookie('member_id',data.data.member_id,365);
                this.$router.push('/registerSucc');
              }
            },err=>{
                this.$toast({
                      message:err.response.data.content,
                      possition:'middle',
                 });
                setTimeout(() => {
                  this.$router.push('/register');
                }, 2000);
            });
          }
      }
  }
</script>
<style lang="less" scoped>
  div{
    max-width: 640px;
    margin-top: 0.12rem;
  }
  mint-cell{
    color: #06c1ae;
    display: inline-block;
  }
  .radio{
     cursor: pointer;
  }
  .radio input{
    width: 0.2rem;
    height: 0.2rem;

  }
  .radio1{
     position: absolute;
     left: 27%;
     top:0.1rem;
  }
  .radio2{
    position: absolute;
    left: 42%;
    top:0.1rem;
  }
  .radio3{
    position: absolute;
    left: 31%;
    top:0.1rem;
  }
  .radio4{
    position: absolute;
    left: 45%;
    top:0.1rem;
  }
  .mint-button--primary{
    width: 90%;
    margin:0.13rem auto;
    background-color:#06c1ae ;
  }
  .mint-cell{
    color: #06c1ae;
  }
  .mint-field-core{
      margin-right: 20px;
  }
  .mint-cell-value{
    margin-right: 100px;
  }
  .mint-button--small{
   background-color: #fff;
    box-shadow: none;
  }
</style>
