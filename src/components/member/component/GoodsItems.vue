<template lang="html">
  <div class="goodsContent">
		<ul class="goodsItems">
		  <li class="goodsItem" v-for="gItem in goodsItems">
        <router-link :to="{name: tag,params: {goodsid: gItem.goodsID, viponly: vip,
        buyRouteName: RouteName}}">
		      <img :src="gItem.imgsrc" alt="">
		      <h2>{{gItem.title}}</h2>
		      <p>
		        <span>{{gItem.vipPrice}}</span>
		        <span>{{gItem.originPrice}}
              {{vip}}</span>
		      </p>
        </router-link>
		  </li>
		</ul>
	</div>
</template>

<script type="text/javascript">
// import router from '../../../router';

export default {
  props: ['tag', 'goodsItems', 'RouteName', 'vip'],
  data() {
    return {
      //
    }
  },
  methods: {
    //
  }
}
</script>

<style lang="css" type="text/css">
.goodsContent{
  background: #f1f1f1;
}
.goodsItems{
  padding: 0.08rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
}
.goodsItem{
  display: inline-block;
  flex-basis: 48%;
  flex-shrink: 1;
  /*width: 1.72rem;*/
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
}
</style>
