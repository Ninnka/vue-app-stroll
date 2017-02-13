<template lang="html">
  <div>
    <headbar title="会员"></headbar>
    <!-- <div> -->
      <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="sItem in swiperItems"><a :href="sItem.url"><img :src="sItem.imgsrc" alt=""></a></div>
        <!-- <div class="swiper-slide"><a :href="swiperData.swiper1.url"><img :src="swiperData.swiper1.path" alt=""></a></div>
        <div class="swiper-slide"><a :href="swiperData.swiper2.url"><img :src="swiperData.swiper2.path" alt=""></a></div>
        <div class="swiper-slide"><a :href="swiperData.swiper3.url"><img :src="swiperData.swiper3.path" alt=""></a></div> -->
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <!-- </div> -->
    
    <div class="goodsContent">
      <ul class="goodsItems">
        <li class="goodsItem">
          <a href="">
            <img src="" alt="">
            <h2></h2>
            <span></span>
            <span></span>
          </a>
        </li>
        <li class="goodsItem">
          <a href="">
            <img src="" alt="">
            <h2></h2>
            <span></span>
            <span></span>
          </a>
        </li><li class="goodsItem">
          <a href="">
            <img src="" alt="">
            <h2></h2>
            <span></span>
            <span></span>
          </a>
        </li><li class="goodsItem">
          <a href="">
            <img src="" alt="">
            <h2></h2>
            <span></span>
            <span></span>
          </a>
        </li><li class="goodsItem">
          <a href="">
            <img src="" alt="">
            <h2></h2>
            <span></span>
            <span></span>
          </a>
        </li><li class="goodsItem">
          <a href="">
            <img src="" alt="">
            <h2></h2>
            <span></span>
            <span></span>
          </a>
        </li><li class="goodsItem">
          <a href="">
            <img src="" alt="">
            <h2></h2>
            <span></span>
            <span></span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/javascript">
import header from '../common/header/Header.vue';
import Swiper from './../../../static/js/swiper-3.4.1.min.js';
require('./../../../static/css/swiper-3.4.1.min.css');

export default {
  data() {
    return {
      swiperItems: [{
        url: '##',
        imgsrc: require('./assets/swiper-test.jpeg')
      },
      {
        url: '##',
        imgsrc: require('./assets/swiper-test1.jpeg')
      },
      {
        url: '##',
        imgsrc: require('./assets/swiper-test2.jpeg')
      }],
      goodsData: [{
        title: '休闲零食五味园pk脆 独立小包装500g',
        vipPrice: '10.9',
        originPrice: '12.8',
        url: '##',
        imgsrc: require('./assets/goods1.jpg')
      },
      {
        title: '坚果特产山核桃奶油味 碧根果210gx2袋',
        vipPrice: '29.5',
        originPrice: '42.5',
        url: '##',
        imgsrc: require('./assets/goods2.jpg')
      },
      {
        title: '休闲零食五味园pk脆 独立小包装500g',
        vipPrice: '10.9',
        originPrice: '12.8',
        url: '##',
        imgsrc: require('./assets/goods1.jpg')
      }]
    }
  },
  components: {
    headbar: header
  },
  mounted() {
    var mySwiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      loop: true,
      autoplay: 3000,
      pagination: '.swiper-pagination',
      paginationClickable: true,
      autoplayDisableOnInteraction: false
    })
    console.log(mySwiper)
  }
}
</script>

<style lang="css" type="text/css" scoped>
.swiper-wrapper{
  height: 1.51rem;
}
.swiper-slide{
  background: orange;
  text-align: center;
  line-height: 1.51rem;
}
.swiper-pagination{
  line-height: 0.05rem;
}
.swiper-wrapper div a{
  width: 100%;
  height: 100%;
  background-position: center 0;
  background-repeat: no-repeat;
  background-color: transparent;
  display: block;
}
.swiper-wrapper div a img{
  width: 100%;
  height: 100%;
}
.goodsContent{
  background: #eee;
}
.goodsItems{
  padding: 0.09rem 0.09rem 0.58rem;
}
.goodsItem{
  display: inline-block;
  width: 1.75rem;
  height: 2.465rem;
  background: white;
  margin-bottom: 0.07rem;
}
</style>
