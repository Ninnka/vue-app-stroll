<template lang="html">
  <div class="fullpage">
    <div class="header">
      <headbar title="购物车" :custombg="custombg"></headbar>
      <span class="edit" @click="edit">{{edit_bol?"编辑":"完成"}}</span>
    </div>
    <div class="shoppingCar-content">
      <ul>
        <li v-for="data in goodsItems" class="carList">
          <div>
            <input type="checkbox" v-model="checked" :value="data.id"/>
            <img :src="data.imgsrc" alt="">
            <div>
              <p>{{data.title}}</p>
              <p>规格：{{data.spec}}</p>
              <p>
                <span>￥{{data.price}}</span>
                <span v-if="!edit_bol" class="edit-amount">
                  <span>-</span>
                  <span>{{data.amount}}</span>
                  <span>+</span>
                </span>
                <span v-if="edit_bol">x {{data.amount}}</span>
              </p>
            </div>
          </div>
        </li>
      </ul>
      <div class="pay-bar">
        <div><input type="checkbox" v-model="allChecked">全选</div>
        <div v-if="edit_bol">
          <div>合计: <span>￥123.00</span></div>
        </div>
        <button v-if="edit_bol" @click="refine">结算 <span>(1)</span></button>
        <button v-else="edit_bol">删除</button>
      </div>
    </div>
    <transition name="slide-fade">
      <router-view name="refineordercontent" class="content-router-view position-absolute"></router-view>
    </transition>
  </div>
</template>

<script type="text/javascript">
import router from '../../router';

import header from '../common/header/Header.vue';

export default {
  data() {
    return {
      custombg: 'shoppingCar-headbar-bg',
      all: false,
      totalMoney: 0,
      checked: [],
      buyData: [],
      edit_bol: true,
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
      }]
    }
  },
  methods: {
    edit() {
      this.edit_bol = !this.edit_bol;
    },
    refine() {
      router.push({
        name: 'refine-order'
      })
    }
  },
  components: {
    headbar: header
  },
  computed: {
    allChecked: {
      get: function() {
        return this.checkedCount === this.goodsItems.length;
      },
      set: function(value) {
        if (value) {
          this.checked = this.goodsItems.map(function(item) {
            return item.id
          })
        } else {
          this.checked = []
        }
      }
    },
    checkedCount: {
      get: function() {
        return this.checked.length;
      }
    }
  }
}
</script>

<style lang="css" type="text/css">
.fullpage{
  min-height: 100%;
}
.shoppingCar-headbar-bg {
  background: #228733;
}
.shoppingCar-content{
  font-size: .16rem;
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
.carList{
  padding: .14rem .1rem;
  border-bottom: 1px solid #e1e1e1;
}
.carList>div img{
  width: .69rem;
  height: .68.5rem;
  vertical-align: middle;
}
.carList>div{
  vertical-align: middle;
}
.carList>div>div{
  display: inline-block;
  width: 2.56rem;
  vertical-align: middle;
}
.carList>div>div p:nth-child(1){
  width: 2rem;
  color: #1a1a1a;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.carList>div>div p:nth-child(2){
  color: #757575;
  font-size: .13rem;
  padding: .11rem 0;
}
.carList>div>div p:nth-child(3)>span:first-child{
  color: #de0000;
  font-size: .13rem;
  font-weight: bolder;
}
.carList>div>div p:nth-child(3)>span:last-child{
  float: right;
  font-size: .17rem;
  color: #404040;
}
.carList>div>div p:nth-child(3) .edit-amount>span:first-child{
  display: inline-block;
  width: .16rem;
  height: .16rem;
  font-size: .17rem;
  line-height: .16rem;
  text-align: center;
  border-radius: 100%;
  border: 1px solid #eee;
}
.carList>div>div p:nth-child(3) .edit-amount>span:last-child{
  display: inline-block;
  width: .16rem;
  height: .16rem;
  font-size: .17rem;
  line-height: .16rem;
  text-align: center;
  border-radius: 100%;
  border: 1px solid #eee;
}
</style>
