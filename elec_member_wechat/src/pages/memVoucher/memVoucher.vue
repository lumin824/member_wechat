<template>
  <div>
          <mt-header title="券">
            <router-link to="/" slot="left">
              <mt-button icon="back">返回</mt-button>
            </router-link>
          </mt-header>
        <div class="voucher">
              <select name="" id="vouSel">
                      <option value="">券</option>
                      <option value="">积分券</option>
                      <option value="">停车券</option>
              </select>
          <!--<img   style="width: 0.12rem;height: 0.11rem;position: relative;top:0.11rem;right:0.12rem;background-color: #333" src="static/img/xx.png" alt="">-->
          <img   style="width: 0.18rem;height: 0.18rem;position: relative;left: 75%;top:0.04rem;" src="static/img/search.png" alt="">
          <input type="text" placeholder="请输入搜索关键字">
        </div>
          <m-header style="margin-bottom: 0.1rem;"></m-header>
          <m-vList></m-vList>
  </div>
</template>

<script>
  import  Header from '../../../src/components/header/header.vue'
  import voucherList  from '../../components/common/voucherList.vue'
  export  default {
    components:{
      'm-header':Header,
      'm-vList':voucherList,
    },
    data(){
      return{

      }
    },
    methods:{



    }


  }

</script>


<style lang="less" scoped>
  .voucher{
    display: flex;
    margin: 0.1rem 20% 0 20%;
  }

  .voucher  select{
    border:0;
    background: transparent;
    -webkit-appearance: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    color: #666;
    outline:none;




  }
  .voucher select:hover{

    border:none;
    outline: none;
  }
  .voucher  input{
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
  .rank{
    position:absolute;
    top:1.6rem;


  }




</style>
