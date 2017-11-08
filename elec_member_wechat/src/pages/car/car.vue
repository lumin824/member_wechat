<template>
    <div>
      <div style="background-color:white">
        <div style="height:0.31rem;border-bottom:0.02rem solid #E2E2E2;padding-top:0.2rem">
            <label style="margin-top:0.3rem;margin-left:0.3rem;color:#777777"><strong>剩余车位</strong></label>
          <p style="float:right;padding-right:0.2rem;color:#FB9D0A"><strong>102</strong></p>
        </div>
        <div style="padding-top:0.3rem;margin-right:0.2rem;margin-left:0.1rem;height:0.7rem;">
            <div style="border:1px solid #E2E2E2;width:10%;height:0.31rem;float:left;">
              <input style="width:100%;height:100%;border: medium;text-align:center">
            </div>
            <div style="border:1px solid #E2E2E2;width:10%;height:0.31rem;float:left;border-left:0.02rem dashed #E2E2E2;">
              <input style="width:100%;height:100%;border: medium;text-align:center">
            </div>
            <div style="border:1px solid #03C4A7;width:10%;height:0.31rem;float:right; margin-left:0.05rem;">
              <label style="margin-left:0.15rem">+</label>
              <br />
              <div style="color:#ACABB1;font-size:0.1rem;margin-bottom:0.01rem">新能源</div>
            </div>
            <div style="border:1px solid #E2E2E2;width:10%;height:0.31rem;float:right;margin-left:0.05rem;">
              <input style="width:100%;height:100%;border: medium;text-align:center">
            </div>
            <div style="border:1px solid #E2E2E2;width:10%;height:0.31rem;float:right;margin-left:0.05rem;">
              <input style="width:100%;height:100%;border: medium;text-align:center">
            </div>
            <div style="border:1px solid #E2E2E2;width:10%;height:0.31rem;float:right;margin-left:0.05rem;">
              <input style="width:100%;height:100%;border: medium;text-align:center">
            </div>
            <div style="border:1px solid #E2E2E2;width:10%;height:0.31rem;float:right;margin-left:0.05rem;">
              <input style="width:100%;height:100%;border: medium;text-align:center">
            </div>
            <div style="border:1px solid #E2E2E2;width:10%;height:0.31rem;float:right;margin-left:0.05rem;">
              <input style="width:100%;height:100%;border: medium;text-align:center">
            </div>
        </div>
        <div style="display:flex;align-items:center">
          <div style="border-bottom:0.02rem solid #E2E2E2;width:40%;"></div>
          <div style="flex:1;text-align:center">注意事项</div>
          <div style="border-bottom:0.02rem solid #E2E2E2;width:40%;"></div>
        </div>
        <div style="color:#767676;margin-left:0.2rem;margin-top:0.05rem;margin-bottom:0.2rem;margin-right:0.2rem;font-size:0.15rem">
          <label >1.缴费成功后，请于30分钟内离场，超时需补交停车费<br /></label>
          <div style="padding-top:0.1rem;padding-bottom:0.1rem;">
            <label >2.若车牌识别有误，请到中央收费处缴纳</label>
          </div>
        </div>
      </div>
      <div style="background-color:#FFFFFF;margin-top:0.2rem">
        <div>
          <div style="padding-top:0.2rem">
            <label style="margin-left:43%;color:#777777"><strong>收费标准</strong></label>
        </div>
            <table style="border:1px solid #E2E2E2;margin-left:10%;margin-top:0.1rem;width:80%;height:2rem;color:#767676;font-size:0.15rem">
                <tr >
                    <td style="border-bottom:1px solid #E2E2E2; text-align:center;">时间</td>
                    <td style="border-left:1px solid #E2E2E2; border-bottom:1px solid #E2E2E2;text-align:center;">收费</td>
                </tr>
                <tr style="line-height:0.3rem;">
                    <td style="padding-left:0.3rem">
                      
                      停车不足15分钟<br />
                      15分钟至1小时<br />
                      超1小时后每30分钟<br />
                      24小时
                    </td>
                    <td style="border-left:1px solid #E2E2E2; padding-left:0.3rem">
                      免费<br />
                      5元/台<br />
                      2元/台<br />
                      最高50元/台  
                    </td>
                </tr>
            </table>
            <div style="margin-top:0.1rem;padding-bottom:0.5rem;margin-left:0.1rem;margin-right:0.1rem">
              <label style="color:#767676;">注：超过一小时后，不足30分钟按30分钟收费。</label>
            </div>
        </div>
      </div>
      <router-link to="/carDetail">
      <div style="background-color:#46D0C3;text-align:center;padding-top:0.1rem;position:fixed;right:0;left:0;bottom:0;">
         <label style="color:white;font-size:0.2rem">缴  费</label>
      </div>
      </router-link>
    </div>
     
</template>


