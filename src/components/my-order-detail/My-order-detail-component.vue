<template>
  <div id="detail">
    <div class="content-top">
      <p>{{orderDatas.contactar}} <span>{{orderDatas.phone}}</span></p>
      <p>{{orderDatas.address}}</p>
    </div>
    <div class="content-middle">
      <p>购买商品 <slot name="rejectGoods"></slot><span>{{kind}}</span></p>
      <div v-for="item in orderDatas.goods">
        <goods-list-item class="goods-box" :itemDatas="item"></goods-list-item>
      </div>
      <p>运费：<span>￥{{orderDatas.fare}}</span></p>
      <p>备注：{{orderDatas.remark}}</p>
    </div>
    <div class="content-bottom">
      <h3>订单信息</h3>
      <p>订单编号：{{orderDatas.orderId}}</p>
      <p>创建时间：{{orderDatas.createTime}}</p>
      <p>付款时间：{{orderDatas.payTime}}</p>
      <p>物流信息：{{orderDatas.logistics}}</p>
      <p>收货时间：{{orderDatas.reciveTime}}</p>
      <p>退货时间：{{orderDatas.rejectTime}}</p>
    </div>
    <slot name="btn"></slot>
  </div>
</template>
<script type="text/javascript">
import Header from '../common/header/header.vue';
import router from '../../router/index.js';
import GoodsListItem from '../common/goods-list-item/Goods-list-item.vue';

export default {
  props: ['kind', 'orderDatas'],
  components: {
    'goods-list-item': GoodsListItem
  }
}
</script>
<style lang="css" type="text/css" scoped>
#detail {
  margin-bottom: .45rem;
	font-size: .16rem;
	background: #f5f5f5;
  overflow-y: scroll;
}
.content-top,.content-middle,.content-bottom{
  position: relative;
  padding: .1rem;
  background: #fff;
  border:1px solid #EBECEC;
}
.content-top p{
  line-height: .3rem;
}
.content-top p span{
  margin-left: .15rem;
}
.content-middle{
  margin: .1rem 0;
}
.content-middle>p{
  position: relative;
  line-height: .4rem;
  border-top: 1px solid #E0E0E1;
}
.content-middle>p:nth-child(1){
  border-top: none;
}
.content-middle>p:nth-child(1) span{
  position: absolute;
  right: 0;
}
.goods-box{
  border-top: 1px solid #D9D9DA;
}
.content-bottom h3{
  margin-bottom: .1rem;
  line-height: .2rem;
  border-bottom: 1px solid #E6E6E7;
}
.content-bottom p{
  line-height: .25rem;
}
</style>
