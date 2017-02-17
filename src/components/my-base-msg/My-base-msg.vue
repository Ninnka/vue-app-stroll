<template>
  <div id="base-msg">
    <transition name="childtranslate">
      <router-view class="base-msg-childview"></router-view>
    </transition>
    <div class="header">
      <img src="../my/assets/back.png" alt="" class="back" @click="back">
    	<headbar title="基本信息"  custombg="header-bg"></headbar>
    </div>
    <div class="base-msg-content">
    	<ul> 
        <li class="avatar">{{avatar.text}} <span><input type="file" accept="image/*"><img :src="avatar.imgsrc" alt=""></span></li>
        <li v-for="item in listDataTop">
        <router-link :to="item.toUrl">
          {{item.listText}}
          <img :src="item.imgsrc" alt="" v-if="item.imgsrc"><span v-if="item.value">{{item.value}}</span>
        </router-link>
        </li>
      </ul>
      <ul> 
        <li v-for="item in listDataBottom">
          <router-link :to="item.toUrl">
            {{item.listText}}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script type="text/javascript">
import Header from '../common/header/header.vue';
import router from '../../router/index.js';
import AvatarValue from '../my/assets/avatar.png';
import GradeVip from '../my/assets/grade_vip.png';

export default {
  data() {
    return {
      avatar: {
        text: '头像',
        imgsrc: AvatarValue
      },
      listDataTop: [{
        listText: '姓名',
        value: '小明',
        toUrl: '/basemsg/editName'
      },
      {
        listText: '会员标志',
        imgsrc: GradeVip,
        toUrl: ''
      },
      {
        listText: '联系方式',
        value: '136****1245',
        toUrl: '/basemsg/editPhone'
      }],
      listDataBottom: [{
        listText: '修改密码',
        toUrl: '/basemsg/editPassword'
      },
      {
        listText: '修改钱包密码',
        toUrl: '/basemsg/editWalletPassword'
      },
      {
        listText: '我能供应',
        toUrl: '/basemsg/supplyEnergy'
      }],
      userData: {
        username: '小明',
        avatar: AvatarValue,
        grade: 'VIP会员',
        phone: '136****1245'
      }
    }
  },
  components: {
    headbar: Header
  },
  methods: {
    // 返回上一页
    back() {
      router.push('/index/My');
    }
  }
}
</script>
<style lang="css" type="text/css" scoped>
.header-bg{
  background:#D00009
}
.base-msg-childview{
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
#base-msg {
	padding-top: .45rem;
	font-size: .16rem;
	background: #f5f5f5;
}
a{
  display: inline-block;
  width: 100%;
  height: 100%;
	color: #000;
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
  margin:.08rem 0 .09rem;
  background: #fff;
  border-top: 1px solid #e0e0e0;
}
ul li{
  position: relative;
  padding-left: .17rem;
  border-bottom: 1px solid #e0e0e0;
  background: url('../my/assets/arrow_left.png') no-repeat 97% 50%;
  background-size: .08rem .15rem;
  line-height: .5rem;
  font-size: .15rem;
}
.avatar{
  position: relative;
  line-height: .68rem;
}
.avatar span{
  display: inline-block;
  position: absolute;
  right: 0;
  width: .6rem;
  height: .6rem;
  border-radius: 100%;
}
.avatar span img,.avatar span input{
  position: absolute;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
}
.avatar span img{
  left:-.3rem;
  top: -.05rem;
}
.avatar span input{
  z-index: 200;
  opacity: 0;
}
ul li router-link{
  display: block;
  width: 100%;
  height: 100%;
  color: #000;
}
ul li span{
  margin:.05rem .3rem;
  float: right;
}
ul li img{
  margin:.05rem .3rem;
  float: right;
  width: .58rem;
  height: .58rem;
  vertical-align: middle;
  border-radius: 100%;
}
ul li:nth-child(3) img{
  position: absolute;
  right: 0;
  top:.07rem;
  width: .28rem;
  height: .28rem;
  vertical-align: middle;
}
</style>
