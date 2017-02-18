<template lang="html">
    <div id="my">
    <toast content="已退出当前账号" :show="showToast"></toast>
    <transition name="childtranslate">
      <router-view class="my-childview"></router-view>
    </transition>
    <div class="login-mask" v-if="userDatas.username=='登录'" @click="toLogin"></div>
    <div class="header">
      <headbar custombg="header-bg"></headbar>
      <div class="avatar">
        <img :src="userDatas.avatar" alt="">
        <img :src="gradeVip" alt="" v-if="userDatas.grade == 'VIP会员'">
        <img :src="gradePartner" alt="" v-if="userDatas.grade == '股东会员'">
      </div>
      <p class="username">{{userDatas.username}}</p>
      <p class="grade" v-if="userDatas.grade!='普通会员'">{{userDatas.grade}}</p>
    </div>
    <div class="my-content">
      <ul> 
        <li v-for="item in listDataTop">
        <router-link :to="item.toUrl">
          {{item.text}}
        </router-link>
        </li>
      </ul>
      <ul> 
        <li v-for="item in listDataBottom">
          <router-link :to="item.toUrl">
            {{item.text}}
          </router-link>
        </li>
        <li @click="loginoutEvent">{{loginout}}</li>
      </ul>
    </div>
  </div>
</template>

<script type="text/javascript">
import router from '../../router/index.js';
import Header from '../common/header/Header.vue';
import GradeVip from './assets/grade_vip.png';
import GradePartner from './assets/grade_partner.png';
import Nologin from './assets/help-center.png';
import Toast from '../common/toast/Toast.vue';

export default {
  data() {
    return {
      showToast: false,
      // 用户信息
      userDatas: {
        username: '登录',
        avatar: Nologin,
        grade: '普通会员'
      },
      // 图片资源
      gradeVip: GradeVip,
      gradePartner: GradePartner,
      loginout: '注销',
      listDataTop: [{
        toUrl: '/basemsg',
        text: '基本信息'
      },
      {
        toUrl: '/orders',
        text: '我的订单'
      },
      {
        toUrl: '/collection',
        text: '我的收藏'
      },
      {
        toUrl: '/wallet',
        text: '我的钱包'
      },
      {
        toUrl: '/address',
        text: '收货地址'
      },
      {
        toUrl: '/upgrade',
        text: '升级会员'
      }],
      listDataBottom: [{
        toUrl: '/more',
        text: '更多'
      }]
    }
  },
  components: {
    headbar: Header,
    toast: Toast
  },
  methods: {
    toLogin() {
      router.push('/index/my/login');
    },
    // 注销
    loginoutEvent() {
      localStorage.setItem('username', '登录');
      localStorage.setItem('avatar', 'http://img0.imgtn.bdimg.com/it/u=3591062166,259933728&fm=21&gp=0.jpg');
      localStorage.setItem('grade', '普通会员');
      this.$forceUpdate();
      this.showToast = true;
      let _this = this;
      setTimeout(function() {
        _this.showToast = false;
        // this.$forceUpdate();
      }, 1500);
    }
  },
  created() {
    console.log('created');
  },
  mounted() {
    this.userDatas.username = localStorage.getItem('username');
    this.userDatas.avatar = localStorage.getItem('avatar');
    this.userDatas.grade = localStorage.getItem('grade');
    console.log('mounted');
  },
  beforeUpdate() {
    this.userDatas.username = localStorage.getItem('username');
    this.userDatas.avatar = localStorage.getItem('avatar');
    this.userDatas.grade = localStorage.getItem('grade');
    console.log('beforeUpdate');
  },
  updated() {
    console.log('my-updated');
  },
  destroyed() {
    console.log('destroyed');
  }
}
</script>

<style lang="css" type="text/css" scoped>
.header-bg{
  background:#D00009
}
.my-childview{
  position: fixed;
  top: 0;
  z-index: 250;
  width: 100%;
  height: 100%;
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


a{
  display: inline-block;
  width: 100%;
  height: 100%;
  color: #000;
}
#my{
  font-size: .12rem;
  background: #f5f5f5;
  height: 100%;
}
#my .header{
    padding-top: 1px;
    position: fixed;
    z-index: 100;
    top: .43rem;
    width: 100%;
    height: 1.6rem;
    background: #D00009;
}
.header p{
  color: #fff;
  text-align: center;
}
.header p:nth-child(3){
  margin-top: .1rem;
  font-size: .16rem;
}
.header p:nth-child(4){
  margin: .12rem auto;
  padding:.05rem;
  border:1px solid rgba(255,255,255,.6);
  border-radius: .5rem;
  width: .69rem;
  background: rgba(255,255,255,.1);
}
.avatar{
  position: relative;
  margin:0 auto;
  border: 2px solid rgba(255,255,255,.8);
}
.avatar,.avatar img:nth-child(1){
  width: .8rem;
  height: .8rem;
  border-radius: 100%;
}

.avatar img:nth-child(2),.avatar img:nth-child(3){
  position: absolute;
  bottom: -.03rem;
  right: .04rem;
  width: .25rem;
  height: .2rem;
}
.my-content{
  padding-top: 1.6rem;
}
ul{
  margin:.08rem 0 .09rem;
  background: #fff;
}
ul li{
  margin-left: .17rem;
  padding-left: 40px;
  border-bottom: 1px solid #f5f5f5;
  line-height: .4rem;
  font-size: .15rem;
}
ul:first-child li:nth-child(1){
  background: url('./assets/sprite.png') 0 -.28rem no-repeat,url('./assets/arrow_left.png') no-repeat 97% 50%;
}
ul:first-child li:nth-child(2){
  background: url('./assets/sprite.png') 0 -.63rem no-repeat,url('./assets/arrow_left.png') no-repeat 97% 50%;
}
ul:first-child li:nth-child(3){
  background: url('./assets/sprite.png') 0 -1.02rem no-repeat,url('./assets/arrow_left.png') no-repeat 97% 50%;
}
ul:first-child li:nth-child(4){
  background: url('./assets/sprite.png') 0 -1.35rem no-repeat,url('./assets/arrow_left.png') no-repeat 97% 50%;
}
ul:first-child li:nth-child(5){
  background: url('./assets/sprite.png') 0 -1.75rem no-repeat,url('./assets/arrow_left.png') no-repeat 97% 50%;
}
ul:first-child li:nth-child(6){
  background: url('./assets/sprite.png') 0 -2.13rem no-repeat,url('./assets/arrow_left.png') no-repeat 97% 50%;
}
ul:last-child li:nth-child(1){
  background: url('./assets/sprite.png') 0 -2.5rem no-repeat,url('./assets/arrow_left.png') no-repeat 97% 50%;
}
ul:last-child li:nth-child(2){
  background: url('./assets/sprite.png') 0 -2.88rem no-repeat,url('./assets/arrow_left.png') no-repeat 97% 50%;
}
ul li router-link{
  display: block;
  width: 100%;
  height: 100%;
  color: #000;
}
.login-mask{
  position: fixed;
  z-index: 150;
  top: 0;
  background: rgba(0,0,0,0);
  width: 100%;
  height: 100%;
}
</style>
