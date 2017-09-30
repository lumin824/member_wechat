<template>
  <div>
    <mt-field label="姓名" placeholder="请输入姓名"></mt-field>
       <!--  <label class="radio radio1"><input name="radio" type="radio"><span></span>男</label>
         <label class="radio radio2"><input name="radio" type="radio"><span></span>女</label>-->
    <mt-cell title="性别">
          <label class="radio radio1"><input name="radio" type="radio">男</label>
          <label class="radio radio2"><input name="radio" type="radio">女</label>
    </mt-cell>
    <mt-button size="large" type="primary">注册</mt-button>

  </div>
  <!--  <div>
      <div class="input-div" v-show="formData.phone">
        <input type="text" class="input code" name="code" v-model.trim="formData.code" placeholder="验证码">
        <button @click="getCode(formData)" class="code-btn" :disabled="!show">
          <span v-show="show">获取验证码</span>
          <span v-show="!show" class="count">{{count}} s</span>
        </button>
      </div>
    </div>-->

</template>
<script>
  export default {
    data(){
        return {
          formData: {
            phone:'',
            code:'',
          },
          show: true,
          count: '',
          timer: null,
        }
    },
    // const TIME_COUNT = 60;
      methods:{
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
        }
      }
  }
</script>
<style lang="less" scoped>
  div{
    max-width: 640px;
    margin-top: 50px;
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

  }
  .radio2{

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
</style>
