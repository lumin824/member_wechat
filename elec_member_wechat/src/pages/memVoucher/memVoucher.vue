<template>
  <div class="herder">
        <div class="voucher" style="position: fixed; top: 0;left: 0;">
              <!-- <select name="" id="vouSel">
                      <option value="">券</option>
                      <option value="">积分券</option>
                      <option value="">停车券</option>
              </select> -->
              <div class="top">
                <popup-radio :options="options1" v-model="option1"></popup-radio>
              </div>
          <!--<img   style="width: 0.12rem;height: 0.11rem;position: relative;top:0.11rem;right:0.12rem;background-color: #333" src="static/img/xx.png" alt="">-->
          <img   style="width: 7%;height:1%;position: relative;left: 65%;top:1%;" src="static/img/search.png" alt="">
          <input type="text" placeholder="请输入搜索关键字">
        </div>
          <m-header style="position: fixed;left: 0;right: 0;top: 25px;"></m-header>
          <div style="position: absolute;left: 0;right: 0;top: 180px;z-index:2;">
              <ul class="sellers" style="background-color:#FFFFFF">

            <router-link to="/voucherDetail" tag="li" style="display:flex;height:100px;">
              <div style="width:76px;padding:10px;">
                <div style="background-image:url(static/img/hgds.jpg);height:100%;width:100%;background-size:cover;"></div>
              </div>
              <div style="flex:1;display:flex;flex-direction:column;justify-content:center;">
                <h1 style="font-size:0.16rem;height:0.28rem"><strong>哈根达斯满百减十</strong></h1>
                <h2 style="color:#828282;height:0.24rem">市场价:100元</h2>
                <h3 style="color:#68D5C2;">优惠价:90元</h3>
              </div>
              <div style="width:96px;display:flex;align-items: center;" >
                <button style="width:0.8rem;height:0.25rem;">已领取</button>
              </div>
            </router-link>

            <router-link to="/voucherDetail" tag="li" style="display:flex;height:100px;">
              <div style="width:76px;padding:10px;">
                <div style="background-image:url(static/img/hgds.jpg);height:100%;width:100%;background-size:cover;"></div>
              </div>
              <div style="flex:1;display:flex;flex-direction:column;justify-content:center;">
                <h1 style="font-size:0.16rem;height:0.28rem"><strong>哈根达斯满百减十</strong></h1>
                <h2 style="color:#828282;height:0.24rem">市场价:100元</h2>
                <h3 style="color:#68D5C2;">优惠价:90元</h3>
              </div>
              <div style="width:96px;display:flex;align-items: center;" >
                <button style="width:0.8rem;height:0.25rem;">已领取</button>
              </div>
            </router-link>

        <router-link to="/voucherDetail" tag="li" style="display:flex;height:100px;">
              <div style="width:76px;padding:10px;">
                <div style="background-image:url(static/img/hgds.jpg);height:100%;width:100%;background-size:cover;"></div>
              </div>
              <div style="flex:1;display:flex;flex-direction:column;justify-content:center;">
                <h1 style="font-size:0.16rem;height:0.28rem"><strong>哈根达斯满百减十</strong></h1>
                <h2 style="color:#828282;height:0.24rem">市场价:100元</h2>
                <h3 style="color:#68D5C2;">优惠价:90元</h3>
              </div>
              <div style="width:96px;display:flex;align-items: center;" >
                <button style="width:0.8rem;height:0.25rem;">未领取</button>
              </div>
            </router-link>
            <router-link to="/voucherDetail" tag="li" style="display:flex;height:100px;">
              <div style="width:76px;padding:10px;">
                <div style="background-image:url(static/img/hgds.jpg);height:100%;width:100%;background-size:cover;"></div>
              </div>
              <div style="flex:1;display:flex;flex-direction:column;justify-content:center;">
                <h1 style="font-size:0.16rem;"><strong>德芙巧克力 纵向新丝滑</strong></h1>
                <h2 style="color:#828282;height:0.24rem">市场价:100元</h2>
                <h3 style="color:#68D5C2;">优惠价:90元</h3>
              </div>
              <div style="width:96px;display:flex;align-items: center;" >
                <button style="width:0.8rem;height:0.25rem;">未领取</button>
              </div>
            </router-link>
  </ul>
  <div style="color:#767676;text-align:center;width:100%;padding-top:0.1rem">更多券敬请期待...</div>
    </div>
</div>
</template>

<script>
  import  Header from '../../../src/components/header/header.vue'
  import voucherList  from '../../components/common/voucherList.vue'
  import { Group, PopupRadio } from 'vux'
  export  default {
    components:{
      Group,
      PopupRadio,
      'm-header':Header,
      'm-vList':voucherList,
      
    },
    data(){
      return{
        option1: '卷',
        options1: ['卷', '积分券', '停车券'],
      }
    },
    methods:{

    }
  }
</script>


<style lang="less" scoped>
  .voucher{
    position: absolute; 
    display: flex;
    margin: 0.1rem 20% 0 20%;
  }
  .top{
    margin-top:-4.5%;
    margin-left: -20%;
    font-size: 15px;
  }
  .herder{
    overflow: visible;
    overflow: hidden;
  }
  .voucher  select{
    border:0;
    background: transparent;
    -webkit-appearance: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    color: #666;
    outline:none;
  }
  li>div>button{
    border: 0.01rem solid #FF9700;
    background-color:#FFFFFF;
    color:#FF9700;
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
    margin-left: -10%;
    margin-top: -1%;
    padding-left: 2%;
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
