<template>
  <div id="pay">
    <div class="header">
      <img src="../my/assets/back.png" alt="" class="back" @click="back">
    	<headbar title="支付成功"  custombg="header-bg"></headbar>
    </div>
    <div class="pay-content">
    	<div>恭喜您成为VIP会员</div>
      <button>继续购物</button>
    </div>
  </div>
</template>
<script type="text/javascript">
import Header from '../common/header/Header.vue';
import router from '../../router/index.js';

export default {
  data() {
    return {
    }
  },
  components: {
    headbar: Header
  },
  methods: {
    // 返回上一页
    back() {
      router.go(-2);
    }
  }
}
</script>
<style lang="css" type="text/css" scoped>
.header-bg{
  background:#D00009
}
#pay {
	padding-top: .45rem;
	font-size: .16rem;
	height: 100%;
	background: #f1f1f1;
}
a{
	color: #a3a3a3
}
.back {
	position: fixed;
	z-index: 100;
	top: .13rem;
	left: .1rem;
	width: .1rem;
	height: .18rem;
}
.pay-content div{
  padding: 1.95rem 0 0;
  background: url(../my/assets/pay_success.png) no-repeat center .5rem;
  background-size: 1.3rem 1.2rem;
  text-align: center;
  font-size: .16rem;
}
.pay-content button{
  padding:.1rem .2rem;
  display: block;
  margin: .5rem auto;
  border:none;
  outline: none;
  background: #E42837;
  color: #fff;font-size: .14rem;
  border-radius: 5px;
}
</style>
