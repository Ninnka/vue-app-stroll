<template lang="html">
  <div class="fullpage overscroll shoppingcar-page">
    <div class="header">
      <headbar title="购物车" :custombg="custombg"></headbar>
      <span class="edit" @click="edit">{{edit_bol?"编辑":"完成"}}</span>
    </div>
    <div class="shoppingCar-content">
      <ul>
        <transition-group name="add_del">
          <li v-for="(data,index) in goodsItems" class="carItem" :key="data">
            <input type="checkbox" v-model="checked" :value="data.id"/>
            <div @click="togoodsDetail(data.id)">
              <img :src="data.imgsrc" alt="">
              <div>
                <p>{{data.title}}</p>
                <p>规格：{{data.spec}}</p>
                <p>
                  <span>￥{{data.price}}</span>
                  <span v-if="!edit_bol" class="edit-amount">
                    <span @click="reduceCount(index)" :class="data.amount>1?'canReduce':''">-</span>
                    <span>{{data.amount}}</span>
                    <span @click="addCount(index)">+</span>
                  </span>
                  <span v-if="edit_bol">x {{data.amount}}</span>
                </p>
              </div>
            </div>
          </li>
        </transition-group>
      </ul>
      <div class="pay-bar">
        <div><input type="checkbox" v-model="allChecked">全选</div>
        <div v-if="edit_bol">
          <div>合计: <span>￥{{total.totalMoney}}</span></div>
        </div>
        <button v-if="edit_bol" @click="refine">结算 <span>({{total.totalCount}})</span></button>
        <button v-else="edit_bol" @click="removeGoods">删除</button>
      </div>
    </div>
    <transition name="slide-fade">
      <router-view class="content-router-view position-absolute"></router-view>
    </transition>
  </div>
</template>

<script type="text/javascript">
import router from '../../router';

import header from '../common/header/Header.vue';

import indexNavHook from 'src/Hook/indexNavHook';

export default {
  data() {
    return {
      custombg: 'shoppingCar-headbar-bg',
      all: false,
      checked: [],
      buyData: [],
      edit_bol: true,
      goodsOrder: [],
      goodsItems: [{
          id: '1',
          imgsrc: require('./images/goods2.jpg'),
          title: '坚果特产山核桃奶油味碧根坚果特产山核桃奶油味碧根',
          spec: '一盒6片',
          price: '29.5',
          amount: 2
      },
        {
          id: '2',
          imgsrc: require('./images/goods2.jpg'),
          title: '坚果特产山核桃奶油味碧根坚果特产山核桃奶油味碧根',
          spec: '一盒6片',
          price: '29.5',
          amount: 2
      },
        {
          id: '3',
          imgsrc: require('./images/goods2.jpg'),
          title: '坚果特产山核桃奶油味碧根坚果特产山核桃奶油味碧根',
          spec: '一盒6片',
          price: '29.5',
          amount: 2
      },
        {
          id: '4',
          imgsrc: require('./images/goods2.jpg'),
          title: '坚果特产山核桃奶油味碧根坚果特产山核桃奶油味碧根',
          spec: '一盒6片',
          price: '29.5',
          amount: 2
      },
        {
          id: '5',
          imgsrc: require('./images/goods2.jpg'),
          title: '坚果特产山核桃奶油味碧根坚果特产山核桃奶油味碧根',
          spec: '一盒6片',
          price: '29.5',
          amount: 2
      },
        {
          id: '6',
          imgsrc: require('./images/goods2.jpg'),
          title: '坚果特产山核桃奶油味碧根坚果特产山核桃奶油味碧根',
          spec: '一盒6片',
          price: '29.5',
          amount: 2
      }]
    }
  },
  methods: {
    edit() {
      this.edit_bol = !this.edit_bol;
      this.checked = [];
    },
    refine() {
      console.log(this.checked.length)
      if (this.checked.length) {
        this.goodsOrder = [];
        for (var i = 0; i < this.checked.length; i++) {
          for (var j = 0; j < this.goodsItems.length; j++) {
            if (this.checked[i] === this.goodsItems[j].id) {
              this.goodsOrder.push(this.goodsItems[j]);
            }
          }
        }
        // console.log('传递的个数=> ' + this.goodsOrder);
        router.push({
          name: 'refine-order',
          params: this.goodsOrder
        })
      }
    },
    reduceCount(index) {
      if (this.goodsItems[index].amount > 1) {
        this.goodsItems[index].amount -= 1;
      }
    },
    addCount(index) {
      this.goodsItems[index].amount += 1;
    },
    removeGoods() {
      for (var i = 0; i < this.checked.length; i++) {
        for (var j = 0; j < this.goodsItems.length; j++) {
          if (this.checked[i] === this.goodsItems[j].id) {
            this.goodsItems.splice(j, 1);
          }
        }
      }
      this.checked = [];
    },
    togoodsDetail(id) {
      router.push({
        name: 'car-good-detail',
        params: {
          goodsid: id
        }
      })
    }
  },
  components: {
    headbar: header
  },
  computed: {
    total: {
      get() {
        var totalMoney = 0;
        var totalCount = 0;
        if (this.checked.length > 0) {
          for (var i = 0; i < this.checked.length; i++) {
            for (var j = 0; j < this.goodsItems.length; j++) {
              // console.log(this.checked, this.goodsItems);
              if (this.checked[i] === this.goodsItems[j].id) {
                totalCount += this.goodsItems[j].amount
                totalMoney += this.goodsItems[j].price * this.goodsItems[j].amount;
              }
            }
          }
          return {
            'totalMoney': totalMoney.toFixed(2),
            'totalCount': totalCount
          }
        } else {
          return {
            'totalMoney': (0).toFixed(2),
            'totalCount': 0
          }
        }
      }
    },
    allChecked: {
      get: function () {
        return this.checkedCount === this.goodsItems.length
      },
      set: function (value) {
        if (value) {
          this.checked = this.goodsItems.map(function (item) {
            return item.id
          })
        } else {
          this.checked = []
        }
      }
    },
    checkedCount: {
      get: function () {
        return this.checked.length;
      }
    }
  },
  mounted() {
    this.scrollWrapper = document.querySelector('.shoppingcar-page');
  },
  beforeRouteEnter: indexNavHook.beforeRouteEnter,
  beforeRouteLeave: indexNavHook.beforeRouteLeave
}
</script>

<style lang="css" type="text/css">
.fullpage{
  min-height: 100%;
  background: white;
}
.shoppingCar-headbar-bg {
  background: #d81e06;
}
.shoppingCar-content{
  font-size: .16rem;
  background: white;
}
input[type="checkbox"]{
  width: .15rem;
  height: .15rem;
  border: none;
  outline: none;
}
.shoppingCar-content>ul{
  margin-bottom: .59rem;
}
.edit{
  font-size: .16rem;
  position: absolute;
  top: 0.14rem;
  right: 0.1rem;
  z-index: 100;
  color: white;
  font-weight: 400;
}
.pay-bar{
  position: fixed;
  bottom: .49rem;
  width: 100%;
  height: .58rem;
  background: #f1f1f1;
  line-height: .58rem;
}
.pay-bar div{
  display: inline-block;
  vertical-align: middle;
}
.pay-bar>div:nth-child(1){
  padding-left: 0.1rem;
  color: #343434;
  font-size: .17rem;
  height: .58rem;
}
.pay-bar>div:nth-child(1) input{
  margin-right: .08rem;
}
.pay-bar>div:nth-child(2) div{
  margin: .12rem 0 0 .22rem;
  color: #343434;
  line-height: .2rem;
}
.pay-bar>div:nth-child(2) div{
  margin: .12rem 0 .06rem .22rem;
  color: #343434;
}
.pay-bar>div:nth-child(2) div span{
  color: #ed601b;
}
.pay-bar>div:nth-child(2) div:after{
  content: "(不含运费)";
  font-size: .13rem;
  color: #999;
  display: block;
}
.pay-bar button{
  position: absolute;
  top: 0.11rem;
  right: 0.1rem;
  background: #ee4147;
  color: white;
  font-size: .17rem;
  width: 1.125rem;
  height: .36rem;
  outline: none;
  border: none;
  border-radius: 5px;
}
.carItem{
  padding: .14rem .1rem;
  border-bottom: 1px solid #e1e1e1;
  position: relative;
}
input[type="checkbox"]{
  border-radius: 100%;
  border: 1px solid #ddd;
  -webkit-appearance: none;
  vertical-align: middle;
}
input[type="checkbox"]:checked{
  border: none;
  background: url(images/selected.png) no-repeat;
  background-size: 100% 100%;
}
.carItem img{
  width: .69rem;
  height: .68.5rem;
  vertical-align: middle;
}
.carItem{
  vertical-align: middle;
}
.carItem>div{
  display: inline-block;
}
.carItem>div>div{
  display: inline-block;
  width: 2.4rem;
  vertical-align: middle;
}
.carItem>div>div p:nth-child(1){
  width: 2rem;
  color: #1a1a1a;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.carItem>div>div p:nth-child(2){
  color: #757575;
  font-size: .13rem;
  padding: .11rem 0;
}
.carItem>div>div p:nth-child(3)>span:first-child{
  color: #de0000;
  font-size: .13rem;
  font-weight: bolder;
}
.carItem>div>div p:nth-child(3)>span:last-child{
  position: absolute;
  font-size: .17rem;
  color: #404040;
  right: .1rem;
  top: .65rem;
}
.carItem>div>div p:nth-child(3) .edit-amount{
  position: absolute;
  right: .1rem;
  top: .6rem !important;
}
.carItem>div>div p:nth-child(3) .edit-amount>span:first-child{
  display: inline-block;
  width: .2rem;
  height: .2rem;
  font-size: .2rem;
  line-height: .2rem;
  text-align: center;
  border-radius: 100%;
  border: 1px solid #e1e1e1;
}
.carItem>div>div p:nth-child(3) .edit-amount>span:last-child{
  display: inline-block;
  width: .2rem;
  height: .2rem;
  font-size: .2rem;
  color: #f29004;
  line-height: .2rem;
  text-align: center;
  border-radius: 100%;
  border: 1px solid #e1e1e1;
}
.canReduce{
  color: #f29004;
}
.add_del-enter-active {
  transition: all .3s ease;
}
.add_del-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.add_del-leave-to,.add_del-enter,.add_del-leave{
  transform: translateX(100%);
}
</style>
