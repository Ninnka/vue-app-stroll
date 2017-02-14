<template lang="html">
  <div class="fullpage main-theme-background good-main-content normal-fontsize hasfootbar">
    <head-bar :custombg="headbarbg"></head-bar>
    <i class="icon iconfont icon-backward-white-copy fixed icon-in-header backward" @click="backward"></i>
    <i class="icon iconfont icon-share-white-copy fixed icon-in-header share-good" @click="share"></i>
    <i class="icon iconfont icon-star-white-copy fixed icon-in-header star-good" @click="star"></i>
    <div class="good-presentation">
      <img class="" :src="goodDetail.imgsrc" alt="">
    </div>
    <div class="good-detail border-box">
      <div class="price border-box">
        <p>{{goodDetail.name}}</p>
        <div>
          <span class="price-discount">￥ {{goodDetail.pricediscount}}</span>
          <span class="price-normal">原价：<span>￥ {{goodDetail.pricenormal}}</span></span>
          <span class="sale-quantity float-right">销量：{{goodDetail.salequantity}}</span>
        </div>
      </div>
      <div class="limit border-box">
          <p>限时：2天23分02秒</p>
          <p>限量：{{goodDetail.discountquantity}}件</p>
      </div>
    </div>

    <div class="good-footbar fixed flex-box">
      <div class="good-shoppingcar border-box">
        <i class="icon iconfont icon-shoppingcar"></i>
        <p>购物车</p>
        <div class="shopping-point redpoint">10</div>
      </div>
      <div class="good-purchase-add flex-box">
        <i class="icon iconfont icon-addtosc"></i>
        <i class="icon iconfont icon-purchase-imedi"></i>
      </div>
    </div>

    <div style="height: 10rem;"></div>
  </div>
</template>

<script>
import router from '../../router';

import Header from '../common/header/Header.vue';

export default {
  data() {
    return {
      headbarbg: 'gooddetail-headbar-bg',
      goodDetail: {
        imgsrc: require('./images/goods1.jpg'),
        name: 'Huawei/华为 荣耀7 全网通4G手机',
        pricediscount: '11.5',
        pricenormal: '12.8',
        salequantity: '1235',
        discountstarttime: '',
        discountendtime: '',
        discountquantity: '120'
      }
    }
  },
  methods: {
    backward() {
      router.go(-1);
    },
    star() {

    },
    share() {

    }
  },
  components: {
    headBar: Header
  }
}
</script>

<style lang="scss" scoped>@import "./scss/good-detail.scss";</style>
