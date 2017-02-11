<template lang="html">
  <div>
    <head-bar title="首页"></head-bar>
    <div class="fix-block">{{st}}</div>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div>
</template>

<script type="text/javascript">
import header from '../common/header/header.vue';

export default {
  data() {
    return {
      st: 0
    }
  },
  components: {
    headBar: header
  },
  created() {
    console.log('created');
    window.onscroll = function (e) {
      this.st = document.body.scrollTop || document.documentElement.scrollTop;
    }.bind(this);
    console.log(this.$route);
  },
  mounted() {
    console.log('mounted');
  },
  updated() {
    console.log('updated');
  },
  destoryed() {
    console.log('destoryed');
  }
}
</script>

<style lang="css" type="text/css" scoped>
div > p:nth-child(1){
  color: red;
}
div > p:nth-child(2){
  color: blue;
}
.fix-block {
  position: fixed;;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: .8rem;
  height: .5rem;
  font-size: .3rem;
  padding: .1rem;
  background: red;
  color: white;
}
</style>
