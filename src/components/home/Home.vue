<template lang="html">
  <div class="fullpage overscroll normal-fontsize">
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
            <img class="swiper-slide" v-for="slideImg in slideImgList" :key="slideImg.id" :src="slideImg.src" alt="">
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination main-theme"></div>
      </div>
      <!-- 主页导航分类 -->
      <div class="home-classify flex-box border-box">
        <div class="item">最新</div>
        <div class="item">用品</div>
        <div class="item">食品</div>
        <div class="item">热门</div>
        <div class="item">家居</div>
        <div class="item">数码</div>
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
      <router-view name="selectcitycontent" class="content-router-view position-absolute"></router-view>
    </transition>

    <transition name="slide-fade">
      <router-view name="search" class="content-router-view position-absolute"></router-view>
    </transition>
  </div>
</template>

<script type="text/javascript">
import router from '../../router';

import Header from '../common/header/Header.vue';

import Swiper from '../../../static/js/swiper-3.4.1.min.js';

export default {
  data() {
    return {
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
          title: '【10月抢购预告】 荣耀乐檬大神爆款 惊爆价荣耀乐檬大神爆款 惊爆价',
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
          id
        }
      });
    },
    locate() {
      router.push({
        name: 'select-city'
      })
    },
    search() {
      router.push({
        name: 'search'
      })
    }
  },
  components: {
    headBar: Header
  },
  created() {
    // console.log('created');
    // window.onscroll = function (e) {
    //   this.st = document.body.scrollTop || document.documentElement.scrollTop;
    // }.bind(this);
    // console.log(this.$route);
  },
  mounted() {
    console.log('mounted');
    new Swiper('.swiper-container', {
      direction: 'horizontal',
      loop: true,
      autoplay: 2000,

      // 如果需要分页器
      pagination: '.swiper-pagination'
    })
  },
  updated() {
    console.log('updated in home');
    // this.nextIsEnter = this.nextIsEnter ? this.nextIsEnter : !this.nextIsEnter;
    // if (this.nextIsEnter) {
    //   let y = JSON.parse(window.localStorage.getItem('home')).y;
    //   let tab = document.querySelector('#tab-main-content') ? document.querySelector('#tab-main-content') : undefined;
    //   if (tab) {
    //     tab.scrollTop = y + 'px';
    //   }
    // }
  },
  beforeDestroy() {
    console.log('beforeDestroy');
  }
}
</script>

<style lang="scss" scoped>@import "./scss/home.scss";</style>
