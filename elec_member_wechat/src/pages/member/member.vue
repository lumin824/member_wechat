<template>
    <div>
          <mt-header title="会员中心">
            <router-link to="/" slot="left">
              <mt-button icon="back">返回</mt-button>
             <!-- <mt-button v-if="closeButton" icon="close">关闭</mt-button>-->
            </router-link>
          </mt-header>
          <m-header></m-header>
          <m-info></m-info>
          <m-nav></m-nav>
    </div>
</template>
<script>
  import  Header from '../../../src/components/header/header.vue'
  import  MyInfo from '../../../src/components/common/myInfo.vue'
  import  MemberNav from '../../../src/components/common/memberNav.vue'
  export  default {
    components:{
      /*   'm-header':Header,
         'm-info':MyInfo,
         'm-nav':MemberNav,
         'm-user':UserIndex,
         'r-index':RegisterIndex,
         'r-success':RegisterSuccess,
         'r-data':RegisterData,*/
      'm-header':Header,
      'm-info':MyInfo,
      'm-nav':MemberNav,
    }
  }
</script>


<style  lang="less" scoped>






</style>
