<template>
  <div id="energy">
    <div class="header">
      <img src="../my/assets/back.png" alt="" class="back" @click="back">
    	<headbar title="关于我们"  custombg="header-bg"></headbar>
    </div>
    <div class="energy-content">
      <div>行业类型：<input type="text" v-model="kind"></div>
      <div>我能供能：<input type="text" v-model="energy"></div>
      <div><span>描述</span> <textarea name="" id="" cols="30" rows="10" v-model="descript"></textarea></div>
      <h3>图片：</h3>
      <div class="add-box">
         <input type="file" accept="image/*">
        <span class="add-pic"></span>
      </div>
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
      kind: '',
      energy: '',
      descript: ''
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
.header-bg{
  background:#D00009
}
#energy {
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
.energy-content{
  padding: .15rem .1rem;
}
.energy-content div{
  position: relative;
  display: flex;
  padding:.1rem;
  margin-bottom: .1rem;
  width: 90%;
  background: #fff;
  border: 1px solid #E2E4E5;
  border-radius: .1rem;
  line-height: .2rem;
}
.energy-content div input{
  flex:1 1;
  font-size: .16rem;
  outline: none;
}
.energy-content>div:nth-child(3) span{
  position: absolute;
}
.energy-content>div:nth-child(3) textarea{
  /*background: red;*/
  width: 100%;
  height: 100%;
  text-indent: .35rem;
  outline: none;
}
.energy-content h3{
  margin: .05rem .02rem .2rem;
}
.energy-content .add-box{
  width: 1rem;
  height: 1rem;
  border: 1px solid #E2E4E5;
  border-radius: .1rem;
  background: #fff url(../my/assets/bg-addpic.png) no-repeat center center;
}
.energy-content .add-box input{
  display: block;
  width: 100%;
  height:100%;
  opacity: 0;
}
.energy-content button{
  position: fixed;
  bottom: .3rem;
  left: 10%;
  width: 80%;
  line-height: .4rem;
  background: #D0700C;
  color: #fff;
  font-size: .16rem;
  border:none;
  border-radius: .1rem;
}
</style>
