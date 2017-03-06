<template>
  <div id="aboutus">
    <div class="header">
      <img src="../my/assets/back.png" alt="" class="back" @click="back">
    	<headbar title="关于我们" custombg="header-bg"></headbar>
    </div>
    <div class="aboutus-content">
      <p>关于我们关于我们关于我们关于我们</p>
    </div>
  </div>
</template>
<script>
import Header from '../common/header/Header.vue';
import router from '../../router/index.js';

export default {
  data() {
    return {
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
#aboutus {
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
.aboutus-content{
  padding: .15rem .1rem;
}
</style>
