<template>
    <div>
        <mt-cell title="姓名">
          <input type="text" :value="this.user.name" style="position:relative;left:77%;outline: none;border: medium;">
        </mt-cell>


        <mt-cell title="性别" is-link>
          <select style="position:relative;right: 30%;height:0.2rem" :value="this.user.sex">
            <option value="0">男</option>
            <option value="1">女</option>
          </select>
        </mt-cell>


        <mt-cell title="生日" is-link>
            <input type="text" @click="openByDrop($event)" v-model="calendar3.display" readonly style='position:absolute;left:26%;overflow:auto; background-attachment: fixed; background-repeat: no-repeat; border-style: solid; 
border-color: #FFFFFF;color:#888888'>
    </mt-cell>
     <transition name="fade">
    <div class="calendar-dropdown"  v-if="calendar3.show" style="float:left;position:absolute;z-index:100;width:100%">
        <calendar :zero="calendar3.zero" :lunar="calendar3.lunar" :value="calendar3.value" :begin="calendar3.begin" :end="calendar3.end" @select="calendar3.select"></calendar>
    </div>
    </transition>

      <mt-cell title="职业" is-link>
        <select style="position:relative;right: 30%;" :value="this.user.occupation">
          <option value="0">工程师</option>
          <option value="1">医生</option>
        </select>
      </mt-cell>

      <mt-cell title="地址">
        <input type="text" :value="this.user.address" style="position:relative;left:77%;outline: none;border: medium;">
      </mt-cell>


      <mt-cell title="教育程度" is-link>
        <select style="position:relative;right: 30%;" :value="this.user.degree_of_education">
          <option value="0">博士</option>
          <option value="1">硕士</option>
          <option value="2">本科</option>
          <option value="3">大专</option>
          <option value="4">高中</option>
        </select>
      </mt-cell>

      <mt-cell title="收入范围" is-link>
        <select style="position:relative;right: 5%;" :value="this.user.income_range">
          <option value="0">50000-100000</option>
          <option value="1">10000-50000</option>
        </select>
      </mt-cell>

      <mt-cell title="兴趣爱好" is-link>
        <select style="position:relative;right: 30%;" :value="this.user.interest">
          <option value="0">篮球</option>
          <option value="1">游泳</option>
        </select>
      </mt-cell>

      <mt-cell title="手机">
        <input type="text" :value="this.user.mobile" readonly="readonly" style="position:relative;left:39%;outline: none;border: medium;"><router-link to="/changePhone"><mt-button size="small">修改</mt-button></router-link>
      </mt-cell>

      <mt-cell title="微信号">
        <input type="text" :value="this.user.wechat_account" readonly="readonly" style="position:relative;left:50%;outline: none;border: medium;">
      </mt-cell>

      <mt-cell title="是否公开微信号">
        <mt-switch v-model="value"></mt-switch>
      </mt-cell>


    </div>
</template>

<script>
 import calendar from '../common/calendar.vue'
  export default {
      components: {
        calendar
    },
    data () {
      
      return {
         user: {

          },
        value: null,
        value1: null,
        //show: true,
        startDate: new Date('1970-1-1'),
        endDate: new Date(),
        brithday:'9月29日',
        title:'会员中心',
        closeButton:false,
        
         calendar3:{
                display:'',
                show:false,
                zero:true,
                value:[2017,11,2], //默认日期
                lunar:true, //显示农历
                select:(value)=>{
                    this.calendar3.show=false;
                    this.calendar3.value=value;
                    this.calendar3.display=value.join("/");
                }
            },
      }
    },
     async mounted () {
      let {data}=await this.$http.get(`http://121.196.208.176:9001/member/m?mobile=${this.$store.state.user}`)
      this.user=data;

      var unixTimestamp = new Date(this.user.birthday * 1000)
      var year =unixTimestamp.getFullYear();
      var month =unixTimestamp.getMonth()+1;
      var date =unixTimestamp.getDate();
      this.calendar3.display = year+"/"+month+"/"+date
      this.$emit('title',this.title,this.closeButton);
      },
    methods: {
      openByDrop(e){
            this.calendar3.show=true;
            this.calendar3.left=e.target.offsetLeft+19;
            this.calendar3.top=e.target.offsetTop+70;
           
            e.stopPropagation();
            window.setTimeout(()=>{
                document.addEventListener("click",(e)=>{
                    this.calendar3.show=false;
                    document.removeEventListener("click",()=>{},false);
                },false);
            },1000)
        },
        openByDialog(){
            this.calendar4.show=true;
        },
        closeByDialog(){
            this.calendar4.show=false;
        },
        changeEvents(){
            this.calendar1.events={
                '2017-7-20':'$'+(Math.random()*1000>>0),
                '2017-7-21':'$'+(Math.random()*1000>>0),
                '2017-7-22':'$'+(Math.random()*1000>>0),
            }
        },
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
  .mint-button--default{
    /* background-color: red;*/


  }
</style>
