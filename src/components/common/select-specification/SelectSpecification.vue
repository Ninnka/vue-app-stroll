<template lang="html">
  <div class="transclubg fixed fullpage border-box" @click.stop.prevent="closeSelectSpec($event)">
    <div class="select-specification fixed" @click.stop.prevent="">
      <div class="specification-about flex-box">
        <img :src="specificationDetail.thumbnail" alt="" class="good-thumbnail">
        <div class="specification-desc-price">
          <div class="description flex-box">
            <span>{{specificationDetail.desctitle}}</span>
            <span @click="closeSelectSpec">X</span>
          </div>
          <div class="price flex-box">
            <span>￥ {{specificationDetail.pricediscount}}</span>
            <span class="line-through">原价：￥{{specificationDetail.pricenormal}}</span>
          </div>
        </div>
      </div>

      <div class="select-spec block-title-left">
        <p>规格</p>
        <div class="spec-checkbox flex-box">
          <span>600g</span>
          <span>800g</span>
        </div>
      </div>

      <div class="select-quantity block-title-left">
        <p>数量</p>
        <div class="quantity-ctrl">
          <span>-</span>
          <span>1</span>
          <span>+</span>
        </div>
      </div>

      <div class="button button-confirm button-addtosc" @click="closeSelectSpec">
        确认
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      specificationDetail: {
        thumbnail: require('components/good-detail/images/good-detail-large.jpg'),
        desctitle: 'Huawei/华为 荣耀7 全网通4G手机',
        pricediscount: 1999,
        pricenormal: 1799
      }
    }
  },
  methods: {
    closeSelectSpec(e) {
      this.$emit('closeSelectSpec');
    }
  }
}
</script>

<style lang="scss" scoped>@import "./scss/select-specification.scss";</style>
