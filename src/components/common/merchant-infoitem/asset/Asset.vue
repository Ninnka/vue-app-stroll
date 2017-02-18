<template lang="html">
  <ul class="merchant-info-list border-box">
    <li class="merchangt-info-item" v-for="infoItem in infoList" @click="emitViewDetail(infoItem.id)">
      <img :src="infoItem.avatar" alt="">
      <div>
        <p class="merchant-name">{{infoItem.name}}</p>
        <div class="merchant-address">
          地址：<span v-for="address in infoItem.address">{{address}}</span>
        </div>
        <p class="merchant-assettype">
          户型：
          <span v-for="assettype in infoItem.assetType">{{assettype}}</span>
        </p>
        <p class="merchant-price">
          <span>{{infoItem.discountType === '' ? normalType : infoItem.discountType}}￥ </span>
          <span>{{infoItem.price}}</span>
        </p>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      normalType: '价格'
    }
  },
  props: [
    'infoList'
  ],
  methods: {
    emitViewDetail(id) {
      this.$emit('viewDetail', id);
    }
  },
  created() {

  }
}
</script>

<style lang="scss" scoped>@import "./scss/asset.scss";</style>
