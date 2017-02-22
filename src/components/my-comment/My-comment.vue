<template>
  <div id="comment">
    <div class="header">
      <img src="../my/assets/back.png" alt="" class="back" @click="back">
    	<headbar title="评价" custombg="header-bg"></headbar>
    </div>
    <div class="comment-content">
      <h3>购买商品</h3>
      <div v-for="item in goods" class="goods-box">
        <goods-list-item :itemDatas="item"></goods-list-item>
      </div>
      <div class="stars-box">
        评论
        <stars class="stars"></stars>
      </div>
      <textarea name="" id="" cols="10" rows="10"></textarea>
      <button>确认</button>
    </div>
  </div>
</template>
<script type="text/javascript">
import Header from '../common/header/Header.vue';
import router from '../../router/index.js';
import GoodsListItem from '../common/goods-list-item/Goods-list-item.vue';
import Stars from '../common/stars/Stars.vue';

export default {
  data() {
    return {
      currentOrderId: this.$route.params.orderId,
      goods: [{
        orderId: '44444444',
        imgsrc: 'http://img0.imgtn.bdimg.com/it/u=3591062166,259933728&fm=21&gp=0.jpg',
        name: '坚果',
        price: 29.5,
        num: 1,
        evaluation: '',
        specification: '一盒6片'
      },
      {
        orderId: '99999999',
        imgsrc: 'http://img0.imgtn.bdimg.com/it/u=3591062166,259933728&fm=21&gp=0.jpg',
        name: '坚果',
        price: 29.5,
        num: 1,
        evaluation: '好难吃!',
        specification: '一盒6片'
      }]
    }
  },
  components: {
    headbar: Header,
    'goods-list-item': GoodsListItem,
    stars: Stars
  },
  methods: {
    // 返回上一页
    back() {
      router.go(-1);
    }
  },
  mounted() {
    console.log('asdasdasdasdas');
  }
}
</script>
<style lang="css" type="text/css" scoped>
.header-bg{
  background:#D00009
}
#comment {
	padding-top: .45rem;
	font-size: .16rem;
	background: #fff;
}
a{
	color: #a3a3a3
}
.back {
	position: fixed;
	z-index: 100;
	top: .13rem;
	left: .1rem;
	width: .1rem;
	height: .18rem;
}
.comment-content{
  padding:.15rem;
}
.comment-content h3{
  line-height: .2rem;
  margin-bottom: .1rem;
  font-size: .18rem;
}
.goods-box>div{
  border-top: 1px solid #EAEBEC;
}
.goods-box>div:last-child{
  border-bottom: 1px solid #EAEBEC;
}
.stars-box{
  width: 100%;
  overflow: hidden;
  line-height: .5rem;
}
.stars-box .stars{
  width: 1.58rem;
  float: right; 
}
textarea{
  margin: .1rem auto;
  padding: .1rem;
  display: block;
  width: 100%;
  height: 1.4rem;
  background: #ECEDEF;
  border:1px solid #E5E5E6;
  outline: none;
  font-size: .16rem;
  box-sizing: border-box;
}
button{
  display: block;
  margin: .5rem auto;
  box-sizing: border-box;
  width: 90%;
  background: #BC660B;
  border: none;
  outline: none;
  border-radius: .05rem;
  line-height: .3rem;
  color: #fff;
  font-size: .16rem;
  letter-spacing: .1rem;
};
</style>
