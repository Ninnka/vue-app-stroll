<template lang="html">
  <div>
    <headbar title="我的"></headbar>
    <div>{{msg}}</div>
  </div>
</template>

<script type="text/javascript">
import header from '../common/header/Header.vue';

export default {
  data() {
    return {
      msg: 2
    }
  },
  components: {
    headbar: header
  }
}
</script>

<style lang="css" type="text/css">
</style>
