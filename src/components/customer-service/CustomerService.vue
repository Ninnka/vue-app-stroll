<template lang="html">
  <div class="fullpage main-theme-background customer-service-content border-box content-hasheader overscroll">
    <head-bar :custombg="headbarbg" title="客服">
      <backward slot="backward-icon" v-on:backward="backward"></backward>
    </head-bar>

    <div class="contact-info block-title">
      <p>联系信息</p>
      <div class="input-wrapper">
        <div>
          <input type="text" placeholder="姓名:">
        </div>
        <div>
          <input type="text" placeholder="联系方式:">
        </div>
      </div>
    </div>

    <div class="contact-info request-type block-title">
      <p>需求类型</p>
      <div class="input-wrapper">
        <div>
          <input type="text" placeholder="输入商业合作/商品入驻/广告加盟等需求类型">
        </div>
      </div>
    </div>

    <div class="contact-info block-title request-desc-wrapper">
      <p>需求描述</p>
      <textarea class="request-desc" placeholder="请根据需求类型，输入详细的合作模式（如：商 品入驻，请注明具体商品、数量等），平台会在 第一时间与您进行沟通联系。"></textarea>
    </div>

    <div class="block-title left-with-icon">
      <i class="icon iconfont icon-warn"></i>
      <p>需求提交后，平台会在第一时间与您联系。</p>
    </div>

    <div class="button button-submit">提交</div>
  </div>
</template>

<script>
import router from 'src/router';

import Header from 'components/common/header/Header';
import Backward from 'components/common/icon-backward/IconBackward';

export default {
  data() {
    return {
      headbarbg: 'customer-service-headbarbg'
    }
  },
  methods: {
    backward() {
      router.go(-1);
    }
  },
  created() {

  },
  components: {
    headBar: Header,
    backward: Backward
  }
}
</script>

<style lang="scss">@import "./scss/customer-service.scss";</style>
