<template>
  <div id="questions">
    <div class="header">
      <img src="../my/assets/back.png" alt="" class="back" @click="back">
    	<headbar title="常见问题" custombg="header-bg"></headbar>
    </div>
    <div class="questions-content">
      <ul>
        <li v-for="item in qa" v-if="item.question == currentQuestion">
          <p>{{item.question}}</p>
          <p>{{item.answer}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script type="text/javascript">
import Header from '../common/header/Header.vue';
import router from '../../router/index.js';

export default {
  data() {
    return {
      currentQuestion: this.$route.params.question,
      qa: [{
        question: '1.如何修改收货地址',
        answer: '答：在个人中心-送货地址进入可修改详细地址'
      },
      {
        question: '2.如何修改密码',
        answer: '答：修改密码'
      },
      {
        question: '3.如何退款',
        answer: '答：退款'
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
#questions {
	padding-top: .45rem;
	font-size: .16rem;
	background: #f5f5f5;
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
.questions-content{
  padding: 0 .1rem;
}
li p:first-child{
  color: #909090;
  line-height: .5rem;
}
</style>
