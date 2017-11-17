<template>
  <div style="margin-top:10px;background:#fff;border-top:1px solid #e1e1e1;">
    <div style="display:flex;border-bottom:1px solid #e1e1e1;">
      <div style="width:70px;padding:10px;margin-left:10px;">姓名</div>
      <div style="flex:1;padding:10px;">
        <input type="text" placeholder="请输入姓名" />
      </div>
    </div>

    <div style="display:flex;border-bottom:1px solid #e1e1e1;">
      <div style="width:70px;padding:10px;margin-left:10px;">联系电话</div>
      <div style="flex:1;padding:10px;">
        <input type="number" placeholder="请输入联系电话" />
      </div>
    </div>

    <div style="display:flex;border-bottom:1px solid #e1e1e1;">
      <div style="width:70px;padding:10px;margin-left:10px;">类别</div>
      <div style="flex:1;padding:10px;">
        <checker v-model="user.leibie" default-item-class="demo1-item" selected-item-class="demo1-item-selected" :radio-required="true">
          <checker-item v-for="o in popupList.leibie" :value="o.id">{{o.name}}</checker-item>
        </checker>
      </div>
    </div>

    <div @click="openPopup('bumen', '请选择部门')" style="display:flex;border-bottom:1px solid #e1e1e1;">
      <div style="width:70px;padding:10px;margin-left:10px;">部门</div>
      <div style="flex:1;padding:10px;">{{popupName('bumen')}}</div>
      <div style="padding:10px;padding-left:0;width:16px;">
        <span class="iconfont icon-right" style="color:#797979;"></span>
      </div>
    </div>

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
import { Checker, CheckerItem, TransferDom, Popup, Datetime, Scroller } from 'vux'
import _ from 'lodash'
export default {
  directives: {
    TransferDom
  },
  components: {
    Popup,
    Datetime, Scroller,Checker, CheckerItem,
  },
  data() {
    return {
      demo1: '',
      popup: false,
      popupTitle: '',
      popupKey: null,
      popupSelected: null,
      popupList: {
        'sex': [{id:0,name:'男'},{id:1,name:'女'}],
        'leibie': [
          {id:0,name:'工作人员'},
          {id:1,name:'商户'},
        ],
        'bumen': [
          {id:0, name:'财务部'},
          {id:1, name:'招商部'},
          {id:2, name:'运营部'},
          {id:3, name:'客服中心'},
        ],
      },

      user: {},
    }
  },
  methods: {
    openEdit(key, title){
    },

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
    },
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
.demo1-item {
  border: 1px solid #ececec;
  padding: 5px 15px;
}
.demo1-item-selected {
  border: 1px solid green;
}
.demo2-item {
  width: 40px;
  height: 40px;
  border: 1px solid #ccc;
  display: inline-block;
  border-radius: 50%;
  line-height: 40px;
  text-align: center;
}
.demo2-item-selected {
  border-color: green;
}
.demo3-item {
  padding: 5px 5px;
  font-size: 0;
}
.demo3-item-selected {
  outline: 1px solid #8B8AEE;
}
.demo4-item {
  background-color: #ddd;
  color: #222;
  font-size: 14px;
  padding: 5px 10px;
  margin-right: 10px;
  line-height: 18px;
  border-radius: 15px;
}
.demo4-item-selected {
  background-color: #FF3B3B;
  color: #fff;
}
.demo4-item-disabled {
  color: #999;
}
.demo5-item {
  width: 100px;
  height: 26px;
  line-height: 26px;
  text-align: center;
  border-radius: 3px;
  border: 1px solid #ccc;
  background-color: #fff;
  margin-right: 6px;
}
.demo5-item-selected {
  border-color: #ff4a00;
}
</style>
