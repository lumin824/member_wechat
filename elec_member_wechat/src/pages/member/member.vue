<template>
    <div>
         
          <m-header></m-header>
          <m-info></m-info>
          <m-nav></m-nav>
    </div>
</template>
<script>
  import  Header from '../../../src/components/header/header.vue'
  import  MyInfo from '../../../src/components/common/myInfo.vue'
  import  MemberNav from '../../../src/components/common/memberNav.vue'
  import  {getCookie} from '../../../src/util/util'
  import  global from '../../../src/components/common/Global.vue'
  export  default {
    components:{
      'm-header':Header,
      'm-info':MyInfo,
      'm-nav':MemberNav,
    },
    mounted(){
      //let member_id = getCookie('member_id');
      let member_id = 9;
     // let exdate = new Date();
      if(member_id==null){
                this.$toast({
                  message:'请先登陆!',
                  possition:'top',
                });
                setTimeout(this.$router.push('/login'),3000);
                return false;
      }else{
              this.$http.get(`http://121.196.208.176:9001/member/${member_id}?mallId=${global.mallId}`).then(data =>{
                console.log(data.data);
        });
      }
    }
  }
</script>
<style  lang="less" scoped>
</style>
