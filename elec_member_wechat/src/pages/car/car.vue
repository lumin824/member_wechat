<template>
    <div>
      <div style="background-color:white">
        <div style="height:40px;border-bottom:2px solid #E2E2E2;padding-top:20px">
            <label style="margin-top:30px;margin-left:30px;color:#777777"><strong>剩余车位</strong></label>
          <p style="float:right;padding-right:20px;color:#FB9D0A"><strong>102</strong></p>
        </div>
        <div style="padding-top:30px;margin-right:20px;margin-left:10px;height:100px;">
            <div style="border:1px solid #E2E2E2;width:40px;height:40px;float:left;"></div>
            <div style="border:1px solid #E2E2E2;width:40px;height:40px;float:left;border-left:2px dashed #E2E2E2;"></div>
            <div style="border:1px solid #03C4A7;width:40px;height:40px;float:right; margin-left:5px;">
              <label style="margin-left:15px">+</label>
              <br />
              <label style="color:#ACABB1;font-size:10px" >新能源</label>
            </div>
            <div style="border:1px solid #E2E2E2;width:40px;height:40px;float:right;margin-left:5px;"></div>
            <div style="border:1px solid #E2E2E2;width:40px;height:40px;float:right;margin-left:5px;"></div>
            <div style="border:1px solid #E2E2E2;width:40px;height:40px;float:right;margin-left:5px;"></div>
            <div style="border:1px solid #E2E2E2;width:40px;height:40px;float:right;margin-left:5px;"></div>
            <div style="border:1px solid #E2E2E2;width:40px;height:40px;float:right;margin-left:5px;"></div>
        </div>
        <div style="display:flex;align-items:center">
          <div style="border-bottom:2px solid #E2E2E2;width:150px;"></div>
          <div style="flex:1;text-align:center">注意事项</div>
          <div style="border-bottom:2px solid #E2E2E2;width:160px;"></div>
        </div>
        <div style="color:#767676;margin-left:20px;margin-top:50px;margin-bottom:20px;font-size:20px">
          <label >1.缴费成功后，请于30分钟内离场，超时需补交停车费<br /></label>
          <div style="padding-top:10px;padding-bottom:10px;">
            <label >2.若车牌识别有误，请到中央收费处缴纳</label>
          </div>
        </div>
      </div>
      <div style="background-color:white;margin-top:20px">
        <div>
          <div style="padding-top:20px">
            <label style="margin-left:170px;color:#777777"><strong>收费标准</strong></label>
        </div>
            <table style="border:1px solid #E2E2E2;margin-left:20px;margin-top:10px;width:380px;text-align:center;height:200px;color:#767676;font-size:15px">
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
            <div style="margin-top:10px;padding-bottom:20px">
              <label style="color:#767676;">注：超过一小时后，不足30分钟按30分钟收费。</label>
            </div>
        </div>
      </div>
      <router-link to="/carDetail">
      <div style="background-color:#46D0C3;height:50px;position:absolute;right:0;left:0;bottom:0;text-align:center;padding-top:20px;">
         <label style="color:white;font-size:20px">缴  费</label>
      </div>
      </router-link>
    </div>
     
</template>


