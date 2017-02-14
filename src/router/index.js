import Vue from 'vue';
import Router from 'vue-router';
// import Hello from 'components/Hello'
// 直接使用 components路径

import Index from '../components/index/Index.vue';
import Home from '../components/home/Home.vue';
import Member from '../components/member/Member.vue';
import Classify from '../components/classify/Classify.vue';
import ShoppingCar from '../components/shoppingcar/ShoppingCar.vue';
import My from '../components/my/My.vue';
import MyBaseMsg from '../components/my-base-msg/My-base-msg.vue';
import MyCollection from '../components/my-collection/My-collection.vue';
import MyUpgrade from '../components/my-upgrade/My-upgrade.vue';
import MyRecharge from '../components/my-recharge/My-recharge.vue';
import MyPaySuccess from '../components/my-pay-success/My-pay-success.vue';
import MyWallet from '../components/my-wallet/My-wallet.vue';
import MyCharge from '../components/my-charge/My-charge.vue';
import MyAccount from '../components/my-account/My-account.vue';
import MyMore from '../components/my-more/My-more.vue';
import MyOrders from '../components/my-orders/My-orders.vue';

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
      path: '/',
      redirect: '/index/home'
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      children: [
        {
          path: 'home',
          name: 'home',
          component: Home,
          meta: {
            saved: true
          }
        },
        {
          path: 'member',
          name: 'member',
          component: Member,
          meta: {
            saved: true
          }
        },
        {
          path: 'classify',
          name: 'classify',
          component: Classify,
          meta: {
            saved: true
          }
        },
        {
          path: 'shoppingcar',
          name: 'shoppingcar',
          component: ShoppingCar,
          meta: {
            saved: true
          }
        },
        {
          path: 'my',
          name: 'my',
          component: My,
          meta: {
            saved: true
          }
        }
      ]
    },
    {
      path: '/basemsg',
      name: 'baseMsg',
      component: MyBaseMsg
    },
    {
      path: '/collection',
      name: 'collection',
      component: MyCollection
    },
    {
      path: '/upgrade',
      name: 'myUpgrade',
      component: MyUpgrade
    },
    {
      path: '/recharge',
      name: 'myRecharge',
      component: MyRecharge
    },
    {
      path: '/paySuccess',
      name: 'myPaySuccess',
      component: MyPaySuccess
    },
    {
      path: '/wallet',
      name: 'myWallet',
      component: MyWallet
    },
    {
      path: '/charge',
      name: 'myCharge',
      component: MyCharge
    },
    {
      path: '/account',
      name: 'myAccount',
      component: MyAccount
    },
    {
      path: '/more',
      name: 'myMore',
      component: MyMore
    },
    {
      path: '/orders',
      name: 'myOrders',
      component: MyOrders
    }
  ],
  scrollBehavior
});
