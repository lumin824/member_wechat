<template>
  <ul class="sellers">
    <mt-loadmore  :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore">
        <li style="display:block;">
          <router-link to="/voucherDetail">
            <div class="left">
              <img  src="static/img/hgds.jpg" alt="">
              <div class="imgright">
                <h1>哈根达斯满百减十</h1>
                <h2>市场价:100元</h2>
                <h3>优惠价:90元</h3>
              </div>
            </div>
            <div class="right">
              <button>立即支付</button>
            </div>
          </router-link>
        </li>

        <li>
          <router-link to="/voucherDetail">
            <div class="left">
              <img  src="static/img/hgds.jpg" alt="">
              <div class="imgright">
                <h1>乐町服饰专卖</h1>
                <h2>市场价:10元</h2>
                <h3>10积分</h3>
              </div>
            </div>
            <div class="right">
              <button>立即领取</button>
            </div>
          </router-link>
        </li>
        <li>
          <router-link to="/voucherDetail">
            <div class="left">
              <img  src="static/img/hgds.jpg"  alt="">
              <div class="imgright">
                <h1>德芙巧克力 纵享新丝滑</h1>
                <h2>市场价:10元</h2>
                <h3>10积分</h3>
              </div>
            </div>
            <div class="right">
              <button>立即领取</button>
            </div>
          </router-link>
        </li>
    <li></li>
    </mt-loadmore>
  </ul>
</template>
<script>
  export default {
    data(){
      return {
        value:'',
        lselected: '0',
        fselected: '0',
        oselected: '0',
        loptions: [
          { text: '楼层', value: '0' },
          { text: '一层', value: '1' },
          { text: '二层', value: '2' },
          { text: '三层', value: '3' }
        ],
        foptions: [
          { text: '选择分类', value: '0' },
          { text: '餐饮', value: '1' },
          { text: '水吧', value: '2' },
          { text: '女士服装', value: '3' }
        ],
        ooptions:[
          { text: '排序', value: '0' },
          { text: '热度', value: '1' },
          { text: '首拼', value: '2' },
        ],
        // 默认数据
        defaultResult: [
          '肯德基',
          '苏果',
          '大润发',
          '吃喝玩乐',
          '想吃就吃',
        ]
      }
    },
    mounted(){
      this.loadPageList();  //初次访问查询列表
    },
    computed: {
        filterResult() {
          return this.defaultResult.filter(value => new RegExp(this.value, 'i').test(value));
        }
    },
    methods:{
        loadBottom(){
          // 上拉加载
          this.more();// 上拉触发的分页查询
          this.$refs.loadmore.onBottomLoaded();// 固定方法，查询完要调用一次，用于重新定位
        },
        loadPageList(){
          /*       this.$http.get('http://192.168.1.160/test').then(data =>{
                     //是否还有下一页，加个方法判断，没有下一页要禁止上拉
                    // this.isHaveMore(data.result.haveMore);
                     this.pageList = data.data;
                     this.$nextTick(function () {
                       this.scrollMode = "touch"
                     });
                   });*/
        },
        more(){
          // 分页查询
          this.searchCondition.pageNo = parseInt(this.searchCondition.pageNo) + 1;
          this.api.loadPageList(this.searchCondition).then(data=>{
            this.pageList = this.pageList.concat(data.result.pageList);
            this.isHaveMore(data.result.haveMore);
          });
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
  .even{
    background-color: #fff;
    margin-top: 0.32rem;
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
/*    margin-left: 0.2rem;*/
    clear: both;
    border-bottom: 1px solid #e6e6e6;
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
    margin-top: 0.2rem;
  }
  .sellers .right button{
    border: 1px solid #FFD161 ;
    background-color: #FFFFFF;
    color:#FFD161 ;
    margin-top: 0.35rem;

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
    color: #666;
    margin-bottom: 0.05rem;
    font-weight: normal;
  }
  .sellers .left .imgright h3{
    font-size: 0.13rem;
    font-weight: normal;
    color: #68D5C2;
    margin-bottom: 0.1rem;
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
</style>
