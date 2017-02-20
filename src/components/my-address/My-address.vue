<template>
  <div id="address">
    <transition name="childtranslate">
      <router-view class="address-childview"></router-view>
    </transition>
    <div class="header">
      <img src="../my/assets/back.png" alt="" class="back" @click="back">
    	<headbar title="收货地址" custombg="header-bg"></headbar>
      <span @click="addAddress">{{addText}}</span>
    </div>
    <div class="address-content">
      <ul>
        <li v-for="item in list" @click="listClick(item.addressId)"> 
            <p><span>{{item.name}}</span>{{item.phone}}</p>
            <p><span v-if="item.isDefault">[默认]</span>{{item.address}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script type="text/javascript">
import Header from '../common/header/Header.vue';
import router from '../../router/index.js';

export default {
  data() {
    return {
      // choose my
      from: this.$route.params.from,
      addText: '添加',
      list: [{
        addressId: '123123123',
        name: '小明',
        phone: '13562021254',
        address: '广州市天河区TIT广场',
        isDefault: true
      },
      {
        addressId: '456456456',
        name: '小明',
        phone: '13562021254',
        address: '广州市天河区TIT广场',
        isDefault: false
      }]
    }
  },
  components: {
    headbar: Header
  },
  methods: {
    // 返回上一页
    back() {
      router.go(-1);
    },
    // 添加
    addAddress() {
      router.push('/addAddress');
    },
    listClick(addressId) {
      console.log(this.from);
      if (this.from === 'choose') {
        router.go(-1);
      } else if (this.from === 'my') {
        router.push('/addAddress');
      }
    }
  }
}
</script>
<style lang="css" type="text/css" scoped>
.header-bg{
  background:#D00009
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
#address {
	padding-top: .43rem;
	font-size: .16rem;
	height: 100%;
	background: #f5f5f5;
}
a{
	color: #000;
}
.header span{
  position: fixed;
  z-index: 100;
  right: .1rem;
  top: .14rem;
  color: #fff;
}
.back {
	position: fixed;
	z-index: 100;
	top: .13rem;
	left: .1rem;
	width: .1rem;
	height: .18rem;
}
ul{
  background: 
}
ul li{
  margin-bottom: .1rem;
  padding:.1rem;
  background: #fff url('../my/assets/arrow_left.png') no-repeat 97% 50%;
  border-bottom: 1px solid #E2E4E5;
  border-top: 1px solid #E2E4E5;
  line-height: .3rem;
}
li p:first-child span{
  margin-right: .13rem;
}
li p:last-child span{
  color: #E76A00;
}
</style>
