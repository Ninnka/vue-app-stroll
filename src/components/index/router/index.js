import Vue from 'vue';
import Router from 'vue-router';
// import Hello from 'components/Hello'
// 直接使用 components路径

import Home from '../../home/Home.vue';
import Member from '../../member/Member.vue';
import Classify from '../../classify/Classify.vue';
import ShoppingCar from '../../shoppingcar/ShoppingCar.vue';
import My from '../../my/My.vue';

Vue.use(Router);

const scrollBehavior = (to, from, savedPosition) => {
  let data = JSON.parse(window.localStorage.getItem(to.name));
  if (savedPosition) {
    return savedPosition;
  } else {
    let y = 0;
    if (data) {
      y = data.y;
    }
    return {
      x: 0,
      y: y
    };
  }
};

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/index/home',
      name: 'index/home',
      component: Home,
      meta: {
        saved: true
      }
    },
    {
      path: '/index/member',
      name: 'index/member',
      component: Member,
      meta: {
        saved: true
      }
    },
    {
      path: '/index/classify',
      name: 'index/classify',
      component: Classify,
      meta: {
        saved: true
      }
    },
    {
      path: '/index/shoppingcar',
      name: 'index/shoppingcar',
      component: ShoppingCar,
      meta: {
        saved: true
      }
    },
    {
      path: '/index/my',
      name: 'index/my',
      component: My,
      meta: {
        saved: true
      }
    }
  ],
  scrollBehavior
});
