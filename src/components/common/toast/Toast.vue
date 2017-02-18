<template lang="html">
  <div class="toast">
    <transition name="fade">
      <span v-if="show">{{content}}</span>
    </transition>
  </div>
</template>

<script>
export default {
  props: [
    'content',
    'show'
  ]
}
</script>

<style lang="css" type="text/css" scoped>
.toast span{
  display: block;
  position: fixed;
  left: 50%;
  margin-left: -1rem;
  z-index: 100000;
  bottom: .55rem;
  width: 2rem;
  text-align: center;
  line-height: .4rem;
  font-size: .16rem !important;
  border-radius: .3rem;
  color: #000 !important;
  background: rgba(0,0,0,.3);
}
.fade-enter-active {
  transition: all .5s ease;
}
.fade-leave-active {
  transition: all .5s ease;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
</style>
