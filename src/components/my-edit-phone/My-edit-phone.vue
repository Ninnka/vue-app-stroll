<template>
  <div id="phone">
    <div class="header">
      <img src="../my/assets/back.png" alt="" class="back" @click="back">
    	<headbar title="修改联系方式" custombg="header-bg"></headbar>
    </div>
    <div class="phone-content">
      <div>手机号码 <input type="text" v-model="phone"></div>
      <div>验证码 <input type="text" v-model="identify"><span @click="getIdentify">{{identifyText}}</span></div>
      <button>确认</button>
    </div>
  </div>
</template>
<script type="text/javascript">
import Header from '../common/header/Header.vue';
import router from '../../router/index.js';

export default {
  data() {
    return {
      phone: '',
      identify: '',
      identifyText: '获得验证码'
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
    getIdentify() {
      let _this = this;
      if (this.identifyText === '获得验证码') {
        this.identifyText = '60s';
        let t = 59;
        let timeId = setInterval(function() {
          _this.identifyText = t <= 0 ? '获得验证码' : t + 's';
          if (t <= 0) {
            clearInterval(timeId);
          }
          t--;
        }, 1000);
      }
    }
  }
}
</script>
<style lang="css" type="text/css" scoped>
.header-bg{
  background:#D00009
}
#phone {
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
.phone-content{
  padding-top: .3rem;
}
.phone-content div{
  display: flex;
  margin: 0 auto;
  padding: .1rem;
  width: 90%;
  background: #fff;
  border-radius: .05rem;
  border: 1px solid #E2E4E5;
  line-height: .4rem;
}
.phone-content div input{
  padding-left: .2rem;
  width: 10%;
  flex:1 1;
  outline: none;
  font-size: .16rem;
}
.phone-content div:nth-child(1){
  /*margin: .3rem 0 0;*/
  border-radius: 0;
  border-top-left-radius: .05rem;
  border-top-right-radius: .05rem;
  border-bottom: none;
}
.phone-content>div:nth-child(2){
  border-radius: 0;
  border-bottom-left-radius: .05rem;
  border-bottom-right-radius: .05rem;
}
.phone-content>div:nth-child(2) span{
  padding:0 .1rem;
  background: #25B877;
  color: #fff;
  width: 1rem;
  text-align: center;
  font-size: .16rem;
  border-radius: .05rem;
}
.phone-content button{
  display: block;
  margin: .3rem auto;
  width: 80%;
  line-height: .4rem;
  background: #D0700C;
  color: #fff;
  font-size: .16rem;
  border:none;
  border-radius: .1rem;
  outline: none;
}
</style>
