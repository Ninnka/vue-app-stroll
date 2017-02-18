<template>
  <div id="more">
    <transition name="childtranslate">
      <router-view class="more-childview"></router-view>
    </transition>
    <div class="header">
      <img src="../my/assets/back.png" alt="" class="back" @click="back">
    	<headbar title="更多"  custombg="header-bg"></headbar>
    </div>
    <div class="more-content">
      <ul>
        <li v-for="item in list">
          <router-link :to="item.toUrl" >{{item.text}} <span>{{item.value}}</span></router-link>
        </li>
        <li @click="update">{{updateText.text}} <span>{{updateText.value}}</span></li>
      </ul>
    </div>
    <div class="box-wrap" v-if="isUpdate">
      <div class="update-box">
        <div class="mul8">
          <div class="mul8circ1"></div>
          <div class="mul8circ2"></div>
        </div>
        <p>正在查找新版本...</p>
      </div>
    </div>
    <toast :content="toastText" :show="showToast"></toast>
  </div>
</template>
<script type="text/javascript">
import Header from '../common/header/Header.vue';
import router from '../../router/index.js';
import Toast from '../common/toast/Toast.vue';

export default {
  data() {
    return {
      toastText: '目前已经是最新版本了',
      isUpdate: false,
      showToast: false,
      list: [{
        toUrl: '/more/aboutUs',
        text: '关于我们'
      },
      {
        toUrl: '/more/helpCenter',
        text: '帮助中心'
      },
      {
        toUrl: '/more/fedback',
        text: '意见反馈'
      }],
      updateText: {
        text: '版本更新',
        value: '1.0.0'
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
      router.push('/index/My');
    },
    update() {
      this.isUpdate = true;
      var _this = this;
      setTimeout(function() {
        _this.isUpdate = false;
        _this.showToast = true;
        setTimeout(function() {
          _this.showToast = false;
        }, 1500);
      }, 2000);
    }
  }
}
</script>
<style lang="css" type="text/css" scoped>
.header-bg{
  background:#D00009
}
.more-childview{
  position: fixed;
  top: 0;
  z-index: 300;
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
.childtranslate-enter, .childtranslate-leave-to
{
  transform: translateX(100%);
}
#more {
	padding-top: .45rem;
	font-size: .16rem;
	height: 100%;
	background: #f5f5f5;
}
a{
  display: inline-block;
  width: 100%;
  height: 100%;
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
  margin-top: .15rem;
  background: #fff;
  border-top: .01rem solid #E4E5E5;
}
ul li{
  padding:0 .1rem;
  color: #000;
  border-bottom: .01rem solid #E4E5E5;
  line-height: .45rem;
  background: url('../my/assets/arrow_left.png') no-repeat 97% 50%;
}
ul li:last-child{
  background:none;
}
ul li span{
  float: right;
}
.box-wrap{
  position: fixed;
  top: 0;
  z-index: 200;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.3);
}
.update-box{
  margin: 2rem auto;
  border-radius: .1rem;
  padding: .2rem .1rem .1rem;
  width: 1.2rem;
  height: 1.4rem;
  background: rgba(0,0,0,.8);
}
.update-box p{
  margin-top: .4rem;
  font-size: .14rem;
  text-align: center;
  color: #e0e0e0;
}
.mul8 {
  margin-left: .3rem;
  height: 50px;
  width: 50px;
} 
.mul8circ1 {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: 5px solid #76cbad;
  border-bottom-color: rgba(0,0,0,0);
  border-top-color: rgba(0,0,0,0);
  -webkit-animation: mul8circ1Anim 2s infinite linear;
  animation: mul8circ1Anim 2s infinite linear;
  position: absolute;
} 
.mul8circ2 {
      height: 50px;
      width: 50px;
      border-radius: 50%;
      border: 5px solid #127961;
      border-bottom-color: rgba(0,0,0,0);
      border-top-color: rgba(0,0,0,0);
      -webkit-animation: mul8circ2Anim 2.5s infinite linear;
      animation: mul8circ2Anim 2.5s infinite linear;
      position: absolute;
   }
@-webkit-keyframes mul8circ1Anim {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}   
@keyframes mul8circ1Anim {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}   
@-webkit-keyframes mul8circ2Anim {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}     
@keyframes mul8circ2Anim {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
</style>
