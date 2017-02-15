<template lang="html">
  <div class="fullpage main-theme-background good-main-content normal-fontsize hasfootbar border-box overscroll" @scroll="scrolling">
    <head-bar :custombg="headbarbg"></head-bar>
    <i class="icon iconfont icon-backward-white-copy fixed icon-in-header backward" @click.stop="backward"></i>
    <i class="icon iconfont icon-share-white-copy fixed icon-in-header share-good" @click.stop="shareContent"></i>
    <i class="icon iconfont icon-star-white-copy fixed icon-in-header star-good" :class="goodDetail.starStatus === '1' ? active : ''" @click.stop="star"></i>
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

    <div class="good-tab flex-box">
      <a class="tab-link button border-box" :class="showTab === 'details' ? active : ''" id="good-tab-detail" @click="changeTab">商品详情</a>
      <a class="tab-link button border-box" :class="showTab === 'comments' ? active : ''" @click="changeTab">用户评价</a>
    </div>

    <div class="tabs">
      <div class="tab" v-show="showTab === 'details'">
        <div class="content-block">
          <div class="details-item" v-for="item in goodDetail.gooddetaillist">
            <img :src="item.imgsrc" alt="">
            <p>{{item.description}}</p>
          </div>
        </div>
      </div>
      <div class="tab infinite-scroll" v-show="showTab === 'comments'">
        <div class="list-block">
          <ul class="list-container">
            <li class="normal-fontsize comment-container" v-for="commentItem in goodDetail.commentList">
              <div class="comment-about flex-box">
                <img :src="commentItem.avatar" alt="" class="avatar">
                <span class="name">{{commentItem.name}}</span>
                <span class="member-level">{{commentItem.memberLevel}}</span>
                <span class="timestamp">{{commentItem.timestamp}}</span>
              </div>
              <div class="comment-score">
                <i class="icon iconfont icon-comment-star active" v-for="s in commentItem.score"></i>
                <!-- {{commentItem.score}} -->
              </div>
              <div class="comment-content">
                {{commentItem.content}}
              </div>
            </li>
          </ul>
        </div>
        <!-- 加载提示符 -->
        <div class="infinite-scroll-preloader">
          <div class="spinningCircle"></div>
        </div>
      </div>
    </div>

    <div class="good-footbar fixed flex-box">
      <div class="good-shoppingcar border-box">
        <i class="icon iconfont icon-shoppingcar"></i>
        <div class="shopping-point redpoint">{{goodDetail.inShoppingCar}}</div>
      </div>
      <div class="good-purchase-add flex-box">
        <i class="icon iconfont icon-addtosc" @click="addToSC"></i>
        <i class="icon iconfont icon-purchase-imedi"></i>
      </div>
    </div>

    <transition name="fade">
      <select-specification v-if="selectSpecStatus" v-on:closeSelectSpec="closeSelectSpec"></select-specification>
    </transition>

    <transition name="fade">
      <share v-if="shareContentStatus" v-on:closeShare="closeShare"></share>
    </transition>

    <transition name="fade">
      <recharge v-if="rechargeContentStatus" v-on:closeRecharge="closeRecharge"></recharge>
    </transition>

  </div>
</template>

<script>
import router from '../../router';

import Header from '../common/header/Header.vue';
import SelectSpecification from 'components/common/select-specification/SelectSpecification.vue';
import Share from 'components/common/share/share.vue';
import Recharge from 'components/common/recharge/Recharge.vue';

export default {
  data() {
    return {
      contentScrollTop: 0,
      headbarbg: 'gooddetail-headbar-bg',
      goodDetail: {
        uservip: false,
        viponly: true,
        imgsrc: require('./images/goods1.jpg'),
        name: 'Huawei/华为 荣耀7 全网通4G手机',
        pricediscount: 1999,
        pricenormal: 1799,
        salequantity: 1235,
        discountstarttime: '',
        discountendtime: '',
        discountquantity: '120',
        gooddetaillist: [
          {
            imgsrc: require('./images/good-detail-large.jpg'),
            description: '5英寸大屏幕，看见青春大世界，5英寸大屏幕，看见青春大世界，5英寸大屏幕，看见青春大世界，5英寸大屏幕，看见青春大世界，5英寸大屏幕，看见青春大世界'
          },
          {
            imgsrc: require('./images/good-detail-large.jpg'),
            description: '5英寸大屏幕，看见青春大世界，5英寸大屏幕，看见青春大世界，5英寸大屏幕，看见青春大世界，5英寸大屏幕，看见青春大世界，5英寸大屏幕，看见青春大世界'
          }
        ],
        starStatus: '0',
        inShoppingCar: 0,
        commentList: [
          {
            avatar: require('./images/avatar.png'),
            name: '吴大耀',
            memberLevel: 'VIP会员',
            timestamp: '2015-10-15',
            score: 5,
            content: '大品牌值得信赖，大品牌值得信赖，大品牌值得信赖，重要的事说3遍，先买十台，楼下付钱'
          },
          {
            avatar: require('./images/avatar.png'),
            name: '赖大祥',
            memberLevel: 'VIP会员',
            timestamp: '2015-10-15',
            score: 4,
            content: '还可以啦，用久了还是卡'
          },
          {
            avatar: require('./images/avatar.png'),
            name: '张小华',
            memberLevel: '超级VIP会员',
            timestamp: '2015-10-15',
            score: 5,
            content: '卧槽，降价了！！！卧槽，降价了！！！卧槽，降价了！！！卧槽，降价了！！！卧槽，降价了！！！卧槽，降价了！！！'
          },
          {
            avatar: require('./images/avatar.png'),
            name: '吴大耀',
            memberLevel: 'VIP会员',
            timestamp: '2015-10-15',
            score: 5,
            content: '大品牌值得信赖，大品牌值得信赖，大品牌值得信赖，重要的事说3遍，先买十台，楼下付钱'
          },
          {
            avatar: require('./images/avatar.png'),
            name: '赖大祥',
            memberLevel: 'VIP会员',
            timestamp: '2015-10-15',
            score: 4,
            content: '还可以啦，用久了还是卡'
          }
        ]
      },
      showTab: 'details',
      active: 'active',
      selectSpecStatus: false,
      shareContentStatus: false,
      rechargeContentStatus: false,
      preloadY: 0,
      goodMainContent: '',
      preloader: '',
      loadingMore: false
    }
  },
  methods: {
    backward() {
      router.go(-1);
    },
    changeTab(e) {
      console.log('innerHTML:', e.target.innerHTML);
      this.showTab = e.target.innerHTML === '商品详情' ? 'details' : 'comments';
    },
    star() {
      this.goodDetail.starStatus = '1';
    },
    shareContent() {
      this.shareContentStatus = true;
    },
    addToSC() {
      if (!this.goodDetail.uservip && this.goodDetail.viponly) {
        this.rechargeContentStatus = true;
      }
      else {
        this.selectSpecStatus = !this.selectSpecStatus;
      }
    },
    buy() {
      if (!this.goodDetail.uservip && this.goodDetail.viponly) {
        this.rechargeContentStatus = true;
      }
      else {
        console.log('buy');
      }
    },
    closeSelectSpec() {
      console.log('closeSelectSpec in detail');
      this.selectSpecStatus = false;
    },
    closeShare() {
      this.shareContentStatus = false;
    },
    closeRecharge() {
      this.rechargeContentStatus = false;
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
      if ((actualTop - elementScrollTop < documentHeight - documentHeight / 667 * (this.preloader.clientHeight + 20)) && !this.loadingMore) {
        this.loadingMore = true;
        // 这里调用加载数据的方法
        // 模拟加载数据
        this.goodDetail.commentList = this.goodDetail.commentList.concat(this.goodDetail.commentList);
        // 模拟结束数据加载后的动作，需要将标识设为false
        setTimeout(function () {
          this.loadingMore = false;
        }.bind(this), 1500);
      }
    }
  },
  created() {
    console.log('created detail');
  },
  mounted() {
    console.log('mounted detail');
    let goodMainContent = document.querySelector('.good-main-content');
    let preloader = document.querySelector('.infinite-scroll-preloader');
    this.goodMainContent = goodMainContent;
    this.preloader = preloader;
  },
  beforeDestroy() {
    console.log('beforeDestroy detail');
  },
  components: {
    headBar: Header,
    selectSpecification: SelectSpecification,
    share: Share,
    recharge: Recharge
  }
}
</script>

<style lang="scss" scoped>@import "./scss/good-detail.scss";</style>
