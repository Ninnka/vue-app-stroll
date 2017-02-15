<template lang="html">
  <div class="fullpage">
    <headbar title="会员" :custombg="custombg"></headbar>
    <div class="member-content">
      <!-- 轮播图 -->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <a :href="sItem.url" class="swiper-slide" v-for="sItem in swiperItems" :key="sItem.id"><img :src="sItem.imgsrc" alt=""></a>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
      <!-- 商品列表 -->
      <!-- <div class="goodsContent">
        <ul class="goodsItems">
          <li class="goodsItem" v-for="gItem in goodsData">
            <a @click="toGoodetail(gItem.goodsID)">
              <img :src="gItem.imgsrc" alt="">
              <h2>{{gItem.title}}</h2>
              <p>
                <span>{{gItem.vipPrice}}</span>
                <span>{{gItem.originPrice}}</span>
              </p>
            </a>
          </li>
        </ul>
      </div> -->
      <goodsitems></goodsitems>
    </div>
  </div>
</template>

<script type="text/javascript">
// import router from '../../router';

import header from '../common/header/Header.vue';

import Swiper from '../../../static/js/swiper-3.4.1.min.js';

import GoodsItems from './component/GoodsItems.vue';

export default {
  data() {
    return {
      custombg: 'member-headbar-bg',
      swiperItems: [{
        id: '1',
        url: '###',
        imgsrc: require('./images/swiper-test.jpeg')
      },
      {
        id: '2',
        url: '##',
        imgsrc: require('./images/swiper-test1.jpg')
      },
      {
        id: '3',
        url: '##',
        imgsrc: require('./images/swiper-test2.jpeg')
      }]
    }
  },
  methods: {
    // toGoodetail(id) {
    //   router.push({
    //     name: 'member-good-detail',
    //     params: {
    //       goodsId: id
    //     }
    //   });
    // }
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
.member-headbar-bg {
  background: #228733;
}
.member-content{
  font-size: .16rem;
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

/*.goodsContent{
  background: #f1f1f1;
}
.goodsItems{
  padding: 0.09rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.goodsItem{
  display: inline-block;
  width: 1.75rem;
  height: 2.465rem;
  background: white;
  margin-bottom: 0.08rem;
  font-size: 0;
}
.goodsItem a{
  width: 100%;
  height: 100%;
}
.goodsItem a img{
  width: 100%;
  height: 1.76rem;
}
.goodsItem a h2{
  font-size: 0.16rem;
  margin: 0.08rem;
  color: #5a5a5a;
  max-height: 0.34rem;
  line-height: 0.17rem;
  overflow: hidden;
  text-overflow: ellipsis;
}
.goodsItem a p{
  padding: 0 0.05rem;
}
.goodsItem a p span{
  display: inline-block;
  font-weight: bolder;
  max-width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.goodsItem a p span:nth-child(1){
  color: #de0000;
  font-size: 0.16rem;
  font-weight: bolder;
  vertical-align: top;
  margin-right: 0.10rem;
}
.goodsItem a p span:nth-child(1):before{
  content: "￥";
  display: inline-block;
}
.goodsItem a p span:nth-child(2){
  color: #888;
  font-size: 0.14rem;
  text-decoration: line-through;
}
.goodsItem a p span:nth-child(2):before{
  content: "原价:￥";
  display: inline-block;
}*/
</style>
