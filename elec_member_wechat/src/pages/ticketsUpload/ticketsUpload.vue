<template>
 <div>
  <!--   <mt-header title="小票上传">
       <router-link to="/" slot="left">
         <mt-button icon="back">返回</mt-button>
        &lt;!&ndash; <mt-button  icon="close">关闭</mt-button>&ndash;&gt;
       </router-link>
     </mt-header>-->
     <figure>
         <img @click="clickCamera" src="static/img/camera.png" alt="">
         <figcaption> 点击上传
                      <div style="display: none;"><input id="uploadFile" type="file"  @change="onFileChange"></div>
         </figcaption>
     </figure>
    <t-line>我的上传记录</t-line>
    <!--<h3 style="font-size: 0.15rem;color: #333;">暂无上传记录</h3>-->
   <mt-loadmore  :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore">
         <ul>
              <!--   <li v-if="pageList==''" >
                   <h3 style="font-size: 0.15rem;color: #333;">暂无上传记录</h3>
                 </li>-->
                <li  v-for="v in pageList">
                       <!--已处理通过div-->
                       <div v-if="v.handle_status==0">
                                 <img :src="v.file_url" alt="">
                                 <ul>
                                   <li>处理状态:&nbsp;<span style="background: #5FB878;color: #fff;border-radius: 0.02rem;padding: 0.02rem;">已处理</span></li>
                                   <li>回复:&nbsp;&nbsp;<textarea readonly>已处理通过样式</textarea></li>
                                 </ul>
                                 <p>上传时间:{{v.upload_date|time }}</p>
                       </div>
                      <div v-else-if="v.handle_status==1">
                              <img :src="v.file_url" alt="">
                              <ul>
                                <li>处理状态:&nbsp;<span style="background: #FF6839;color: #fff;border-radius: 0.02rem;padding: 0.02rem;">未通过</span></li>
                                <li>回复:&nbsp;&nbsp;<textarea readonly>已处理未通过样式</textarea></li>
                              </ul>
                              <mt-button size="small" @click="delTicket(v.ticket_id)">删除</mt-button>
                              <p>上传时间:{{v.upload_date }}</p>
                      </div>
                    <div v-else-if="v.handle_status==2">
                          <img :src="v.file_url" alt="">
                          <ul>
                            <li>处理状态:&nbsp;<span style="background: #68A3D5;color: #fff;border-radius: 0.02rem;padding: 0.02rem;">未处理</span></li>
                          </ul>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mt-button size="small" @click="delTicket(v.ticket_id)">删除</mt-button>
                          <p>上传时间:{{v.upload_date |time}}</p>
                    </div>
               </li>
         </ul>
   </mt-loadmore>
    <br>
   <t-point></t-point>
   <p style="font-size: 0.13rem;color: #333;margin: 0.7rem 0 0.1rem 0;position: relative;bottom:10px;">最终解释权归本公司所有</p>
 </div>
</template>
<script>
  import  orderLine from '../../../src/components/common/orderLine.vue'
  import  point from  '../../../src/components/common/point.vue'
  import  {getCookie} from '../../../src/util/util'
  import  global from '../../../src/components/common/Global'
  export default {
    data(){
        return {
             member_id:'',
             defaultResult:'',
             searchCondition:{  //
              pageNo:"1",
              pageSize:"5",
              mall_id:1,
            },
            pageList:'',
            currentActive:-1, //当前已展开详情的标签index，-1表示全部关闭（只展开单个标签）
            allLoaded: false, //是否可以上拉属性，false可以上拉，true为禁止上拉，就是不让往上划加载数据了
            scrollMode:"auto" //移动端弹性滚动效果，touch为弹性滚动，auto是非弹性滚动
        }
    },
    components:{
      't-line':orderLine,
      't-point':point
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
      mounted(){
        this.member_id = getCookie('member_id');
        this.$http.get(`http://121.196.208.176:9001/member/${this.member_id}/tickets`,{page:this.searchCondition.pageNo,size:this.searchCondition.pageSize}).then(data =>{
            this.pageList = data.data;
        },err=>{

        });
      },
    methods:{
         delTicket(ticketId){
                 let url = `http://121.196.208.176:9001/member/ticket/${ticketId}`
                 let xhr = new XMLHttpRequest();
                 xhr.timeout=3000;
                 xhr.open("DELETE",url);
                 xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest"); //请求头部，需要服务端同时设置
                 xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                 xhr.onload = function (e) {
                   if(xhr.readyState == 4 && xhr.status == 200){
                       let data = xhr.response;
                      setTimeout(window.location.reload(),2000);
                   }
                 }
                 xhr.send();
   /*              setTimeout(()=>{
                   /!*       //删除成功,刷新页面
                           this.$http.get(`http://121.196.208.176:9001/member/${this.member_id}/tickets`).then(data =>{
                           this.pageList = data.data;
                           console.log(this.tickets);
                         },err=>{
                           console.log(err);
                         });
                         this.$router.push('/registerSucc');
      *!/                        this.$router.push('/ticketsUpload');
                 },2000);*/
         },
         clickCamera(){
           if(getCookie('member_id')==null){
                   this.$toast({
                     message:'请先登陆!',
                     possition:'top',
                   });
                     setTimeout(this.$router.push('/login'),3000);
                     return false;
                   }
                  document.getElementById('uploadFile').click();
         },
        createImage(files){
            let formData = new FormData();
            let config = {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            };
            //formData.append('memberId', getCookie('member_id'));
            formData.append('file',files[0]);
            //${getCookie('member_id')}'http://121.196.208.176:9001/member/uploadTicket/16 http://localhost/uploadTicket/16 ${getCookie('member_id')}
            this.$http.post(`http://121.196.208.176:9001/member/uploadTicket/${this.member_id}`,formData,config).then(data =>{
              if(data.status===200){
                this.$http.get(`http://121.196.208.176:9001/member/${this.member_id}/tickets`).then(data =>{
                  this.pageList = data.data;
                  console.log(this.tickets);
                },err=>{
                  console.log(err);
                });
              }
          },err=>{
            console.log(err);
          });
        },
         onFileChange (e) {
           let files = e.target.files || e.dataTransfer.files
           console.log(files[0]);
           if (!files.length) return
           this.createImage(files)
        },

        loadBottom(){
          // 上拉加载
          this.more();// 上拉触发的分页查询
          this.$refs.loadmore.onBottomLoaded();// 固定方法，查询完要调用一次，用于重新定位
        },
      loadPageList() {
        let member_id = getCookie('member_id');
/*        this.$http.get(`http://121.196.208.176:9001/member/${member_id}/tickets`,{page:this.searchCondition.pageNo,size:this.searchCondition.pageSize}).then(data =>{
          this.pageList = data.data;
        },err=>{
        });  */
        this.searchCondition.pageNo = parseInt(this.searchCondition.pageNo) + 1;
        this.$http({
          method: 'get',
          url: `http://121.196.208.176:9001/member/${this.member_id}/tickets?page=${this.searchCondition.pageNo}&&size=${this.searchCondition.pageSize}`,
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
        this.loadPageList();
        /*    this.loadPageList(this.searchCondition).then(data=>{
             /!* this.pageList = this.pageList.concat(data.data.pageList);*!/
             // this.isHaveMore(data.result.haveMore);
            });*/
      },
      isHaveMore(isHaveMore){
        // 是否还有下一页，如果没有就禁止上拉刷新
        this.allLoaded = true; //true是禁止上拉加载
        if(isHaveMore){
          this.allLoaded = false;
        }
      },
    }
  }
</script>
<style lang="less" scoped>
  div{
    text-align: center;
    background-color: #fff;
  }
  figure{
  }
  figure img{
    width: 0.8rem;
    height: 0.8rem;
    margin-top: 20px;
    display: inline-block;;
  }
  figure figcaption{
    color: #30C3B6;
    font-weight: bold;
    font-size: 0.2rem;
    margin-top: 0.06rem;
    margin-bottom: 0.1rem;
  }
  ul {
    margin-top: 0.15rem;
  }
  ul li div{
    background-color: #fafafa;
    padding: 0.02rem 0;
  }
  ul li div img {
    width: 1rem;
    height: 0.8rem;
    margin-bottom: 0.1rem;
    margin-left: 0.21rem;
    margin-top: 0.15rem;
    float: left;
  }
  ul li div p{
     border-top:1px dashed #ccc;
     text-align: left;
     margin-left: 0.2rem;
     font-size: 0.13rem;
     color: #666;
     margin-top:0.15rem;
     background-color: #fafafa;
     padding: 0.05rem;
     clear: both;
  }
  ul li ul {
    float: left;
    font-size: 0.14rem;
  }
  ul li ul li {
    margin-left: 0.05rem;
    text-align: left;
  }
  textarea{
     overflow: scroll;
     height: 0.45rem;
     position: relative;
     top: 0.15rem;
     vertical-align:middle;
     border-radius: 0.05rem;
     border: 0.01rem solid #ccc;
     -webkit-appearance: none;
     width: 1.2rem;
  }
  ul li div button{
       position: relative;
        top:0.6rem;
  }
</style>
