<template>
  <div>
    <div style="display:flex;background-color:#fff;margin-top:20px;border-top:1px solid #e1e1e1;border-bottom:1px solid #e1e1e1;">
      <div>
        <img src="static/img/cat.jpg" style="border-radius:50%;width:80px;height:80px;margin:20px;">
      </div>
      <div>
        <div style="margin-top:20px;font-size:1.1em;">{{user.name}} <span style="background-color:#56ded3;color:#fff;padding:2px 5px;font-size:0.9em;border-radius:3px;">{{user.level}}</span></div>
        <div style="font-size:0.9em;color:#7f8081;">累计积分<span style="margin-left:10px;">{{user.cumulate_points}}</span></div>
        <div style="font-size:0.9em;color:#7f8081;">可用积分<span style="margin-left:10px;">{{user.usable_points}}</span></div>
      </div>
    </div>

    <div style="margin-top:10px;background:#fff;border-top:1px solid #e1e1e1;">
      <div @click="$vux.confirm.prompt('111', {title:'1111222'})" style="display:flex;border-bottom:1px solid #e1e1e1;">
        <div style="padding:10px;margin-left:10px;">姓名</div>
        <div style="flex:1;text-align:right;padding:10px;">{{user.name}}</div>
        <div style="padding:10px;padding-left:0;">
          <span class="iconfont icon-right" style="color:#797979;"></span>
        </div>
      </div>

      <div @click="openPopup('sex', '请选择性别')" style="display:flex;border-bottom:1px solid #e1e1e1;">
        <div style="padding:10px;margin-left:10px;">性别</div>
        <div style="flex:1;text-align:right;padding:10px;">{{popupName('sex')}}</div>
        <div style="padding:10px;padding-left:0;">
          <span class="iconfont icon-right" style="color:#797979;"></span>
        </div>
      </div>

      <div style="display:flex;border-bottom:1px solid #e1e1e1;">
        <div style="padding:10px;margin-left:10px;">生日</div>
        <div style="flex:1;text-align:right;padding:10px;">{{user.birthday}}</div>
        <div style="padding:10px;padding-left:0;">
          <span class="iconfont icon-right" style="color:#797979;"></span>
        </div>
      </div>

      <div @click="openPopup('occupation', '请选择职业')" style="display:flex;border-bottom:1px solid #e1e1e1;">
        <div style="padding:10px;margin-left:10px;">职业</div>
        <div style="flex:1;text-align:right;padding:10px;">{{popupName('occupation')}}</div>
        <div style="padding:10px;padding-left:0;">
          <span class="iconfont icon-right" style="color:#797979;"></span>
        </div>
      </div>

      <div style="display:flex;border-bottom:1px solid #e1e1e1;">
        <div style="padding:10px;margin-left:10px;">地址</div>
        <div style="flex:1;text-align:right;padding:10px;">{{user.address}}</div>
        <div style="padding:10px;padding-left:0;">
          <span class="iconfont icon-right" style="color:#797979;"></span>
        </div>
      </div>

      <div @click="openPopup('degree_of_education', '请选择教育程度')" style="display:flex;border-bottom:1px solid #e1e1e1;">
        <div style="padding:10px;margin-left:10px;">教育程度</div>
        <div style="flex:1;text-align:right;padding:10px;">{{popupName('degree_of_education')}}</div>
        <div style="padding:10px;padding-left:0;">
          <span class="iconfont icon-right" style="color:#797979;"></span>
        </div>
      </div>

      <div @click="openPopup('income_range', '请选择收入范围')" style="display:flex;border-bottom:1px solid #e1e1e1;">
        <div style="padding:10px;margin-left:10px;">收入范围</div>
        <div style="flex:1;text-align:right;padding:10px;">{{popupName('income_range')}}</div>
        <div style="padding:10px;padding-left:0;">
          <span class="iconfont icon-right" style="color:#797979;"></span>
        </div>
      </div>

      <div @click="openPopup('interest', '请选择兴趣爱好')" style="display:flex;border-bottom:1px solid #e1e1e1;">
        <div style="padding:10px;margin-left:10px;">兴趣爱好</div>
        <div style="flex:1;text-align:right;padding:10px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;">{{popupName('interest')}}</div>
        <div style="padding:10px;padding-left:0;">
          <span class="iconfont icon-right" style="color:#797979;"></span>
        </div>
      </div>

      <div style="display:flex;border-bottom:1px solid #e1e1e1;">
        <div style="padding:10px;margin-left:10px;">手机</div>
        <div style="flex:1;text-align:right;padding:10px;">{{user.mobile}}</div>
        <div style="padding:10px;padding-left:0;">
          <span class="iconfont icon-right" style="color:#797979;"></span>
        </div>
      </div>

      <div style="display:flex;border-bottom:1px solid #e1e1e1;">
        <div style="padding:10px;margin-left:10px;">微信号</div>
        <div style="flex:1;text-align:right;padding:10px;">{{user.wechat_account}}</div>
        <div style="padding:10px;padding-left:0;">
          <span class="iconfont icon-right" style="color:#797979;"></span>
        </div>
      </div>

      <div style="display:flex;border-bottom:1px solid #e1e1e1;">
        <div style="padding:10px;margin-left:10px;">是否公开微信号</div>
        <div style="flex:1;">

        </div>
        <div style="padding:10px;padding-left:0;">
          <mt-switch v-model="user.is_public_wx"></mt-switch>
        </div>
      </div>
    </div>

    <m-user></m-user>

    <div v-transfer-dom>
      <popup v-model="popup" position="bottom" style="background-color:#fff;">
        <div style="padding:10px;text-align:center;position:relative;">
          <div>{{popupTitle}}</div>
          <div v-if="popupSelected instanceof Array" @click="closePopup" style="position:absolute;right:5px;bottom:5px;top:5px;display:flex;align-items:center;padding:0 20px;background-color:#56ded3;border-radius:5px;color:#fff;">确定</div>
        </div>

        <div @click="choosePopup(o.id)" v-for="o in popupList[popupKey]" style="display:flex;border-top:1px solid #e1e1e1;">
          <div style="flex:1;padding:10px;">
            {{o.name}}
          </div>
          <div style="display:flex;align-items: center;margin-right:10px;">
            <span v-show="(popupSelected instanceof Array) ? ~popupSelected.indexOf(o.id) :o.id==popupSelected" class="iconfont icon-check" style="color:#797979;"></span>
          </div>
        </div>
      </popup>
    </div>


  </div>
</template>

<script>
import userIndex from '../../../src/components/common/userindex.vue'
import  global from '../../../src/components/common/Global.vue'
import { TransferDom, Popup } from 'vux'
import _ from 'lodash';
import {
  mapState,
} from 'vuex';
export default {
  directives: {
    TransferDom
  },
  components: {
    Popup,
    'm-user':userIndex,
  },
  data() {
    return {
      popup: false,
      popupTitle: '',
      popupKey: null,
      popupSelected: null,
      popupList: {
        'sex': [{id:0,name:'男'},{id:1,name:'女'}],
        'occupation': [
          {id:0,name:'教师'},
          {id:1,name:'会计'},
          {id:2,name:'IT'},
          {id:3,name:'金融'},
          {id:4,name:'销售'},
          {id:5,name:'营业员'},
          {id:6,name:'公务员'},
          {id:7,name:'自由职业'}
        ],
        'degree_of_education': [
          {id:0, name:'小学'},
          {id:1, name:'初中'},
          {id:2, name:'高中/中专/技校/职高'},
          {id:3, name:'大专'},
          {id:4, name:'本科'},
          {id:5, name:'硕士'},
          {id:6, name:'博士'},
        ],
        'income_range': [
          {id:0, name:'2000以下'},
          {id:1, name:'2000-4000'},
          {id:2, name:'4000-6000'},
          {id:3, name:'6000-10000'},
          {id:4, name:'10000以上'},
        ],
        'interest': [
          {id:0, name:'看书'},
          {id:1, name:'音乐'},
          {id:2, name:'上网'},
          {id:3, name:'游戏'},
          {id:4, name:'旅游'},
          {id:5, name:'汽车'},
          {id:6, name:'购物'},
        ]
      },
      user: {},
    }
  },
  computed: {
    ...mapState({
      member_id: state => state.user,
    }),
  },
  methods: {
    popupName(key){
      const id = this.user[key];
      if(id instanceof Array){
        const list = _.map(_.filter(this.popupList[key], o=>~id.indexOf(o.id)), 'name')
        return list.join(',')
      }else{
        return (_.find(this.popupList[key], {id}) || {}).name
      }

    },
    openPopup(key, title) {
      this.popupSelected = this.user[key];
      this.popupKey = key;
      this.popupTitle = title;
      this.popup = true;
    },
    choosePopup(id){
      if(this.popupSelected instanceof Array){
        if(~this.popupSelected.indexOf(id)){
          this.popupSelected = _.without(this.popupSelected, id)
        }else{
          this.popupSelected = _.concat(this.popupSelected, id)
        }
        console.log(this.popupSelected)
      }else{
        if(this.user[this.popupKey] != id){
          this.user[this.popupKey] = id
        }
        this.popup = false;
      }
    },
    closePopup(){
      if(this.popupSelected instanceof Array){
        this.user[this.popupKey] = this.popupSelected;
        this.popup = false;
      }else{
        // nonono
      }
    }
  },
  async mounted(){
    let member_id = this.member_id;
    let { data } = await this.$http.get(`${global.apiHost}/member/${this.member_id}?mallId=${global.mallId}`)
    data.interest = _.map(data.interest.split(','), parseInt)
    this.user=data;
    console.log(this.user)
  }
}
</script>
<style lang="less" scoped>
</style>
