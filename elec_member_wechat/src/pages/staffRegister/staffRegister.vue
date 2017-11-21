<template>
  <div>
    <div style="margin-top:10px;background:#fff;border-top:1px solid #e1e1e1;">
      <div style="display:flex;border-bottom:1px solid #e1e1e1;">
        <div style="width:70px;padding:10px;margin-left:10px;color:#00c9b2;">姓名</div>
        <div style="flex:1;padding:10px;">
          <input type="text" placeholder="请输入姓名" v-model="form.name" />
        </div>
      </div>

      <div style="display:flex;border-bottom:1px solid #e1e1e1;">
        <div style="width:70px;padding:10px;margin-left:10px;color:#00c9b2;">联系电话</div>
        <div style="flex:1;padding:10px;">
          <input type="number" placeholder="请输入联系电话" v-model="form.phone" />
        </div>
      </div>

      <div style="display:flex;border-bottom:1px solid #e1e1e1;">
        <div style="width:70px;padding:10px;margin-left:10px;color:#00c9b2;">类别</div>
        <div style="flex:1;padding:10px;">
          <checker v-model="form.leibie" default-item-class="demo5-item" selected-item-class="demo5-item-selected" :radio-required="true">
            <checker-item v-for="o in popupList.leibie" :value="o.id">{{o.name}}</checker-item>
          </checker>
        </div>
      </div>

      <div v-if="form.leibie==0" @click="openPopup('department', '请选择部门')" style="display:flex;border-bottom:1px solid #e1e1e1;">
        <div style="width:70px;padding:10px;margin-left:10px;color:#00c9b2;">部门</div>
        <div style="flex:1;padding:10px;">{{popupName('department')}}</div>
        <div style="padding:10px;padding-left:0;width:16px;">
          <span class="iconfont icon-right" style="color:#797979;"></span>
        </div>
      </div>

      <div v-if="form.leibie==1" @click="shopSelect()" style="display:flex;border-bottom:1px solid #e1e1e1;">
        <div style="width:70px;padding:10px;margin-left:10px;color:#00c9b2;">商户</div>
        <div style="flex:1;padding:10px;">{{form.shopName}}</div>
        <div style="padding:10px;padding-left:0;width:16px;">
          <span class="iconfont icon-right" style="color:#797979;"></span>
        </div>
      </div>
    </div>

    <div @click="handleSubmit" style="background-color:#00c9b2;color:#fff;padding:10px;text-align:center;margin-top:20px;margin: 20px;border-radius:5px;">注册</div>

    <div v-transfer-dom>
      <popup v-model="popup" position="bottom" style="background-color:#fff;">
        <div style="padding:10px;text-align:center;position:relative;">
          <div>{{popupTitle}}</div>
          <div v-if="popupSelected instanceof Array" @click="closePopup" style="position:absolute;right:0;bottom:5px;top:5px;display:flex;align-items:center;padding:0 15px;color:#04BE02;">确定</div>
          <div @click="closePopup" style="position:absolute;left:0;bottom:5px;top:5px;display:flex;align-items:center;padding:0 15px;color:#828282;">取消</div>
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
import global from '../../../src/components/common/Global.vue'
const { apiHost, mallId } = global;
import { Checker, CheckerItem, TransferDom, Popup, Scroller } from 'vux'
import _ from 'lodash'
import {
  mapState,
} from 'vuex';

export default {
  directives: {
    TransferDom
  },
  components: {
    Popup, Scroller,Checker, CheckerItem,
  },
  computed: {
    ...mapState({
      member_id: state => state.member_id,
    }),
  },
  data() {
    return {
      popup: false,
      popupTitle: '',
      popupKey: null,
      popupSelected: null,
      popupList: {
        'leibie': [
          {id:0, name:'工作人员'},
          {id:1, name:'商户'},
        ],
        'department': [
          {id:0, name:'财务部'},
          {id:1, name:'招商部'},
          {id:2, name:'运营部'},
          {id:3, name:'客服中心'},
        ],
      },

      form: {
        name:'',
        phone: '',
        leibie:0,
        department:0,
        shopId:null,
        shopName:null,
      },
    }
  },
  methods: {
    popupName(key){
      const id = this.form[key];
      if(id instanceof Array){
        const list = _.map(_.filter(this.popupList[key], o=>~id.indexOf(o.id)), 'name')
        return list.join(',')
      }else{
        return (_.find(this.popupList[key], {id}) || {}).name
      }
    },
    openPopup(key, title) {
      this.popupSelected = this.form[key];
      if(this.popupSelected instanceof Array){
        this.popupSelected = _.intersection(this.popupSelected, _.map(this.popupList[key], 'id'));
      }
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
      }else{
        if(this.form[this.popupKey] != id){
          this.form[this.popupKey] = id
        }
        this.popup = false;
      }
    },
    closePopup(){
      if(this.popupSelected instanceof Array){
        this.form[this.popupKey] = this.popupSelected;
        this.popup = false;
      }else{
        this.popup = false;
      }
    },
    shopSelect(){
      this.$store.commit('staffshop', this.form)
      this.$router.push('/shopSelect')
    },
    handleSubmit(){
      const { name, phone, department, shopId, leibie } = this.form;
      const { member_id: memberId } = this

      if(leibie == 0){

        this.$http.post(`${apiHost}/member/registServices`, {
          mallId, memberId, name, phone, department
        })
      }else{
        this.$http.post(`${apiHost}/member/registClerk`, {
          mallId, memberId, name, phone, shopId
        })
      }
    }
  },
  async mounted(){
    const { staffreg } = this.$store.state
    this.form = {
      ...this.form,
      ...staffreg,
    }
  }
}
</script>

<style lang="less" scoped>
input {
  background-color:transparent;
  border-style:none;
  outline:none;
}

.box {
  padding: 0 15px;
}

.demo5-item {
  width: 80px;
  height: 26px;
  line-height: 26px;
  text-align: center;
  border-radius: 3px;
  border: 1px solid #ccc;
  background-color: #fff;
  margin-right: 6px;
}
.demo5-item-selected {
  border-color: #00c9b2;
}
</style>
