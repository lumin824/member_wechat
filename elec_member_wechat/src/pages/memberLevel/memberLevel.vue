<template>
   <div>
         <mt-header title="我的等级">
           <router-link to="/" slot="left">
             <mt-button icon="back">返回</mt-button>
           </router-link>
         </mt-header>
         <m-header></m-header>
         <mt-navbar v-model="selected">
           <mt-tab-item id="1">积分记录</mt-tab-item>
           <mt-tab-item id="2">会员权益</mt-tab-item>
         </mt-navbar>

         <!-- tab-container -->
         <mt-tab-container v-model="selected">
              <mt-tab-container-item id="1">
                 <!--<mt-cell v-for="n in 10" :title="'内容 ' + n" />-->
                     <!-- <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore">-->
                      <mt-loadmore  :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore">
                        <!--  <ul class="list" v-for="(val, key) in pageList">
                            <li>

                            </li>
                          </ul>-->
                         <table width="100%">
                                  <thead>
                                          <tr>
                                              <th>时间</th>
                                              <th>积分</th>
                                              <th>金额</th>
                                              <th>商户</th>
                                          </tr>
                                  </thead>

                                  <tbody>
                                     <!--    <tr @click="showDetail">
                                               <td>2017-09-01</td>
                                               <td class="color">+1</td>
                                               <td class="color">100</td>
                                               <td>肯德基</td>
                                         </tr>-->
                                          <template v-for="(v,k) in pageList">
                                             <tr @click="showDetail(v,k)">
                                                 <td>{{v.shopping_date|time}}</td>
                                                 <td class="color">{{v.points}}</td>
                                                 <td class="color">{{v.amount}}</td>
                                                 <td>{{v.shop_name}}</td>
                                             </tr>
                                             <!--<detail v-if="isShow" @click="test123"></detail>-->
                                            <!--<tr v-if="v.meta && Object.keys(v.meta).length" v-show="k == currentActive">-->
                                            <tr  v-show="k == currentActive">
                                               <td colspan="2">
                                                     <ul style="color:#333;text-align: left; margin-left: 20%;font-size: 0.12rem;">
                                                         <li>消费时间&nbsp;&nbsp;&nbsp;&nbsp;{{v.shopping_date|time}}</li>
                                                         <li>消费商户&nbsp;&nbsp;&nbsp;&nbsp;{{v.shop_name}}</li>
                                                         <li>消费金额&nbsp;&nbsp;&nbsp;&nbsp;{{v.amount}}</li>
                                                         <li>获得积分&nbsp;&nbsp;&nbsp;&nbsp;{{v.points}}</li>
                                                     </ul>
                                               </td>
                                           </tr>
                                          </template>


                                  <!--        <tr v-for="(v,k) in pageList" @click="showDetail">


                                          </tr>
-->



                            <!--             <tr @click="showDetail">
                                               <td>2017-09-01</td>
                                               <td class="color">+1</td>
                                               <td class="color">100</td>
                                               <td>肯德基</td>
                                         </tr>-->
                                        <!-- <detail v-show="true"></detail>-->

                               <!--          <tr ref="abcdef">
                                           <td colspan="2">
                                             <ul style="color: #333;text-align: left;">
                                               <li>消费时间&nbsp;&nbsp;&nbsp;&nbsp;2017-09-01 09:00</li>
                                               <li>消费商户&nbsp;&nbsp;&nbsp;&nbsp;肯德基</li>
                                               <li>消费金额&nbsp;&nbsp;&nbsp;&nbsp;100</li>
                                               <li>获得积分&nbsp;&nbsp;&nbsp;&nbsp;1</li>
                                             </ul>
                                           </td>
                                         </tr>-->

                                     <!--    <tr @click="showDetail">
                                               <td>2017-09-01</td>
                                               <td class="color">+1</td>
                                               <td class="color">100</td>
                                               <td>肯德基</td>
                                         </tr>

                                         <tr @click="showDetail">
                                               <td>2017-09-01</td>
                                               <td class="color">+1</td>
                                               <td class="color">100</td>
                                               <td>肯德基</td>
                                         </tr>

                                         <tr @click="showDetail">
                                               <td>2017-09-01</td>
                                               <td class="color">+1</td>
                                               <td class="color">100</td>
                                               <td>肯德基</td>
                                         </tr>

                                         <tr @click="showDetail">
                                               <td>2017-09-01</td>
                                               <td class="color">+1</td>
                                               <td class="color">100</td>
                                               <td>肯德基</td>
                                         </tr>-->
                                  </tbody>
                         </table>
                      </mt-loadmore>
              </mt-tab-container-item>


             <mt-tab-container-item id="2">
                 <iframe name="a_iframe" id="'a_iframe'"  src="" marginwidth="0" marginheight="0"   frameborder="0" WIDTH="100%" height="500"></iframe>
             </mt-tab-container-item>

         </mt-tab-container>
   </div>
</template>
<script>
  import  Header from '../../../src/components/header/header.vue'
  import  {getCookie} from '../../../src/util/util'
  import  global from '../../../src/components/common/Global'
  export default {
    components:{
      'memberId':'',
      'm-header':Header,
      'detail': {
           template:'<tr><td colspan="2"><ul style="color:#333;text-align: left; margin-left: 20%;font-size: 0.12rem;"><li>消费时间&nbsp;&nbsp;&nbsp;&nbsp;2017-09-01 09:00</li><li>消费商户&nbsp;&nbsp;&nbsp;&nbsp;肯德基</li><li>消费金额&nbsp;&nbsp;&nbsp;&nbsp;100</li><li>获得积分&nbsp;&nbsp;&nbsp;&nbsp;1</li></ul></td></tr>'
      }
    },
    filters:{
      time(value){
        let date =  new Date(value);
        let y = 1900+date.getYear();
        let m = "0"+(date.getMonth()+1);
        let d = "0"+date.getDate();
        let H = date.getHours();
        let minu= date.getMinutes();
        return y+"/"+m.substring(m.length-2,m.length)+"/"+d.substring(d.length-2,d.length)+' '+H+':'+minu;
      }
    },
    data(){
     /* this.$http.get('http://192.168.1.160/test').then(resp=>{
          console.log(resp);}*/
      return{
        isShow:false,
        selected:'1',
        searchCondition:{  //分页属性
          pageNo:"1",
          pageSize:"5"
        },
        pageList:[],
        currentActive:-1, //当前已展开详情的标签index，-1表示全部关闭（只展开单个标签）
        allLoaded: false, //是否可以上拉属性，false可以上拉，true为禁止上拉，就是不让往上划加载数据了
        scrollMode:"auto" //移动端弹性滚动效果，touch为弹性滚动，auto是非弹性滚动
      }
    },
    mounted(){
      this.memberId=getCookie('member_id');
      //this.loadPageList();  //初次访问查询列表
      this.$http({
        method: 'post',
        //url: `http://121.196.208.176:9001/member/${this.memberId}/pointsList`,
        url: `http://121.196.208.176:9001/member/${this.memberId}/pointsList`,
        data: {mallId:global.mallId,page:this.searchCondition.pageNo,size:this.searchCondition.pageSize}
      }).then(resp => {
        console.log(resp);
        this.pageList = resp.data;
     /*   this.$nextTick(function () {
          this.scrollMode = "touch"
        });*/
      }, error => {
       /* this.isHaveMore(false);*/
      })
    },
    methods:{
       loadBottom(){
         // 上拉加载
         this.more();// 上拉触发的分页查询
         this.$refs.loadmore.onBottomLoaded();// 固定方法，查询完要调用一次，用于重新定位
       },
      loadPageList(){
        this.searchCondition.pageNo = parseInt(this.searchCondition.pageNo) + 1;
        this.$http({
          method: 'post',
          url: `http://121.196.208.176:9001/member/${this.memberId}/pointsList`,
          data: {mallId:global.mallId,page:this.searchCondition.pageNo,size:this.searchCondition.pageSize}
        }).then(resp => {
          this.pageList = this.pageList.concat(resp.data);
          this.$nextTick(function () {
            this.scrollMode = "touch"
          });
        }, error => {
          this.isHaveMore(false);
        })
      },
      more(){
           // 分页查询
    /*      this.searchCondition.pageNo = parseInt(this.searchCondition.pageNo) + 1;
          this.api.loadPageList(this.searchCondition).then(data=>{
          this.pageList = this.pageList.concat(data.result.pageList);
          this.isHaveMore(data.result.haveMore);
        });*/
        this.loadPageList();

      },
      isHaveMore(isHaveMore){
        // 是否还有下一页，如果没有就禁止上拉刷新
        this.allLoaded = true; //true是禁止上拉加载
        if(isHaveMore){
          this.allLoaded = false;
        }
      },
      showDetail(v,k){
           //发送ajax请求
     /*      v.meta.xfsj=v.shopping_date;
           v.meta.xfsh=v.shop_name;
           v.meta.xfje=v.amount;
           v.meta.hdjf=v.points;*/
           this.currentActive===k?this.currentActive=-1:this.currentActive=k;
      },
    },
    //会员权益页
    watch:{
        selected:function (val,oldVal) {
          if(val==2)window.open('https://mp.weixin.qq.com/s/N40si0A7iUNUXRK85sxjZQ','a_iframe');
        }
    }

  }
</script>
<style lang="less" scoped>
  .mint-navbar .mint-tab-item.is-selected{
    color: #07C0AE;
    margin-bottom: 0;
    border-bottom: 3px solid #07C0AE;
  }
  table{
    margin-top: 0.13rem;
    background: #fff;
    font-family: "Helvetica Neue", Helvetica, Arial, "Microsoft Yahei UI", "Microsoft YaHei", SimHei, "\5B8B\4F53", simsun, sans-serif;
    padding: 0 0.35rem 0 0;
  }
  table thead{
    text-align: center;
  }

  table thead tr{
  }
  table thead th{
    font-weight: normal;
  }

  table tbody tr{
     text-align: center;
     height: 0.3rem;
     line-height: 0.3rem;
     font-weight: normal;
     color: #333;
     font-size: 0.14rem;
  }

  .color{
     color: #07C0AE;

  }

  table tr ul{
    font-size: 0.12rem;
    margin-left: 20%
  }
</style>
