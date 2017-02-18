<template lang="html">
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
        <span v-for="(spec, index) in specificationDetail.spec" @click="selectSpec(index)" :class="currentSpecIndex === index ? active : ''">{{spec}}</span>
      </div>
    </div>

    <div class="select-quantity block-title-left">
      <p>数量</p>
      <div class="quantity-ctrl">
        <span @click="sub">-</span>
        <span>{{amount}}</span>
        <span @click="add">+</span>
      </div>
    </div>

    <div class="button button-confirm button-addtosc" @click="closeAndConfirmSelectSpec">
      确认
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSpecIndex: 0,
      active: 'active',
      amount: 1,
      specificationDetail: {
        thumbnail: require('components/good-detail/images/good-detail-large.jpg'),
        desctitle: 'Huawei/华为 荣耀7 全网通4G手机',
        pricediscount: 1999,
        pricenormal: 1799,
        spec: [
          '官方套装',
          '官方升级套装(含耳机)'
        ]
      }
    }
  },
  methods: {
    selectSpec(index) {
      this.currentSpecIndex = index;
      // this.$emit('selectSpec', this.specificationDetail.spec[index]);
    },
    closeAndConfirmSelectSpec() {
      this.$emit('closeAndConfirmSelectSpec', {
        amount: this.amount,
        price: this.specificationDetail.pricediscount !== '' ? this.specificationDetail.pricediscount : this.specificationDetail.pricenormal,
        spec: this.specificationDetail.spec[this.currentSpecIndex]
      });
    },
    closeSelectSpec(e) {
      this.$emit('closeSelectSpec');
    },
    add() {
      this.amount++;
    },
    sub() {
      this.amount = this.amount > 1 ? this.amount - 1 : 1;
    }
  }
}
</script>

<style lang="scss" scoped>@import "./scss/select-specification.scss";</style>
