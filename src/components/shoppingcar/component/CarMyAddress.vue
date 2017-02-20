<template>
	<div>
		<div class="header">
      <i class="icon iconfont icon-backward-white-copy fixed icon-in-header backward" @click="backward"></i>
    	<headBar title="收货地址" custombg="header-bg"></headbar>
      <span @click="addAddress">{{addText}}</span>
    </div>
		<myaddress></myaddress>
		<transition name="childtranslate">
      <router-view name="addaddresscontent" class="address-childview"></router-view>
    </transition>
	</div>
</template>

<script>
import router from '../../../router';

import Header from 'components/common/header/Header.vue';

import Myaddress from 'components/my-address/My-address.vue';

export default {
  data() {
    return {
      addText: '添加',
      addaddressRoute: ''
    }
  },
  components: {
    headBar: Header,
    myaddress: Myaddress
  },
  methods: {
    backward() {
      router.go(-1);
    },
    addAddress() {
      router.push({
        name: this.addaddressRoute
      })
    }
  },
  created() {
    this.addaddressRoute = this.$route.params.addaddressRoute;
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
.header>span{
  position: fixed;
  z-index: 100;
  right: .1rem;
  top: .14rem;
  color: #fff;
}
.address-childview{
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
