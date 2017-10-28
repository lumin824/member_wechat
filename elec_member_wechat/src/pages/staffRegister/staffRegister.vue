<template>
  <div>
    <mt-header title="人员注册">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
       <!-- <mt-button icon="close">关闭</mt-button>-->
      </router-link>
    </mt-header>
    <m-registerData></m-registerData>
  </div>


</template>

<script>
  import  registerData from '../../../src/components/common/staffData.vue'
  export default {
    components:{
      'm-registerData':registerData,
    }
  }


</script>

<style lang="less" scoped>



</style>
