// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import VueResoure from 'vue-resource';

Vue.use(VueResoure);

// let routerApp = new Vue({
//   router: router,
//   render(h) {
//     return h(App);
//   }
// });
//
// routerApp.$mount('#app');

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
});
