<template>
  <div id="orderdetail" @touchmove.stop="">
    <pay-box :money="totalMoney" :showPay="showPay" @success="paySuccess" @paycancel="cancelPay">
    </pay-box>
    <alert-box content="确定收货" v-if="showCancelBox" class="cancel-box">
      <button slot="btn1" @click="cancelRecived">取消</button><button slot="btn2" @click.stop.prevent="recivedGood">确定</button>
    </alert-box>
    <transition name="childtranslate">
      <router-view class="orderdetail-childview"></router-view>
    </transition>
    <transition name="fade">
      <div class="reject-box" v-if="showRejectBox">
        <div>
          <h3>申请退款 <span @click="showRejectBox=!showRejectBox">x</span></h3>
          <div>*退货原因：
            <select name="" class="reason-box">
              <option v-for="item in reason" :value="item">{{item}}</option>
            </select>
            <span>*选项必填</span>
          </div>
          <div>*退款金额：<input type="text"></div>
          <div>&nbsp;退款说明： <textarea name="" id="" cols="33" rows="3"></textarea></div>
          <div>&nbsp;上传凭证：
            <span>请选择要上传的图片<input type="file" accept="image/*"></span>
            <p>每张图片大小不超过5M，最多3张。</p>
            <p>支持JPG,PNG,BMP格式</p>
            <div class="pic-box">
              <img src="http://img2.imgtn.bdimg.com/it/u=1541500300,316479748&fm=21&gp=0.jpg" alt="">
              <img src="http://img2.imgtn.bdimg.com/it/u=1541500300,316479748&fm=21&gp=0.jpg" alt="">
            </div>
          </div>
          <button>提交</button>
        </div>
      </div>
    </transition>
    <div class="header">
      <img src="../my/assets/back.png" alt="" class="back" @click="back">
    	<headbar title="订单详情"  custombg="header-bg"></headbar>
    </div>
    <div class="orderdetail-content">
      <detailcontent :kind="tag" :orderDatas="orderDatas">
        <p slot="rejectGoods" class="reject-goods" v-if="tag=='已完成'" @click="showRejectBox=!showRejectBox">申请退货</p>
        <button slot="btn" v-if="tag=='待付款'" class="common-btn" @click="toPay">立即支付</button>
        <button slot="btn" v-if="tag=='待收货'" class="common-btn" @click="sureRecived">确认收货</button>
        <button slot="btn" v-if="tag=='已完成'" class="common-btn" @click="toComment">{{orderDatas.commented?'我的评价':'去评价'}}</button>
      </detailcontent>
    </div>
  </div>
</template>
<script>
import Header from '../common/header/Header.vue';
import router from '../../router/index.js';
import ContentComponent from './My-order-detail-component.vue';
import Alert from '../common/alert/Alert.vue';
import PayBox from '../common/pay-box/Pay-box.vue';

export default {
  data() {
    return {
      showPay: false,
      showCancelBox: false,
      showRejectBox: false,
      totalMoney: 0,
      reason: ['请选择退货原因', '收到商品破损', '商品错发/漏发', '收到商品描述不符', '商品质量问题'],
      tag: this.$route.params.tag,
      orderDatas: {
        orderId: 'SKYJ12525441',
        contactar: '小明',
        phone: '13562021254',
        address: '广州市天河区TIT广场',
        createTime: '2015-10-02 12:20',
        payTime: '2015-10-02 12:20',
        reciveTime: '2015-10-02 12:20',
        rejectTime: '2015-10-02 12:20',
        logistics: '申通物流 5221255142',
        fare: 10,
        remark: '',
        commented: false,
        goods: [{
          imgsrc: 'http://img0.imgtn.bdimg.com/it/u=3591062166,259933728&fm=21&gp=0.jpg',
          name: '坚果',
          price: 29.5,
          num: 2,
          specification: '1盒6片'
        },
        {
          imgsrc: 'http://img0.imgtn.bdimg.com/it/u=3591062166,259933728&fm=21&gp=0.jpg',
          name: '坚果',
          price: 29.5,
          num: 2,
          specification: '1盒6片'
        }]
      }
    }
  },
  components: {
    headbar: Header,
    detailcontent: ContentComponent,
    'alert-box': Alert,
    'pay-box': PayBox
  },
  methods: {
    // 返回上一页
    back() {
      router.go(-1);
    },
    toComment() {
      router.push('/comment/12');
    },
    cancelPay() {
      this.showPay = false;
    },
    paySuccess() {
      this.showPay = true;
    },
    cancelRecived() {
      this.showCancelBox = false;
    },
    recivedGood() {
      this.showCancelBox = false;
    },
    sureRecived() {
      this.showCancelBox = true;
    },
    toPay() {
      for (let i = 0; i < this.orderDatas.goods.length; i++) {
        this.totalMoney = this.totalMoney + this.orderDatas.goods[i].price * this.orderDatas.goods[i].num;
      }
      this.totalMoney += this.orderDatas.fare;
      this.showPay = true;
      router.go(-1);
    }
  }
}
</script>
<style lang="css" type="text/css" scoped>
.header-bg{
  background:#D00009
}
.orderdetail-childview{
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
#orderdetail {
	padding-top: .44rem;
	font-size: .16rem;
	background: #f5f5f5;
  overflow: scroll;
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
.common-btn{
  margin:.2rem auto;
  display: block;
  width: 80%;
  line-height: .3rem;
  background: #DF780B;
  border:none;
  border-radius: .05rem;
  color: #fff;
  font-size: .16rem;
  outline: none;
}
.orderdetail-content{
  overflow-y: scroll;
}
.reject-goods{
  padding:0 .1rem;
  position: absolute;
  top:.04rem;
  right: .6rem;
  line-height: .3rem;
  border:1px solid #A3A4A5;
  border-radius: .05rem;
}
.reject-box{
  position: fixed;
  top: 0;
  z-index: 3000;
  width: 100%;
  background: rgba(0,0,0,.5);
  height: 100%;
}
.reject-box>div{
  margin:1rem auto;
  width: 90%;
  background: #fff;
}
.reject-box>div h3{
  padding:0 .1rem;
  line-height: .3rem;
  background: #EFEFEF;
}
.reject-box>div h3 span{
  float:right;
  color: #7C7C7C;
}
.reject-box>div div{
  margin: .1rem .1rem .2rem;
}
.reason-box{
  padding:.05rem 0 .05rem .3rem;
  border:1px solid #e0e0e0;
  outline: none;
}
.reject-box>div div:nth-child(2) span{
  float: right;
  font-size: .12rem;
  line-height: .3rem;
}
.reject-box>div div:nth-child(3) input{
  padding:.05rem;
  outline: none;
  margin-left: .03rem;
  border:1px solid #e0e0e0;
  line-height: .23rem;
  border-radius: .05rem;
}
.reject-box>div div:nth-child(4){
  vertical-align: top;
}
.reject-box>div div:nth-child(4) textarea{
  padding:.05rem;
  vertical-align: top;
  border:1px solid #e0e0e0;
  border-radius: .05rem;
  outline: none;
}
.reject-box>div div:nth-child(5) span{
  position: relative;
  padding: 0 .1rem;
  display: inline-block;
  border:1px solid #e0e0e0;
  font-size: .12rem;
  line-height: .25rem;
  border-radius: .05rem;
  background: #F6F6F6;
}
.reject-box>div div:nth-child(5) input{
  display: block;
  position: absolute;
  z-index: 100;
  width: 100%;
  height: 100%;
  opacity: 0;
  background: red;
}
.reject-box>div div:nth-child(5) p{
  margin:.1rem 0 0 .82rem;
  font-size: .12rem;
}
.pic-box img{
  width: .7rem;
  height: .7rem;
}
.reject-box button{
  margin: .1rem ;
  padding:0 .2rem;
  background: #EC821C;
  line-height: .25rem;
  border:none;
  outline: none;
  border-radius: .05rem;
  color: #fff;
  letter-spacing: .05rem;
}
.cancel-box button{
  background: rgba(0,0,0,.3);
  padding: .1rem .15rem;
  width: 40%;
  border: none;
  border-radius: .05rem;
  color: #fff;
  outline: none;
}
.cancel-box button:last-child{
  background: #FF5636;
}
</style>
