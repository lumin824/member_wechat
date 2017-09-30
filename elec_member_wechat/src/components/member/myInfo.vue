<template>
   <div>
           <figure>
                 <img src="static/img/userinfo.png"/>
                 <figcaption>个人信息</figcaption>
                 <img class="active" src="static/img/point.png" alt="">
           </figure>

           <figure>
                 <img src="static/img/level.png"/>
                 <figcaption>我的等级</figcaption>
                 <!--<img class="active" src="static/img/point.png" alt="">-->
           </figure>

           <figure>
                 <img src="static/img/activity.png"/>
                 <figcaption>我的活动</figcaption>
                 <img class="active" src="static/img/point.png" alt="">
           </figure>

           <figure>
             <img src="static/img/certificate.png"/>
             <figcaption>我的券</figcaption>
             <img class="active" src="static/img/point.png" alt="">
           </figure>
   </div>

</template>
<script>


</script>
<style lang="less" scoped>
   div{
      display: flex;
      margin-top:0.02rem;
      height:0.55rem;
      border-bottom:1px solid #e1e1e1;
      padding: 0.05rem;
      margin-bottom:0.12rem;
   }
   figure{
      flex-grow: 1;
      flex-shrink:1;
      text-align:center;
      border-right:1px solid #e1e1e1;
   }
   figure:nth-child(4){
     border-right: none;
    //margin-top: 0.02rem;
   }
   figure:nth-child(4) img{
     top:-.55rem;
     left:18%;

   }
   figure:nth-child(3) img{
     top:-.55rem;
     left:8.8%;
   }
   figure:nth-child(2) img{
     top:-.55rem;
     left:12%;
   }

   figure img{
     height: 0.25rem;
     width:  0.25rem;
     display:inline ;
   }
   figcaption{
      font-size: 0.12rem;
   }
   .active{
      width: 0.05rem;
      height: 0.05rem;
      position: relative;
      top:-.52rem;
      left:17%;
   }
</style>
