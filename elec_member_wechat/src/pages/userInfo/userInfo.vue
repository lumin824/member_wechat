<template>
       <div>
              
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
