<template lang="html">
  <div class="header-bar">{{title}}</div>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style lang="css" type="text/css">
.header-bar {
  font-size: .18rem;
  height: .44rem;
  line-height: .44rem;
  background: #228733;
  color: white;
  text-align: center;
  position: fixed;
  width: 100%;
  top:0;
  left: 0;
}
</style>
