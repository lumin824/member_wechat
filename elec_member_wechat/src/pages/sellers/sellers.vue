<template>
   <div>
       <!--  <mt-header title="入驻商户">
               <router-link to="/" slot="left">
                   <mt-button icon="back">返回</mt-button>
               </router-link>
         </mt-header>-->
            <div style="height: 0.2rem;">
                <mt-search v-model="sValue"  cancel-text="取消" placeholder="请输入关键词,例如:肯德基" :result="filterResult"></mt-search>
            </div>
    <!--       <ul class="even">
                 <li style="position: relative;right: -0.2rem;">
                       <select @change="selectChange(1)" v-model="lselected">
                         <option value="">楼层</option>
                         <option v-for="loption in loptions" v-bind:value="loption.map_id">
                           {{ loption.map_name }}
                         </option>
                       </select>
                 </li>
                 <li>
                   &lt;!&ndash;v-model="fselected"&ndash;&gt;
                     <select v-model="fselected" @change="selectChange(2)">
                       <option value="">分类</option>
                         <option v-for="foption in foptions" v-bind:value="foption.industry_id">
                           {{foption.industry_name}}
                         </option>
                     </select>
                 </li>
                 <li>
                     <select v-model="oselected" @change="selectChange(3)">
                       <option v-for="ooption in ooptions" v-bind:value="ooption.value">
                         {{ ooption.text }}
                       </option>
                     </select>
                 </li>
           </ul>-->
             <div class="sortField sortType_01">
                   <a href="javascript:"  @click="selectChange(1)">
                      <span id="sp_floor">
                          {{ltext}}
                      </span>
                   </a>
                   <a href="javascript:" @click="selectChange(2)">
                        <span id="sp_type">
                           {{ftext}}
                        </span>
                   </a>
                   <a href="javascript:" @click="selectChange(3)">
                       <span id="sp_sort">
                          {{otext}}
                       </span>
                   </a>
             </div>
             <div class="sortList" id="shop_type" v-show="sortList">
                      <ul>
                              <li v-show="lselected">
                                    <a href="javascript:" @click="lTextClick('全部','')">全部</a>
                                    <a href="javascript:" @click="lTextClick(loption.map_name,loption.map_id)" v-for="loption in loptions">{{ loption.map_name }}</a>
                               </li>
                              <li v-show="fselected">
                                    <a href="javascript:" @click="fTextClick('全部','')">全部</a>
                                    <a href="javascript:" @click="fTextClick(foption.industry_name,foption.industry_id)" v-for="foption in foptions">{{ foption.industry_name }}</a>
                              </li>
                              <li v-show="oselected">
                                    <a href="javascript:" @click="oTextClick(ooption.text,ooption.value)" v-for="ooption in ooptions">{{ ooption.text }}</a>
                              </li>
                      </ul>
                     <div class="mask" style="display: block;" @click="maskClick"></div>
             </div>
     <mt-loadmore  :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore">
           <ul class="sellers">
                     <li v-for="v in pageList">
                           <router-link :to="{path:'/sell',query:{sell_id:v.shop_id}}">
                                     <div class="left">
                                       <!--:src="v.logo[0].mapUrl" -->
                                             <img :src="v.logo1" alt="">
                                             <div class="imgright">
                                                 <h1>{{v.shop_name}}</h1>
                                                 <img class="imgleft" src="static/img/jf.png" alt="">
                                                 <h2>{{v.berth_number}}</h2>
                                                 <h3>{{v.industry_name}}</h3>
                                             </div>
                                     </div>
                                     <div class="right">
                                             <img src="static/img/lc.png" alt="">
                                             <h3>{{v.points}}</h3>
                                     </div>
                           </router-link>
                       </li>
                   <li></li>
           </ul>
     </mt-loadmore>
   </div>
</template>


<script>
  export default {
      data(){
          return {
            mall_id:1,
            ltext:'楼层',
            ftext:'分类',
            otext:'排序',
            sells:'',
            sValue:'',
            sortList:false,
            lselected: false,
            fselected: false,
            oselected: false,
            lsselected:'',
            fsfselected:'',
            osselected:'',
            loptions: '',
            foptions:'',
            ooptions:[
              { text: '热度', value: '0' },
              { text: '首拼', value: '1' },
            ],
            //用来记录搜索条件是否发生改变
            oldSearchCondition:'',
            //搜索条件是否发生变化
            serarchIsChange:false,
            // 默认数据
            defaultResult:'',
            searchCondition:{  //
              pageNo:"1",
              pageSize:"5",
              mall_id:this.mall_id,
            },
            pageList:'',
            currentActive:-1, //当前已展开详情的标签index，-1表示全部关闭（只展开单个标签）
            allLoaded: false, //是否可以上拉属性，false可以上拉，true为禁止上拉，就是不让往上划加载数据了
            scrollMode:"auto" //移动端弹性滚动效果，touch为弹性滚动，auto是非弹性滚动
          }
      },
    mounted(){
      //拼接搜索条件
      let serarhData = {};
      serarhData.mall_id=this.mall_id;
      serarhData.page =  this.searchCondition.pageNo;
      serarhData.size = this.searchCondition.pageSize;
      //条件变化重新初始化
      this.serarchIsChange = true;
      this.oldSearchCondition = serarhData;
          this.$http({
            method: 'post',
            url:'http://121.196.208.176:9001/shop',
            data:serarhData,
          }).then(resp=>{
            resp.data.forEach((v,k)=>{
              resp.data[k].logo = JSON.parse(resp.data[k].logo);
            })
            resp.data.forEach((val,key)=>{
              if(val.logo.length!=0){
                resp.data[key].logo1=val.logo[0].mapUrl;
              }else{
                resp.data[key].logo1='';
              }
            });
            this.pageList = resp.data;
          })
 /*      this.$http.post('http://121.196.208.176:9001/shop',{'mall_id':10,'industry_id':0,'map_id':0,'sort':'sort','page':this.searchCondition.pageNo,'size':this.searchCondition.pageSize}).then(data =>{
             data.data.forEach((v,k)=>{
                  data.data[k].logo = JSON.parse(data.data[k].logo);
             })
             data.data.forEach((val,key)=>{
              if(val.logo.length!=0){
                  data.data[key].logo1=val.logo[0].mapUrl;
                }else{
                  data.data[key].logo1='';
                }
           });
           this.pageList = data.data;
      });*/
      //楼层数据
      this.$http.get(`http://121.196.208.176:9001/mall/${this.mall_id}/planeMaps`).then(data =>{
         this.loptions = data.data;
      });
      //分类数据
      this.$http.get('http://121.196.208.176:9001/mall/${this.mall_id}/industries').then(data =>{
         this.foptions = data.data;
    });
  },
    computed: {
          filterResult() {
                if(this.sValue!='')this.serarchIsChange=false;
                if(!this.serarchIsChange){
                  this.pageList = '';
                  this.searchCondition.pageNo = 1;
                  let serarhData = {};
                  //拼接搜索条件
                  serarhData.mall_id=this.mall_id;
                  if(this.lsselected!='')serarhData.industry_id = this.lsselected;
                  if(this.fsfselected!='')serarhData.map_id = this.fsfselected;
                  if(this.osselected!='')serarhData.sort = this.osselected;
                  serarhData.page =  this.searchCondition.pageNo;
                  serarhData.size = this.searchCondition.pageSize;
                  serarhData.keywords = this.sValue;
                  //条件变化重新初始化
                  this.oldSearchCondition = serarhData;
                  this.$http({
                    method: 'post',
                    url:'http://121.196.208.176:9001/shop',
                    data:serarhData,
                  }).then(resp=>{
                    resp.data.forEach((v,k)=>{
                      resp.data[k].logo = JSON.parse(resp.data[k].logo);
                    })
                    resp.data.forEach((val,key)=>{
                      if(val.logo.length!=0){
                        resp.data[key].logo1=val.logo[0].mapUrl;
                      }else{
                        resp.data[key].logo1='';
                      }
                    });
                    this.pageList = resp.data;
                    this.isHaveMore(true);
                  },err=>{
                    this.isHaveMore(false);
                  });
                }
  /*              this.$http.post('http://121.196.208.176:9001/shop',{'mall_id':10,'keywords':this.value}).then(data =>{
                  data.data.forEach((v,k)=>{
                    data.data[k].logo = JSON.parse(data.data[k].logo);
                  })
                  data.data.forEach((val,key)=>{
                    if(val.logo.length!=0){
                      data.data[key].logo1=val.logo[0].mapUrl;
                    }else{
                      data.data[key].logo1='';
                    }
                  });
                  this.pageList=data.data;
                },err=>{
                  this.pageList=data.data;
                });*/
            //return this.defaultResult.filter(value => new RegExp(this.value, 'i').test(value));
          }
    },
    methods:{
          //1.楼层 2.分类 3.排序
          selectHasChange(option){
                this.serarchIsChange =true;
                this.pageList = '';
                this.searchCondition.pageNo = 1;
                let serarhData = {};
                //拼接搜索条件
                serarhData.mall_id=this.mall_id;
                if(this.lsselected!='')serarhData.industry_id = this.lsselected;
                if(this.fsfselected!='')serarhData.map_id = this.fsfselected;
                if(this.osselected!='')serarhData.sort = this.osselected;
                serarhData.page =  this.searchCondition.pageNo;
                serarhData.size = this.searchCondition.pageSize;
                //条件变化重新初始化
                this.oldSearchCondition = serarhData;
                this.$http({
                  method: 'post',
                  url:'http://121.196.208.176:9001/shop',
                  data:serarhData,
                }).then(resp=>{
                  resp.data.forEach((v,k)=>{
                    resp.data[k].logo = JSON.parse(resp.data[k].logo);
                  })
                  resp.data.forEach((val,key)=>{
                    if(val.logo.length!=0){
                      resp.data[key].logo1=val.logo[0].mapUrl;
                    }else{
                      resp.data[key].logo1='';
                    }
                  });
                  this.pageList = resp.data;
                  this.isHaveMore(true);
                },err=>{
                  this.isHaveMore(false);
                });
          },
          loadBottom(){
          // 上拉加载
              this.more();// 上拉触发的分页查询
              this.$refs.loadmore.onBottomLoaded();// 固定方法，查询完要调用一次，用于重新定位
         },
        loadPageList(){
                      this.sValue = '';
                            this.serarchIsChange =true;
                            console.log('aaa');
                            this.searchCondition.pageNo = parseInt(this.searchCondition.pageNo) + 1;
                            this.oldSearchCondition.page=this.searchCondition.pageNo;
                            this.$http({
                              method: 'post',
                              url:'http://121.196.208.176:9001/shop',
                              data:this.oldSearchCondition,
                            }).then(resp=>{
                              resp.data.forEach((v,k)=>{
                                resp.data[k].logo = JSON.parse(resp.data[k].logo);
                              })
                              resp.data.forEach((val,key)=>{
                                if(val.logo.length!=0){
                                  resp.data[key].logo1=val.logo[0].mapUrl;
                                }else{
                                  resp.data[key].logo1='';
                                }
                              });
                              this.pageList = this.pageList.concat(resp.data);
                              this.$nextTick(function () {
                                this.scrollMode = "touch"
                              });
                            },error=>{
                              this.isHaveMore(false);
                            })
        },
      more(){
        this.loadPageList();
      },
      isHaveMore(isHaveMore){
        // 是否还有下一页，如果没有就禁止上拉刷新
        this.allLoaded = true; //true是禁止上拉加载
        if(isHaveMore){
          this.allLoaded = false;
        }
      },
      selectChange(option){
         this.sortList = true;
         if(option==1){
           this.lselected = true;
         }else if(option==2){
           this.fselected = true;
         }else if(option==3){
           this.oselected = true;
         }
      },
      lTextClick(text,id){
        this.lselected=false;
        this.sortList = false;
        this.ltext=text;
        this.lsselected=id;
        this.selectHasChange();
      },
      fTextClick(text,id){
        this.fselected = false;
        this.sortList = false;
        this.ftext=text;
        this.fsfselected=id;
        this.selectHasChange();
      },
      oTextClick(text,id){
        this.oselected=false;
        this.sortList = false;
        this.otext=text;
        this.osselected = id;
        this.selectHasChange();

      },
      maskClick(){
        this.oselected=false;
        this.lselected=false;
        this.fselected = false;
        this.sortList = false;
      }


    }
  }
</script>
<style lang="less" scoped>
   .sortField{
     margin-top: 0.32rem;
     background-color: #fff;
     height: 0.5rem;
     line-height: 0.5rem;
     display:flex;
   }
   .sortField a:nth-child(1){
     padding: 0;
   }
   .sortField a{
     display: block;
     -webkit-box-flex:1.0;
     width: 100%;
     text-align: center;
     border-bottom: 1px solid #eaeaea;
   }

   .sortField a:hover{
     background-color: #fff;
   }

   .sortField a span::after{
     display: block;
     content: '';
     position: absolute;
     font-size: 0.8em;
     right: 0;
     top: 50%;
     width: 0.5em;
     height: 0.5em;
     margin:-0.4em 0 0 0;
     transform:rotate(45deg);
   }
   .even{
       background-color: #fff;

       display: flex;
       height: 0.5rem;
       line-height: 0.5rem;
   }
   .even li{
       display: block;
       flex: 1;
       justify-content:space-around;
       margin-left: 0.3rem;
       /*border-right: 1px solid #999;*/
   }
   .even select{
      border:0;
      background: transparent;
     -webkit-appearance: none;
     -moz-appearance: none;
     appearance: none;
   }
   .even select:hover{
     background-color: white;
     border:none;
     outline: none;
   }
   .sellers{
      background-color: #fff;
   }
   .sellers li{
     margin-left: 0.2rem;
     clear: both;
     border-bottom: 1px solid #ddd;
   }
   .sellers  .left{
     float: left;
   }
  .sellers  .left img:nth-child(1){
     height: 0.7rem;
     width: 0.7rem;
     margin-top: 0.1rem;
     float: left;
  }
   .sellers  .right{
     margin-top: 0.17rem;
     float: right;
     margin-right: 0.15rem;
     }
   .sellers  .right img{
       display: inline-block;
       float: left;
       position: relative;
       width: 0.13rem;
       height: 0.13rem;
       bottom:0.01rem;
   }
   .sellers  .right h3{
       font-size: 0.13rem;
       font-weight: normal;
       color:#666;
       float: right;
       margin-left: 0.05rem;
   }
   .sellers .left .imgright{
      margin-top: 0.2rem;
      float: right;
      margin-left: 0.2rem;
   }
   .sellers .left .imgright h1{
      font-size: 0.14rem;
     margin-bottom: 0.05rem;
   }
   .sellers .left .imgright h2{
     font-size: 0.12rem;
     color: #FD6D69;
     margin-bottom: 0.05rem;
     font-weight: normal;
     float: left;
   }
   .sellers .left .imgright h3{
     font-size: 0.13rem;
     font-weight: normal;
     color: #666;
     margin-bottom: 0.1rem;
     clear: left;
   }
   .imgleft{
     float: left;
     width: 0.1rem;
     height: 0.14rem;
     margin-right: 0.04rem;
   }
   .sellers a{
     display: block;
   }
   .sortList{
     position: fixed;
     left: 50%;
     width: 100%;
     max-width: 6.4rem;
     transform: translateX(-50%);
     z-index: 2;
     top:4em;
     bottom:0;
     pointer-events: none;
     right: 0;
   }
   .sortList ul{
     background: #fff;
     position: relative;
     z-index: 2;
     pointer-events: auto;
     list-style: none;
     margin:0;
     padding: 0;
     border:0;
     outline: 0;
     font-weight: inherit;
     font-size:100%;
     font-family: inherit;
     text-align:inherit;
     line-height: inherit;
     -webkit-margin-after: 1em;
     -webkit-margin-start:0;
     -webkit-margin-end:0;
     -webkit-padding-start: 0.4rem;
     height: 3rem;

   }
   .sortList ul li{
     padding:1em 0 5em 1em;
   }
   .sortList ul li a{
     display: block;
     width: 50%;
     line-height: 3em;
     float: left;
     position: relative;
     text-decoration: none;
     text-transform: none;
     color:#666;
     margin:0;
     padding:0;
     border:0;
     outline: 0;
     font-weight: inherit;
     font-style:inherit;
     font-size:0.15rem;
     font-family: inherit;
     text-align:inherit;
   }
   .sortList ul li a::after{
     display: block;
     content: '';
     position: absolute;
     bottom:0;
     left:0;
     right: 0.14rem;
     height: 0.01rem;
     background: #eaeaea;
   }
   .sortList .mask{
     position: absolute;
     z-index: 1;
     left:0;
     right: 0;
     top:0;
     bottom:0;
     background: rgba(0,0,0,0.6);
     pointer-events: auto;
   }
</style>



