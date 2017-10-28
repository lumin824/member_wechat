<template>
   <div>
       <mt-header title="修改手机号">
         <router-link to="/" slot="left">
           <mt-button icon="back">返回</mt-button>
         </router-link>
       </mt-header>
     <m-header></m-header>
     <m-phone></m-phone>


   </div>

</template>

<script>
  import  header from '../../../src/components/header/header.vue'
  import  changPhone from '../../../src/components/common/index.vue'
   export default {
        components:{
          'm-header':header,
          'm-phone':changPhone
        }



   }


</script>

<style lang="less" scoped>



</style>
