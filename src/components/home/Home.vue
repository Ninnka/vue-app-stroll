<template lang="html">
  <div class="fullpage overscroll normal-fontsize" id="home-content-scrollwrapper">
    <head-bar title="首页" :custombg="custombg"></head-bar>
    <div class="location fixed" @click="locate">
      <i class="icon iconfont icon-location"></i>
      <span>{{currentcity}}</span>
    </div>
    <div class="search fixed" @click="search">
      <i class="icon iconfont icon-search"></i>
    </div>
    <div class="home-content" id="tab-main-content">
      <!-- 主页的轮播图 -->
      <div class="swiper-container">
        <div class="swiper-wrapper">
            <img class="swiper-slide" v-for="slideImg in slideImgList" :key="slideImg.id" :src="slideImg.src" alt="" @click="toGoodetail">
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination main-theme"></div>
      </div>
      <!-- 主页导航分类 -->
      <div class="home-classify flex-box border-box">
        <div class="item">
          <!-- 最新 -->
          <i class="icon iconfont icon-new"></i>
          <p>最新热门</p>
        </div>
        <div class="item">
          <!-- 用品 -->
          <i class="icon iconfont icon-appliance"></i>
          <p>生活用具</p>
        </div>
        <div class="item" @click="viewMerchant('food')">
          <!-- 食品 -->
          <i class="icon iconfont icon-food"></i>
          <p>食品</p>
        </div>
        <div class="item">
          <!-- 客服 -->
          <i class="icon iconfont icon-customer-service"></i>
          <p>客服服务</p>
        </div>
        <div class="item">
          <!-- 家居 -->
          <i class="icon iconfont icon-furniture"></i>
          <p>家居用品</p>
        </div>
        <div class="item" @click="viewMerchant('asset')">
          <!-- 房产 -->
          <i class="icon iconfont icon-asset"></i>
          <p>房产银行</p>
        </div>
      </div>
      <!-- 主页专区推荐 -->
      <div class="home-seperator normal-fontsize">
        专区推荐
      </div>
      <ul class="home-recommend border-box">
        <li class="item" v-for="recommendItem in recommendList" @click="toGoodetail(recommendItem.id)">
          <p class="item-title single-line">{{recommendItem.title}}</p>
          <img class="img-show" :src="recommendItem.imgsrc" alt="">
        </li>
      </ul>
    </div>
    <transition name="slide-fade">
      <router-view name="gooddetailcontent" class="content-router-view position-absolute"></router-view>
    </transition>

    <transition name="slide-fade">
      <router-view name="locatecontent" class="content-router-view position-absolute"></router-view>
    </transition>

    <transition name="slide-fade">
      <router-view name="search" class="content-router-view position-absolute"></router-view>
    </transition>

    <transition name="slide-fade">
      <router-view name="merchant" class="content-router-view position-absolute"></router-view>
    </transition>
  </div>
</template>

<script type="text/javascript">
import router from 'src/router';

import Header from 'components/common/header/Header';

import Swiper from '../../../static/js/swiper-3.4.1.min.js';

import indexNavHook from 'src/Hook/indexNavHook';

export default {
  data() {
    return {
      scrollWrapper: '',
      swiper: '',
      custombg: 'home-headbar-bg',
      currentcity: '广州市',
      slideImgList: [
        {
          src: require('./images/slide-img1.jpg'),
          id: 1
        },
        {
          src: require('./images/slide-img2.jpg'),
          id: 2
        },
        {
          src: require('./images/slide-img3.jpg'),
          id: 3
        },
        {
          src: require('./images/slide-img4.jpg'),
          id: 4
        }
      ],
      recommendList: [
        {
          id: 1,
          title: '【10月抢购预告】荣耀乐檬大神爆款 惊爆价荣耀乐檬大神爆款 惊爆价',
          imgsrc: require('./images/slide-img1.jpg')
        },
        {
          id: 2,
          title: '【劲爆开抢】 宝洁大礼包优惠前所未有',
          imgsrc: require('./images/slide-img2.jpg')
        },
        {
          id: 3,
          title: '【神价再现】 GOD PRICE 华丽上市',
          imgsrc: require('./images/slide-img3.jpg')
        }
      ]
    }
  },
  methods: {
    toGoodetail(id) {
      router.push({
        name: 'good-detail',
        params: {
          id,
          viponly: false,
          buyRouteName: 'good-buy-imedi'
        }
      });
    },
    locate() {
      router.push({
        name: 'locate'
      })
    },
    search() {
      router.push({
        name: 'search'
      })
    },
    viewMerchant(type) {
      router.push({
        name: 'merchant',
        params: {
          merchantType: type
        }
      })
    }
  },
  components: {
    headBar: Header
  },
  created() {},
  mounted() {
    console.log('mounted');
    this.scrollWrapper = document.querySelector('#tab-main-content');
    this.swiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      loop: true,
      autoplay: 2000,
      autoplayDisableOnInteraction: false,
      observer: true,

      // 如果需要分页器
      pagination: '.swiper-pagination'
    })
  },
  beforeUpdate() {
    console.log('before update in home');
  },
  updated() {
    console.log('updated in home');
  },
  beforeDestroy() {
    console.log('beforeDestroy');
  },
  beforeRouteEnter: indexNavHook.beforeRouteEnter,
  beforeRouteLeave: indexNavHook.beforeRouteLeave
}
</script>

<style lang="scss" scoped>@import "./scss/home.scss";</style>
