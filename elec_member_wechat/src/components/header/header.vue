<template>
    <div>
      <img src="static/img/cat.jpg" alt="">
       <ul>
         <li><span>张三</span><h3>黄金会员</h3></li>
         <li>累计积分&nbsp;&nbsp;&nbsp;2000</li>
         <li>可用积分&nbsp;&nbsp;&nbsp;2000</li>
       </ul>

        <div class="rank">
              <img src="static/img/jb.png" alt="">
              
              <a style="margin-top: 0px;top: auto;bottom: 4px;">排行榜</a>
              <img class="abc" style="margin-top: 3px;margin-left: 0rem;top: auto;bottom: 3px;" src="static/img/jr.png" alt="">
        </div>
    </div>
</template>
<script>


</script>
<style lang="less" scoped>
     div{
        max-width: 640px;
        margin-top: 0.12rem;
        border-top: 0.5px solid #e1e1e1;
        border-bottom: 0.5px solid #e1e1e1;
        height: 120px;
        display: flex;
        background-color: #fff;
     }
     img{
       border-radius: 50%;
       height: 0.8rem;
       width: 0.8rem;
       margin:17px 0 0 5%;
     }
    ul{
        margin:8% 0 0 3%;
    }
    ul li{
        color:#999;
        font-size: 0.12rem;

    }
    li:nth-child(2),li:nth-child(3){
      margin-left:0.01rem;

    }
     li:nth-child(3){
       margin-top: 3px;

     }
   ul li span{
        font-size: 0.22rem;
        font-weight:600;
        margin-right: 5px;
        color: #333;
   }
   ul li h3{
        display:inline-block;
        background-color: #76dace;
        font-size:0.1rem ;
        padding: 0.01rem 0.03rem 0.01rem 0.03rem;
        border-radius:0.02rem;
        color:#fff;
        position: relative;
        top:-.035rem;
   }
   .rank{
     height: 0.2rem;
     background-color: #E6FAF4;
     display:block;
     width: 0.75rem;
     border:none;
     border-top-left-radius: 0.1rem;
     border-bottom-left-radius: 0.1rem;
     position: absolute;
     top:1.2rem;
     right: 0;
   }
     .rank img:nth-child(1){
       height: 0.2rem;
       width: 0.2rem;
       float: left;
       margin:0;
     }

     .rank img:nth-child(3){
       display: inline-block;
       height: 0.1rem;
       width: 0.1rem;
       position: relative;
       bottom:0.7em;
    }
  .rank a{
    display: inline-block;
    font-size: 0.1rem;
    position: relative;
    left:0.02rem;
    bottom:0.12rem;
    color:rgba(6,193,174,50);
  }
</style>
