<template lang="html">
  <div class="fullpage content-hasheader">
    <head-bar title="商品详细页面"></head-bar>
    <button class="backward" type="button" name="button" @click="backward">返回</button>
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
  </div>
</template>

<script>
import router from '../../router';

import Header from '../common/header/Header.vue';

export default {
  data() {
    return {
      id: 'this is id'
    }
  },
  methods: {
    backward() {
      router.go(-1);
    }
  },
  components: {
    headBar: Header
  }
}
</script>

<style lang="css">
/*@import "./scss/good-detail.scss";*/
body {
  min-height: 100%;
}

.backward {
  text-align: center;
  position: fixed;
  z-index: 100;
  color: white;
  height: .44rem;
  width: .44rem;
  top: 0;
  left: .1rem;
  background: red;
}
</style>
