<template>
  <div>
    <div class="header">
      <i class="icon iconfont icon-backward-white-copy fixed icon-in-header backward" @click="backward"></i>
      <headBar title="订单详情" custombg="header-bg"></headbar>
    </div>
	<myupgrade></myupgrade>
	<transition name="childtranslate">
      <router-view class="upgrage-childview"></router-view>
    </transition>
  </div>
</template>

<script>
import router from '../../../router';

import Header from 'components/common/header/Header.vue';

import MyUpgrade from 'components/my-upgrade/My-upgrade.vue';

export default {
  data() {
    return {
      addText: '添加'
    }
  },
  components: {
    headBar: Header,
    myupgrade: MyUpgrade
  },
  methods: {
    backward() {
      router.go(-1);
    },
    addAddress() {
      router.push({
        name: 'member-add-address'
      })
    }
  }
}
</script>

<style lang="css" scoped>
.header{
	position: fixed;
	z-index: 102;
}
.header-bg{
  background: #D00009;
}
.upgrage-childview{
  position: fixed;
  top: 0;
  z-index: 250;
  width: 100%;
  height: 100%;
}
.childtranslate-enter-active {
  transition: all .5s ease;
}
.childtranslate-leave-active {
  transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.childtranslate-enter, .childtranslate-leave-to{
  transform: translateX(100%);
}
</style>
