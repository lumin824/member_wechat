<template>
   <div>
       <mt-header title="绑定">
         <router-link to="/" slot="left">
           <mt-button icon="back">返回</mt-button>
         </router-link>
       </mt-header>
     <r-phone></r-phone>


   </div>

</template>

<script>
  import  changPhone from '../../../src/components/common/register.vue'
   export default {
        components:{
          'r-phone':changPhone
        }



   }


</script>

<style lang="less" scoped>



</style>
