<template>
  <div id="detail">
    <div class="content-top">
      <p>{{orderDatas.contactar}} <span>{{orderDatas.phone}}</span></p>
      <p>{{orderDatas.address}}</p>
    </div>
    <div class="content-middle">
      <p>购买商品 <slot name="rejectGoods"></slot><span>{{kind}}</span></p>
      <div v-for="item in orderDatas.goods" class="goods-box">
        <span>x{{item.num}}</span>
        <img src="http://img0.imgtn.bdimg.com/it/u=3591062166,259933728&fm=21&gp=0.jpg" alt="">
        <p>{{item.name}}</p>
        <p>规格：{{item.descript}}</p>
        <p>￥{{item.money}}</p>
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

export default {
  props: ['kind', 'orderDatas']
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
  position: relative;
  padding: .1rem 0;
  overflow: hidden;
  border-top: 1px solid #D9D9DA;
}
.content-middle div span{
  position: absolute;
  right: 0;
  bottom: .1rem;
}
.content-middle div img{
  margin-right: .1rem;
  float: left;
  width: .8rem;
  height: .8rem;
}
.content-middle div p{
  line-height: .27rem;
}
.content-middle div p:nth-child(4){
  color: #828383;
}
.content-middle div p:nth-child(5){
  color: #CB0003;
}
.content-bottom h3{
  margin-bottom: .1rem;
  /*background: red;*/
  line-height: .2rem;
  border-bottom: 1px solid #E6E6E7;
}
.content-bottom p{
  line-height: .25rem;
}
</style>
