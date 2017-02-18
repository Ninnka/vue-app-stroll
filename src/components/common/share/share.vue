<template lang="html">
  <div class="share-content fixed" @click.stop.prevent="">
    <p class="title">分享到</p>
    <div class="share-icon-list flex-box">
      <div v-for="iconItem in shareIconList">
        <img :src="iconItem.icon" alt="">
        <p>{{iconItem.title}}</p>
      </div>
    </div>
    <div class="button button-cancel button-closeshare" @click="closeShare($event)">取消</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shareIconList: [
        {
          icon: require('./images/share-weixin.png'),
          title: '分享至微信'
        },
        {
          icon: require('./images/share-friendgroup.png'),
          title: '分享至朋友圈'
        },
        {
          icon: require('./images/share-sinaweibo.png'),
          title: '分享至微博'
        }
      ]
    }
  },
  methods: {
    closeShare(e) {
      this.$emit('closeShare');
    }
  },
  created() {

  }
}
</script>

<style lang="scss">@import "./scss/share.scss";</style>
