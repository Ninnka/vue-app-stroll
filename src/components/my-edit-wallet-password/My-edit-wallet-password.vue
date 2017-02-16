<template>
  <div id="walletpsw">
    <div class="header">
      <img src="../my/assets/back.png" alt="" class="back" @click="back">
    	<headbar title="修改钱包密码"></headbar>
    </div>
    <div class="wallet-psw-content">
      <div>新密码 <input type="password" placeholder="6-20字符" v-model="newpsw1"></div>
      <div>确认密码 <input type="password" placeholder="6-20字符" v-model="newpsw2"></div>
      <div>手机号码 <input type="text" v-model="phone"></div>
      <div>验证码 <input type="text" v-model="identify" > <span>获得验证码</span></div>
      <p>注意：密码不得填空格，可由英文字母和数字组成</p>
      <button>确认</button>
    </div>
  </div>
</template>
<script type="text/javascript">
import Header from '../common/header/header.vue';
import router from '../../router/index.js';

export default {
  data() {
    return {
      newpsw1: '',
      newpsw2: '',
      phone: '',
      identify: ''
    }
  },
  components: {
    headbar: Header
  },
  methods: {
    // 返回上一页
    back() {
      router.push('/basemsg');
    }
  }
}
</script>
<style lang="css" type="text/css" scoped>

#walletpsw {
	padding-top: .45rem;
	font-size: .16rem;
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
.wallet-psw-content{
  padding: .15rem .1rem;
}
.wallet-psw-content div{
  display: flex;
  margin: 0 auto;
  padding: .1rem;
  width: 95%;
  background: #fff;
  border-radius: .05rem;
  border: 1px solid #E2E4E5;
  line-height: .4rem;
}
.wallet-psw-content div input{
  padding-left: .2rem;
  flex:1 1;
  outline: none;
  font-size: .16rem;
}
.wallet-psw-content div:first-child{
  margin: .2rem auto 0;
  border-radius: 0;
  border-top-left-radius: .05rem;
  border-top-right-radius: .05rem;
  border-bottom: none;
}
.wallet-psw-content div:nth-child(2){
  margin: 0 auto .2rem;
  border-radius: 0;
  border-bottom-left-radius: .05rem;
  border-bottom-right-radius: .05rem;
}
.wallet-psw-content div:nth-child(3){
  border-radius: 0;
  border-top-left-radius: .05rem;
  border-top-right-radius: .05rem;
  border-bottom: none;
}
.wallet-psw-content>div:nth-child(4){
  border-radius: 0;
  border-bottom-left-radius: .05rem;
  border-bottom-right-radius: .05rem;
}
.wallet-psw-content>div:nth-child(4) span{
  padding:0 .1rem;
  background: #25B877;
  color: #fff;
  font-size: .12rem;
  border-radius: .05rem;
}
.wallet-psw-content p{
  margin-top: .2rem;
  font-size: .14rem;
  color: #7C7D7E;
}
.wallet-psw-content button{
  position: fixed;
  bottom: .3rem;
  left: 10%;
  width: 80%;
  line-height: .4rem;
  background: #D0700C;
  color: #fff;
  font-size: .16rem;
  border:none;
  border-radius: .1rem;
}
</style>
