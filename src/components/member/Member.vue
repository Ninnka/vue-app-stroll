<template lang="html">
  <div class="fullpage">
    <headbar title="会员"></headbar>
  </div>
</template>

<script type="text/javascript">
import header from '../common/header/Header.vue';

export default {
  data() {
    return {

    }
  },
  components: {
    headbar: header
  }
}
</script>

<style lang="css" type="text/css" scoped>
div > p:nth-child(1){
  color: green;
}
div > p:nth-child(2){
  color: yellow;
}
</style>
