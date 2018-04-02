<template>
  <div style="background-color:#fff;padding-bottom:15px;">

  </div>
</template>

<script>
import _ from 'lodash'
export default {
  data() {
    return {
      popup: false,
    }
  },
  methods: {
  },
  async mounted(){
    const { member_id } = this.$route.query;
    localStorage.setItem('member_id', member_id);
    this.$router.push('/member');
    document.title = 'VUE大转盘'
  }
}
</script>

<style lang="less" scoped>
</style>
