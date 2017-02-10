<template lang="html">
  <div class="wrap">
    <div class="content content-bottom-tab content-border-box">
      <router-view></router-view>
    </div>
    <div class="fixed fixed-bottom nav flex-box">
      <router-link to="/home" class="item text-center nav-item flex-box">
        <i class="icon iconfont icon-home"></i>
        <a class="title">首页</a>
      </router-link>
      <router-link to="/member" class="item text-center nav-item flex-box">
        <i class="icon iconfont icon-member"></i>
        <a class="title">会员</a>
      </router-link>
      <router-link to="/classify" class="item text-center nav-item flex-box">
        <i class="icon iconfont icon-classify"></i>
        <a class="title">分类</a>
      </router-link>
      <router-link to="/shoppingcar" class="item text-center nav-item flex-box">
        <i class="icon iconfont icon-shoppingcar"></i>
        <a class="title">购物车</a>
      </router-link>
      <router-link to="/my" class="item text-center nav-item flex-box">
        <i class="icon iconfont icon-my"></i>
        <a class="title">我的</a>
      </router-link>
    </div>
  </div>

</template>

<script type="text/javascript">
export default {
  data() {
    return {

    };
  },
  methods: {
    getData() {
      // 获取数据
      // this.$http.get('http://localhost/sportman/activity_home.php')
      //   .then(function (res) {
      //     console.log('res:', res);
      //   }, function (err) {
      //     console.log('err:', err);
      //   });
    }
  },
  created() {
    // 测试获取数据
    // this.getData();
  }
}
</script>

<style type="text/css">
html {
  font-size: 100px;
}

.icon.iconfont {
  font-size: .21rem;
}

html,
body,
.wrap,
.content {
  height: 100%;
}

.flex-box {
  display: flex;
}

.content-border-box {
  box-sizing: border-box;
}

.content-bottom-tab {
  padding-bottom: .49rem;
}

.fixed {
  position: fixed;
}

.fixed-bottom {
  bottom: 0;
  left: 0;
}

.nav {
  width: 100%;
  background: #EAEAEA;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.nav-item {
  width: 100%;
  height: .49rem;
  font-size: .816rem;
  line-height: .49rem;
  color: white;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
}

.nav-item {
  color: rgba(100, 100, 100, .5);
  font-size: .12rem;
}

.nav-item>.icon.iconfont {
  height: .21rem;
}

.nav-item.router-link-active {
  color: rgba(34, 135, 51, 1);
}

a {
  text-decoration: none;
}


/*.nav-item>a {
  color: rgba(34, 135, 51, .5);
}

.nav-item>.router-link-active {
  color: rgba(34, 135, 51, 1);
}*/

.nav>item {
  flex-grow: 1;
  flex-shrink: 1;
}

.text-center {
  text-align: center;
}
</style>
