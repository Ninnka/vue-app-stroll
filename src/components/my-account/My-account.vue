<template>
  <div id="account">
    <div class="header">
      <img src="../my/assets/back.png" alt="" class="back" @click="back">
    	<headbar title="账单" custombg="header-bg"></headbar>
    </div>
    <div class="account-content">
      <div v-for="item in listDatas">
        <h3>{{item.month}}月</h3>
        <ul>
          <li v-for="detailItem in item.detail">
            <p><span>{{detailItem.money>0?"充值":"消费"}}</span>
            <span>{{detailItem.money>0?"+100":"-100"}}</span></p>
            <p>{{detailItem.time}}</p> 
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import Header from '../common/header/Header.vue';
import router from '../../router/index.js';
export default {
  data() {
    return {
      listDatas: [{
        month: (new Date()).getMonth() + 1,
        detail: [{
          money: 100,
          time: '2015-10-15 14:25'
        },
        {
          money: -100,
          time: '2015-10-15 14:25'
        }]
      },
      {
        month: (new Date()).getMonth(),
        detail: [{
          money: 100,
          time: '2015-10-15 14:25'
        },
        {
          money: 100,
          time: '2015-10-15 14:25'
        }]
      }]
    }
  },
  components: {
    headbar: Header
  },
  methods: {
    // 返回上一页
    back() {
      router.go(-1);
    }
  }
}
</script>
<style lang="css" type="text/css" scoped>
.header-bg{
  background:#D00009
}
#account {
	padding-top: .45rem;
	font-size: .16rem;
	height: 100%;
	background: #f5f5f5;
}
a{
	color: #a3a3a3
}
.header span{
  position: fixed;
  z-index: 100;
  right: .1rem;
  top: .14rem;
  color: #fff;
}
.back {
	position: fixed;
	z-index: 100;
	top: .13rem;
	left: .1rem;
	width: .1rem;
	height: .18rem;
}
ul{
  border-top: 1px solid #E7E7E7;
  background: #fff;
}
ul li{
  padding: .08rem;
  line-height: .25rem;
  border-bottom: 1px solid #E7E7E7;
}
ul li p:first-child span:last-child{
  float: right;
}
ul li p:last-child{
  color: #6C6C6C;
}
h3{
  margin: .1rem;
  font-size: .18rem;
}
</style>
