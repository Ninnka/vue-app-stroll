<template>
  <div id="upgrade">
    <div class="header">
      <img src="../my/assets/back.png" alt="" class="back" @click="back">
    	<headbar title="升级会员"></headbar>
      <span @click="toOrder">充值</span>
    </div>
    <div class="collection-content">
    	<div>
        <h4>会员等级说明</h4>
        <p>说明文字说明文字说明文字说明文字说明文字说明文字说明文</p> 
      </div>
      <ul>
        <li><span></span><span>VIP会员</span></li>
        <li v-for="item in vipDatas">{{item}}</li>
      </ul>
      <ul>
        <li><span></span><span>股东会员</span></li>
        <li v-for="item in partnerDatas">{{item}}</li>
      </ul>
    </div>
  </div>
</template>
<script type="text/javascript">
import Header from '../common/header/header.vue';
import router from '../../router/index.js';

export default {
  data() {
    return {
      vipDatas: ['1.说明文字', '2.说明文字', '3.说明文字'],
      partnerDatas: ['1.说明文字', '2.说明文字', '3.说明文字']
    }
  },
  components: {
    headbar: Header
  },
  methods: {
    // 返回上一页
    back() {
      router.push('/index/My');
    },
    // 充值订单详情
    toOrder() {
      router.push('/recharge');
    }
  }
}
</script>
<style lang="css" type="text/css" scoped>
#upgrade {
	padding-top: .45rem;
	font-size: .16rem;
	height: 100%;
	background: #f5f5f5;
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
.header span{
  position: fixed;
  z-index: 100;
  right: .1rem;
  top: .15rem;
  font-size: .16rem;
  color: #fff;
}
.collection-content div{
  margin-bottom: .3rem;
  padding: .15rem;
  line-height: .2rem;
  color: #6F7071;
}
.collection-content ul{
margin-bottom: .6rem;
}
.collection-content ul li{
  position: relative;
  margin:0 .05rem .1rem;
  text-align: center;
}
.collection-content ul li:first-child{
  /*overflow: hidden;*/
  color: #6F7071;
}
ul li:first-child span:first-child{
  position: absolute;
  display: block;
  top:45%;
  border:1px solid #e1e1e1;
  width: 100%;
}
ul li:first-child span:last-child{
  /*position: absolute;*/
  position: relative;
  z-index: 100;
  padding: 0 .15rem;
  background: #f5f5f5;
}
</style>
