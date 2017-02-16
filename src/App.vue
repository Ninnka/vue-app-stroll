<template lang="html">
  <div class="wrap">
    <transition name="slide-fade-left">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {

    };
  },
  methods: {
    onresize() {
      let tmpWidth = document.documentElement.clientWidth || document.body.clientWidth;
      let fs = tmpWidth / 375 * 100;
      fs = fs < 88 ? 88 : fs;
      document.querySelector('html').style['font-size'] = fs + 'px';
    }
  },
  created() {
    window.addEventListener('resize', this.onresize);
    this.onresize();
  }
}
</script>

<style type="text/css">
@import "assets/css/reset.css";
@import "assets/css/iconfont.css";
@import "assets/css/swiper-3.4.1.min.css";
html {
  background: #F1F1F1;
  font-size: 100px;
}

html,
body,
.wrap {
  min-height: 100%;
  height: 100%;
}

.fullpage {
  min-height: 100%;
  height: 100%;
}

.content-router-view {
  background: #F1F1F1;
  min-height: 100%;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
}

.content-border-box {
  box-sizing: border-box;
}

.content-bottom-tab {
  padding-bottom: .49rem;
}

.content-hasheader {
  padding-top: .44rem;
}

.main-theme-background {
  background: #F1F1F1;
}

.normal-fontsize {
  font-size: .16rem;
}

.normal-position {
  position: static;
}

.position-absolute {
  position: absolute;
}

.position-relative {
  position: relative;
}

.overscroll {
  overflow: scroll;
}

.float-right {
  float: right;
}

.text-center {
  text-align: center;
}

.fade-enter-active {
  transition: opacity .6s;
}

.fade-leave-active {
  transition: opacity .4s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

.slide-fade-enter-active {
  transition: all .5s linear;
}

.slide-fade-leave-active {
  transition: all .5s linear;
}

.slide-fade-enter,
.slide-fade-leave-active {
  transform: translateX(100%);
}

.slide-fade-left-enter-active {
  transition: all .5s linear;
}

.slide-fade-left-leave-active {
  transition: all .5s linear;
}

.slide-fade-left-enter,
.slide-fade-left-leave-active {
  transform: translateX(-35%);
  opacity: .2;
}
</style>
