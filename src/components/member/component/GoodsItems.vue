<template lang="html">
  <div class="goodsContent">
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
	</div>
</template>

<script type="text/javascript">
import router from '../../../router';

export default {
  data() {
    return {
      goodsData: [{
        goodsID: '1',
        title: '休闲零食五味园pk脆 独立小包装500g独立小包装500g',
        vipPrice: '10.9',
        originPrice: '12.8',
        imgsrc: require('./../images/goods1.jpg')
      },
      {
        goodsID: '2',
        title: '坚果特产山核桃奶油味 碧根果210gx2袋',
        vipPrice: '29.5',
        originPrice: '42.5',
        imgsrc: require('./../images/goods2.jpg')
      },
      {
        goodsID: '3',
        title: '休闲零食五味园pk脆 独立小包装500g',
        vipPrice: '10.9',
        originPrice: '12.8',
        imgsrc: require('./../images/goods1.jpg')
      },
      {
        goodsID: '4',
        title: '坚果特产山核桃奶油味 碧根果210gx2袋',
        vipPrice: '29.5',
        originPrice: '42.5',
        imgsrc: require('./../images/goods2.jpg')
      },
      {
        goodsID: '5',
        title: '坚果特产山核桃奶油味 碧根果210gx2袋',
        vipPrice: '29.5',
        originPrice: '42.5',
        imgsrc: require('./../images/goods2.jpg')
      }]
    }
  },
  methods: {
    toGoodetail(id) {
      router.push({
        name: 'member-good-detail',
        params: {
          goodsId: id
        }
      });
    }
  }
}
</script>

<style lang="css" type="text/css">
.goodsContent{
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
 /* display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  word-break: break-all;*/
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
