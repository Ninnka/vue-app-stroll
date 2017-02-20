<template lang="html">
  <div class="pay-box">
    <transition name="fade">
    <div class="pay-mask" v-if="showPay">
      <div class="pay-wrap" v-if="beforePay">
        <p>钱包密码</p>
        <p>￥{{money}}</p>
        <p>
          <input id="pay-password" type="password" class="pay-password" maxlength="6" v-model="password">
          <label for="pay-password"><span v-for="i in password"></span></label>
        </p>
        <p>
          <button class="pay-cancal" @click="cancel">取消</button>
          <button class="pay-refine" @click="pay">付款</button>
        </p>
      </div>
      <div class="paying-box" v-if="paying">
         <div class="mul7">
          <div class="mul7circ m7c1"></div>
          <div class="mul7circ m7c2"></div>
          <div class="mul7circ m7c3"></div>
          <div class="mul7circ m7c4"></div>
          <div class="mul7circ m7c5"></div>
          <div class="mul7circ m7c6"></div>
          <div class="mul7circ m7c7"></div>
          <div class="mul7circ m7c8"></div>
          <div class="mul7circ m7c9"></div>
          <div class="mul7circ m7c10"></div>
          <div class="mul7circ m7c11"></div>
          <div class="mul7circ m7c12"></div>
        </div>
        <p>正在支付...</p>
      </div>
      <div class="pay-result" v-if="payResult">
        <img :src="rightimg" alt="">
        <p>支付成功!</p>
      </div>
    </div>
    </transition>
    <toast :content="tip" :show="showToast"></toast>
  </div>
</template>

<script>
import Rightimg from './images/right.png';
import Toast from '../toast/Toast.vue';

export default {
  props: [
    'money',
    'showPay'
  ],
  data() {
    return {
      tip: '请输入密码',
      password: '',
      beforePay: true,
      paying: false,
      payResult: false,
      rightimg: Rightimg,
      showToast: false
    }
  },
  components: {
    toast: Toast
  },
  methods: {
    pay() {
      let _this = this;
      if (this.password.length < 6) {
        this.showToast = true;
        setTimeout(function() {
          _this.showToast = false;
        }, 1500);
      } else {
        this.beforePay = false;
        this.paying = true;
        setTimeout(function() {
          _this.paying = false;
          _this.payResult = true;
          let that = _this;
          setTimeout(function() {
            that.beforePay = true;
            that.payResult = false;
            that.password = '';
            that.$emit('success');
          }, 1000);
        }, 1000);
      }
    },
    cancel() {
      this.password = '';
      this.$emit('paycancel');
    }
  }
}
</script>

<style lang="css" type="text/css" scoped>
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
  background: url(../../shoppingcar/images/password-bg.png) no-repeat;
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


.paying-box,.pay-result{
  position: absolute;
  left:25%;
  top:30%;
  padding-top: .2rem;
  width: 50%;
  background: #fff;
  text-align: center;
  border-radius: .1rem;
}
.paying-box>p,.pay-result p{
  font-size: .2rem;
  line-height: .8rem;
}
.mul7 {
  margin: 0 auto;
  height: 70px;
  width: 70px;
  position: relative;
}
      
   .mul7circ {
      width: 70px;
      height: 70px;
      position: absolute;
   } 
     
   .mul7circ:before {
      content: '';
      display: block;
      margin: 0 auto;
      width: 10px;
      height: 10px;
      background-color: #333;
      border-radius: 100%;
      -webkit-animation: multiple7Animation 1.2s infinite ease-in-out both;
      animation: multiple7Animation 1.2s infinite ease-in-out both;
   } 
     
   /* Circle Colors */
   .m7c12:before {
      background-color: #F5D76E;
   }
   .m7c1:before, .m7c11:before {
      background-color: #f8ba72;
   }
   .m7c2:before, .m7c10:before {
      background-color: #EB9532;
   }
   .m7c3:before, .m7c9:before {
      background-color: #F27935;
   }
   .m7c4:before, .m7c8:before {
      background-color: #EC644B;
   }
   .m7c5:before, .m7c7:before {
      background-color: #EF4836;
   }
   .m7c6:before {
      background-color: #C0392B;
   }
     
   /* Rotate circles */
   .m7c1 {
      -webkit-transform: rotate(30deg);
      transform: rotate(30deg);
   }
   .m7c2 {
      -webkit-transform: rotate(60deg);
      transform: rotate(60deg);
   }
   .m7c3 {
      -webkit-transform: rotate(90deg);
      transform: rotate(90deg);
   }
   .m7c4 {
      -webkit-transform: rotate(120deg);
      transform: rotate(120deg);
   }
   .m7c5 {
      -webkit-transform: rotate(150deg);
      transform: rotate(150deg);
   }
   .m7c6 {
      -webkit-transform: rotate(180deg);
      transform: rotate(180deg);
   }
   .m7c7 {
      -webkit-transform: rotate(210deg);
      transform: rotate(210deg);
   }
   .m7c8 {
      -webkit-transform: rotate(240deg);
      transform: rotate(240deg);
   }
   .m7c9 {
      -webkit-transform: rotate(270deg);
      transform: rotate(270deg);
   }
   .m7c10 {
      -webkit-transform: rotate(300deg);
      transform: rotate(300deg);
   }
   .m7c11 {
      -webkit-transform: rotate(330deg);
      transform: rotate(330deg);
   }
     
   /* Delay the Animation */
   .m7c2:before {
      -webkit-animation-delay: -1.1s;
      animation-delay: -1.1s; 
   }   
   .m7c3:before {
      -webkit-animation-delay: -1s;
      animation-delay: -1s; 
   }   
   .m7c4:before {
      -webkit-animation-delay: -0.9s;
      animation-delay: -0.9s; 
   }   
   .m7c5:before {
      -webkit-animation-delay: -0.8s;
      animation-delay: -0.8s; 
   }   
   .m7c6:before {
      -webkit-animation-delay: -0.7s;
      animation-delay: -0.7s; 
   }   
   .m7c7:before {
      -webkit-animation-delay: -0.6s;
      animation-delay: -0.6s; 
   }   
   .m7c8:before {
      -webkit-animation-delay: -0.5s;
      animation-delay: -0.5s; 
   }   
   .m7c9:before {
      -webkit-animation-delay: -0.4s;
      animation-delay: -0.4s; 
   }   
   .m7c10:before {
      -webkit-animation-delay: -0.3s;
      animation-delay: -0.3s; 
   }   
   .m7c11:before {
      -webkit-animation-delay: -0.2s;
      animation-delay: -0.2s; 
   }   
   .m7c12:before {
      -webkit-animation-delay: -0.1s;
      animation-delay: -0.1s; 
   }
     
   /* Circles Animation */   
   @-webkit-keyframes multiple7Animation {
      0%, 80%, 100% {
         -webkit-transform: scale(0);
         transform: scale(0);
         opacity: 0;
      } 40% {
         -webkit-transform: scale(1);
         transform: scale(1);
         opacity: 1;
      }
   }
     
   @keyframes multiple7Animation {
      0%, 80%, 100% {
         -webkit-transform: scale(0);
         transform: scale(0);
         opacity: 0;
      } 40% {
         -webkit-transform: scale(1);
         transform: scale(1);
         opacity: 1;
      }
   }
</style>
