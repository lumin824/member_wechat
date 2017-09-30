<template>
  <div id="app">
    <mt-header fixed title="会员中心">
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
    </mt-header>
  <!-- <m-header></m-header>-->
    <!--<m-user></m-user>-->
 <!--  <r-index></r-index>-->
 <!--  <r-success></r-success>-->
   <r-data></r-data>

  </div>
</template>

<script>
import  Header from './components/member/header.vue'
import  MyInfo from './components/member/myInfo.vue'
import  MemberNav from './components/member/memberNav.vue'
import  UserIndex from './components/member/userindex.vue'
import  RegisterIndex from './components/register/index.vue'
import  RegisterSuccess from './components/register/success.vue'
import  RegisterData from './components/register/data.vue'
export default {
    components:{
       'm-header':Header,
       'm-info':MyInfo,
       'm-nav':MemberNav,
       'm-user':UserIndex,
       'r-index':RegisterIndex,
       'r-success':RegisterSuccess,
       'r-data':RegisterData,
    }
}
</script>
<style>
  .mint-header{
    background-color: #1C1B21;
  }
</style>
