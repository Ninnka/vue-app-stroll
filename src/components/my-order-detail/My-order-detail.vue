<template>
  <div id="orderdetail">
    <div class="header">
      <img src="../my/assets/back.png" alt="" class="back" @click="back">
    	<headbar title="订单详情"></headbar>
    </div>
    <div class="orderdetail-content">
      <detailcontent kind="退货" :orderDatas="orderDatas"></detailcontent>
    </div>
  </div>
</template>
<script type="text/javascript">
import Header from '../common/header/header.vue';
import router from '../../router/index.js';
import ContentComponent from './My-order-detail-component.vue';

export default {
  data() {
    return {
      orderDatas: {
        orderId: 'SKYJ12525441',
        contactar: '小明',
        phone: '13562021254',
        address: '广州市天河区TIT广场',
        createTime: '2015-10-02 12:20',
        payTime: '2015-10-02 12:20',
        reciveTime: '2015-10-02 12:20',
        rejectTime: '2015-10-02 12:20',
        logistics: '申通物流 5221255142',
        fare: 10,
        remark: '',
        goods: [{
          imgsrc: '',
          name: '坚果',
          money: 29.5,
          num: 2,
          descript: '1盒6片'
        }]
      }
    }
  },
  components: {
    headbar: Header,
    detailcontent: ContentComponent
  },
  methods: {
    // 返回上一页
    back() {
      router.push('/orders');
    }
  }
}
</script>
<style lang="css" type="text/css" scoped>

#orderdetail {
	padding-top: .45rem;
	font-size: .16rem;
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
</style>
