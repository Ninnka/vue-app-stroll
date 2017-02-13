<template lang="html">
  <div class="wrap">
    <transition name="fade">
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

  }
}
</script>

<style type="text/css">
@import "assets/css/reset.css";
@import "assets/css/iconfont.css";
@import "assets/css/swiper-3.4.1.min.css";
html {
  font-size: 100px;
}

html,
body,
.wrap {
  min-height: 100%;
}

.fullpage {
  min-height: 100%;
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

.float-right {
  float: right;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .3s
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
