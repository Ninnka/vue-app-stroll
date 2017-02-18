<template>
  <div id="address">
    <div class="header">
      <img src="../my/assets/back.png" alt="" class="back" @click="back">
    	<headbar title="收货地址" custombg="header-bg"></headbar>
      <span @click="addAddress">{{addText}}</span>
    </div>
    <div class="address-content">
      <ul>
        <li v-for="item in list">
          <router-link to="">  
            <p><span>{{item.name}}</span>{{item.phone}}</p>
            <p><span v-if="item.isDefault">[默认]</span>{{item.address}}</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script type="text/javascript">
import Header from '../common/header/header.vue';
import router from '../../router/index.js';

export default {
  data() {
    return {
      addText: '添加',
      list: [{
        name: '小明',
        phone: '13562021254',
        address: '广州市天河区TIT广场',
        isDefault: true
      },
      {
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
      router.push('/index/My');
    },
    // 添加
    addAddress() {
      // router.push('/account');
    }
  }
}
</script>
<style lang="css" type="text/css" scoped>
.header-bg{
  background:#D00009
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
ul li{
  margin-bottom: .1rem;
  padding:.1rem;
  background: #fff url('../my/assets/arrow_left.png') no-repeat 97% 50%;
  border-bottom: 1px solid #E2E4E5;
  border-top: 1px solid #E2E4E5;
  line-height: .3rem;
}
li a p:first-child span{
  margin-right: .13rem;
}
li a p:last-child span{
  color: #E76A00;
}
</style>
