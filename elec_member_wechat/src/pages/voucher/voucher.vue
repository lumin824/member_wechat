<template>
  <div>
      <div class="voucher" style="background-image:url(/static/img/voucherLogo.4d27212.jpg);height:180px;background-size:100% auto;background-repeat: no-repeat;">
         <div style="display:flex;align-items: center;">
           <div class="div1">
             <select name="vouSel" id="vouSel "style="font-size:0.15rem;padding-left:-1%;width:100%">
                  <option value="">券</option>
                  <option value="">积分券</option>
                  <option value="">停车券</option>
              </select>
           </div>

           <div class="div2">
             <img style="width: 0.1rem;height: 0.07rem;" src="static/img/xx.png" alt="" class="xia">
           </div>

           <div class="div3">
            <input type="text" placeholder="请输入搜索关键字" class="sou" style="height:0.33rem;width:65%">
            <img class="sercher" style="width: 0.2rem;height: 0.2rem;margin-right: 15px; " src="static/img/search.png" alt="">
           </div>

         </div>
              <div style="margin-top:-0.3rem;margin-left:80%;width:1rem">
                  <router-link to="/register" style="padding-top:-1rem">
                    <h2 style="width:0.9rem; padding-left: 25%;margin-top: -30%;" class="add">立即注册 >></h2>
                  </router-link>
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
  .div1{
    padding-left: 5%;
  }
  .div3{
    flex: 1;
  }
  .sou{
    margin-top: 0.3%;
    padding-right:27%;
    margin-left: 5%;
  }
  .sercher{
    position: absolute;
    left: 87%;
    top: 15%;
  }
  .voucher{
    position: fixed;
    left: 0%;
    right: 0%;
    top: 0%;
  }
  .voucher img{
    width: 100%;
    height: 1.8rem;
  }
  .voucher div{
    margin-top: 0.1rem;
  }
  .voucher  select{
    border:0;
    background: transparent;
    -webkit-appearance: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    color: #EEFFFD;
    outline:none;
  }
  .voucher select:hover{
    border:none;
    outline: none;
  }
  .voucher  div input{
    border-radius: 0.2rem;
    border: 0;
    outline: none;
    height: 20%;
    text-indent: 0.16rem;
    text-align:left;
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




