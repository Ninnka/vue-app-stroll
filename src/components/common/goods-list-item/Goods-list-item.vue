<template lang="html">
  <div class="goods-list-item">
    <img :src="itemDatas.imgsrc" alt="">
    <p>{{itemDatas.name}}</p>
    <p>规格：{{itemDatas.specification}}</p>
    <p>￥{{itemDatas.price}}</p>
    <span>x{{itemDatas.num}}</span>
  </div>
</template>

<script>
export default {
  props: [
    'itemDatas'
  ]
}
</script>

<style lang="css" type="text/css">
.goods-list-item{
  position: relative;
  padding: .1rem 0;
  overflow: hidden;
}
.goods-list-item span{
  position: absolute;
  right: 0;
  bottom: .1rem;
}
.goods-list-item img{
  margin-right: .1rem;
  float: left;
  width: .8rem;
  height: .8rem;
}
.goods-list-item p{
  line-height: .27rem;
}
.goods-list-item p:nth-child(3){
  color: #828383;
}
.goods-list-item p:nth-child(4){
  color: #CB0003;
}
</style>
