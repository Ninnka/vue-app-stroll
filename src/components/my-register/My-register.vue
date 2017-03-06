<template>
  <div id="register">
    <toast :content="tipText" :show="showTip"></toast>
    <div class="header">
      <img src="../my/assets/back.png" alt="" class="back" @click="back">
    	<headbar :title="title"  custombg="header-bg"></headbar>
    </div>
    <div class="register-content">
      <ul>
        <li><input type="text" placeholder="用户名" v-model="userData.username"></li>
        <li><input type="number" maxlength="11" placeholder="手机号" v-model="userData.phone"></li>
        <li v-if="false"><input type="text" placeholder="验证码"><span>获取验证码</span></li>
        <li><input type="password" placeholder="请设置密码" v-model="userData.password"><input type="password" placeholder="请再次确认密码" v-model="password2"></li>
      </ul>
      <button v-if="title=='注册'" @click="register">注册</button>
      <button v-if="title=='忘记密码'">确定</button>
    </div>
  </div>
</template>
<script>
import Header from '../common/header/Header.vue';
import router from '../../router/index.js';
import Toast from '../common/toast/Toast.vue';

export default {
  data() {
    return {
      title: this.$route.params.title,
      password2: '',
      tipText: '',
      showTip: false,
      userData: {
        username: '',
        password: '',
        phone: '',
        avatar: 'http://pic2.cxtuku.com/00/02/31/b945758fd74d.jpg',
        grade: '普通会员'
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
      router.go(-1);
    },
    // 注册
    register() {
      let _this = this;
      if (this.userData.username === '' || this.userData.password === '' || this.userData.phone === '' || this.password2 === '') {
        this.tipText = '信息不能为空！';
        this.showTip = true;
        setTimeout(function() {
          _this.showTip = false;
        }, 1500);
      } else if (this.userData.password !== this.password2) {
        this.tipText = '密码不一致';
        this.showTip = true;
        setTimeout(function() {
          _this.showTip = false;
        }, 1500);
      } else {
        localStorage.setItem('username2', this.userData.username);
        localStorage.setItem('password2', this.userData.password);
        localStorage.setItem('avatar2', this.userData.avatar);
        localStorage.setItem('grade2', this.userData.grade);
        this.tipText = '注册成功';
        this.showTip = true;
        setTimeout(function() {
          _this.showTip = false;
          router.go(-1);
        }, 1500);
      }
    }
  }
}
</script>
<style lang="css" type="text/css" scoped>
.header-bg{
  background:#D00009
}
#register {
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
ul{
  margin: .3rem 0 .6rem;
}
ul li{
  position: relative;
  margin: .1rem auto;
  width: 88%;
  border:1px solid #E6E7E7;
  border-radius: .1rem;
  background: #fff;
}
ul li input{
  margin:.05rem;
  padding-left: .1rem;
  width: 92%;
  line-height: .5rem;
  border-radius: .05rem;
  border: none;
  outline: none;
  font-size: .16rem;
}
/*ul li:nth-child(2){
  border: none;
  background: none;
}
ul li:nth-child(2) input{
  margin-right: 5%;
  width: 55%;
  border:1px solid #E6E7E7;
}
ul li:nth-child(2) span{
  display: inline-block;
  width: 34%;
  background: #D05054;
  color: #fff;
  line-height: .5rem;
  text-align: center;
  border-radius: .05rem;
}*/
ul li:nth-child(3) input:first-child{
  border-bottom: 1px solid #E6E7E7;
}
button{
  display: block;
  margin: 0 auto;
  width: 80%;
  background: #E87D0B;
  border: none;
  outline: none;
  line-height: .4rem;
  font-size: .18rem;
  color: #fff;
  border-radius: .1rem;
  letter-spacing: .1rem;
}
</style>
