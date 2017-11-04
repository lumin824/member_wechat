<template>
  <div>
<!--    <mt-header title="券">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>-->
      <div class="voucher">
             <img  v-bind:src="logo" alt="">
              <div >
                       <select name="vouSel" id="vouSel "style="font-size:0.15rem;">
                            <option value="">券</option>
                            <option value="">积分券</option>
                            <option value="">停车券</option>
                       </select>
                      <lalel for="vouSel"><img style="width: 0.1rem;height: 0.07rem;position: relative;top:0.11rem;left:0.05rem;" src="static/img/xx.png" alt=""></lalel>
                      <img style="width: 0.2rem;height: 0.2rem;position: relative;left: 73%;top:0.05rem;" src="static/img/search.png" alt="">
                      <input type="text" placeholder="请输入搜索关键字" style="width:3rem;height:0.3rem;font-size:0.2rem;padding-top:0.1rem">
              </div>
              <div style="margin-top:-0.3rem;margin-left:80%;width:1rem">
                  <router-link to="/register" style="padding-top:-1rem"><h2 style="width:0.9rem">立即注册 >></h2></router-link>
              </div>
      </div>
     <m-vList style="margin-top: 0.12rem;"></m-vList>
  </div>
</template>

<script>
  import voucherList  from '../../components/common/voucherList.vue'
  import voucherLogo from '../../../static/img/voucherLogo.jpg'
  export  default {
     components:{
          'm-vList':voucherList,
     },
    data(){
       return{
          logo:voucherLogo,
       }
    },
    methods:{



    }
  }
</script>

<style lang="less" scoped>
  .voucher{
  }
  .voucher img{
    width: 100%;
    height: 1.8rem;
  }
  .voucher div{
    position: absolute;
    top:0.1rem;
    display: flex;
    text-align: center;
  }
  .voucher  select{
    border:0;
    background: transparent;
    -webkit-appearance: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    color: #EEFFFD;
    outline:none;
    position: relative;
    left: 0.2rem;
  }
  .voucher select:hover{
    border:none;
    outline: none;
  }
  .voucher  div input{
    border-radius: 0.2rem;
    border: 0;
    outline: none;
    height: 0.25rem;
    width: 2.2rem;
    text-indent: 0.16rem;
  }
  ::-webkit-input-placeholder{
    font-size: 0.13rem;
    margin-left: 0.2rem;
  }
  .register{
      width: 0.1rem;
      height: 0.1rem;
  }
   select option{
     background-color: #9D9D9D;
   }
  .voucher a{
    font-size: 0.15rem;
    color: #F9E60E;
    position: absolute;
    right: 0.3rem;
    top: 1.7rem;
  }
</style>




