<template lang="html">
  <div class="search-bar transition-box">
    <label for="search-input" class="search-input-wrapper flex-box">
      <i class="icon iconfont icon-search"></i>
      <input class="search-input" type="text" id="search-input" v-model="searchinput" @focus="focusSearchBar" @input="searchBarStatus">
      <div class="button button-search" v-show="hasfocus" @click.stop="emitSearchContent(searchinput)">{{buttonText}}</div>
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hasfocus: false,
      searchinput: '',
      buttonText: '取消'
    }
  },
  props: [
    'callbackEvent'
  ],
  methods: {
    focusSearchBar() {
      this.hasfocus = true;
    },
    searchBarStatus() {
      this.buttonText = this.searchinput !== '' ? '搜索' : '取消';
    },
    emitSearchContent() {
      console.log('not empty');
      this.$emit(this.callbackEvent, this.searchinput);
      this.searchinput = '';
      this.buttonText = '取消';
    }
  },
  created() {

  }
}
</script>

<style lang="scss">@import "./scss/search-bar.scss";</style>
