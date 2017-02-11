<template lang="html">
  <div class="wrap">
    <button type="button" name="button" @click="back" class="btn">返回</button>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div>
</template>

<script>
import router from '../../router';

export default {
  data() {
    return {

    }
  },
  methods: {
    back() {
      // router.replace({
      //   name: 'home'
      // })
      router.go(-1);
    }
  }
}
</script>

<style lang="css" type="text/css">
p{
  color: #849812;
}
</style>
