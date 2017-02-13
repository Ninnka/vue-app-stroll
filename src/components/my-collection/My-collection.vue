<template>
  <div id="collection">
    <div class="header">
      <img src="../my/assets/back.png" alt="" class="back" @click="back">
    	<headbar title="我的收藏"></headbar>
      <span @click="edit">{{editText}}</span>
    </div>
    <div class="collection-content">
    	<ul>
        <li v-for="item in listDatas">
          <input type="checkbox" v-if="isEdit" name="orders" v-model="item.check">
          <img :src="item.imgsrc" alt="">
          <p>{{item.title}}</p>
          <p>{{item.money}}</p>
        </li>
      </ul>
    </div>
    <div class="collection-footer" v-if="isEdit">
      <input type="checkbox" name="all" @click="selectAll" v-model="isAll">全部
      <button>删除</button>
    </div>
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
        title: '坚果特产',
        money: '￥29.5',
        imgsrc: OrderImg,
        check: false
      }, {
        title: '坚果特产',
        money: '￥29.5',
        imgsrc: OrderImg,
        check: false
      }
      ],
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
    }
  }
}
</script>
<style lang="css" type="text/css" scoped>
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
ul li{
  padding: .1rem;
  overflow: hidden;
  border-bottom: 1px solid #E7E7E7;
}
ul li input{
  margin: .23rem .08rem 0 0;
  float: left;
  width: .17rem;
  height: .17rem;
  vertical-align: middle;
}
ul li img{
  float: left;
  width: .7rem;
  height: .7rem;
  vertical-align: middle;
}
ul li p{
  margin-left: 1.0rem;
  color: #606060;
}
ul li p:last-child{
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
