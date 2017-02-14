<template lang="html">
  <div class="fullpage main-theme-background good-main-content normal-fontsize hasfootbar">
    <head-bar :custombg="headbarbg"></head-bar>
    <i class="icon iconfont icon-backward-white-copy fixed icon-in-header backward" @click="backward"></i>
    <i class="icon iconfont icon-share-white-copy fixed icon-in-header share-good" @click="share"></i>
    <i class="icon iconfont icon-star-white-copy fixed icon-in-header star-good" :class="goodDetail.starStatus === '1' ? active : ''" @click="star"></i>
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

    <transition name="slide-fade">
      <select-specification v-if="showSelectSpec"></select-specification>
    </transition>

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

  </div>
</template>

<script>
import router from '../../router';

import Header from '../common/header/Header.vue';
import SelectSpecification from 'components/common/select-specification/SelectSpecification.vue';

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
      showSelectSpec: false
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
    share() {
      // todo
    },
    addToSC() {
      this.showSelectSpec = !this.showSelectSpec;
    },
    buy() {
      // todo
    },
    closeSelectSpec() {
      this.showSelectSpec = false;
    }
  },
  created() {
    console.log('created detail');
  },
  mounted() {
    console.log('mounted detail');
  },
  activated() {
    console.log('activated detail');
  },
  deactivated() {
    console.log('destoryed detail');
  },
  components: {
    headBar: Header,
    selectSpecification: SelectSpecification
  }
}
</script>

<style lang="scss" scoped>@import "./scss/good-detail.scss";</style>
