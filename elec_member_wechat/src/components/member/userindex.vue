<template>
    <div>
        <mt-cell title="姓名">
          <input type="text" value="张三" style="position:relative;left:77%;outline: none;border: medium;">
        </mt-cell>


        <mt-cell title="性别" is-link>
          <select style="position:relative;right: 30%;">
            <option value="1">男</option>
            <option value="2">女</option>
          </select>
        </mt-cell>


        <mt-cell title="生日"  is-link>
         <mt-button @click="open('picker1')" size="large">{{brithday}}</mt-button>
            <br>
            <mt-datetime-picker
              ref="picker1"
              type="date"
              v-model="value1"
              year-format="{value} 年"
              month-format="{value} 月"
              date-format="{value} 日"
              :startDate="startDate"
              :endDate="endDate"
              @confirm="handleChange">
            </mt-datetime-picker>
        </mt-cell>

      <mt-cell title="职业" is-link>
        <select style="position:relative;right: 30%;">
          <option value="1">工程师</option>
          <option value="2">医生</option>
        </select>
      </mt-cell>

      <mt-cell title="地址">
        <input type="text" value="" style="position:relative;left:77%;outline: none;border: medium;">
      </mt-cell>


      <mt-cell title="教育程度" is-link>
        <select style="position:relative;right: 30%;">
          <option value="1">博士</option>
          <option value="2">硕士</option>
          <option value="3">本科</option>
          <option value="4">大专</option>
          <option value="4">高中</option>
        </select>
      </mt-cell>

      <mt-cell title="收入范围" is-link>
        <select style="position:relative;right: 5%;">
          <option value="1">50000-100000</option>
          <option value="2">10000-50000</option>
        </select>
      </mt-cell>

      <mt-cell title="兴趣爱好" is-link>
        <select style="position:relative;right: 30%;">
          <option value="1">篮球</option>
          <option value="2">游泳</option>
        </select>
      </mt-cell>

      <mt-cell title="手机">
        <input type="text" value="18000000000" style="position:relative;left:50%;outline: none;border: medium;">
      </mt-cell>

      <mt-cell title="微信号">
        <input type="text" value="18000000000" style="position:relative;left:50%;outline: none;border: medium;">
      </mt-cell>

      <mt-cell title="是否公开微信号">
        <mt-switch v-model="value"></mt-switch>
      </mt-cell>


    </div>
</template>

<script>
  export default {
    data () {
      return {
        value: null,
        value1: null,
        //show: true,
        startDate: new Date('1970-1-1'),
        endDate: new Date(),
        brithday:'9月29日'
      }
    },
    methods: {
      open(picker) {
        this.$refs[picker].open();
      },
      handleChange(value) {
        this.brithday=`${value.getMonth()+1}月${value.getDate()}日`;
      },
    }
  }
</script>

<style lang="less" scoped>
  div{
      margin-top: 0.17rem;
      background-color: #fff;
  }
 /* border:none;
  outline:medium;*/
  input{
   font-family: "Helvetica Neue", Helvetica, Arial, "Microsoft Yahei UI", "Microsoft YaHei", SimHei, "\5B8B\4F53", simsun, sans-serif;
    font-size: 0.16rem;
    color: #656B79;
  }
  select{
   font-family: "Helvetica Neue", Helvetica, Arial, "Microsoft Yahei UI", "Microsoft YaHei", SimHei, "\5B8B\4F53", simsun, sans-serif;
    font-size: 0.16rem;
    border: medium;
    background-color: #fff;
    appearance:none;
    -moz-appearance:none;
    -webkit-appearance:none;
    outline: none;
    color: #656B79;
  }
  button{
    font-family: "Helvetica Neue", Helvetica, Arial, "Microsoft Yahei UI", "Microsoft YaHei", SimHei, "\5B8B\4F53", simsun, sans-serif;
    font-size: 0.16rem;
    background-color: #fff;
    box-shadow: none;


  }


</style>
