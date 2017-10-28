<template>
    <div style="background-color:white;height:60px">
       <div style="padding-top:20px;padding-left:20px;display;flex">
            <div>
                你的车牌<label style="color:#A8A8A8;padding-left:20px">皖H 128686</label>
            </div>
       </div>
       <table style="margin-top:50px;margin-left:20px">
            <tr>
                <td style="align:center;font-size:40px;color:#00C4AB">
                    <strong>¥ 20.00</strong>
                </td>
                <td style="color:#B7B7B7;padding-left:30px">
                    入场时间:09月09日 12:30<br />
                    <br />
                    已停时长：2小时<br />
                    <br />
                    停车位置：B区108
                </td>
            </tr>
       </table>
       <div style="background-color:white;height:50px;margin-top:30px;font-size:20px">
           <div style="padding-top:10px;padding-left:20px">优惠券</div>
            <select style="float:right;height:30px;width:100px;padding-top:-20px">
                <option>1</option>
            </select>
       </div>
       <div style="background-color:white;height:50px;font-size:20px">
           <div style="padding-top:10px;padding-left:20px">积分</div>
           <input type="text" style="float:right">
           
       </div>
        <div>
            <div style="color:#F79E07;padding-top:30px;padding-left:20px;">温馨提醒</div>
            <div style="color:#979797;padding-top:30px;padding-left:20px;">1 积分抵现金比例： 100积分=1元人民币；</div>
            <div style="color:#979797;padding-top:30px;padding-left:20px;">2 积分抵现条件： 100积分起抵，100积分一档。即：只能100，200,300...依此类推</div>
        </div>
        <router-link to="/carDetail">
          <div style="height:60px;position:absolute;right:0;left:0;bottom:0;padding-top:20px;display:flex">
              <div style="width:20%"></div>
              <div style="padding-left:50px;padding-top:15px;font-size:20px;padding-right:4px"> 还需支付 <label style="color:#00C4AB">¥20.00</label></div>
              <router-link to="/success">
              <div style="color:white;font-size:20px;background-color:#46D0C3;width:140px;height:60px;">
                  <div style="padding-top:15px,padding-left:25px">立即支付</div>
              </div>
              </router-link>
          </div>
        </router-link>
    </div>
</template>


