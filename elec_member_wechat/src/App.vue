<template>
  <div id="app">
   <!-- <m-header></m-header>
    <m-info></m-info>-->
   <!-- <m-nav></m-nav>-->
 <!-- <m-user @title="getTitle"></m-user>-->
  <!-- <r-index @title="getTitle"></r-index>-->
 <!--  <r-success></r-success>-->
  <!-- <r-data @title="getTitle"></r-data>-->
    <transition name="router-fade" enter-active-class="animated fadeIn"  leave-active-class="animated fadeOut" mode="out-in">
        <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import  animate from 'animate.css'
import  member from './pages/member/member.vue'
import  {getCookie} from './util/util'
export default {
    data(){
       return {
         title:'',
         closeButton:false,
       }
    },
    components:{
    /*   'm-header':Header,
       'm-info':MyInfo,
       'm-nav':MemberNav,
       'm-user':UserIndex,
       'r-index':RegisterIndex,
       'r-success':RegisterSuccess,
       'r-data':RegisterData,*/
        member
    },
 methods:{
   /*  getTitle(title,closeButton){
       this.title=title;
       this.closeButton=closeButton
     }*/
 },
}
</script>
<style>
  .mint-header{
    background-color: #1C1B21;
  }
</style>
