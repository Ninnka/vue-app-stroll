<template lang="html">
  <div class="fullpage border-box address-page">
    <headbar title="收货地址" :custombg="custombg"></headbar>
    <i class="icon iconfont icon-backward-white-copy fixed icon-in-header backward" @click="backward"></i>
    <span class="edit" v-if="!editaddress_bol" @click="toEdit">编辑</span>
    <div class="fullpage address-content">
      <ul>
        <li>
          <input type="text" placeholder="收货人姓名">
        </li>
        <li>
          <input type="text" placeholder="联系电话">
        </li>
        <li>
          城市: 
          <ul class='address_city' @click="seclectCity">
            <li>选择</li>
            <li>{{addressData[0].province}} <img :src="downLog" alt=""></li>
            <li>选择</li>
            <li>{{addressData[0].city}} <img :src="downLog" alt=""></li>
            <li>选择</li>
            <li>{{addressData[0].area}} <img :src="downLog" alt=""></li>
          </ul>
        </li>
        <li>
          <input type="text" placeholder="小区、街道、门牌等详细信息">
        </li>
        <li>
          设为默认地址 <input type="checkbox">
        </li>
      </ul>
      <button class="sure_btn" v-if="editaddress_bol" @click="sureEdit">确认</button>
      <transition name="fade">
        <div class="city-mask" v-if="city_bol">
          <div>
            <p>
              <button @click="cityCancal">取消</button>
              <button @click="citySelected">确认</button>
            </p>
            <div class="city-list">
              <span></span>
              <ul @touchstart="moveSelect" @touchend="moveSelect1" class="province">
                <li v-for="a in provinceList">{{a}}</li>
              </ul>
              <div>省</div>
              <ul>
                <li>湖北</li>
                <li>湖南</li>
                <li>广东</li>
                <li>北京</li>
                <li>香港</li>
              </ul>
              <div>市</div>
              <ul>
                <li>湖北</li>
                <li>湖南</li>
                <li>广东</li>
                <li>北京</li>
                <li>香港</li>
              </ul>
              <div>区</div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import router from '../../../router';

import Header from 'components/common/header/Header.vue';

export default {
  data() {
    return {
      custombg: 'order-headbar-bg',
      editaddress_bol: true,
      downLog: require('../images/down.png'),
      city_bol: false,
      addressData: [{
        province: '省级',
        city: '城市',
        area: '区'
      }],
      provinceList: ['上海', '湖南', '湖北', '广东', '广西', '北京', '福建', '河北', '河南', '海南', '山东']
    }
  },
  methods: {
    backward() {
      router.go(-1);
    },
    sureEdit() {
      var input = document.querySelectorAll('.address-content ul li input');
      for (var i = 0; i < input.length; i++) {
        input[i].setAttribute('disabled', 'disabled');
      }
      this.editaddress_bol = !this.editaddress_bol;
      this.disabled1 = 'disabled';
    },
    toEdit() {
      var input = document.querySelectorAll('.address-content ul li input');
      for (var i = 0; i < input.length; i++) {
        input[i].removeAttribute('disabled');
      }
      this.editaddress_bol = !this.editaddress_bol;
      this.disabled1 = '';
    },
    seclectCity() {
      if (this.editaddress_bol === true) {
        this.city_bol = true;
      }
    },
    cityCancal() {
      this.city_bol = false;
    },
    citySelected() {
      this.city_bol = false;
      this.addressData[0].province = this.citysel;
    },
    moveSelect(event) {
      this.startY = event.changedTouches[0].clientY;
      this.y = document.querySelector('.city-mask div').offsetTop;
      this.liY = document.querySelector('.province li').clientHeight
      console.log(event);
    },
    moveSelect1(event) {
      var Y = event.changedTouches[0].clientY;
      var index = (Y - this.startY) / this.liY;
      console.log(event.target.innerText);
      for (var i = 0; i < this.provinceList.length; i++) {
        if (this.provinceList[i] === event.target.innerText) {
          if (index < 0) {
            index = Math.round(Math.abs(index));
            this.citysel = this.provinceList[i + index];
          }
        }
      };
      console.log(Math.round(Math.abs(index)));
      console.log(event);
    }
  },
  components: {
    headbar: Header
  }
}
</script>

<style lang="css" type="text/css">
.address-headbar-bg{
  background: #d81e06;
}
.edit{
  font-size: .16rem;
  position: absolute;
  top: 0.14rem;
  right: 0.1rem;
  z-index: 100;
  color: white;
  font-weight: 400;
}
.address-page{
  padding-top: .44rem;
  z-index: 202;
}
.address-content{
  background: #f1f1f1;
  overflow: scroll;
}
.address-content>ul{
  margin-top: .13rem;
  border-top: 1px solid #ddd;
  background: white;
  color: #777;
}
.address-content>ul>li{
  padding: .14rem .1rem;
  font-size: .15rem;
  border-bottom: 1px solid #ddd;
}
.address-content>ul>li input{
  outline: none;
  border: none;
  padding: 0;
  font-size: .15rem;
  width: 3.2rem;
}
.address-content>ul>li img{
  width: .1rem;
  vertical-align: middle;
  padding-left: .03rem;
}
.address-content>ul>li ul{
  display: inline-block;
  padding-left: .1rem;
  float: right;
}
.address-content>ul>li ul li{
  display: inline-block;
  padding: 0 .05rem;
}
.address-content>ul>li:last-child input{
  float: right;
  width: .15rem;
  height: .15rem;
  border: 1px solid #ddd;
  outline: none;
}
.address-content>ul>li:last-child input:checked{
  border: none;
}
.address-content .sure_btn{
  position: absolute;
  left: .29rem;
  bottom: .37rem;
  background: #f29004;
  width: 3.2rem;
  height: .46rem;
  color: white;
  font-size: .17rem;
  border-radius: 5px;
  border: none;
  outline: none;
}
.city-mask{
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.3);
  position: fixed;
  top: 0px;
  z-index: 205;
}
.city-mask>div{
  width: 100%;
  /*height: 2.62rem;*/
  background: white;
  position: fixed;
  bottom: 0;
}
.city-mask>div>p{
  height: .47rem;
  background: #ddd;
}
.city-mask>div>p button{
  height: 100%;
  font-size: .15rem;
  color: #333;
}
.city-mask>div>p button:first-child{
  float: left;
}
.city-mask>div>p button:last-child{
  float: right;
}
.city-list{
  padding: 0 .09rem;
  height: 2.13rem;
  position: relative;
}
.city-list span{
  position: absolute;
  display: block;
  width: 3.45rem;
  border-top: 1px solid #ddd; 
  border-bottom: 1px solid #ddd;
  height: .37rem;
  top: .88rem; 
  z-index: -1;
}
.city-list ul{
  display: inline-block;
  height: 100%;
  vertical-align: middle;
  overflow: scroll;
}
.city-list div{
  display: inline-block;
  height: 2.14rem;
  line-height: 2.14rem;
  padding-right: .21rem;
  color: #f29004;
  vertical-align: middle;
}
.city-list div:last-child{
  padding-right: 0; 
}
.city-list ul li{
  padding: .1339rem .21rem;
}
</style>
