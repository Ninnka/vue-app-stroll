<template lang="html">
  <div class="fullpage overscroll classify-page" @scroll="scrolling">
    <headbar title="分类" :custombg="custombg"></headbar>
    <div class="classify-content">
      <!-- 类别筛选 -->
      <ul class="classify-nav">
        <li @click="listShow"><span>{{sortType.title}}</span><img src="./images/color-down.png" alt=""></li>
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
        <li v-for="sData in sortList"><span @click="sortSelected" :value="sData.type">{{sData.title}}</span></li>
      </ul>
      <goodsitems tag="class-good-detail" :goodsItems="sortData" :vip="vip"></goodsitems>
    </div>
    
    <!-- <div v-if="loadingMore"> -->
      <icon-loader></icon-loader>
    <!-- </div> -->

    <transition name="slide-fade">
      <router-view name="classgooddetailcontent" class="content-router-view position-absolute"></router-view>
    </transition>
  </div>
</template>

<script>
import header from '../common/header/Header.vue';

import GoodsItems from './../member/component/GoodsItems.vue';

import IconLoader from 'components/common/icon-loader/IconLoader';

import indexNavHook from 'src/Hook/indexNavHook';

export default {
  data() {
    return {
      custombg: 'classify-headbar-bg',
      hight: false,
      vip: false,
      price_bol: false,
      sales_bol: false,
      sort_bol: false,
      goodMainContent: '',
      preloader: '',
      loadingMore: false,
      sortType: {type: 'food', title: '生活食品'},
      sortData: [],
      sortList: [{
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
        goodsID: '10',
        type: 'food',
        title: '皇冠丹麦曲奇饼干原味休闲印尼进口零食品200g*3铁盒装',
        vipPrice: '58.80',
        originPrice: '88.00',
        imgsrc: require('components/member/images/cookies.jpg')
      },
      {
        goodsID: '1',
        type: 'food',
        title: '亏本促销盐焗鸡翅膀5斤批发 真生活温州卤味鸡肉中翅熟零食品',
        vipPrice: '120.80',
        originPrice: '130.00',
        imgsrc: require('components/member/images/jichi.jpg')
      },
      {
        goodsID: '11',
        type: 'food',
        title: '乐事薯片乐事大波浪卷薯片145g*4包烤鸡翅味鱿鱼味辛辣味多口味组',
        vipPrice: '49.90',
        originPrice: '55.00',
        imgsrc: require('components/member/images/shupian.jpg')
      },
      {
        goodsID: '12',
        type: 'food',
        title: '葡记蒸蛋糕点心甜面包早餐鲜奶食品整箱零食小吃大礼包口袋三明治',
        vipPrice: '25.90',
        originPrice: '32.00',
        imgsrc: require('components/member/images/mianbao.jpg')
      },
      {
        goodsID: '13',
        type: 'food',
        title: '赖毛 大别山精品原味香瓜子495克 好吃休闲食品生活好伙伴',
        vipPrice: '14.40',
        originPrice: '18.00',
        imgsrc: require('components/member/images/guazi.jpg')
      },
      {
        goodsID: '5',
        type: 'commodity',
        title: '家庭创意日常居家居生活日用品卫生间小百货收纳寝室宿舍必备神器',
        vipPrice: '19.00',
        originPrice: '25.00',
        imgsrc: require('components/member/images/shounahe.jpg')
      },
      {
        goodsID: '6',
        type: 'electric',
        title: 'Midea/美的 MB75-eco131WD 7.5公斤智能变频波轮全自动洗衣机',
        vipPrice: '1158.00',
        originPrice: '1698.00',
        imgsrc: require('components/member/images/xiyiji.jpg')
      },
      {
        goodsID: '2',
        type: 'food',
        title: '【混合30袋】创食人小吃休闲食品香辣鸭脖藕片熟食卤味零食大礼包',
        vipPrice: '49.00',
        originPrice: '65.00',
        imgsrc: require('components/member/images/luwei.jpg')
      },
      {
        goodsID: '3',
        type: 'lifeuse',
        title: '大学生宿舍神器收纳实用创意居家居生活日常小日用品厨房奇葩百货',
        vipPrice: '11.90',
        originPrice: '25.00',
        imgsrc: require('components/member/images/yijia.jpg')
      },
      {
        goodsID: '4',
        type: 'furniture',
        title: '创意实用生活家居小商品办公室商务礼品送男女生朋友同事生日礼物',
        vipPrice: '69.00',
        originPrice: '88.00',
        imgsrc: require('components/member/images/chazuo.jpg')
      },
      {
        goodsID: '7',
        type: 'car',
        title: '副刹车装置家用陪练免打孔副制动器辅助通用副驾驶教练车专用付刹',
        vipPrice: '260.00',
        originPrice: '372.00',
        imgsrc: require('components/member/images/qiche.jpg')
      },
      {
        goodsID: '8',
        type: 'package',
        title: 'ULDUM拉杆箱万向轮旅行箱子密码登机箱硬20 22 24寸男女行李箱包',
        vipPrice: '98.00',
        originPrice: '398.00',
        imgsrc: require('components/member/images/xiang.jpg')
      },
      {
        goodsID: '9',
        type: 'jewel',
        title: 'Darry Ring戴瑞一克拉钻石戒指DR专柜正品定制六爪求婚结婚钻戒女',
        vipPrice: '2580.00',
        originPrice: '3120.00',
        imgsrc: require('components/member/images/zhubao.jpg')
      }]
    }
  },
  methods: {
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
      this.sortType.title = event.target.innerText;
      this.sortType.type = event.target.getAttribute('value');
      this.preloader.style.display = 'none';
      this.sortData = [];
      for (var n = 0; n < this.goodsItems.length; n++) {
        if (this.sortType.type === this.goodsItems[n].type) {
          this.sortData.push(this.goodsItems[n]);
        }
      }
      this.sort_bol = false;
    },
    scrolling() {
      console.log('scrolling')
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
        this.preloader.style.display = 'block';
        // 这里调用加载数据的方法
        // 模拟加载数据
        this.sortData = this.sortData.concat(this.sortData);
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
    this.sortData = [];
    for (var n = 0; n < this.goodsItems.length; n++) {
      if (this.sortType.type === this.goodsItems[n].type) {
        this.sortData.push(this.goodsItems[n]);
      }
    }
    this.scrollWrapper = document.querySelector('.classify-page');
    let goodMainContent = document.querySelector('.classify-page');
    let preloader = document.querySelector('.infinite-scroll-preloader');
    preloader.style.display = 'none';
    this.goodMainContent = goodMainContent;
    this.preloader = preloader;
  },
  updated() {
    this.sort_bol = false;
    var selected = document.querySelectorAll('.sortList li span');
    for (var i = 0; i < selected.length; i++) {
      console.log(this.sortType.title, selected[i].innerText);
      if (this.sortType.title === selected[i].innerText) {
        selected[i].className = 'type-selected';
      }
    }
  },
  beforeRouteEnter: indexNavHook.beforeRouteEnter,
  beforeRouteLeave: indexNavHook.beforeRouteLeave
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
