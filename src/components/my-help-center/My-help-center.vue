<template>
  <div id="helpCenter">
    <transition name="childtranslate">
      <router-view class="helpCenter-childview"></router-view>
    </transition>
    <div class="header">
      <img src="../my/assets/back.png" alt="" class="back" @click="back">
    	<headbar title="帮助中心" custombg="header-bg"></headbar>
    </div>
    <div class="help-center-content">
      <div class="hcc-top">
        <img :src="helpCenterImg" alt="">
        <p>{{centerMsg.time}}</p>
        <p>{{centerMsg.phone}}</p>
        <a href="tel:4000888808">一键拨打</a>
      </div>
      <div class="hcc-bottom">
        <h3>常见问题</h3>
        <ul>
          <li v-for="item in questions">
            <router-link :to="'/more/helpCenter/question/' + item">{{item}}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import Header from '../common/header/header.vue';
import router from '../../router/index.js';
import HelpCenterImg from '../my/assets/help-center.png';

export default {
  data() {
    return {
      helpCenterImg: HelpCenterImg,
      centerMsg: {
        time: '周一至周五 8:00-6:00',
        phone: '4000-8888-08'
      },
      questions: ['1.如何修改收货地址', '2.如何修改密码', '3.如何退款']
    }
  },
  components: {
    headbar: Header
  },
  methods: {
    // 返回上一页
    back() {
      router.push('/more');
    }
  }
}
</script>
<style lang="css" type="text/css" scoped>
.header-bg{
  background:#D00009
}
.helpCenter-childview{
  position: fixed;
  top: 0;
  z-index: 200;
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
/* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateX(100%);
  /*opacity: 0;*/
  /*width:0;*/
}
#helpCenter {
	padding-top: .45rem;
	font-size: .16rem;
	background: #f5f5f5;
}
a{
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
.help-center-content{
}
.hcc-top{
  margin: .4rem 0;
  text-align: center;
}
.hcc-top img{
  width: .6rem;
}
.hcc-top p{
  line-height: .3rem;
  color: #5A5B5C;
}
.hcc-top p:nth-child(3){
  font-size: .25rem;
}
.hcc-top a{
  display: inline-block;
  margin-top: .2rem;
  padding: 0 .15rem 0 .35rem;
  background: #4EA9FE url('../my/assets/ico-phone.png') no-repeat .15rem center;
  background-size: .2rem .2rem; 
  line-height: .4rem;
  color: #fff;
  border-radius: .05rem;
}
.hcc-bottom h3{
  margin-bottom: .1rem;
  color: #78797A;
}
.hcc-bottom ul{
  border-top: 1px solid #D2D4D5;
}
.hcc-bottom ul li{
  padding: 0 .1rem;
  border-bottom: 1px solid #D2D4D5;
  background: #fff url('../my/assets/arrow_left.png') no-repeat 97% 50%;
  line-height: .5rem;
}
</style>
