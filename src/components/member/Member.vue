<template lang="html">
  <div class="fullpage overscroll">
    <headbar title="会员" :custombg="custombg"></headbar>
    <div class="member-content">
      <!-- 轮播图 -->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <a class="swiper-slide" v-for="sItem in swiperItems" :key="sItem.id"><img :src="sItem.imgsrc" alt=""></a>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
      <!-- 商品列表 -->
      <goodsitems tag='goods-detail'></goodsitems>
    </div>
    <transition name="slide-fade">
      <router-view name="goodsdetailcontent" class="content-router-view position-absolute"></router-view>
    </transition>
  </div>
</template>

<script type="text/javascript">
import router from '../../router';

import header from '../common/header/Header.vue';

import Swiper from '../../../static/js/swiper-3.4.1.min.js';

import GoodsItems from './component/GoodsItems.vue';

export default {
  data() {
    return {
      custombg: 'member-headbar-bg',
      swiperItems: [{
        id: '1',
        imgsrc: require('./images/swiper-test.jpeg')
      },
      {
        id: '2',
        imgsrc: require('./images/swiper-test1.jpg')
      },
      {
        id: '3',
        imgsrc: require('./images/swiper-test2.jpeg')
      }]
    }
  },
  methods: {
    toGoodetail(id) {
      router.push({
        name: 'goods-detail',
        params: {
          goodsId: id
        }
      });
    }
  },
  components: {
    headbar: header,
    goodsitems: GoodsItems
  },
  mounted() {
    this.mySwiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      loop: true,
      autoplay: 2500,
      pagination: '.swiper-pagination',
      paginationClickable: true,
      autoplayDisableOnInteraction: false,
      observer: true,
      observeParents: true
    })
  },
  updated() {
    console.log('swiper updated');
    this.mySwiper.update();
    this.mySwiper.stopAutoplay();
    this.mySwiper.startAutoplay();
  }
}
</script>

<style lang="css" type="text/css" scoped>
.member-headbar-bg {
  background: #d81e06;
}
.member-content{
  font-size: .16rem;
  /*padding-bottom: .49rem;*/
}
.swiper-wrapper{
  height: 1.51rem;
}
.swiper-slide{
  height: 100%;
  width: 100%;
}
.swiper-wrapper a img{
  width: 100%;
  height: 100%;
}
</style>
