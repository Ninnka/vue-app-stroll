<template lang="html">
  <div class="fullpage">
    <headbar title="分类" :custombg="custombg"></headbar>
    <div class="classify-content">
      <!-- 类别筛选 -->
      <ul class="classify-nav">
        <li @click="listShow"><span>生活食品</span><img src="./images/color-down.png" alt=""></li>
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
      <ul class="sortList">
        <li v-for="sData in sortData">{{sData.title}}</li>
      </ul>
      <!-- 商品列表 -->
      <goodsitems></goodsitems>
    </div>
  </div>
</template>

<script type="text/javascript">
// import router from '../../router';

import header from '../common/header/Header.vue';

import Swiper from '../../../static/js/swiper-3.4.1.min.js';

import GoodsItems from './../member/component/GoodsItems.vue';

export default {
  data() {
    return {
      custombg: 'classify-headbar-bg',
      hight: false,
      price_bol: false,
      sales_bol: false,
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
      }]
    }
  },
  methods: {
    listShow() {
      console.log(1);
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
      this.sales_bol = !this.sales_bol;
      if (this.price_bol === true) {
        this.price_bol = false;
        this.hight = false;
      }
    }
  },
  components: {
    headbar: header,
    goodsitems: GoodsItems
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
.classify-headbar-bg {
  background: #228733;
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
  width: 3.55rem;
  height: .42rem;
  padding: 0 .10rem;
  line-height: .42rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  background: white;
}
.classify-nav li:first-child{
  color: #f29004;
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
  width: 3.55rem;
  height: 1.01rem;
  padding: 0 .10rem;
  line-height: .42rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background: white;
}
.sortList li{
  display: inline-block;
  color: #333333;
  width: .72rem;
  height: .28rem;
  line-height: .28rem;
  text-align: center;
  font-size: .14rem;
  background: #eee;
  border-radius: 5px;
}
</style>
