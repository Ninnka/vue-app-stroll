<template lang="html">
  <div class="header-bar" :class="custombg">
    <span>{{title}}</span>
    <slot name='backward-icon'></slot>
    <slot name='star-icon'></slot>
    <slot name='share-icon'></slot>
  </div>
</template>

<script>
export default {
  props: [
    'title',
    'custombg'
  ]
}
</script>

<style lang="css" type="text/css">
.header-bar {
  font-size: .18rem;
  height: .44rem;
  line-height: .44rem;
  color: white;
  text-align: center;
  position: fixed;
  width: 100%;
  top:0;
  left: 0;
  z-index: 99;
}
</style>
