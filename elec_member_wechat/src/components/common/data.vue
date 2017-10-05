<template>
  <div>
    <mt-field label="姓名" placeholder="请输入姓名"></mt-field>
       <!--  <label class="radio radio1"><input name="radio" type="radio"><span></span>男</label>
         <label class="radio radio2"><input name="radio" type="radio"><span></span>女</label>-->
    <mt-cell title="性别">
            <label class="radio radio3" v-if="android==true"><input name="radio" type="radio">男</label>
            <label class="radio radio1" v-else><input name="radio" type="radio">男</label>
            <label class="radio radio4" v-if="android==true"><input name="radio" type="radio">女</label>
            <label class="radio radio2" v-else><input name="radio" type="radio">女</label>
    </mt-cell>
    <mt-field label="生日" readonly :placeholder="brithday">
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
    <router-link to="/registerSucc"><mt-button size="large" type="primary">注册</mt-button></router-link>
  </div>
</template>
<script>
  export default {
    data(){
        return {
            formData: {
              phone:'',
              code:'',
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

     },
      methods:{
        open(picker) {
          this.$refs[picker].open();
        },
        handleChange(value) {
          this.brithday=`${value.getFullYear()+1}年${value.getMonth()+1}月${value.getDate()}日`;
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
