<template lang="html">
  <div class="fullpage overscroll member-page" @scroll="scrolling">
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
      <goodsitems tag='goods-detail' :goodsItems="goodsItems" :vip="vip"></goodsitems>
    </div>
    
    <icon-loader></icon-loader>

    <transition name="slide-fade">
      <router-view name="goodsdetailcontent" class="content-router-view position-absolute"></router-view>
    </transition>
  </div>
</template>

<script>
import router from '../../router';

import header from '../common/header/Header.vue';

import Swiper from '../../../static/js/swiper-3.4.1.min.js';

import GoodsItems from './component/GoodsItems.vue';

import IconLoader from 'components/common/icon-loader/IconLoader';

import indexNavHook from 'src/Hook/indexNavHook';

export default {
  data() {
    return {
      custombg: 'member-headbar-bg',
      goodMainContent: '',
      preloader: '',
      swiper: '',
      vip: false,
      loadingMore: false,
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
      }],
      goodsItems: [{
        goodsID: '1',
        title: '休闲零食五味园pk脆 独立小包装500g独立小包装500g',
        vipPrice: '10.9',
        originPrice: '12.8',
        imgsrc: require('components/member/images/goods1.jpg')
      },
      {
        goodsID: '5',
        title: '家庭创意日常居家居生活日用品卫生间小百货收纳寝室宿舍必备神器',
        vipPrice: '19.00',
        originPrice: '85.00',
        imgsrc: require('components/member/images/shounahe.jpg')
      },
      {
        goodsID: '6',
        title: 'Midea/美的 MB75-eco131WD 7.5公斤智能变频波轮全自动洗衣机',
        vipPrice: '1158.00',
        originPrice: '1698.00',
        imgsrc: require('components/member/images/xiyiji.jpg')
      },
      {
        goodsID: '2',
        title: '坚果特产山核桃奶油味 碧根果210gx2袋',
        vipPrice: '29.5',
        originPrice: '42.5',
        imgsrc: require('components/member/images/goods2.jpg')
      },
      {
        goodsID: '3',
        title: '大学生宿舍神器收纳实用创意居家居生活日常小日用品厨房奇葩百货',
        vipPrice: '11.90',
        originPrice: '35.00',
        imgsrc: require('components/member/images/yijia.jpg')
      },
      {
        goodsID: '4',
        title: '创意实用生活家居小商品办公室商务礼品送男女生朋友同事生日礼物',
        vipPrice: '69.00',
        originPrice: '128.00',
        imgsrc: require('components/member/images/chazuo.jpg')
      },
      {
        goodsID: '7',
        title: '副刹车装置家用陪练免打孔副制动器辅助通用副驾驶教练车专用付刹',
        vipPrice: '260.00',
        originPrice: '372.00',
        imgsrc: require('components/member/images/qiche.jpg')
      },
      {
        goodsID: '8',
        title: 'ULDUM拉杆箱万向轮旅行箱子密码登机箱硬20 22 24寸男女行李箱包',
        vipPrice: '98.00',
        originPrice: '398.00',
        imgsrc: require('components/member/images/xiang.jpg')
      },
      {
        goodsID: '9',
        title: 'Darry Ring戴瑞一克拉钻石戒指DR专柜正品定制六爪求婚结婚钻戒女',
        vipPrice: '2580.00',
        originPrice: '3120.00',
        imgsrc: require('components/member/images/zhubao.jpg')
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
    },
    scrolling() {
      let documentHeight = document.documentElement.clientHeight || document.body.clientHeight;
      let actualTop = this.preloader.offsetTop;
      let current = this.preloader.offsetParent;
      while (current !== null) {
        actualTop += current.offsetTop;
        current = current.offsetParent;
      }
      let elementScrollTop = this.goodMainContent.scrollTop;
      if ((actualTop - elementScrollTop < documentHeight - documentHeight / 667 * (this.preloader.clientHeight * 2)) && !this.loadingMore) {
        this.loadingMore = true;
        // 这里调用加载数据的方法
        // 模拟加载数据
        this.goodsItems = this.goodsItems.concat(this.goodsItems);
        // 模拟结束数据加载后的动作，需要将标识设为false
        setTimeout(function () {
          this.loadingMore = false;
        }.bind(this), 1500);
      }
    }
  },
  components: {
    headbar: header,
    goodsitems: GoodsItems,
    iconLoader: IconLoader
  },
  mounted() {
    this.swiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      loop: true,
      autoplay: 2500,
      pagination: '.swiper-pagination',
      paginationClickable: true,
      autoplayDisableOnInteraction: false,
      observer: true,
      observeParents: true
    });
    this.scrollWrapper = document.querySelector('.member-page');
    let goodMainContent = document.querySelector('.member-page');
    let preloader = document.querySelector('.infinite-scroll-preloader');
    this.goodMainContent = goodMainContent;
    this.preloader = preloader;
  },
  updated() {
    // console.log('member updated');
  },
  beforeRouteEnter: indexNavHook.beforeRouteEnter,
  beforeRouteLeave: indexNavHook.beforeRouteLeave
}
</script>

<style lang="css" type="text/css" scoped>
.member-headbar-bg {
  background: #d81e06;
}
.member-page{
  background: #f1f1f1;
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
