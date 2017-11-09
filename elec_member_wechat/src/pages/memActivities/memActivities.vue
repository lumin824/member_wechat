<template>
    <!--最新活动-->
    <div class="act" >
           <ul style="background-color:#FFFFFF">
                   <router-link to="/activeDetail" tag="li" style="padding-bottom:0.2rem">
                        <figure style="background:url('static/img/activeTest.jpg');height:2rem">
                          
                               <figcaption style="padding-top:1.5rem;">
                                 <div style="position:absolute;left:0;right:0;  background-color: rgba(0,0,0,0.2);color:#FFF">花艺体验活动来啦,慢下来,给自己一朵花开的时间给自己一朵花开的时间</div>

                                 </figcaption>
                          
                        </figure>
                        <div class="time" style="border:1px solied ">
                          <label style="height:0.22rem;color:#999">2017-09-14~2017-09-15</label>
                          <button disabled="disabled" style="border: 1px solid #CACACA;width:0.6rem">未签到</button>
                        </div>
                        </router-link>
                  <div style="width:100%;height:0.1rem;background-color:#E6E6E6"></div>
                     <router-link to="/activeDetail" tag="li" style="padding-bottom:0.2rem">
                     <figure style="background:url('static/img/activeTest.jpg');height:2rem;">
                               <figcaption style="padding-top:1.5rem;">
                                 <div style="position:absolute;left:0;right:0; background-color: rgba(0,0,0,0.2);color:#FFF">花艺体验活动来啦,慢下来,给自己一朵花开的时间给自己一朵花开的时间</div>
                              </figcaption>
                        </figure>
                     <div class="time">
                       <label style="height:0.22rem;color:#999">2017-09-14~2017-09-15</label>
                       <button disabled="disabled" style="border: 1px solid #CACACA;width:0.6rem">已签到</button>
                     </div>
                     </router-link>
                     <div style="width:100%;height:0.1rem;background-color:#E6E6E6"></div>
           </ul>
           <div style="text-align:center;width:100%">更多活动敬请期待...</div>
    </div>
</template>

<style lang="less" scoped>
  .act{
      font-family:-apple-system-font, "Helvetica Neue", sans-serif

  }
  div ul li{
   margin-bottom: 0.1rem;


  }
  .time{
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



