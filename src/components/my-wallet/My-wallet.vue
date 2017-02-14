<template>
  <div id="wallet">
    <div class="header">
      <img src="../my/assets/back.png" alt="" class="back" @click="back">
    	<headbar title="我的钱包"></headbar>
      <span @click="account">{{accountText}}</span>
    </div>
    <div class="wallet-content">
      <img :src="walletImg" alt="">
      <p>我的余额</p>
      <p>￥{{money}}</p>
      <ul class="select-pay">
        <li v-for="item in list">
          {{item.text}} <input type="radio" name="pay" v-model="item.check">
        </li>
      </ul>
      <button @click="charge">充值</button>
    </div>
  </div>
</template>
<script type="text/javascript">
import Header from '../common/header/header.vue';
import router from '../../router/index.js';
import Wallet from '../my/assets/wallet.png';

export default {
  data() {
    return {
      walletImg: Wallet,
      accountText: '账单',
      money: 88.50,
      list: [{
        text: '支付宝',
        check: false
      },
      {
        text: '微信支付',
        check: false
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
    // 账单
    account() {
      router.push('/account');
    },
    // 充值
    charge() {
      router.push('/charge');
    }
  }
}
</script>
<style lang="css" type="text/css" scoped>
#wallet {
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
.wallet-content{
  padding-top: .5rem;
  text-align: center;
}
.wallet-content img{
  margin-left: .1rem;
  width: .98rem;
  height: .94rem;
}
.wallet-content p:nth-child(2){
  margin-top: .3rem;
  color: #828384;
  font-size: .16rem;
}
.wallet-content p:nth-child(3){
  margin-top: .15rem;
  font-size: .5rem;
}
.select-pay{
  margin:.5rem auto;
  width: 90%;
  background: #fff;
  border: 1px solid #DBDCDD;
  border-radius: 5px;
}
.select-pay li{
  position: relative;
  margin:0 .1rem;
  padding-left: .4rem;
  text-align: left;
  color: #292A2B;
  line-height: .45rem;
}
.select-pay li input{
  position: absolute;
  right: 0;
  top: .13rem;
}
.select-pay li:first-child{
  border-bottom: 1px solid #E6E7E9;
  background: url(../my/assets/pay_sprite.png) 0 -.04rem no-repeat;
}
.select-pay li:last-child{
  background: url(../my/assets/pay_sprite.png) 0 -.5rem no-repeat;
}
.wallet-content button{
  margin: 0 auto;
  padding: .1rem 0;
  width: 80%;
  color: #fff;
  background: #25B879;
  border: 0;
  outline: 0;
  font-size: .16rem;
  border-radius: .05rem;
  letter-spacing: .1rem;
}
</style>
