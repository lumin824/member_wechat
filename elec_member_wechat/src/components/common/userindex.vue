<template>
    <div>
        <mt-cell title="姓名" style="right:2%;margin-left:0.03rem">
          <input id="name" type="text" :value="this.user.name" style="position:relative;left:77%;outline: none;border: medium;width:3.3rem" @change="save" >
        </mt-cell>


        <mt-cell title="性别" is-link style="right:2%;margin-left:0.03rem">
          <select style="position:relative;right: 30%;height:0.2rem" v-model="user.sex" @change="save" >
            <option value="0">男</option>
            <option value="1">女</option>
          </select>
        </mt-cell>


        <mt-cell title="生日" is-link style="right:2%;margin-left:0.03rem">
            <input  @change="save" id="time" type="text" @click="openByDrop($event)" v-model="calendar3.display" readonly style='position:absolute;left:73%;overflow:auto; background-attachment: fixed; background-repeat: no-repeat; border-style: solid; 
border-color: #FFFFFF;color:#888888'>
    </mt-cell>
     <transition name="fade">
    <div class="calendar-dropdown"  v-if="calendar3.show" style="float:left;position:absolute;z-index:100;width:100%">
        <calendar :zero="calendar3.zero" :lunar="calendar3.lunar" :value="calendar3.value" :begin="calendar3.begin" :end="calendar3.end" @select="calendar3.select"></calendar>
    </div>
    </transition>

      <mt-cell title="职业" is-link style="right:2%;margin-left:0.03rem">
        <select style="position:relative;right: 5%;"  v-model="user.occupation"  @change="save">
          <option value="0">请选择职业</option>
          <option value="1">工程师</option>
          <option value="2">医生</option>
        </select>
      </mt-cell>

      <mt-cell title="地址" style="right:3%;margin-left:0.07rem">
        <input  @change="save" id="address"  class="addre" type="text"  v-model="user.address"  placeholder="请输入地址" style="position:relative;outline: none;border: medium;text-align:right;color:#656B79">
      </mt-cell>


      <mt-cell title="教育程度" is-link style="right:2%;margin-left:0.03rem">
        <select style="position:relative;right: 5%;"  v-model="user.degree_of_education"  @change="save">
          <option value="0">请选择教育程度</option>
          <option value="1">博士</option>
          <option value="2">硕士</option>
          <option value="3">本科</option>
          <option value="4">大专</option>
          <option value="5">高中</option>
        </select>
      </mt-cell>

      <mt-cell title="收入范围" is-link style="right:2%;margin-left:0.03rem">
        <select style="position:relative;right: 5%;"  v-model="user.income_range"  @change="save">
           <option value="0">请选择收入范围</option>
           <option value="1">10000-50000</option>
          <option value="2">50000-100000</option>
        </select>
      </mt-cell>
      <mt-cell title="兴趣爱好" is-link style="right:2%;margin-left:0.03rem">
        <select style="position:relative;right: 5%;"  v-model="user.interest"  @change="save">
          <option value="0">请选择兴趣爱好</option>
          <option value="1">篮球</option>
          <option value="2">游泳</option>
        </select>
      </mt-cell>

      <mt-cell title="手机" style="right:3%;margin-left:0.06rem">
        <input  type="text" :value="this.user.mobile" readonly="readonly" style="position:relative;left:34%;outline: none;border: medium;"><router-link to="/changePhone"><mt-button size="small" style="background-color:#D7D7D7">修改</mt-button></router-link>
      </mt-cell>

      <mt-cell title="微信号" style="right:2%;margin-left:0.03rem">
        <input type="text" :value="this.user.wechat_account" readonly="readonly" style="position:relative;left:50%;outline: none;border: medium;">
      </mt-cell>

      <mt-cell title="是否公开微信号" style="padding-bottom:0.2rem;right:3%;margin-left:0.06rem">
        <mt-switch v-model="user.is_public_wx" @change="save"></mt-switch>
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
      if(!this.user.interest){
          this.user.interest =0;
      }
      },
    methods: {
       save(){
        let is_public_wx = this.user.is_public_wx ? true: false
        if(!this.user.memberId){
            this.user.memberId=3;
        }else{
          var member=this.user.memberId;
        }
        var time=new Date(document.getElementById("time").value);
        this.$http.put(`http://121.196.208.176:9001/member`,{
          'address':document.getElementById("address").value,
          'birthday':time.getTime(),
          'name':document.getElementById("name").value,
          'degreeOfEducation':this.user.degree_of_education,
          'enablePublicWa':is_public_wx,
          'incomeRange':this.user.income_range,
          'interest':this.user.interest,
          'memberId':this.user.memberId,
          'occupation':this.user.occupation,
          'sex':this.user.sex
        }).then(data =>{
                
                //保存cookie(设置1年有效期);
                 setCookie('member_id',this.user.memberId,365);
                this.$toast({
                    message:'更新成功',
                    possition:'top',
                 });
                 setTimeout(() => {
                     this.$router.push('/member');
                  },2000)
        },err=>{
                this.$toast({
                    message:'更新失败',
                    possition:'top',
                 });
                setTimeout(() => {
                  this.$router.push('/member');
                }, 2000);
            });
       },
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
  .addre:-ms-input-placeholder{
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
  .mint-cell-wrapper:first{
    background-image: none; 
  }
  .mint-button--default{
    /* background-color: red;*/


  }
</style>
