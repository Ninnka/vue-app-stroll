<template>
  <div class="wrap">
    <div><span>订单编号：{{itemdata.orderId}}</span><span>{{title}}</span></div>
    <div>
      <img :src="itemdata.imgsrc" alt="">
      <span>x{{itemdata.num}}</span>
      <p>{{itemdata.name}}</p>
      <p>￥{{itemdata.price}}</p>

    </div>
    <div>
      <span>共{{itemdata.num}}件</span>
      <span>合计：￥{{itemdata.price*itemdata.num}}</span>
      <slot name="btns"></slot>  
    </div>
  </div>
</template>
<script>
export default {
  props: ['itemdata', 'title']
}
</script>
<style lang="css" type="text/css" scoped>
.wrap{
  padding:0 .1rem;
  background: #fff;
  color: #000;
  font-size: .14rem;
  border-bottom: 1px solid #E6E7E7;
  border-top: 1px solid #E6E7E7;
}
.wrap>div:nth-child(1){
  line-height: .4rem;
  border-bottom: 1px solid #E6E7E7;
}
.wrap>div:nth-child(1)>span:last-child{
  float: right;
  color: #E59650;
}
.wrap>div:nth-child(2){
  position: relative;
  overflow: hidden;
  padding: .1rem 0;
}
.wrap>div:nth-child(2) img{
  float: left;
  width: .8rem;
  height: .8rem;
}
.wrap>div:nth-child(2)>span{
  position: absolute;
  right: 0;
  bottom: .1rem;
  letter-spacing: .03rem;
}
.wrap>div:nth-child(2)>p{
  margin:0 0 .2rem .9rem;
}
.wrap>div:nth-child(2)>p:last-child{
  margin:0 0 .2rem .86rem;
  color: red;
  font-size: .16rem;
}
.wrap>div:nth-child(3){
  position: relative;
  border-top: 1px solid #E6E7E7;
  line-height: .4rem;
}
</style>
