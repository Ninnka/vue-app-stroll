<template>
  <div id="orders" @touchmove="load($event)">
    <transition name="childtranslate">
      <router-view class="orders-childview"></router-view>
    </transition>
    <transition name="fade">
    <alert-box :content="alertText" v-if="showCancelBox" class="cancel-box">
      <button slot="btn1">{{btnText1}}</button><button slot="btn2" @click.stop.prevent="noCancel">{{btnText2}}</button>
    </alert-box>
    </transition>
    <div class="header">
      <img src="../my/assets/back.png" alt="" class="back" @click="back">
    	<headbar title="我的订单"  custombg="header-bg"></headbar>
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
      <ul class="no-pay" v-if="avtiveNav==navDatas[0]" key="1">
        <li v-for="item in data1">
          <router-link :to="'/orders/detail/' + item.orderId + '/待付款'">
            <item :itemdata="item" title="待付款">
              <div slot="btns" class="no-pay-btns">
                <button @click.stop.prevent="cancelOrder(item.orderId)">取消订单</button>
                <button @click.stop.prevent="toPay(item.orderId)">立即支付</button>
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
              <button slot="btns" class="receving-btn" @click.stop.prevent="recived">确定收货</button>  
            </item>
          </router-link>
        </li>
      </ul>
    <!-- 已完成 -->
      <ul class="finish" v-if="avtiveNav==navDatas[3]" key="4">
        <li v-for="item in data4">
          <router-link :to="'/orders/detail/' + item.orderId + '/已完成'">
            <item :itemdata="item" title="已完成">
              <div slot="btns" class="finish-btns">
                <button @click.stop.prevent="delOrder(item.orderId)">删除</button>
                <button @click.stop.prevent="toComment(item.orderId)">{{item.evaluation==''?'去评价':'我的评价'}}</button>
              </div>  
            </item>
          </router-link>
        </li>
      </ul>
    <!-- 退货/售后 -->
      <ul class="service" v-if="avtiveNav==navDatas[4]" key="5">
        <li v-for="item in data5">
          <router-link :to="'/orders/detail/' + item.orderId + '/退货中'">
            <item :itemdata="item" title="退货中">
              <button @click.stop.prevent="delOrder(item.orderId)" slot="btns" class="service-btns">删除</button> 
            </item>
          </router-link>
        </li>
      </ul>
    </transition>
    <div class="spinningCircle" v-if="showSpinning"></div>
    </div>
  </div>
</template>
<script type="text/javascript">
import Header from '../common/header/header.vue';
import router from '../../router/index.js';
import ListItem from './order-item/Order-item.vue';
import OrderImg from '../my/assets/order-img.png';
import Alert from '../common/alert/Alert.vue';

export default {
  data() {
    return {
      alertText: '确定取消订单？',
      btnText1: '去意已决',
      btnText2: '再考虑一下',
      avtiveNav: '待付款',
      navDatas: ['待付款', '待发货', '待收货', '已完成', '退货/售后'],
      showCancelBox: false,
      canLoad: true,
      showSpinning: true,
      screenHeight: window.screen.height,
      data1: [{
        orderId: 'SHYJ12552',
        imgsrc: OrderImg,
        name: '坚果',
        price: 29.5,
        num: 2
      },
      {
        orderId: 'SHYJ125885',
        imgsrc: OrderImg,
        name: '坚果',
        price: 29.5,
        num: 2
      },
      {
        orderId: 'SHYJ12582',
        imgsrc: OrderImg,
        name: '坚果',
        price: 29.5,
        num: 2
      },
      {
        orderId: 'SHYJ12555',
        imgsrc: OrderImg,
        name: '坚果',
        price: 29.5,
        num: 2
      }],
      data2: [{
        orderId: '11111111',
        imgsrc: OrderImg,
        name: '坚果',
        price: 29.5,
        num: 1
      },
      {
        orderId: '111111122',
        imgsrc: OrderImg,
        name: '坚果',
        price: 29.5,
        num: 2
      }],
      data3: [{
        orderId: '44444444',
        imgsrc: OrderImg,
        name: '坚果',
        price: 29.5,
        num: 1,
        evaluation: ''
      },
      {
        orderId: '99999999',
        imgsrc: OrderImg,
        name: '坚果',
        price: 29.5,
        num: 1,
        evaluation: '好难吃!'
      }],
      data4: [{
        orderId: '555878755',
        imgsrc: OrderImg,
        name: '坚果',
        price: 29.5,
        num: 3
      }],
      data5: [{
        orderId: '55555555',
        imgsrc: OrderImg,
        name: '坚果',
        price: 29.5,
        num: 3
      }]
    }
  },
  components: {
    headbar: Header,
    item: ListItem,
    'alert-box': Alert
  },
  methods: {
    // 返回上一页
    back() {
      router.push('/index/My');
    },
    navClick(navText) {
      this.avtiveNav = navText;
      let tempObj = [];
      switch (this.avtiveNav) {
        case '待付款': {
          tempObj = this.data1;
          break;
        }
        case '待发货': {
          tempObj = this.data2;
          break;
        }
        case '待收货': {
          tempObj = this.data3;
          break;
        }
        case '已完成': {
          tempObj = this.data4;
          break;
        }
        case '退货/售后': {
          tempObj = this.data5;
          break;
        }
      }
      if (tempObj.length <= 3) {
        this.showSpinning = false;
      } else {
        this.showSpinning = true;
      }
    },
    // 取消订单
    cancelOrder(orderId) {
      this.alertText = '确定取消订单？';
      this.btnText1 = '去意已决';
      this.btnText2 = '再考虑一下';
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
      this.alertText = '确定删除订单？';
      this.btnText1 = '取消';
      this.btnText2 = '确定';
      this.showCancelBox = true;
    },
    // 确定收货
    recived() {
      this.alertText = '确定收货？';
      this.btnText1 = '取消';
      this.btnText2 = '确定';
      this.showCancelBox = true;
    },
    // 评价
    toComment(orderId) {
      router.push('/comment/orderId');
    },
    // 懒加载
    load(e) {
      let loadingTop = document.querySelector('.spinningCircle').offsetTop;
      let orderSTop = document.querySelector('#orders').scrollTop;
      if (loadingTop <= orderSTop + this.screenHeight + 100 && this.canLoad) {
        let _this = this;
        this.canLoad = false;
        setTimeout(function() {
          let addData = [{
            orderId: 'SHYJ12552',
            imgsrc: OrderImg,
            name: '坚果',
            price: 29.5,
            num: 2
          },
          {
            orderId: 'SHYJ12555',
            imgsrc: OrderImg,
            name: '坚果',
            price: 29.5,
            num: 2
          },
          {
            orderId: 'SHYJ12552',
            imgsrc: OrderImg,
            name: '坚果',
            price: 29.5,
            num: 2
          },
          {
            orderId: 'SHYJ12555',
            imgsrc: OrderImg,
            name: '坚果',
            price: 29.5,
            num: 2
          }]
          switch (_this.avtiveNav) {
            case '待付款': {
              _this.data1 = _this.data1.concat(addData);
              break;
            }
            case '待发货': {
              _this.data2 = _this.data2.concat(addData);
              break;
            }
            case '待收货': {
              _this.data3 = _this.data3.concat(addData);
              break;
            }
            case '已完成': {
              _this.data4 = _this.data4.concat(addData);
              break;
            }
            case '退货/售后': {
              _this.data5 = _this.data5.concat(addData);
              break;
            }
          }
          _this.canLoad = true;
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
.orders-childview{
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
#orders {
  overflow-y: scroll;
	padding: .45rem 0 .8rem;
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
/*取消订单的按钮*/
.cancel-box button{
  margin: .3rem .05rem 0;
  padding: .05rem .2rem;
  outline: none;
  background: rgba(0,0,0,.4);
  border:none;
  line-height: .3rem;
  border-radius: .05rem;
  color: #f0f0f0;
  font-size: .16rem;
}
.cancel-box button:last-child{
  background: #DE1F33;
}



.spinningCircle {
     margin:.2rem auto;
     height: 30px;
     width: 30px;
     border-radius: 50%;
     border: 4px solid rgba(255,255,255,0);
     border-top-color: 4px solid #7fc4d1;
     border-right-color: 4px solid #7fc4d1;
     -webkit-animation: single2 4s infinite linear;
     animation: single2 4s infinite linear;
  }

  @-webkit-keyframes single2 {
     0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
        border-top-color: #7fc4d1;
        border-right-color: #7fc4d1;
     }
     50% {
        border-top-color: #1f4f58;
        border-right-color: #1f4f58;
     }
     100% {
        -webkit-transform: rotate(720deg);
        transform: rotate(720deg);
        border-top-color: #7fc4d1;
        border-right-color: #7fc4d1;
     }
  }

  @keyframes single2 {
     0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
        border-top-color: #7fc4d1;
        border-right-color: #7fc4d1;
     }
     50% {
        border-top-color: #1f4f58;
        border-right-color: #1f4f58;
     }
     100% {
        -webkit-transform: rotate(720deg);
        transform: rotate(720deg);
        border-top-color: #7fc4d1;
        border-right-color: #7fc4d1;
     }
  }
</style>
