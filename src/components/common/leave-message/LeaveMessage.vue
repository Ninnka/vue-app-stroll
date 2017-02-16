<template lang="html">
  <div class="leave-message-content fixed" @click.stop="">
    <div class="title-wrapper">
      <p>留言</p>
      <i class="icon-close float-right" @click.stop="closeLeaveMsg">X</i>
    </div>
    <div class="textinput-wrapper">
      <textarea name="name" class="textinput border-box" placeholder="想要的商品？" v-model="messageToSubmit"></textarea>
    </div>
    <div class="button button-submit" @click.stop="submitMsg">提交</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messageToSubmit: ''
    }
  },
  methods: {
    submitMsg() {
      alert('msg:' + this.messageToSubmit);
      this.closeLeaveMsg();
    },
    closeLeaveMsg() {
      this.$emit('closeLeaveMsg');
    }
  },
  created() {

  }
}
</script>

<style lang="scss">@import "./scss/leave-message.scss";</style>
