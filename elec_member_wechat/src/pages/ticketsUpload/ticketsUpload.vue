<template>
  <scroller lock-x>
  <div v-if="closeUse">
    <div style="font-size:0.5rem;text-align:center;color:red;margin-top:0.5rem;">12月2日不见不散!</div>
  </div>
  <div v-else style="display:flex;flex-direction:column;min-height:100%;background-color:#fff;align-items:center;">

    <div @click="shopSelect()" style="display:flex;border-bottom:1px solid #e1e1e1;width:100%;font-size:0.4rem;">
      <div style="width:70px;padding:10px;margin-left:10px;color:#00c9b2;">商户</div>
      <div style="flex:1;padding:10px;">{{form.shopName}}</div>
      <div style="padding:10px;padding-left:0;width:16px;">
        <span class="iconfont icon-right" style="color:#797979;"></span>
      </div>
    </div>
    <div @click="openDatetime('time', '请选择消费时间', 'YYYY-MM-DD', 'ms')" style="display:flex;border-bottom:1px solid #e1e1e1;width:100%;font-size:0.4rem;">
      <div style="width:70px;padding:10px;margin-left:10px;color:#00c9b2;">消费时间</div>
      <div style="flex:1;padding:10px;color:#7f8081;">{{form.time | unix('YYYY-MM-DD', 'ms')}}</div>
      <div style="padding:10px;padding-left:0;width:16px;">
        <span class="iconfont icon-right" style="color:#797979;"></span>
      </div>
    </div>

    <x-input class="input-money" style="width:100%;font-size:0.4rem;" type="number" v-model="form.money">
      <template slot="label">
        <div style="padding:10px;margin-left:10px;color:#00c9b2;width:70px;">消费金额</div>
      </template>
    </x-input>

    <figure>
      <img @click="clickCamera" src="static/img/camera.png" alt="">
      <figcaption> 点击上传
        <div style="display: none;"><input id="uploadFile" type="file" accept="image/*" @change="onFileChange"></div>
      </figcaption>
    </figure>

    <div style="display:flex;align-items:center;width:100%;">
      <div style="flex:1;border-top:1px solid #ccc;"></div>
      <div style="margin:0 0.5rem;font-size:0.4rem;color:#686868;">我的上传记录</div>
      <div style="flex:1;border-top:1px solid #ccc;"></div>
    </div>

    <ul style="margin-top:0.25rem;width:100%;">
      <li v-if="!pageList.length" style="text-align:center;margin-bottom:0.5rem;font-size:0.4rem;">
        暂无上传记录
      </li>
      <li v-for="v in pageList" v-else style="margin:0 8px;">
        <div v-if="v.handle_status==0">
          <div style="display:flex;padding:0.25rem;">
            <img :src="v.file_url" alt="" style="width:2rem;height:2rem;">
            <div style="margin:0.125rem;font-size:0.4rem;flex:1;">
              <div>处理状态：<span style="color:#ff8100;">已处理</span></div>
              <div>处理回复：{{v.responses}}</div>
            </div>
          </div>
          <p style="border-top: 1px dashed #ccc;font-size: 0.4rem;margin:0.25rem;padding:0.125rem;color:#959697;margin-top:0;">上传时间：{{v.upload_date | unix('YYYY-MM-DD HH:mm', 'ms')}}</p>
        </div>
        <div v-else-if="v.handle_status==1">
          <div style="display:flex;padding:0.25rem;">
            <img :src="v.file_url" alt="" style="width:2rem;height:2rem;">
            <div style="margin:0.125rem;font-size:0.4rem;flex:1;">
              <div>处理状态：<span style="color:#ff8100;">未通过</span></div>
              <div>处理回复：{{v.responses}}</div>
            </div>
          </div>
          <p style="border-top: 1px dashed #ccc;font-size: 0.4rem;margin:0.25rem;padding:0.125rem;color:#959697;margin-top:0;">上传时间：{{v.upload_date | unix('YYYY-MM-DD HH:mm', 'ms')}}</p>
        </div>
        <div v-else-if="v.handle_status==2" style="background-color:#f9fafb;">
          <div style="display:flex;padding:0.25rem;">
            <img :src="v.file_url" alt="" style="width:2rem;height:2rem;">
            <div style="margin:0.125rem;font-size:0.4rem;flex:1;">
              <div>处理状态：<span style="color:#ff8100;">未处理</span></div>
              <div>处理回复：</div>
              <mt-button size="small" @click="delTicket(v.ticket_id)" style="float:right;">删除</mt-button>
            </div>
          </div>
          <p style="border-top: 1px dashed #ccc;font-size: 0.4rem;margin:0.25rem;padding:0.125rem;color:#959697;margin-top:0;">上传时间：{{v.upload_date | unix('YYYY-MM-DD HH:mm', 'ms')}}</p>
        </div>
      </li>
    </ul>

    <div style="display:flex;font-size:0.3rem;color:#666;margin: 0 0.25rem;flex:1;">
      <div style="white-space:nowrap;width:2rem;">温馨提示：</div>
       <ul style="text-align:left;text-indent:-0.9em;margin-left:0.9em;">
         <li>
           1 小票当天有效，请及时上传
         </li>
         <li>
           2 后台人员尽快为您录入，如有问题可电话 <a style="color:#06c1ae;" href="tel:021-65708888">021-65708888</a>
         </li>
       </ul>
    </div>
    <p style="font-size: 0.3rem;color: #333;margin: 0.7rem 0 0.1rem 0;position: relative;bottom:0.25rem;">最终解释权归本公司所有</p>
    <datetime :show="valueFalse"></datetime>
  </div>
  </scroller>
</template>
<script>
  import global from '../../../src/components/common/Global'
  import moment from 'moment';
  import { Scroller, Datetime, XInput } from 'vux'
  import lrz from 'lrz';
  import {
    mapState,
  } from 'vuex';

  export default {
    components: {Scroller, Datetime, XInput},
    data(){
        return {
          valueFalse: false,
          form: {
            shopId:null,
            shopName:null,
            time:moment().unix() * 1000,
          },
          closeUse: false,
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
    filters: {
      unix: (value, format, unit) => {
        return moment.unix((unit == 'ms') ? (value / 1000) : value).format(format)
      }
    },
    mounted(){
      document.title = '小票上传'
      this.reload();
    },
    methods:{
      async reload(){
        try{
          let { data } = await this.$http.get(`/api/member/${this.member_id}/tickets`,{
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
            await this.$http.delete(`/api/member/ticket/${ticketId}`)
            await this.reload()
          }
        })

      },
      clickCamera(){
        document.getElementById('uploadFile').click();
      },
      async createImage(files){
        console.log(files)
        var $loading = this.$vux.loading;

        let config = {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          onUploadProgress: e => {
            console.log(e)
            $loading.show({
              text: `上传中 ${(e.loaded / e.total * 100).toFixed(0)} %`
            })
          }
        };

        let points = parseFloat(this.form.money)
        let member = (await this.$http.get(`/api/member/${this.member_id}?mallId=${global.mallId}`)).data;
        try{
          let promotion = (await this.$http.get(`/api/points/promotion?levelId=${member.level_id}&shopId=${this.form.shopId}&today=${moment().unix()*1000}&birthday=${member.birthday}`)).data;
          points = points / promotion;
        }catch(e) {

          try{
            let simple = (await this.$http.get(`/api/points/simple?levelId=${member.level_id}&shopId=${this.form.shopId}`)).data;
            points = points / simple;
          }catch(e) {}
        }

        let {formData} = await lrz(files[0]);
        formData.append('mallId', 1);
        formData.append('shopId', this.form.shopId);
        formData.append('shoppingDate', this.form.time);
        formData.append('amount', this.form.money);
        formData.append('points', points);
        $loading.show({
          text: '开始上传小票'
        })
        await this.$http.post(`/api/member/uploadTicket/${this.member_id}`,formData,config)
        $loading.hide()
        this.$vux.toast.text('小票上传成功')
        await this.reload();


      },
      async onFileChange (e) {
        let files = e.target.files || e.dataTransfer.files
        if (!files.length) return
        await this.createImage(files)
        e.target.value = ''
      },
      loadBottom(){
          // 上拉加载
          this.more();// 上拉触发的分页查询
          this.$refs.loadmore.onBottomLoaded();// 固定方法，查询完要调用一次，用于重新定位
        },
      loadPageList() {
        let member_id = this.member_id;
/*        this.$http.get(`/api/member/${member_id}/tickets`,{page:this.searchCondition.pageNo,size:this.searchCondition.pageSize}).then(data =>{
          this.pageList = data.data;
        },err=>{
        });  */
        this.searchCondition.pageNo = parseInt(this.searchCondition.pageNo) + 1;
        this.$http({
          method: 'get',
          url: `/api/member/${this.member_id}/tickets?page=${this.searchCondition.pageNo}&&size=${this.searchCondition.pageSize}`,
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

      shopSelect(){
        this.$store.commit('staffshop', this.form)
        this.$router.push('/shopSelect')
      },

      openDatetime(key, title, format, unit){
        const scale = (unit == 'ms') ? 1000 : 1;
        this.$vux.datetime.show({
          startDate: '1900-01-01',
          endDate: moment().format(format),
          cancelText: '取消',
          confirmText: '确定',
          format,
          value: moment.unix(this.form[key] / scale).format(format),
          onConfirm: val => {
            this.form[key] = moment(val).unix() * scale;
          }
        })
      },
    },

    mounted() {
      const { staffreg } = this.$store.state
      this.reload();
      this.form = {
        ...this.form,
        ...staffreg,
      }
    }
  }
</script>
<style lang="less" scoped>
  figure img{
    width: 2rem;
    height: 2rem;
    margin-top: 0.5rem;
    display: inline-block;;
  }
  figure figcaption{
    color: #30C3B6;
    font-weight: bold;
    font-size: 0.4rem;
    text-align: center;
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

  .weui-cell_access {
    display: none;
  }
</style>

<style scoped>
.input-money::before {
  border: 0;
}
.input-money {
  padding: 0;
  border-bottom: 1px solid #e1e1e1;
}
.input-money >>> .weui-cell__bd {
  padding: 10px;
}
</style>
