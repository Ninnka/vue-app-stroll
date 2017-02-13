<template lang="html">
  <div>
    <head-bar title="首页"></head-bar>
    <!-- <button type="button" name="button" @click="toContent" class="btn">跳转</button> -->
    <div class="home-content">
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
        <li class="item" v-for="recommendItem in recommendList">
          <p class="title">{{recommendItem.title}}</p>
          <img class="img-show" :src="recommendItem.imgsrc" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/javascript">
import router from '../../router';

import Header from '../common/header/Header.vue';

import Swiper from '../../../static/js/swiper-3.4.1.min.js';

export default {
  data() {
    return {
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
          title: '推荐推荐推荐推荐',
          imgsrc: require('./images/slide-img1.jpg')
        },
        {
          title: '推荐推荐推荐推荐',
          imgsrc: require('./images/slide-img2.jpg')
        },
        {
          title: '推荐推荐推荐推荐',
          imgsrc: require('./images/slide-img3.jpg')
        }
      ]
    }
  },
  methods: {
    toContent() {
      router.push({
        name: 'content'
      });
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
    var mySwiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      loop: true,

      // 如果需要分页器
      pagination: '.swiper-pagination'
    })
    console.log(mySwiper);
  },
  updated() {
    console.log('updated');
  },
  destoryed() {
    console.log('destoryed');
  }
}
</script>

<style lang="scss" scoped>@import "./scss/home.scss";</style>
