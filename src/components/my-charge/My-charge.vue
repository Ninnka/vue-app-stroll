<template>
  <div id="charge">
    <toast :content="tip" :show="showToast"></toast>
    <pay-box :money="money" :showPay="showPay" @success="hidePayBox" @paycancel="hidePayBox">
    </pay-box>
    <div class="header">
      <img src="../my/assets/back.png" alt="" class="back" @click="back">
    	<headbar title="充值" custombg="header-bg"></headbar>
    </div>
    <div class="charge-content">
      <div>支付宝</div>
      <div><span>金额</span><input type="text" placeholder="请输入充值金额" v-model="money"></div>
      <button @click="next">立即充值</button>
    </div>
  </div>
</template>
<script type="text/javascript">
import Header from '../common/header/Header.vue';
import router from '../../router/index.js';
import PayBox from '../common/pay-box/Pay-box.vue';
import Toast from '../common/toast/Toast.vue';

export default {
  data() {
    return {
      showPay: false,
      money: '',
      tip: '请输入金额',
      showToast: false
    }
  },
  components: {
    headbar: Header,
    'pay-box': PayBox,
    toast: Toast
  },
  methods: {
    // 返回上一页
    back() {
      router.go(-1);
    },
    // 下一步
    next() {
      let _this = this;
      if (this.money === '') {
        this.showToast = true;
        setTimeout(function() {
          _this.showToast = false;
        }, 1500);
      } else {
        this.showPay = true;
      }
    },
    hidePayBox() {
      this.showPay = false;
    }
  }
}
</script>
<style lang="css" type="text/css" scoped>
.header-bg{
  background:#D00009
}
#charge {
	padding-top: .45rem;
	font-size: .16rem;
	height: 100%;
	background: #f5f5f5;
}
a{
	color: #a3a3a3
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
.charge-content div:nth-child(1){
  margin: .2rem 0 .03rem;
  padding-left: .5rem;
  background: #fff url(../my/assets/pay_sprite.png) .1rem -.05rem no-repeat;
  width: 100%; 
  line-height: .45rem;
}
.charge-content div:nth-child(2){
  padding-left: .1rem;
  background: #fff;
  width: 100%; 
  line-height: .45rem;
}
.charge-content div:nth-child(2) span{
  color: #656565;
}
.charge-content div:nth-child(2) input{
  padding: 0 .05rem;
  width: 70%;
  outline:none;
  font-size: .16rem;
}
.charge-content button{
  display: block;
  padding:.1rem 0;
  margin: .5rem auto;
  width: 90%;
  color: #fff;
  background: #26B776;
  border-radius: 5px;
  font-size: .16rem;
  border: none;
  outline: none;
}
</style>
