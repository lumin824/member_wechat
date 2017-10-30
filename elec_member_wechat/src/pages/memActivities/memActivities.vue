<template>
  <!--我的活动-->
  <div>
    <ul>
      <li>
        <figure>
          <img src="static/img/activeTest.jpg" alt="">
          <figcaption>花艺体验活动来啦,慢下来,给自己一朵花开的时间给自己一朵花开的时间</figcaption>
        </figure>
        <div><h1>2017-09-14~2017-09-15</h1><button disabled="disabled">已签到</button></div>
      </li>
      <li>
        <figure>
          <img src="static/img/activeTest.jpg" alt="">
          <figcaption>花艺体验活动来啦,慢下来,给自己一朵花开的时间给自己一朵花开的时间</figcaption>
        </figure>
        <div><h1>2017-09-14~2017-09-15</h1><button disabled="disabled">未签到</button></div>
      </li>
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



