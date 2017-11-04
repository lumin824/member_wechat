<template>
    <div>
      <div style="background-color:white">
        <div style="height:0.4rem;border-bottom:0.02rem solid #E2E2E2;padding-top:0.2rem">
            <label style="margin-top:0.3rem;margin-left:0.3rem;color:#777777"><strong>剩余车位</strong></label>
          <p style="float:right;padding-right:0.2rem;color:#FB9D0A"><strong>102</strong></p>
        </div>
        <div style="padding-top:0.3rem;margin-right:0.2rem;margin-left:0.1rem;height:1rem;">
            <div style="border:1px solid #E2E2E2;width:0.4rem;height:0.4rem;float:left;">
              <input style="width:0.4rem;height:0.4rem;border: medium;text-align:center">
            </div>
            <div style="border:1px solid #E2E2E2;width:0.4rem;height:0.4rem;float:left;border-left:0.02rem dashed #E2E2E2;">
              <input style="width:0.4rem;height:0.4rem;border: medium;text-align:center">
            </div>
            <div style="border:1px solid #03C4A7;width:0.4rem;height:0.4rem;float:right; margin-left:0.05rem;">
              <label style="margin-left:0.15rem">+</label>
              <br />
              <div style="color:#ACABB1;font-size:0.1rem;margin-bottom:0.01rem">新能源</div>
            </div>
            <div style="border:1px solid #E2E2E2;width:0.4rem;height:0.4rem;float:right;margin-left:0.05rem;">
              <input style="width:0.4rem;height:0.4rem;border: medium;text-align:center">
            </div>
            <div style="border:1px solid #E2E2E2;width:0.4rem;height:0.4rem;float:right;margin-left:0.05rem;">
              <input style="width:0.4rem;height:0.4rem;border: medium;text-align:center">
            </div>
            <div style="border:1px solid #E2E2E2;width:0.4rem;height:0.4rem;float:right;margin-left:0.05rem;">
              <input style="width:0.4rem;height:0.4rem;border: medium;text-align:center">
            </div>
            <div style="border:1px solid #E2E2E2;width:0.4rem;height:0.4rem;float:right;margin-left:0.05rem;">
              <input style="width:0.4rem;height:0.4rem;border: medium;text-align:center">
            </div>
            <div style="border:1px solid #E2E2E2;width:0.4rem;height:0.4rem;float:right;margin-left:0.05rem;">
              <input style="width:0.4rem;height:0.4rem;border: medium;text-align:center">
            </div>
        </div>
        <div style="display:flex;align-items:center">
          <div style="border-bottom:0.02rem solid #E2E2E2;width:1.5rem;"></div>
          <div style="flex:1;text-align:center">注意事项</div>
          <div style="border-bottom:0.02rem solid #E2E2E2;width:1.6rem;"></div>
        </div>
        <div style="color:#767676;margin-left:0.2rem;margin-top:0.05rem;margin-bottom:0.2rem;font-size:0.2rem">
          <label >1.缴费成功后，请于30分钟内离场，超时需补交停车费<br /></label>
          <div style="padding-top:0.1rem;padding-bottom:0.1rem;">
            <label >2.若车牌识别有误，请到中央收费处缴纳</label>
          </div>
        </div>
      </div>
      <div style="background-color:white;margin-top:0.2rem">
        <div>
          <div style="padding-top:0.2rem">
            <label style="margin-left:1.7rem;color:#777777"><strong>收费标准</strong></label>
        </div>
            <table style="border:1px solid #E2E2E2;margin-left:0.2rem;margin-top:0.1rem;width:3.8rem;text-align:center;height:2rem;color:#767676;font-size:0.15rem">
                <tr >
                    <td style="border-bottom:1px solid #E2E2E2; ">时间</td>
                    <td style="border-left:1px solid #E2E2E2; border-bottom:1px solid #E2E2E2;">收费</td>
                </tr>
                <tr >
                    <td>
                      
                      停车不足15分钟<br />
                      <br />
                      15分钟至1小时<br />
                      <br />
                      超1小时后每30分钟<br />
                      <br />
                      24小时
                    </td>
                    <td style="border-left:1px solid #E2E2E2; ">
                      免费<br />
                      <br />
                      5元/台<br />
                      <br />
                      2元/台<br />
                      <br />
                      最高50元/台  
                    </td>
                </tr>
            </table>
            <div style="margin-top:0.1rem;padding-bottom:0.2rem">
              <label style="color:#767676;">注：超过一小时后，不足30分钟按30分钟收费。</label>
            </div>
        </div>
      </div>
      <router-link to="/carDetail">
      <div style="background-color:#46D0C3;height:50px;position:absolute;right:0;left:0;bottom:0;text-align:center;padding-top:0.2rem;">
         <label style="color:white;font-size:0.2rem">缴  费</label>
      </div>
      </router-link>
    </div>
     
</template>


