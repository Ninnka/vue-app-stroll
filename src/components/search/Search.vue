<template lang="html">
  <div class="fullpage main-theme-background search-main-content content-hasheader normal-fontsize border-box overscroll">
      <head-bar title="搜索" :custombg="headbarbg">
        <backward slot="backward-icon" v-on:backward="backward"></backward>
      </head-bar>

      <search-bar v-on:searchContent="searchContent" callbackEvent="searchContent"></search-bar>

      <div class="search-hot-wrapper" v-show="!resulted && !noresult">
        <p>热门搜索</p>
        <div class="search-hot flex-box">
          <div class="recommend-item" v-for="s in searchHotList" @click="searchContent(s)">{{s}}</div>
        </div>
      </div>

      <ul class="search-result" v-show="resulted">
        <li class="result-item flex-box border-box" v-for="searchItem in searchResultList">
          <img :src="searchItem.thumbnail" alt="" class="result-good-thumbnail">
          <div class="result-good-desc">
            <p>{{searchItem.name}}</p>
            <p>￥ {{searchItem.price}}</p>
          </div>
        </li>
      </ul>

      <div class="search-no-result" v-if="noresult">
        <img src="../../assets/images/icon-cry.png" alt="">
        <p>抱歉，没有找到相关商品！</p>
        <p>给我留言告诉你喜欢的东西吧</p>
        <div class="button button-leavemessage" @click="showLeaveMsg">我要留言</div>
      </div>

      <transition name="fade">
        <mask-bg v-if="leaveMsgStatus">
          <leave-message v-on:closeLeaveMsg="closeLeaveMsg"></leave-message>
        </mask-bg>
      </transition>
  </div>
</template>

<script>
import router from 'src/router';

import Header from 'components/common/header/Header';
import Mask from 'components/common/mask/Mask';
import LeaveMessage from 'components/common/leave-message/LeaveMessage';
import SearchBar from 'components/common/search-bar/SearchBar';
import Backward from 'components/common/icon-backward/IconBackward';

export default {
  data() {
    return {
      headbarbg: 'search-headbar-bg',
      hasfocus: false,
      searchinput: '',
      buttonText: '取消',
      resulted: false,
      noresult: false,
      leaveMsgStatus: false,
      searchHotList: [
        '小挎包',
        '小挎包包包',
        '小挎包包',
        '不知道什么鬼',
        '小挎',
        '小挎包',
        '小挎',
        '小挎包',
        '坚果山核桃奶油味'
      ],
      searchResultList: [
        {
          thumbnail: require('./images/good-search-thumbnail.jpg'),
          name: '坚果特产山核桃奶油味碧根坚果坚果坚果',
          price: '29.5'
        },
        {
          thumbnail: require('./images/good-search-thumbnail.jpg'),
          name: '坚果特产黄油味坚果坚果坚果坚果',
          price: '29.5'
        }
      ]
    }
  },
  methods: {
    backward() {
      router.go(-1);
    },
    searchContent(s) {
      // 模拟搜索
      if (s && s !== 'no') {
        this.noresult = false;
        this.resulted = true;
      } else if (s === 'no') {
        this.resulted = false;
        this.noresult = true;
      }
    },
    showLeaveMsg() {
      this.leaveMsgStatus = true;
    },
    closeLeaveMsg() {
      this.leaveMsgStatus = false;
    }
  },
  created() {

  },
  components: {
    headBar: Header,
    maskBg: Mask,
    leaveMessage: LeaveMessage,
    searchBar: SearchBar,
    backward: Backward
  }
}
</script>

<style lang="scss">@import "./scss/search.scss";</style>
