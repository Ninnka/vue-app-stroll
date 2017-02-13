<template lang="html">
  <div id="my">
    <div class="header">
      <headbar></headbar>
      <div class="avatar">
        <img :src="userDatas.avatar" alt="">
        <img :src="gradeVip" alt="" v-if="userDatas.grade == 'VIP会员'">
        <img :src="gradePartner" alt="" v-if="userDatas.grade == '股东会员'">
      </div>
      <p class="username">{{userDatas.username}}</p>
      <p class="grade" v-if="userDatas.grade != '普通会员'">{{userDatas.grade}}</p>
    </div>
    <div class="my-content">
      <ul> 
        <li v-for="item in listDataTop">
        <router-link :to="item.toUrl">
          <img :src="item.ico" alt="">{{item.text}}
        </router-link>
        </li>
      </ul>
      <ul> 
        <li v-for="item in listDataBottom">
          <router-link to="">
            <img :src="item.ico" alt="">{{item.text}}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/javascript">
import Header from '../common/header/header.vue';
import AvatarValue from './assets/avatar.png';
import GradeVip from './assets/grade_vip.png';
import GradePartner from './assets/grade_partner.png';
import IcoBase from './assets/ico_base.png';
import IcoOrder from './assets/ico_order.png';
import IcoCollection from './assets/ico_collection.png';
import IcoWallet from './assets/ico_wallet.png';
import IcoAddress from './assets/ico_address.png';
import IcoVip from './assets/ico_vip.png';
import IcoMore from './assets/ico_more.png';
import IcoLoginout from './assets/ico_loginout.png';

export default {
  data() {
    return {
      // 用户信息
      userDatas: {
        username: '阿萨德',
        avatar: AvatarValue,
        grade: 'VIP会员'
      },
      // 图片资源
      gradeVip: GradeVip,
      gradePartner: GradePartner,
      listDataTop: [{
        toUrl: '/basemsg',
        ico: IcoBase,
        text: '基本信息'
      },
      {
        toUrl: '/basemsg',
        ico: IcoOrder,
        text: '我的订单'
      },
      {
        toUrl: '/collection',
        ico: IcoCollection,
        text: '我的收藏'
      },
      {
        toUrl: 'my/basemsg',
        ico: IcoWallet,
        text: '我的钱包'
      },
      {
        toUrl: 'my/basemsg',
        ico: IcoAddress,
        text: '收货地址'
      },
      {
        toUrl: '/upgrade',
        ico: IcoVip,
        text: '升级会员'
      }],
      listDataBottom: [{
        toUrl: 'my/basemsg',
        ico: IcoMore,
        text: '更多'
      },
      {
        toUrl: 'my/basemsg',
        ico: IcoLoginout,
        text: '注销'
      }]
    }
  },
  components: {
    headbar: Header
  }
}
</script>

<style lang="css" type="text/css" scoped>
a{
  color: #000;
}
#my{
  font-size: .12rem;
  background: #f5f5f5;
  height: 100%;
}
#my .header{
    padding-top: 1px;
    position: fixed;
    z-index: 100;
    top: .43rem;
    width: 100%;
    height: 1.6rem;
    background: #228733;
}
.header p{
  color: #fff;
  text-align: center;
}
.header p:nth-child(3){
  margin-top: .1rem;
  font-size: .16rem;
}
.header p:nth-child(4){
  margin: .12rem auto;
  padding:.05rem;
  border:1px solid rgba(255,255,255,.6);
  border-radius: .5rem;
  width: .69rem;
  background: rgba(255,255,255,.1);
}
.avatar{
  position: relative;
  margin:0 auto;
  border: 2px solid rgba(255,255,255,.8);
}
.avatar,.avatar img:nth-child(1){
  width: .8rem;
  height: .8rem;
  border-radius: 100%;
}

.avatar img:nth-child(2),.avatar img:nth-child(3){
  position: absolute;
  bottom: -.03rem;
  right: .04rem;
  width: .25rem;
  height: .2rem;
}
.my-content{
  padding-top: 1.6rem;
}
ul{
  margin:.08rem 0 .09rem;
  background: #fff;
}
ul li{
  margin-left: .17rem;
  border-bottom: 1px solid #f5f5f5;
  background: url('./assets/arrow_left.png') no-repeat 97% 50%;
  background-size: .08rem .15rem;
  line-height: .4rem;
  font-size: .15rem;
}
ul li router-link{
  display: block;
  width: 100%;
  height: 100%;
  color: #000;
}
ul li img{
  margin-right: .1rem;
  width: .2rem;
  height: .2rem;
  vertical-align: middle;
}
</style>
