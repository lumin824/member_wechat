<template>
  <div>
    <ul>
       <li>
            <img src="static/img/voucher.png" alt="">
                 <a>优惠券</a>
                <img class="right" src="static/img/nr.png" alt="">
       </li>

        <li>
              <img src="static/img/latestactive.png" alt="">
               <a>最新活动</a>
              <img class="right" src="static/img/nr.png" alt="">
        </li>

      <li>
        <img src="static/img/stopcar.png" alt="">
        <a>停车缴费</a>
        <img class="right" src="static/img/nr.png" alt="">
      </li>

      <li>
        <img src="static/img/cash.png" alt="">
        <a>积分抵现</a>
        <img class="right" src="static/img/nr.png" alt="">
      </li>

      <li>
        <img src="static/img/upload.png" alt="">
        <a>小票上传</a>
        <img class="right" src="static/img/nr.png" alt="">
      </li>

      <li>
        <img src="static/img/record.png" alt="">
        <a>商户记录</a>
        <img class="right" src="static/img/nr.png" alt="">
      </li>
    </ul>
  </div>
</template>

<script>



</script>


<style lang="less" scoped>
  div{
    background-color: #fff;
  }
  ul{
    border-top: 1px solid #e1e1e1;
  }
  ul li{
    height: 0.5rem;
    line-height: 0.5rem;
    border-bottom: 1px solid #e1e1e1;
    width: 86%;
    float: right;
  }
  li img{
     height:0.25rem;
     width:0.25rem;
     float: left;
     margin:0.14rem 0 0  0;
     position: relative;
     right: 10%;

  }
  li a{
      font-size: 0.14rem;
      position: relative;
      right: 7%;


  }
  .right{
    float: right;
    width: 0.08rem;
    height: 0.16rem;
    margin:0.16rem 0 0 0;
  }
</style>
