<template>
  <scroller lock-x>
  <div style="display:flex;flex-direction:column;min-height:100%;background-color:#fff;align-items:center;">
    <figure>
      <img @click="clickCamera" src="static/img/camera.png" alt="">
      <figcaption> 点击上传
        <div style="display: none;"><input id="uploadFile" type="file"  @change="onFileChange"></div>
      </figcaption>
    </figure>

    <div style="display:flex;align-items:center;width:100%;">
      <div style="flex:1;border-top:1px solid #ccc;"></div>
      <div style="margin:0 20px;font-size:0.9em;color:#686868;">我的上传记录</div>
      <div style="flex:1;border-top:1px solid #ccc;"></div>
    </div>

    <ul style="margin-top:10px;width:100%;">
      <li v-if="!pageList.length" style="text-align:center;margin-bottom:20px;font-size:0.9em;">
        暂无上传记录
      </li>
      <li v-for="v in pageList" v-else style="margin:0 8px;">
        <div v-if="v.handle_status==0">
          <div style="display:flex;padding:10px 10px;">
            <img :src="v.file_url" alt="" style="width:96px;height:96px;">
            <div style="margin:5px;font-size:0.9em;flex:1;">
              <div>处理状态：<span style="color:#ff8100;">已处理</span></div>
              <div>处理回复：{{v.responses}}</div>
            </div>
          </div>
          <p style="border-top: 1px dashed #ccc;font-size: 0.9em;margin:10px;padding:5px;color:#959697;margin-top:0;">上传时间：{{v.upload_date |time}}</p>
        </div>
        <div v-else-if="v.handle_status==1">
          <div style="display:flex;padding:10px 10px;">
            <img :src="v.file_url" alt="" style="width:96px;height:96px;">
            <div style="margin:5px;font-size:0.9em;flex:1;">
              <div>处理状态：<span style="color:#ff8100;">未通过</span></div>
              <div>处理回复：{{v.responses}}</div>
            </div>
          </div>
          <p style="border-top: 1px dashed #ccc;font-size: 0.9em;margin:10px;padding:5px;color:#959697;margin-top:0;">上传时间：{{v.upload_date |time}}</p>
        </div>
        <div v-else-if="v.handle_status==2" style="background-color:#f9fafb;">
          <div style="display:flex;padding:10px 10px;">
            <img :src="v.file_url" alt="" style="width:96px;height:96px;">
            <div style="margin:5px;font-size:0.9em;flex:1;">
              <div>处理状态：<span style="color:#ff8100;">未处理</span></div>
              <div>处理回复：</div>
              <mt-button size="small" @click="delTicket(v.ticket_id)" style="float:right;">删除</mt-button>
            </div>
          </div>
          <p style="border-top: 1px dashed #ccc;font-size: 0.9em;margin:10px;padding:5px;color:#959697;margin-top:0;">上传时间：{{v.upload_date |time}}</p>
        </div>
      </li>
    </ul>

    <div style="display:flex;font-size:12px;color:#666;margin: 0 10px;flex:1;">
      <div style="white-space:nowrap;width:80px;">温馨提示：</div>
       <ul style="text-align:left;text-indent:-0.9em;margin-left:0.9em;">
         <li>
           1 小票有效期有三个月，请及时上传
         </li>
         <li>
           2 后台人员尽快为您录入，如有问题可电话 <a style="color:#06c1ae;" href="tel:021-65708888">021-65708888</a>
         </li>
       </ul>
    </div>
    <p style="font-size: 0.13rem;color: #333;margin: 0.7rem 0 0.1rem 0;position: relative;bottom:10px;">最终解释权归本公司所有</p>
  </div>
  </scroller>
</template>
<script>
  import global from '../../../src/components/common/Global'
  import moment from 'moment';
  import { Scroller } from 'vux'
  import {
    mapState,
  } from 'vuex';

  const { apiHost } = global;

  export default {
    components: {Scroller},
    data(){
        return {
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
    computed: {
      ...mapState({
        member_id: state => state.member_id,
      }),
    },
    filters:{
       time(value){
         return moment.unix(value / 1000).format('YYYY/MM/DD hh:mm')
       }
    },
    mounted(){
      this.reload();
    },
    methods:{
      async reload(){
        try{
          let { data } = await this.$http.get(`http://121.196.208.176:9001/member/${this.member_id}/tickets`,{
            params: {mallId: global.mallId}
          });
          this.pageList = data;
        }catch (e){
          this.pageList = [];
        }
      },
      async delTicket(ticketId){

        this.$vux.confirm.show({
          title:'删除确认',
          content: '确认删除小票？',
          onConfirm: async ()=>{
            await this.$http.delete(`${apiHost}/member/ticket/${ticketId}`)
            await this.reload()
          }
        })

      },
      clickCamera(){
        document.getElementById('uploadFile').click();
      },
      async createImage(files){
        let formData = new FormData();
        let config = {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        };
        formData.append('file',files[0]);
        formData.append('mallId', 1);
        await this.$http.post(`${apiHost}/member/uploadTicket/${this.member_id}`,formData,config)
        await this.reload();
      },
      onFileChange (e) {
        let files = e.target.files || e.dataTransfer.files
        if (!files.length) return
        this.createImage(files)
        e.target.value = ''
      },
      loadBottom(){
          // 上拉加载
          this.more();// 上拉触发的分页查询
          this.$refs.loadmore.onBottomLoaded();// 固定方法，查询完要调用一次，用于重新定位
        },
      loadPageList() {
        let member_id = this.member_id;
/*        this.$http.get(`http://121.196.208.176:9001/member/${member_id}/tickets`,{page:this.searchCondition.pageNo,size:this.searchCondition.pageSize}).then(data =>{
          this.pageList = data.data;
        },err=>{
        });  */
        this.searchCondition.pageNo = parseInt(this.searchCondition.pageNo) + 1;
        this.$http({
          method: 'get',
          url: `${apiHost}/member/${this.member_id}/tickets?page=${this.searchCondition.pageNo}&&size=${this.searchCondition.pageSize}`,
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
</style>
