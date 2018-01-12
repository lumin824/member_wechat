<template>
    <div>
      <div style="background-color:white">
        <div style="height:1rem;border-bottom:0.02rem solid #E2E2E2;padding-top:0.2rem">
            <label style="margin-top:0.3rem;margin-left:0.3rem;color:#777777;font-size:0.5rem;">剩余车位</label>
          <p style="float:right;padding-right:0.2rem;color:#FB9D0A"><strong>102</strong></p>
        </div>
        <div style="display:flex;padding:0.2rem;margin:0.2rem;">

            <div @click="popup=true" style="border:1px solid #E2E2E2;width:1rem;height:1rem;font-size:0.4rem;display:flex;align-items:center;justify-content:center;">
              {{car_number[0]}}
            </div>
            <div style="border:1px solid #E2E2E2;width:1rem;height:1rem;border-left:0.02rem dashed #E2E2E2;" id="div2">
              <input @keyup="inputKey($event, 1)" type="number" v-model="car_number[1]" ref="input1" style="width:100%;height:100%;border: medium;text-align:center;font-size:0.4rem;" maxlength="1">
            </div>

            <div style="border:1px solid #E2E2E2;width:1rem;height:1rem;margin-left:0.05rem;">
              <input @keyup="inputKey($event, 2)" type="number" v-model="car_number[2]" ref="input2" style="width:100%;height:100%;border: medium;text-align:center;font-size:0.4rem;" maxlength="1">
            </div>
            <div style="border:1px solid #E2E2E2;width:1rem;height:1rem;margin-left:0.05rem;">
              <input @keyup="inputKey($event, 3)" type="number" v-model="car_number[3]" ref="input3" style="width:100%;height:100%;border: medium;text-align:center;font-size:0.4rem;" maxlength="1">
            </div>
            <div style="border:1px solid #E2E2E2;width:1rem;height:1rem;margin-left:0.05rem;">
              <input @keyup="inputKey($event, 4)" type="number" v-model="car_number[4]" ref="input4" style="width:100%;height:100%;border: medium;text-align:center;font-size:0.4rem;" maxlength="1">
            </div>
            <div style="border:1px solid #E2E2E2;width:1rem;height:1rem;margin-left:0.05rem;">
              <input @keyup="inputKey($event, 5)" type="number" v-model="car_number[5]" ref="input5" style="width:100%;height:100%;border: medium;text-align:center;font-size:0.4rem;" maxlength="1">
            </div>
            <div style="border:1px solid #E2E2E2;width:1rem;height:1rem;margin-left:0.05rem;">
              <input @keyup="inputKey($event, 6)" type="number" v-model="car_number[6]" ref="input6" style="width:100%;height:100%;border: medium;text-align:center;font-size:0.4rem;" maxlength="1">
            </div>
            <div style="border:1px solid #03C4A7;width:1rem;height:1rem;margin-left:0.05rem;">
              <input @keyup="inputKey($event, 7)" type="number" v-model="car_number[7]" ref="input7" style="width:100%;height:100%;border: medium;text-align:center;font-size:0.4rem;" placeholder="新能源" maxlength="1">
            </div>
        </div>

        <div style="display:flex;align-items:center;margin-top:0.5rem;">
          <div style="flex:1;border-bottom:1px solid #E2E2E2;"></div>
          <div style="margin:0 1rem;font-size:0.4rem;color:#777777;">注意事项</div>
          <div style="flex:1;border-bottom:1px solid #E2E2E2;"></div>
        </div>

        <div style="color:#767676;width:9rem;margin:0 auto;font-size:0.4rem">
          <label >1.缴费成功后，请于30分钟内离场，超时需补交停车费<br /></label>
          <div style="padding-top:0.1rem;padding-bottom:0.1rem;">
            <label >2.若车牌识别有误，请到中央收费处缴纳</label>
          </div>
        </div>
      </div>
      <div style="background-color:#FFFFFF;margin-top:20px;text-align">
        <div style="padding-bottom:1px;">
          <div style="display:flex;align-items:center;padding-top:10px;text-align:center;">
            <div style="flex:1;"></div>
            <div style="margin:0 1rem;font-size:0.4rem;color:#777777;">收费标准</div>
            <div style="flex:1;"></div>
          </div>


          <table style="margin-top:10px;border:1px solid #E2E2E2;width:9rem;height:2rem;color:#767676;font-size:0.4rem;margin:0 auto;text-align:center;" cellpadding="0" cellspacing="0">
            <tr>
              <td style="border-bottom:1px solid #E2E2E2;padding:0.2rem;">时间</td>
              <td style="border-left:1px solid #E2E2E2; border-bottom:1px solid #E2E2E2;">收费</td>
            </tr>
            <tr>
              <td>停车不足15分钟</td>
              <td style="border-left:1px solid #E2E2E2;padding:0.1rem;">免费</td>
            </tr>
            <tr>
              <td>15分钟至1小时</td>
              <td style="border-left:1px solid #E2E2E2;padding:0.1rem;">5元/台</td>
            </tr>
            <tr>
              <td>超1小时后每30分钟</td>
              <td style="border-left:1px solid #E2E2E2;padding:0.1rem;">2元/台</td>
            </tr>
            <tr>
              <td>24小时</td>
              <td style="border-left:1px solid #E2E2E2;padding:0.1rem;">最高50元/台</td>
            </tr>
          </table>
          <div style="width:9rem;margin:10px auto;">
            <label style="color:#767676;">注：超过一小时后，不足30分钟按30分钟收费。</label>
          </div>
        </div>
      </div>
      <router-link to="/carDetail">
      <div style="background-color:#46D0C3;text-align:center;position:fixed;right:0;left:0;bottom:0;">
         <div style="color:#fff;padding:0.3rem;font-size:0.5rem">缴  费</div>
      </div>
      </router-link>

      <div v-transfer-dom>
        <popup v-model="popup" position="top" :popup-style="{backgroundColor:'#fff', marginTop:'0px'}" :is-transparent="true">
          <div class="char-line" v-for="o in charList">
            <div v-for="p in o" @click="inputChar">{{p}}</div>
          </div>
        </popup>
      </div>
    </div>
</template>
<script>
import _ from 'lodash';
import { TransferDom, Popup, Scroller } from 'vux';

export default {
  directives: {
    TransferDom
  },
  components:{
    Popup, Scroller,
  },
  data () {
    return {
      popup: false,
      car_number: [],
      charList: [
        ['冀', '豫', '云', '辽'], ['黑', '湘', '皖', '鲁'],
        ['新', '苏', '浙', '赣'], [ '鄂', '桂', '甘', '晋'],
        ['蒙', '陕', '吉', '闽'], [ '贵', '粤', '川', '青'],
        ['藏', '琼', '宁', '渝'], [ '京', '津', '沪'],
      ]
    }
  },
  methods: {
    inputChar({target}) {
      this.car_number[0] = _.trim(target.innerText)
      this.popup = false;
      this.$refs['input1'].focus();
    },
    inputKey({keyCode}, index) {
      if(keyCode == 8){
        this.car_number[index] = '';

        if(index == 1) {
          this.popup = true;
        }else{
          this.$refs[`input${index-1}`].focus()
        }
      } else if(index < 7) {
        this.$refs[`input${index+1}`].focus()
      }
    },
  }
}
</script>

<style lang="less" scoped>
.char-line {
  display: flex;
  justify-content: space-around;
}
.char-line > div {
  width: 1rem;
  font-size: 0.5rem;
  padding:0.3rem;
  text-align: center;
}
</style>
