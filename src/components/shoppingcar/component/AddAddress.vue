<template lang="html">
  <div class="fullpage">
    <headbar title="收获地址"></headbar>
    <i class="icon iconfont icon-backward-white-copy fixed icon-in-header backward" @click="backward"></i>
    <div>{{msg}}</div>
  </div>
</template>

<script>
import router from '../../../router';

import Header from 'components/common/header/Header.vue';

export default {
  data() {
    return {
      msg: 2
    }
  },
  components: {
    headbar: Header
  }
}
</script>

<style lang="css" type="text/css">
.backward {
  color: white;
  height: .44rem;
  left: .1rem;
  line-height: .44rem;
  text-align: center;
  top: 0;
  width: .20rem;
  z-index: 100; 
}
.icon-in-header {
  font-size: .3rem;
}

</style>
