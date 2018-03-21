<template lang="html">
  <ul class="merchant-info-list border-box">
    <li class="merchangt-info-item" v-for="infoItem in infoList" @click="emitViewDetail(infoItem.id)">
      <img :src="infoItem.avatar" alt="">
      <div>
        <p class="merchant-name">{{infoItem.name}}</p>
        <p class="merchant-price">
          <span v-if="infoItem.discountPrice != ''" class="discount-price">{{infoItem.discountPrice}}</span>
          <span :class="infoItem.discountPrice != '' ? hasDiscount : ''">￥ {{infoItem.price}}</span>
        </p>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      hasDiscount: 'line-through'
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

<style lang="scss">@import "./scss/good.scss";</style>
