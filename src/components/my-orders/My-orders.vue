<template>
  <div id="orders">
    <transition name="childtranslate">
      <router-view class="orders-childview"></router-view>
    </transition>
    <transition name="fade">
    <div class="cancel-box" v-if="showCancelBox">
      <div>
        <p>确定取消订单？</p>
        <button>去意已决</button><button @click="noCancel">再考虑一下</button>
      </div>
    </div>
    </transition>
    <div class="header">
      <img src="../my/assets/back.png" alt="" class="back" @click="back">
    	<headbar title="我的订单"></headbar>
    </div>
    <div class="orders-nav">
      <span v-for="item in navDatas" @click="navClick(item)">{{item}}
        <transition name="wdisplay" mode="out-in">
          <i class="uline" v-if="avtiveNav==item"></i>
        </transition>
      </span>
    </div>
    <div class="orders-content">
    <transition name="fade" mode="out-in">
    <!-- 待付款 -->
      <ul class="no-pay" v-if="avtiveNav==navDatas[0]" key="1" @touchmove="load($event)">
        <li v-for="item in data1">
          <router-link :to="'/orders/detail/' + item.orderId + '/待付款'">
            <item :itemdata="item" title="待付款">
              <div slot="btns" class="no-pay-btns">
                <button @click.stop.prevent="cancelOrder(item.orderId)">取消订单</button>
                <button @click="toPay(item.orderId)">立即支付</button>
              </div>
            </item>
          </router-link>
        </li>
      </ul>
    <!-- 待发货 -->
      <ul class="wait-send" v-if="avtiveNav==navDatas[1]" key="2">
        <li v-for="item in data2">
          <router-link :to="'/orders/detail/' + item.orderId + '/待发货'">
            <item :itemdata="item" title="待发货"></item>
          </router-link>
        </li>
      </ul>
    <!-- 待收货 -->
      <ul class="receving" v-if="avtiveNav==navDatas[2]" key="3">
        <li v-for="item in data3">
          <router-link :to="'/orders/detail/' + item.orderId + '/待收货'">
            <item :itemdata="item" title="待收货">
              <button slot="btns" class="receving-btn">确定收货</button>  
            </item>
          </router-link>
        </li>
      </ul>
    <!-- 已完成 -->
      <ul class="finish" v-if="avtiveNav==navDatas[3]" key="4">
        <li v-for="item in data3">
          <router-link :to="'/orders/detail/' + item.orderId + '/已完成'">
            <item :itemdata="item" title="已完成">
              <div slot="btns" class="finish-btns">
                <button @click="delOrder(item.orderId)">删除</button>
                <button @click="toComment(item.orderId)">去评价</button>
              </div>  
            </item>
          </router-link>
        </li>
      </ul>
    <!-- 退货/售后 -->
      <ul class="service" v-if="avtiveNav==navDatas[4]" key="5">
        <li v-for="item in data4">
          <router-link :to="'/orders/detail/' + item.orderId + '/退货中'">
            <item :itemdata="item" title="退货中">
              <button @click="delOrder(item.orderId)" slot="btns" class="service-btns">删除</button> 
            </item>
          </router-link>
        </li>
      </ul>
    </transition>
    <span id="testspan"></span>

    </div>
  </div>
</template>
<script type="text/javascript">
import Header from '../common/header/header.vue';
import router from '../../router/index.js';
import ListItem from './order-item/Order-item.vue';
import OrderImg from '../my/assets/order-img.png';

export default {
  data() {
    return {
      avtiveNav: '待付款',
      navDatas: ['待付款', '待发货', '待收货', '已完成', '退货/售后'],
      showCancelBox: false,
      data1: [{
        orderId: 'SHYJ12552',
        imgsrc: OrderImg,
        name: '坚果',
        money: 29.5,
        num: 2
      },
      {
        orderId: 'SHYJ12555',
        imgsrc: OrderImg,
        name: '坚果',
        money: 29.5,
        num: 2
      },
      {
        orderId: 'SHYJ12552',
        imgsrc: OrderImg,
        name: '坚果',
        money: 29.5,
        num: 2
      },
      {
        orderId: 'SHYJ12555',
        imgsrc: OrderImg,
        name: '坚果',
        money: 29.5,
        num: 2
      },
      {
        orderId: 'SHYJ12552',
        imgsrc: OrderImg,
        name: '坚果',
        money: 29.5,
        num: 2
      },
      {
        orderId: 'SHYJ12555',
        imgsrc: OrderImg,
        name: '坚果',
        money: 29.5,
        num: 2
      }],
      data2: [{
        orderId: '11111111',
        imgsrc: OrderImg,
        name: '坚果',
        money: 29.5,
        num: 1
      },
      {
        orderId: '111111122',
        imgsrc: OrderImg,
        name: '坚果',
        money: 29.5,
        num: 2
      }],
      data3: [{
        orderId: '44444444',
        imgsrc: OrderImg,
        name: '坚果',
        money: 29.5,
        num: 1
      }],
      data4: [{
        orderId: '55555555',
        imgsrc: OrderImg,
        name: '坚果',
        money: 29.5,
        num: 3
      }]
    }
  },
  components: {
    headbar: Header,
    item: ListItem
  },
  methods: {
    // 返回上一页
    back() {
      router.push('/index/My');
    },
    navClick(navText) {
      this.avtiveNav = navText;
    },
    // 取消订单
    cancelOrder(orderId) {
      this.showCancelBox = true;
    },
    // 再考虑一下
    noCancel() {
      this.showCancelBox = false;
    },
    // 立即支付
    toPay(orderId) {
      alert(orderId + ':pay');
    },
    // 删除订单
    delOrder(orderId) {
      alert(orderId + ':del');
    },
    // 评价
    toComment(orderId) {
      alert(orderId + ':comment');
    },
    // 加载
    load(e) {
      console.log(document.querySelector('#testspan').pageX);
    }
  }
}
</script>
<style lang="css" type="text/css" scoped>
.orders-childview{
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
#orders {
	padding-top: .45rem;
  margin-bottom: .45rem;
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
.orders-nav{
  position: fixed;
  z-index: 200;
  top: .43rem;
  display: flex;
  justify-content: space-around;
  line-height: .45rem;
  width: 100%;
  background: #fff;
  font-size: .14rem;
}
.orders-nav span{
  position: relative;
  text-align: center;
}
.orders-content{
  margin-bottom: .5rem;
  padding-top: .51rem;
}
li{
  margin-bottom: .1rem;
}
.no-pay-btns,.finish-btns{
  position: absolute;
  right: 0;
  top: 0;
}
.no-pay-btns button,.receving-btn,.finish-btns button,.service-btns{
  padding: .07rem;
  margin-left: .1rem; 
  border: 1px solid #878889;
  background: #fff;
  border-radius: .05rem;
  outline: none;
}
.no-pay-btns button:last-child,.receving-btn,.finish-btns button:last-child,.service-btns{
  border: 1px solid #EB7E12;
  color: #EB7E12;
}
.receving-btn,.service-btns{
  position: absolute;
  right: 0;
  top: .05rem;
}
.uline{
  position: absolute;
  display: inline-block;
  bottom: 0;
  left: 0;
  width:100%;
  border:1px solid #EB7E12;
}
/*导航栏动画效果*/
.wdisplay-enter-active {
  transition: all .5s ease;
}
.wdisplay-leave-active {
  transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.wdisplay-enter, .wdisplay-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateX(.2rem);
  opacity: 0;
  width:0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s
}
.fade-enter, .fade-leave-to{
  opacity: 0
}
/*取消订单*/
.cancel-box{
  position: fixed;
  z-index: 3000;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.7);
}
.cancel-box>div{
  position: relative;
  margin: 2rem auto;
  padding: .2rem;
  width: 2rem;
  background: #fff;
  text-align: center;
  border-radius: .1rem;
}
.cancel-box>div button{
  margin: .3rem .05rem 0;
  padding: 0 .1rem;
  outline: none;
  background: #71747A;
  border:none;
  line-height: .3rem;
  border-radius: .05rem;
  color: #d0d0d0;
  font-size: .14rem;
}
.cancel-box>div button:last-child{
  background: #DE1F33;
}
</style>
