<template lang="html">
  <div class="fullpage main-theme-background merchant-content content-hasheader normal-fontsize border-box overhidden">
    <head-bar title="商家信息" :custombg="headbarbg">
      <backward slot="backward-icon" v-on:backward="backward"></backward>
    </head-bar>

    <div class="merchant-list flex-box">
      <div class="merchant-nav-wrapper overscroll">
        <ul class="merchant-nav-list border-box">
          <li v-for="(navItem, index) in navList" :class="index === currentNav ? active : ''" @click="changeNav(index)">{{navItem.name}}</li>
        </ul>
      </div>

      <div class="merchant-infolist-wrapper overscroll">
        <asset-item :infoList="infoList" v-on:viewDetail="viewDetail"></asset-item>
        <icon-loader></icon-loader>
      </div>
    </div>

    <transition name="slide-fade">
      <router-view name="assetDetail" class="content-router-view position-absolute"></router-view>
    </transition>

  </div>
</template>

<script>
import router from 'src/router';

import Header from 'components/common/header/Header';
import Backward from 'components/common/icon-backward/IconBackward';
import AssetItem from 'components/common/merchant-infoitem/asset/Asset';
import IconLoader from 'components/common/icon-loader/IconLoader';

export default {
  data() {
    return {
      currentNav: 0,
      active: 'active',
      navPromise: '',
      listPromise: '',
      headbarbg: 'merchant-headbar-bg',
      navList: {

      },
      infoList: {

      },
      infoListWrapper: ''
    }
  },
  methods: {
    backward() {
      router.go(-1);
    },
    getInfoList(url) {
      this.$http.get(url)
        .then(function (res) {
          this.infoList = res.body.infoList;
        }, function (err) {
          console.log('err:', err);
        });
    },
    changeNav(index) {
      this.currentNav = index;
      this.getInfoList(this.navList[index].api);
      this.infoListWrapper.scrollTop = 0;
    },
    viewDetail(id) {
      router.push({
        name: 'asset-detail',
        params: {
          id_asset: id
        }
      });
    }
  },
  created() {
    console.log(this.$route.params.merchantType);
    let navApi = '';
    switch (this.$route.params.merchantType) {
      case 'asset':
        navApi = '../../../static/js/asset.json';
        break;
      case 'food':
        navApi = '../../../static/js/food.json';
        break;
      default:
        console.log('api not found');
    }
    if (navApi) {
      this.navPromise = this.$http.get(navApi);
    }
  },
  mounted() {
    this.infoListWrapper = document.querySelector('.merchant-infolist-wrapper');
    this.navPromise
      .then(function (res) {
        this.navList = res.body.navList;
        this.$http.get(this.navList[0].api)
          .then(function (res) {
            this.infoList = res.body.infoList;
          }, function (err) {
            console.log('err:', err);
          })
      }, function (err) {
        console.log('err:', err);
      });
  },
  components: {
    headBar: Header,
    backward: Backward,
    assetItem: AssetItem,
    iconLoader: IconLoader
  }
}
</script>

<style lang="scss">@import "./scss/merchant.scss";</style>
