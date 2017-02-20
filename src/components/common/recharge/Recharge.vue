<template lang="html">
  <div class="recharge-content fixed" @click.stop="">
    <p>升级会员</p>
    <p>充值<span>￥100</span>升级VIP会员</p>
    <p>立刻享受惊爆优惠价</p>
    <div class="button button-recharge button-positive" @click.stop="recharge">立即充值</div>
  </div>
</template>

<script>
import router from '../../../router'
export default {
  data() {
    return {

    }
  },
  methods: {
    recharge() {
      router.push({
        name: 'member-upgrade'
      })
    },
    closeRecharge() {
      this.$emit('closeRecharge');
    }
  },
  created() {

  }
}
</script>

<style lang="scss">@import "./scss/recharge.scss";</style>
