<template lang="html">
  <i slot="backward-icon" class="icon iconfont icon-backward-white-copy fixed icon-in-header backward"  @click.stop="backward"></i>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    backward() {
      this.$emit('backward');
    }
  }
}
</script>

<style lang="scss">@import "./scss/icon-backward.scss";</style>
