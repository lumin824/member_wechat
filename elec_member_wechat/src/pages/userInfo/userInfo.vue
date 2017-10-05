<template>
       <div>
              <mt-header title="个人信息">
                 <router-link to="/" slot="left">
                   <mt-button icon="back">返回</mt-button>
                   <mt-button icon="close">关闭</mt-button>
                 </router-link>
               </mt-header>
              <m-header></m-header>
              <m-user></m-user>
       </div>
</template>

<script>
  import  header from '../../../src/components/header/header.vue'
  import  userIndex from '../../../src/components/common/userindex.vue'
 export  default {
     components:{
       'm-header':header,
       'm-user':userIndex,
     }
 }

</script>
<style lang="less" scoped>




</style>
