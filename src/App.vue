<template lang="html">
  <div class="wrap">
    <transition name="fade">
      <keep-alive>
        <router-view class="fullpage"></router-view>
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
  height: 100%;
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
