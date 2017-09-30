<template>
  <div>
    <mt-field label="请输入姓名" placeholder="请输入姓名"></mt-field>
    <mt-field label="验证码"   placeholder="请输入验证码">
      <button v-show="show" @click="getCode(formData)" class="code">获取验证码</button>
      <button v-show="!show" class="code">{{count}} s</button>
    </mt-field>
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
  .code{
    height: 0.35rem;
    width:0.9rem ;
    background-color: #7DD8CF;
    border-radius:0.04rem;
    border:0;
    outline: 0;
    overflow:hidden;
    text-align: center;
    color: #fff;
    opacity:.8;
    margin-right: 0.07rem;
  }
  .mint-cell{
    color: #06c1ae;
  }
  .mint-button--primary{
    width: 90%;
    margin:0.13rem auto;
    background-color:#06c1ae ;
  }
</style>
