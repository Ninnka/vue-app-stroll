<template lang="html">
  <div class="fullpage overscroll classify-page" @scroll="scrolling">
    <headbar title="分类" :custombg="custombg"></headbar>
    <div class="classify-content">
      <!-- 类别筛选 -->
      <ul class="classify-nav">
        <li @click="listShow"><span>{{sortType}}</span><img src="./images/color-down.png" alt=""></li>
        <li @click="priceSort" :class="price_bol?'active':'none'">
          <span>{{hight?"价格从低到高":"价格从高到低"}}</span>
          <img src="./images/gray-down.png" alt="" v-if="!price_bol">
          <img src="./images/color-down.png" alt="" v-if="price_bol&&!hight">
          <img src="./images/color-up.png" alt="" v-if="hight">
        </li>
        <li @click="salesSort" :class="sales_bol?'active':'none'">
          <span>销量优先</span>
          <img src="./images/color-down.png" alt="" v-if="sales_bol">
          <img src="./images/gray-down.png" alt="" v-else="sales_bol">
        </li>
      </ul>
      <ul class="sortList" v-if="sort_bol">
        <li v-for="sData in sortData"><span @click="sortSelected">{{sData.title}}</span></li>
      </ul>
      <goodsitems tag="class-good-detail" :goodsItems="goodsItems"></goodsitems>
    </div>
    
    <icon-loader></icon-loader>

    <transition name="slide-fade">
      <router-view name="classgooddetailcontent" class="content-router-view position-absolute"></router-view>
    </transition>
  </div>
</template>

<script type="text/javascript">
import header from '../common/header/Header.vue';

import GoodsItems from './../member/component/GoodsItems.vue';

import IconLoader from 'components/common/icon-loader/IconLoader';

export default {
  data() {
    return {
      custombg: 'classify-headbar-bg',
      hight: false,
      price_bol: false,
      sales_bol: false,
      sort_bol: false,
      goodMainContent: '',
      preloader: '',
      loadingMore: false,
      sortType: '生活食品',
      sortData: [{
        type: 'food',
        title: '生活食品'
      },
      {
        type: 'lifeuse',
        title: '生活用品'
      },
      {
        type: 'furniture',
        title: '生活家居'
      },
      {
        type: 'commodity',
        title: '百货'
      },
      {
        type: 'electric',
        title: '家电'
      },
      {
        type: 'car',
        title: '汽车配件'
      },
      {
        type: 'package',
        title: '箱包'
      },
      {
        type: 'jewel',
        title: '珠宝'
      }],
      goodsItems: [{
        goodsID: '1',
        title: '坚果特产山核桃奶油味 碧根果210gx2袋',
        vipPrice: '29.5',
        originPrice: '42.5',
        imgsrc: require('components/member/images/goods2.jpg')
      },
      {
        goodsID: '2',
        title: '休闲零食五味园pk脆 独立小包装500g独立小包装500g',
        vipPrice: '10.9',
        originPrice: '12.8',
        imgsrc: require('components/member/images/goods1.jpg')
      },
      {
        goodsID: '3',
        title: '休闲零食五味园pk脆 独立小包装500g',
        vipPrice: '10.9',
        originPrice: '12.8',
        imgsrc: require('components/member/images/goods1.jpg')
      },
      {
        goodsID: '4',
        title: '坚果特产山核桃奶油味 碧根果210gx2袋',
        vipPrice: '29.5',
        originPrice: '42.5',
        imgsrc: require('components/member/images/goods2.jpg')
      },
      {
        goodsID: '6',
        title: '坚果特产山核桃奶油味 碧根果210gx2袋',
        vipPrice: '29.5',
        originPrice: '42.5',
        imgsrc: require('components/member/images/goods2.jpg')
      },
      {
        goodsID: '5',
        title: '休闲零食五味园pk脆 独立小包装500g独立小包装500g',
        vipPrice: '10.9',
        originPrice: '12.8',
        imgsrc: require('components/member/images/goods1.jpg')
      }]
    }
  },
  methods: {
    // getData() {
    //   // 获取数据
    //   this.$http.get('static/json.json')
    //     .then(function (res) {
    //       console.log('res:', res);
    //     }, function (err) {
    //       console.log('err:', err);
    //     });
    // },
    listShow() {
      this.sort_bol = !this.sort_bol;
    },
    priceSort() {
      if (this.price_bol === false) {
        this.price_bol = true;
      } else {
        this.hight = !this.hight;
      }
      if (this.sales_bol === true) {
        this.sales_bol = false;
      }
    },
    salesSort() {
      if (this.sales_bol === false) {
        this.sales_bol = !this.sales_bol;
      }
      if (this.price_bol === true) {
        this.price_bol = false;
        this.hight = false;
      }
    },
    sortSelected(event) {
      var selected = document.querySelectorAll('.sortList li span');
      for (var i = 0; i < selected.length; i++) {
        if (this.sortType === selected[i].innerText) {
          selected[i].className = 'type-selected';
        }
      }
      this.sortType = event.target.innerText;
      this.sort_bol = false;
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
  created() {
    // this.getData();
  },
  mounted() {
    let goodMainContent = document.querySelector('.classify-page');
    let preloader = document.querySelector('.infinite-scroll-preloader');
    this.goodMainContent = goodMainContent;
    this.preloader = preloader;
  },
  updated() {
    this.sort_bol = false;
    var selected = document.querySelectorAll('.sortList li span');
    for (var i = 0; i < selected.length; i++) {
      if (this.sortType === selected[i].innerText) {
        selected[i].className = 'type-selected';
      }
    }
  }
}
</script>

<style lang="css" type="text/css" scoped>
.classify-headbar-bg {
  background: #d81e06;
}
.classify-page{
  background: #f1f1f1;
}
.classify-content{
  padding-top: .42rem;
  font-size: .16rem;
  position: relative;
  width: 100%;
}
.classify-nav{
  position: fixed;
  top: .44rem;
  width: 100%;
  height: .42rem;
  /*padding: 0 .10rem;*/
  line-height: .42rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  background: white;
}
.classify-nav li{
  padding: 0 0.1rem;
}
.classify-nav li:first-child{
  color: #f29004;
}
.classify-nav li:first-child span{
  display: inline-block;
  width: .62rem;
  text-align: center;
}
.classify-nav img{
  width: .14rem;
  margin-left: .09rem;
}
.classify-nav li{
  display: inline-block;
  color: #666666;
  font-size: .14rem;
  /*padding: 0 .10rem;*/
}
.classify-nav .active{
  color: #f29004;
}
.sortList{
  position: fixed;
  top: .86rem;
  width: 100%;
  height: 1.01rem;
  /*line-height: .42rem;*/
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: white;
}
.sortList li{
  flex-basis: 20%;
  flex-shrink: 1;
  display: inline-block;
  color: #333333;
  width: .75rem;
  height: .28rem;
  margin: 0 .09rem;
  line-height: .28rem;
  text-align: center;
  font-size: .14rem;
  background: #eee;
  border-radius: 5px;
}
.sortList li span{
  display: inline-block;
  width: .56rem;
}
.type-selected{
  color: #f29004;
}
</style>
