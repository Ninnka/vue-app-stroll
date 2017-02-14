<template lang="html">
  <div class="transclubg fixed fullpage border-box content-bottom-tab" @click="closeSelectSpec">
    <div class="select-specification fixed">

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    closeSelectSpec() {
      console.log('closeSelectSpec in subcomponent');
    }
  }
}
</script>

<style lang="scss" scoped>@import "./scss/select-specification.scss";</style>
