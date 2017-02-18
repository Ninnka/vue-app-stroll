<template lang="html">
  <div class="fullpage main-theme-background life-content normal-fontsize border-box overscroll">
    <head-bar :custombg="headbarbg">
      <backward slot="backward-icon" v-on:backward="backward"></backward>
      <i slot="share-icon" class="icon iconfont icon-share-white-copy fixed icon-in-header share-good" @click.stop="shareContent"></i>
    </head-bar>
    <div class="asset-presentation">
      <img :src="lifeDetail.imgPresentation" alt="">
    </div>
    <div class="asset-desc border-box">
      <p>{{lifeDetail.name}}</p>
      <p>{{lifeDetail.description}}</p>
    </div>
    <div class="asset-hostabout flex-box">
      <img :src="lifeDetail.hostavatar" alt="">
      <div class="life-desc-main">
        <p>{{lifeDetail.hostname}}</p>
        <p>{{lifeDetail.hostaddress}}</p>
        <div>
          <i class=""></i>
          <span>{{lifeDetail.hostcontact}}</span>
          <span> 转 {{lifeDetail.hostcontacttransform}}</span>
        </div>
      </div>
    </div>
    <div class="life-otherinfo" v-for="otherinfo in lifeDetail.otherinfoList">
      <img :src="otherinfo.imgsrc" alt="">
      <p>{{otherinfo.title}}</p>
    </div>

    <transition name="fade">
      <mask-bg callback="closeShare" v-if="shareContentStatus" v-on:closeShare="closeShare">
        <share v-on:closeShare="closeShare"></share>
      </mask-bg>
    </transition>
  </div>
</template>

<script>
import router from 'src/router';

import Header from 'components/common/header/Header';
import Mask from 'components/common/mask/Mask';
import Share from 'components/common/share/share';
import Backward from 'components/common/icon-backward/IconBackward';

export default {
  data() {
    return {
      headbarbg: 'life-headbarbg',
      shareContentStatus: false,
      lifeDetail: {
        imgPresentation: require('./images/life-detail-presentation.png'),
        name: '[番禺 华南] 星力时代豪庭',
        description: '番禺地铁大盘低首付5万起送入户花园，4万抵10万抢 购中,市场均价：住宅  12800元/㎡',
        hostavatar: require('./images/life-detail-hostavatar.png'),
        hostname: '九江康瑞地产',
        hostaddress: '天河南路123号',
        hostcontact: '400 890 2828',
        hostcontacttransform: '60852',
        otherinfoList: [
          {
            imgsrc: require('./images/life-detail-otherinfo-img.png'),
            title: '4万抵10万优惠'
          },
          {
            imgsrc: require('./images/life-detail-otherinfo-img.png'),
            title: '4万抵10万优惠'
          }
        ]
      }
    }
  },
  methods: {
    backward() {
      router.go(-1);
    },
    shareContent() {
      this.shareContentStatus = true;
    },
    closeShare() {
      this.shareContentStatus = false;
    }
  },
  created() {

  },
  components: {
    headBar: Header,
    maskBg: Mask,
    share: Share,
    backward: Backward
  }
}
</script>

<style lang="scss">@import "./scss/asset.scss";</style>
