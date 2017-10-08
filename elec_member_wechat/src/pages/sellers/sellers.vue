<template>
   <div>
         <mt-header title="入驻商户">
               <router-link to="/" slot="left">
                   <mt-button icon="back">返回</mt-button>
               </router-link>
         </mt-header>
            <div style="height: 0.2rem;">
                <mt-search v-model="value" autofocus cancel-text="取消" placeholder="请输入关键词,例如:肯德基" :result="filterResult"></mt-search>
            </div>
           <ul class="even">
                 <li style="position: relative;right: -0.2rem;">
                       <select v-model="lselected">
                         <option v-for="loption in loptions" v-bind:value="loption.value">
                           {{ loption.text }}
                         </option>
                       </select>
                 </li>
                 <li>

                     <select v-model="fselected">
                       <option v-for="foption in foptions" v-bind:value="foption.value">
                         {{ foption.text }}
                       </option>
                     </select>
                 </li>
                 <li>
                     <select v-model="oselected">
                       <option v-for="ooption in ooptions" v-bind:value="ooption.value">
                         {{ ooption.text }}
                       </option>
                     </select>
                 </li>
           </ul>
           <ul class="sellers">
               <li>
                       <div class="left">
                         <img  src="static/img/hgds.jpg" alt="">
                         <div class="imgright">
                           <h1>哈根达斯</h1>
                           <img src="" alt="">
                           <h2>L101</h2>
                           <h3>美食</h3>
                         </div>
                       </div>
                       <div class="right">
                           <img src="static/img/jfrd.png" alt="">
                           <h3>5121</h3>
                       </div>
               </li>
             <li>
                 <div class="left">
                   <img  src="static/img/hgds.jpg" alt="">
                   <div class="imgright">
                     <h1>哈根达斯</h1>
                     <img src="" alt="">
                     <h2>L101</h2>
                     <h3>美食</h3>
                   </div>
                 </div>
                 <div class="right">
                   <img src="static/img/jfrd.png" alt="">
                   <h3>5121</h3>
                 </div>
             </li>
             <li>
                 <div class="left">
                   <img  src="static/img/hgds.jpg" alt="">
                   <div class="imgright">
                     <h1>哈根达斯</h1>
                     <img src="" alt="">
                     <h2>L101</h2>
                     <h3>美食</h3>
                   </div>
                 </div>
                 <div class="right">
                   <img src="static/img/jfrd.png" alt="">
                   <h3>5121</h3>
                 </div>
             </li>
             <li>
               <div class="left">
                 <img  src="static/img/hgds.jpg" alt="">
                 <div class="imgright">
                   <h1>哈根达斯</h1>
                   <img src="" alt="">
                   <h2>L101</h2>
                   <h3>美食</h3>
                 </div>
               </div>
               <div class="right">
                 <img src="static/img/jfrd.png" alt="">
                 <h3>5121</h3>
               </div>
             </li>
             <li>
                   <div class="left">
                       <img  src="static/img/hgds.jpg" alt="">
                       <div class="imgright">
                         <h1>哈根达斯</h1>
                         <img src="" alt="">
                         <h2>L101</h2>
                         <h3>美食</h3>
                       </div>
                   </div>
                   <div class="right">
                       <img src="static/img/jfrd.png" alt="">
                       <h3>5121</h3>
                   </div>
             </li>
             <li></li>
           </ul>
   </div>
</template>


<script>
  export default {
      data(){
          return {
            value:'',
            lselected: '0',
            fselected: '0',
            oselected: '0',
            loptions: [
              { text: '楼层', value: '0' },
              { text: '一层', value: '1' },
              { text: '二层', value: '2' },
              { text: '三层', value: '3' }
            ],
            foptions: [
              { text: '选择分类', value: '0' },
              { text: '餐饮', value: '1' },
              { text: '水吧', value: '2' },
              { text: '女士服装', value: '3' }
            ],
            ooptions:[
              { text: '排序', value: '0' },
              { text: '热度', value: '1' },
              { text: '首拼', value: '2' },
            ],
            // 默认数据
            defaultResult: [
              '肯德基',
              '苏果',
              '大润发',
              '吃喝玩乐',
              '想吃就吃',
            ]
          }
      },
    computed: {
      filterResult() {
        return this.defaultResult.filter(value => new RegExp(this.value, 'i').test(value));
      }
    }
  }
</script>
<style lang="less" scoped>
   .even{
       background-color: #fff;
       margin-top: 0.32rem;
       display: flex;
       height: 0.5rem;
       line-height: 0.5rem;
   }
   .even li{
       flex: 1;
       justify-content:space-around;
       margin-left: 0.3rem;
       /*border-right: 1px solid #999;*/
   }
   .even select{
      border:0;
      background: transparent;
     -webkit-appearance: none;
     -moz-appearance: none;
     appearance: none;
   }
   .even select:hover{
     background-color: white;
     border:none;
     outline: none;
   }
   .sellers{
      background-color: #fff;

   }
   .sellers li{
     margin-left: 0.2rem;
     clear: both;
     border-bottom: 1px solid #ddd;
   }
   .sellers  .left{
     float: left;
   }
  .sellers  .left img:nth-child(1){

     height: 0.7rem;
     width: 0.7rem;
     margin-top: 0.1rem;
     float: left;
  }
   .sellers  .right{
     margin-top: 0.17rem;
     float: right;
     margin-right: 0.15rem;
     }
   .sellers  .right img{
       display: inline-block;
       float: left;
       position: relative;
       bottom:0.01rem;
   }

   .sellers  .right h3{
       font-size: 0.13rem;
       font-weight: normal;
       color:#666;
       float: right;
       margin-left: 0.05rem;
   }
   .sellers .left .imgright{
      margin-top: 0.2rem;
      float: right;
      margin-left: 0.2rem;
   }
   .sellers .left .imgright h1{
      font-size: 0.14rem;
     margin-bottom: 0.05rem;

   }
   .sellers .left .imgright h2{
     font-size: 0.12rem;
     color: #FD6D69;
     margin-bottom: 0.05rem;
     font-weight: normal;
   }
   .sellers .left .imgright h3{
     font-size: 0.13rem;
     font-weight: normal;
     color: #666;
     margin-bottom: 0.1rem;
   }








</style>



