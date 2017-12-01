<template>
  <div style="background-color:#fff;padding-bottom:15px;">
    <msg :title="statusName" :icon="statusIcon"></msg>
  </div>
</template>

<script>
import global from '../../src/components/common/Global.vue'
const { mallId } = global;
import { TransferDom, Scroller, Msg } from 'vux'
import _ from 'lodash'
import {
  mapState,
} from 'vuex';
export default {
  directives: {
    TransferDom
  },
  components: {
    Scroller, Msg
  },
  computed: {
    ...mapState({
      member_id: state => state.member_id,
    }),
  },
  data() {
    return {
      statusName: '核销中',
      statusIcon: 'waiting',
      popup: false,
    }
  },
  methods: {
  },
  async mounted(){
    document.title = '小票核销'
    const { id } = this.$route.query;
    try{
      await this.$http.get(`/api/member/verify?memberId=${this.member_id}&crlId=${id}`)
      this.statusName = '核销成功'
      this.statusIcon = 'success'

    }catch(e){
      if(e.response){
        this.statusName = e.response.data.content
      }else{
        this.statusName = e.message
      }
      this.statusIcon = 'warn'
    }
  }
}
</script>


<style lang="less" scoped>
</style>
