<template lang="html">
  <div class="fullpage content-hasheader">
    <head-bar title="商品详细"></head-bar>
    <button class="backward" type="button" name="button" @click="backward">返回</button>
    <div>
      {{ id }}
      {{ this.$route.params.goodsId }}
    </div>
  </div>
</template>

<script>
import router from '../../../router';

import Header from '../../common/header/Header.vue';

export default {
  data() {
    return {
      // id: 'null'
    }
  },
  methods: {
    backward() {
      router.go(-1);
    }
  },
  created() {
    this.id = this.$route.params.goodsId
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

/*.backward {
  text-align: center;
  position: fixed;
  z-index: 100;
  color: white;
  height: .44rem;
  width: .44rem;
  top: 0;
  left: .1rem;
  background: red;
}*/
</style>
