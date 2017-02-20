<template lang="html">
  <div class="fullpage order-content position-absolute">
    <head-bar title="确认下单" :custombg="custombg"></head-bar>
    <i class="icon iconfont icon-backward-white-copy fixed icon-in-header backward" @click="backward"></i>
    <div class="order-main">
      <div class="address" @click="toaddress">
        <p><span>刘晓心</span><span>135620212541</span></p>
        <p><span class="default">[默认]</span><span>广州市天河区东圃时代TIT广场</span></p>
        <span></span>
      </div>
      <ul class="order-detail list">
        <li>购买商品</li>
        <li v-for="data in goodsItems" class="carItem orderList">
          <div>
            <img :src="data.imgsrc" alt="">
            <div>
              <p>{{data.title}}</p>
              <p>规格：{{data.spec}}</p>
              <p>
                <span>￥{{data.price}}</span>
                <span>x {{data.amount}}</span>
              </p>
            </div>
          </div>
        </li>
        <li class="fare"><p>运费: <span>￥10</span></p></li>
        <li><p>备注: <input type="text"></p></li>
      </ul>
      <ul class="pay-type list">
        <li>支付方式</li>
        <li><span></span>我的钱包 <input type="radio" v-model="pick" value="my" name="payType" id="mypackage"/><label for="mypackage" :class="pick=='my'?'selectedType':''"></label></li>
        <li><span></span>支付宝 <input type="radio" name="payType" id="zfb" v-model="pick" value="zfb"/><label for="zfb" :class="pick=='zfb'?'selectedType':''"></label></li>
        <li><span></span>微信支付 <input type="radio" name="payType" id="wx" v-model="pick" value="wx"/><label for="wx" :class="pick=='wx'?'selectedType':''"></label></li>
      </ul>
    </div>
    <transition name="fade">
      <div class="pwd-wrong" v-if="pwd_wrong_bol">密码错误</div>
    </transition>
    <div class="order-foot">
      <span>合计: <span>￥{{totalMoney}}</span></span>
      <button @click="payNow">立即支付</button>
    </div>
    <transition name="fade">
    <div class="pay-mask" v-if="mask_bol" @touchmove="show">
      <div class="pay-wrap">
        <p>钱包密码</p>
        <p>￥{{totalMoney}}</p>
        <p>
          <input id="pay-password" type="password" class="pay-password" maxlength="6" v-model="password">
          <label for="pay-password"><span v-for="i in password"></span></label>
        </p>
        <p>
          <button class="pay-cancal" @click="payCancal">取消</button>
          <button class="pay-refine" @click="paySuccess">付款</button>
        </p>
      </div>
    </div>
    </transition>
    <transition name="slide-fade">
      <router-view class="content-router-view position-absolute my-address border-box"></router-view>
    </transition>
  </div>
</template>

<script>
import router from '../../../router';

import Header from '../../common/header/Header.vue';

export default {
  data() {
    return {
      custombg: 'order-headbar-bg',
      mask_bol: false,
      password: '',
      pwd_wrong_bol: false,
      pick: 'my',
      fare: 10,
      goodsItems: [],
      addressRoute: ''
    }
  },
  methods: {
    backward() {
      router.go(-1);
    },
    show(event) {
      event.preventDefault();
    },
    payNow() {
      this.mask_bol = true;
    },
    payCancal() {
      this.password = '';
      this.mask_bol = false;
    },
    toaddress() {
      router.push({
        name: this.addressRoute,
        params: {
          from: 'choose',
          addaddressRoute: 'add-address'
        }
      })
    },
    paySuccess() {
      if (this.password === '666666') {
        router.push({
          name: 'pay-success'
        })
      } else {
        this.pwd_wrong_bol = true;
        setTimeout(() => {
          this.pwd_wrong_bol = false;
        }, 2000)
      }
    }
  },
  created() {
    // console.log('获取的个数=> ' + this.$route.params)
    // console.log('在列表中有得个数=> ' + this.goodsItems)
    if (this.$route.params.goodsOrder) {
      this.goodsItems = [];
      this.goodsItems = this.$route.params.goodsOrder;
    }
    this.addressRoute = this.$route.params.addressRoute;
  },
  components: {
    headBar: Header
  },
  computed: {
    totalMoney: {
      get() {
        var total = 0;
        this.goodsItems.map(function (item) {
          total += item.price * item.amount;
        })
        return (total + this.fare).toFixed(2)
      }
    }
  }
}
</script>

<style lang="css">
.order-content{
  top: 0;
  left: 0;
  width: 100%;
  font-size: .16rem;
  z-index: 201;
  box-sizing: border-box;
  padding-top: .44rem;
  padding-bottom: .55rem;
}
.order-headbar-bg{
  background: #d81e06;
}
.backward {
  color: white;
  height: .44rem;
  left: .1rem;
  line-height: .44rem;
  text-align: center;
  top: 0;
  width: .20rem;
  z-index: 100;
}
.icon-in-header {
  font-size: .3rem;
}
.my-address{
  z-index: 205;
  height: 100%;
  overflow: scroll;
}
.order-main{
  background: #f1f1f1;
  overflow: scroll;
  height: 100%;
}
.address{
  position: relative;
  height: .84rem;
  border-bottom: 1px solid #e1e1e1;
  margin-bottom: .13rem;
  color: #555;
  font-size: .15rem;
  background: white;
}
.address p{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.address p:nth-child(1){
  padding: .17rem .3rem .17rem .1rem;
  font-size: .15rem;
  overflow: hidden;
  text-overflow: esplisce;
}
.address p:nth-child(1) span{
  padding-right: .15rem;
}
.address p:nth-child(2){
  padding-left: .1rem;
  padding-right: .3rem;
}
.address p:nth-child(2) .default{
  color: #f29004;
  padding-right: .07rem;
}
.address>span{
  position: absolute;
  width: .1rem;
  height: .3rem;
  top: .3rem;
  right: .1rem;
  color: #bbb;
  background-image: url(../images/forward.png);
  background-size: 100%;
  background-repeat: no-repeat;
}
.list{
  background: white;
  margin-bottom: .13rem;
  border-top: 1px solid #e1e1e1;
  border-bottom: 1px solid #e1e1e1;
}
.list li{
  padding: .15rem 0;
  margin: 0 .1rem;
  border-bottom: 1px solid #e1e1e1;
  color: #777;
  font-size: .14rem;
}
.list li:last-child{
  border-bottom: none;
}
.order-detail li:nth-child(1){
  padding: .13rem 0;
}
.order-detail .fare,.order-detail>li:last-child{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.order-detail .fare p span{
  float: right;
  padding-right: .05rem;
}
.order-detail>li:last-child p{
  border: none;
  outline: none;
  padding: 0;
  width: 3.1rem;
  font-size: 14px;
  vertical-align: middle;
}
.order-detail>li:last-child p input{
  outline: none;
  border: none;
  padding: 0;
  width: 2.9rem;
  font-size: .15rem;
  margin-left: .1rem;
  overflow: hidden;
  text-overflow: ellipsis;
}
.orderList>div>div{
  width: 2.65rem;
}
.pay-type li{
  padding: .11rem 0;
  color: #666;
  font-size: .15rem;
}
.pay-type li:nth-child(1){
  padding: .13rem 0;
  color: #777;
  font-size: .14rem;
}
.pay-type li input{
  display: none;
}
.pay-type li label{
  width: .15rem;
  height: .15rem;
  display: inline-block;
  border: 1px solid #ddd;
  float: right;
  margin-top: .07rem;
  border-radius: 100%;
}
.pay-type li .selectedType{
  background: url(../images/selected.png);
  background-size: 100% 100%;
  border: none;
}
.pay-type li>span{
  display: inline-block;
  margin-right: .15rem;
  vertical-align: middle;
  width: .33rem;
  height: .33rem;
  background-size: 100%;
  background-repeat: no-repeat;
}
.pay-type li:nth-child(2)>span{
  background-image: url(../images/package.png);
}
.pay-type li:nth-child(3)>span{
  background-image: url(../images/zhifubao.png);
}
.pay-type li:nth-child(4)>span{
  background-image: url(../images/weixin.png);
}
.order-foot{
  position: fixed;
  bottom: 0;
  height: .54rem;
  line-height: .54rem;
  background: white;
  width: 100%;
  border-top: 1px solid #e1e1e1;
  z-index: 201;
}
.order-foot>span{
  display: inline-block;
  height: .54rem;
  line-height: .54rem;
  padding: 0 .1rem;
  color: #666;
}
.order-foot>span>span{
  color: #de0000;
  font-size: .20rem;
}
.order-foot button{
  float: right;
  margin: .09rem .1rem 0 0;
  background: #ee4147;
  color: white;
  font-size: .17rem;
  width: 1.125rem;
  height: .36rem;
  outline: none;
  border: none;
  border-radius: 5px;
}
.pay-mask{
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.3);
  z-index: 202;
}
.pay-wrap{
  position: absolute;
  top: 1.8rem;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 3.33rem;
  height: 2.42rem;
  background: white;
  border-radius: 10px;
  text-align: center;
}
.pay-wrap p:first-child{
  height: .4rem;
  line-height: .4rem;
  font-size: .16rem;
}
.pay-wrap p:nth-child(2){
  height: .66rem;
  line-height: .66rem;
  font-size: .24rem;
}
.pay-wrap p:nth-child(3){
  padding: .06rem .14rem;
  font-size: 0;
}
.pay-wrap p:nth-child(3) input{
  border: none;
  padding: 0;
  width: 0;
  height: 0;
}
.pay-wrap p:nth-child(3) label{
  display: inline-block;
  width: 3rem;
  height: .5rem;
  font-size: .16rem;
  background: url(../images/password-bg.png) no-repeat;
  background-size: 100% 100%;
  line-height: .5rem;
  text-align: left;
  overflow: hidden;
}
.pay-wrap p:nth-child(3) label span{
  display: inline-block;
  height: .15rem;
  background: black;
  width: .15rem;
  border-radius: 100%;
  margin: 0 .175rem;
}
.pay-wrap p:nth-child(4){
  margin-top: .15rem;
  padding-left: .14rem;
  padding-right: .14rem;
  text-align: justify;
}
.pay-wrap p:nth-child(4):after{
  width: 1.27rem;
  height: 0;
  margin: 0;
  display: inline-block;
  overflow: hidden;
  content: '';
}
.pay-wrap p:nth-child(4) button{
  width: 1.27rem;
  height: .42rem;
  font-size: .18rem;
  outline: none;
  border-radius: 5px;
}
.pay-wrap>p:nth-child(4) .pay-cancal{
  border: 1px solid #ddd;
  background: #f0f0f0;
}
.pay-wrap>p:nth-child(4) .pay-refine{
  background: #f29004;
  border: none;
  color: white;
}
.pwd-wrong{
  width: 1.3rem;
  height: .5rem;
  position: absolute;
  top: 2.2rem;
  left: 0;
  right: 0;
  margin: 0 auto;
  background: rgba(0,0,0,0.7);
  color: white;
  font-size: .17rem;
  line-height: .5rem;
  text-align: center;
  z-index: 203;
  border-radius: 10px;
}
#testid{
  height: 100%;
  overflow-y:scroll;
}
</style>
