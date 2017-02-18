<template>
  <div id="register">
    <div class="header">
      <img src="../my/assets/back.png" alt="" class="back" @click="back">
    	<headbar :title="title"  custombg="header-bg"></headbar>
    </div>
    <div class="register-content">
      <ul>
        <li><input type="text" placeholder="手机号"></li>
        <li> <input type="text" placeholder="验证码"><span>获取验证码</span></li>
        <li><input type="text" placeholder="请设置密码"><input type="text" placeholder="请再次确认密码"></li>
      </ul>
      <button v-if="title=='注册'">注册</button>
      <button v-if="title=='忘记密码'">确定</button>
    </div>
  </div>
</template>
<script type="text/javascript">
import Header from '../common/header/header.vue';
import router from '../../router/index.js';

export default {
  data() {
    return {
      title: this.$route.params.title
    }
  },
  components: {
    headbar: Header
  },
  methods: {
    // 返回上一页
    back() {
      router.push('/index/my/login');
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
ul li:nth-child(2){
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
  /*float: right;*/
  width: 34%;
  background: #D05054;
  color: #fff;
  line-height: .5rem;
  text-align: center;
  border-radius: .05rem;
}
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
