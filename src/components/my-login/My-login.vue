<template>
  <div id="login">
    <transition name="childtranslate">
      <router-view class="register-childview"></router-view>
    </transition>
    <toast :content="tip" :show="showTip"></toast>
    <div class="header">
      <img src="../my/assets/back.png" alt="" class="back" @click="back">
    	<headbar title="登录" custombg="header-bg"></headbar>
      <span @click="register">{{registerText}}</span>
    </div>
    <div class="login-content">
      <img :src="logo" alt="">
      <div>
        <input type="text" placeholder="请输入账号/手机号" v-model="loginData.username"><input type="password" placeholder="请输入密码" v-model="loginData.password">
        <p @click="forget">忘记密码？</p>
      </div>
      <button @click="login">登录</button>
    </div>
  </div>
</template>
<script type="text/javascript">
import Header from '../common/header/header.vue';
import router from '../../router/index.js';
import Logo from '../my/assets/login-logo.png';
import Toast from '../common/toast/Toast.vue';

export default {
  data() {
    return {
      logo: Logo,
      registerText: '注册',
      tip: '请输入账号/密码',
      showTip: false,
      loginData: {
        username: '',
        password: ''
      }
    }
  },
  components: {
    headbar: Header,
    toast: Toast
  },
  methods: {
    // 返回上一页
    back() {
      router.push('/index/my');
    },
    // 注册
    register() {
      router.push('/register/注册');
    },
    // 忘记密码
    forget() {
      router.push('/register/忘记密码');
    },
    // 登录
    login() {
      var _this = this;
      if (this.loginData.username === '' || this.loginData.password === '') {
        this.tip = '请输入账号/密码';
        this.showTip = true;
        setTimeout(function() {
          _this.showTip = false;
        }, 1500);
      } else {
        if (this.loginData.username !== 'admin' || this.loginData.password !== 'admin') {
          this.tip = '密码错误!';
          this.showTip = true;
          setTimeout(function() {
            _this.showTip = false;
          }, 1500);
        } else {
          var userData = {
            username: this.loginData.username,
            avatar: 'http://pic2.cxtuku.com/00/02/31/b945758fd74d.jpg',
            grade: '股东会员'
          };
          localStorage.setItem('username', userData.username);
          localStorage.setItem('avatar', userData.avatar);
          localStorage.setItem('grade', userData.grade);
          router.push('/index/my');
        }
      }
    }
  }
}
</script>
<style lang="css" type="text/css" scoped>
.header-bg{
  background:#D00009
}
.register-childview{
  position: fixed;
  top: 0;
  z-index: 250;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
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
#login {
	padding-top: .45rem;
	font-size: .16rem;
	background: #f5f5f5;
  /*text-align: center;*/
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
.login-content{
  position: relative;
  text-align: center;
}
.login-content img{
  margin: .5rem 0;
}
.login-content input{
  padding-left: .35rem;
  width: 80%;
  line-height: .5rem;
  font-size: .16rem;
  border: 1px solid #AFB0B3;
  outline: none;
  border-radius: .05rem;
  background: #fff;
  margin-bottom: .1rem;
}
.login-content div{
  position: relative;
}
.login-content input:first-child{
  background:#fff url('../my/assets/ico-user.png') no-repeat .1rem center;
}
.login-content input:nth-child(2){
  background:#fff url('../my/assets/ico-psw.png') no-repeat .1rem center;
}
.login-content div p{
  position: absolute;
  right: 5%;
  bottom: -.15rem;
  color: #E67C0B;
}
.login-content button{
  margin-top: .5rem;
  width: 80%;
  background: #E67C0B;
  line-height: .4rem;
  outline: none;
  border: none;
  border-radius: .05rem;
  font-size: .18rem;
  color:#fff;
  letter-spacing: .1rem;
}
</style>
