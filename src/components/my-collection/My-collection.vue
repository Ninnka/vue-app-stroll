<template>
  <div id="collection">
    <div class="header">
      <img src="../my/assets/back.png" alt="" class="back" @click="back">
    	<headbar title="我的收藏" custombg="header-bg"></headbar>
      <span @click="edit">{{editText}}</span>
    </div>
    <div class="collection-content">
    <transition-group name="add_del" mode="in-out">
    	<!-- <ul> -->
        <div v-for="item in listDatas" class="collection-item" :key="item.key">
          <transition name="inputtranslate">
            <input type="checkbox" v-if="isEdit" name="orders" v-model="item.check">
          </transition>
          <img :src="item.imgsrc" alt="">
          <p>{{item.title}}</p>
          <p>{{item.money}}</p>
        </div>
      <!-- </ul> -->
      </transition-group>
    </div>
    <transition name="footerShowAnim">
      <div class="collection-footer" v-if="isEdit">
        <input type="checkbox" name="all" @click="selectAll" v-model="isAll">全部
        <button @click="del">删除</button>
      </div>
    </transition>
  </div>
</template>
<script type="text/javascript">
import Header from '../common/header/header.vue';
import router from '../../router/index.js';
import OrderImg from '../my/assets/order-img.png';

export default {
  data() {
    return {
      editText: '编辑',
      listDatas: [{
        key: 1,
        title: '坚果特产',
        money: '￥29.5',
        imgsrc: OrderImg,
        check: false
      },
      {
        key: 2,
        title: '坚果特产',
        money: '￥29.5',
        imgsrc: OrderImg,
        check: false
      },
      {
        key: 3,
        title: '坚果特产',
        money: '￥29.5',
        imgsrc: OrderImg,
        check: false
      }],
      isEdit: false,
      isAll: false
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
    // 编辑
    edit() {
      if (this.isEdit) {
        this.editText = '编辑';
      } else {
        this.editText = '完成';
      }
      this.isEdit = !this.isEdit;
    },
    // 选择全部
    selectAll() {
      for (let i = 0; i < this.listDatas.length; i++) {
        this.listDatas[i].check = this.isAll;
      }
    },
    del() {
      let delArr = [];
      for (let i = 0; i < this.listDatas.length; i++) {
        if (this.listDatas[i].check === true) {
          delArr.unshift(i);
        }
      }
      for (let j = 0; j < delArr.length; j++) {
        console.log(delArr[j]);
        this.listDatas.splice(delArr[j], 1);
      }
    }
  }
}
</script>
<style lang="css" type="text/css" scoped>
.header-bg{
  background:#D00009
}
.inputtranslate-enter-active {
  transition: all .3s ease;
}
.inputtranslate-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.inputtranslate-enter, .inputtranslate-leave-to, .inputtranslate-leave
/* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateX(-.4rem);
  /*opacity: 0;*/
  /*width:0;*/
}
.add_del-enter-active {
  transition: all .5s ease;
}
.add_del-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.add_del-leave-to,.add_del-enter,.add_del-leave
/* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateX(100%);
  opacity: 0;
  /*width:0;*/
}
.footerShowAnim-enter-active {
  transition: all .3s ease;
}
.footerShowAnim-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.footerShowAnim-enter, .footerShowAnim-leave-to, .footerShowAnim-leave
/* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateY(.4rem);
  /*opacity: 0;*/
  /*width:0;*/
}

#collection {
	padding-top: .45rem;
	font-size: .16rem;
	height: 100%;
	background: #fff;
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
.collection-item{
  padding: .1rem;
  overflow: hidden;
  border-bottom: 1px solid #E7E7E7;
}
.collection-item input{
  margin: .23rem .08rem 0 0;
  float: left;
  width: .17rem;
  height: .17rem;
  vertical-align: middle;
}
.collection-item img{
  margin-right: .1rem;
  float: left;
  width: .7rem;
  height: .7rem;
  vertical-align: middle;
}
.collection-item p{
  /*margin-left: 1.0rem;*/
  color: #606060;
}
.collection-item p:last-child{
  margin-top: .2rem;
  color: red;
}
.collection-footer{
  padding: .05rem .2rem;
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #EFEFEF;
  line-height: .4rem;
  color: #575757;
}
.collection-footer button{
  float: right;
  margin-right: .3rem;
  padding: .1rem .3rem;
  background: #E72837;
  border:none;
  outline: none;
  color: #fff;
  font-size: .14rem;
  border-radius: .05rem;
}
</style>
