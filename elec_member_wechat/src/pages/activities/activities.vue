<template>
    <!--最新活动-->
    <div style="background-color:#FFFFFF">
           <ul>
                  <li style="padding-bottom:0.2rem">
                    <router-link to="/activeDetail">
                        <figure style="background:url('static/img/activeTest.jpg');height:2rem">
                          
                               <figcaption style="padding-top:1.5rem;">花艺体验活动来啦,慢下来,给自己一朵花开的时间给自己一朵花开的时间</figcaption>
                          
                        </figure>
                        <div style="border:1px solied ">
                          <label style="height:0.22rem;color:#999">2017-09-14~2017-09-15</label>
                          <button disabled="disabled" style="border: 1px solid #CACACA;width:0.6rem">进行中</button>
                        </div>
                        </router-link>
                  </li>
                  <div style="width:100%;height:0.1rem;background-color:#E6E6E6"></div>
                   <li style="padding-bottom:0.2rem">
                     <router-link to="/activeDetail">
                     <figure style="background:url('static/img/activeTest.jpg');height:2rem">
                          
                               <figcaption style="padding-top:1.5rem;">花艺体验活动来啦,慢下来,给自己一朵花开的时间给自己一朵花开的时间</figcaption>
                          
                        </figure>
                     <div>
                       <label style="height:0.22rem;color:#999">2017-09-14~2017-09-15</label>
                       <button disabled="disabled" style="border: 1px solid #CACACA;width:0.6rem">进行中</button>
                     </div>
                     </router-link>
                   </li>
                     <div style="width:100%;height:0.1rem;background-color:#E6E6E6"></div>
           </ul>
    </div>
</template>
<script>





</script>

<style lang="less" scoped>
  div{


  }
  div ul{

  }
  div ul li{
   margin-bottom: 0.1rem;


  }
  li div{
    display: flex;
    width: 90%;
    margin-left: 5%;
    justify-content: space-between;
    margin-top: 0.1rem;


  }
  li div h1{
    font-weight: normal;
    color:#999;
    font-size: 0.14rem;



  }
  li div h2{


  }
  figure{



  }
  figure img{
    width: 100%;
    height: 2rem;
  }
  figure figcaption{
    display: flex;
    text-align: justify;
    width: 90%;
    margin-left: 5%;
    color: #333;
  }
  button{
    border-radius: 0.03rem;
    background-color: #fff;
    border: 0;
    outline: none;
    color: #999;
    padding: 0.02rem 0.05rem;
  }

</style>



