<template lang="html">
  <div class="transclubg fixed fullpage border-box content-bottom-tab" @click="closeSelectSpec">
    <div class="select-specification fixed">

    </div>
  </div>
</template>

<script>
// import EventHub from 'components/common/event-hub/EventHub-home-goodDetail.js';

export default {
  data() {
    return {

    }
  },
  methods: {
    closeSelectSpec() {
      console.log('closeSelectSpec in subcomponent event');
      this.$emit('closeSelectSpec');
    }
  }
}
</script>

<style lang="scss" scoped>@import "./scss/select-specification.scss";</style>
