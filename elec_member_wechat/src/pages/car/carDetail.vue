<template>
    <div style="background-color:white;height:0.6rem">
       <div style="padding-top:0.2rem;padding-left:0.2rem;display;flex">
            <div>
                你的车牌<label style="color:#A8A8A8;padding-left:0.2rem">皖H 128686</label>
            </div>
       </div>
       <table style="margin-top:0.5rem;margin-left:0.2rem">
            <tr>
                <td style="align:center;font-size:0.4rem;color:#00C4AB">
                    <strong>¥ 20.00</strong>
                </td>
                <td style="color:#B7B7B7;padding-left:0.3rem">
                    入场时间:09月09日 12:30<br />
                    <br />
                    已停时长：2小时<br />
                    <br />
                    停车位置：B区108
                </td>
            </tr>
       </table>
       <div style="background-color:white;height:0.5rem;margin-top:0.3rem;font-size:0.2rem">
           <div style="padding-left:0.2rem;padding-right:0.1rem">优惠券
            <select style="float:right;height:0.3rem;width:1rem;padding-top:-0.2rem;border: medium;height:0.42rem">
                <option>1</option>
            </select>
            </div>
       </div> 
       <div style="background-color:white;height:0.5rem;font-size:0.2rem;">
           <div style="padding-left:0.2rem;padding-right:0.1rem">积分
               <input type="text" style="float:right;height:100%;border: medium;text-align:center;height:0.42rem;width:73%" placeholder="请输入可用积分，当前可用积分：100">
           </div>
           
           
       </div>
        <div>
            <div style="color:#F79E07;padding-top:0.3rem;padding-left:0.2rem;">温馨提醒</div>
            <div style="color:#979797;padding-top:0.3rem;padding-left:0.2rem;">1 积分抵现金比例： 100积分=1元人民币；</div>
            <div style="color:#979797;padding-top:0.3rem;padding-left:0.2rem;">2 积分抵现条件： 100积分起抵，100积分一档。即：只能100，200,300...依此类推</div>
        </div>
        <router-link to="/carDetail">
          <div style="height:0.6rem;position:absolute;right:0;left:0;bottom:0;padding-top:0.2rem;display:flex;position:fixed;right:0;left:0;bottom:0;">
              
              <div style="width:70%;height:100%;font-size:0.2rem;text-align:center;">
                  <div style="padding-top:0.15rem;padding-left:1.2rem;">
                      还需支付
                    <label style="color:#00C4AB;">¥20.00</label>
                  </div>
              </div>
              <div style="color:white;font-size:0.2rem;background-color:#46D0C3;width:30%;height:100%;">
                  <div style="margin-top:0.15rem;margin-left:0.15rem">立即支付</div>
              </div>
          </div>
        </router-link>
    </div>
</template>


