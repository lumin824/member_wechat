<template>
  <div>
    {{msg}}
  </div>
</template>

<script>
import global from '../../src/components/common/Global.vue'
const { apiHost, mallId } = global;
import { TransferDom, Scroller } from 'vux'
import _ from 'lodash'
import {
  mapState,
} from 'vuex';
export default {
  directives: {
    TransferDom
  },
  components: {
    Scroller,
  },
  computed: {
    ...mapState({
      member_id: state => state.member_id,
    }),
  },
  data() {
    return {
      msg: '核销中',
      popup: false,
    }
  },
  methods: {
  },
  async mounted(){
    const { id } = this.$route.query;
    try{
      await this.$http.get(`${apiHost}/member/verify?memberId=${this.member_id}&crlId=${id}`)
      this.msg = '核销成功'
    }catch(e){
      console.log({e})
      if(e.response){
        this.msg = e.response.data.content
      }
    }
  }
}
</script>


<style lang="less" scoped>
</style>
