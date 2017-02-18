<template lang="html">
  <div class="transclubg fixed fullpage border-box" @click.stop.prevent="sendCallback" @touchmove.stop.prevent="">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['callback'],
  methods: {
    sendCallback() {
      this.$emit(this.callback);
    }
  },
  created() {

  }
}
</script>

<style lang="scss">@import "./scss/mask.scss";</style>
