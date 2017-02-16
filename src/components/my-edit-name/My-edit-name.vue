<template>
  <div id="editname">
    <div class="header">
      <img src="../my/assets/back.png" alt="" class="back" @click="back">
    	<headbar title="姓名"></headbar>
    </div>
    <div class="editname-content">
      <input type="text" v-model="name">
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
      name: '小明'
    }
  },
  components: {
    headbar: Header
  },
  methods: {
    // 返回上一页
    back() {
      router.push('/basemsg');
    }
  }
}
</script>
<style lang="css" type="text/css" scoped>

#editname {
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
.editname-content input{
  display: block;
  padding-left: .1rem;
  font-size: .16rem;
  width: 92%;
  margin: .3rem auto;
  line-height: .4rem;
  border-radius:.1rem;
  border: 1px solid #DCDCDD;
  outline: none;
  /*padding: .15rem .1rem;*/
}
.editname-content button{
  display: block;
  margin: .3rem auto;
  width: 90%;
  line-height: .4rem;
  background: #D0700C;
  color: #fff;
  font-size: .16rem;
  border:none;
  border-radius: .1rem;
}
</style>
