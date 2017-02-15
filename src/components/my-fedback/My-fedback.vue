<template>
  <div id="fedback">
    <div class="header">
      <img src="../my/assets/back.png" alt="" class="back" @click="back">
    	<headbar title="意见反馈"></headbar>
    </div>
    <div class="fedback-content">
      <textarea id="" cols="30" rows="10" v-model="text"></textarea> 
      <button>确认</button>   
    </div>
  </div>
</template>
<script type="text/javascript">
import Header from '../common/header/header.vue';
import router from '../../router/index.js';

export default {
  data() {
    return {
      text: ''
    }
  },
  components: {
    headbar: Header
  },
  methods: {
    // 返回上一页
    back() {
      router.push('/more');
    }
  }
}
</script>
<style lang="css" type="text/css" scoped>

#fedback {
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
textarea{
  padding: .05rem;
  width: 100%;
  height: 1.8rem;
  outline: none;
  font-size: .16rem;
}
button{
  display: block;
  padding: .1rem 0;
  margin: .2rem auto;
  width: 80%;
  background: #E87D0B;
  outline: none;
  border: none;
  border-radius: .05rem;
  font-size: .16rem;
  letter-spacing: .1rem;
  color: #fff;
}
</style>
