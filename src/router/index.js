import Vue from 'vue';
import Router from 'vue-router';

import Index from '../components/index/Index.vue';
import Home from '../components/home/Home.vue';
import Member from '../components/member/Member.vue';
import Classify from '../components/classify/Classify.vue';
import ShoppingCar from '../components/shoppingcar/ShoppingCar.vue';
import My from '../components/my/My.vue';

// <<<<<<< HEAD
// import GoodDetail from '../components/home-good-detail/GoodDetail.vue';
// import MemberGoodsDetail from '../components/member/component/MemberGoodsDetail.vue';
// import RefineOrder from '../components/shoppingcar/component/RefineOrder.vue';
// import AddAddress from '../components/shoppingcar/component/AddAddress.vue';

// =======
// >>>>>>> origin/lzx
Vue.use(Router);

// const scrollBehavior = (to, from, savedPosition) => {
//   let data = JSON.parse(window.localStorage.getItem(to.name));
//   if (savedPosition) {
//     return savedPosition;
//   } else {
//     let y = 0;
//     if (data) {
//       y = data.y;
//     }
//     return {
//       x: 0,
//       y: y
//     };
//   }
// };

let routerEntity = {
  // mode: 'history',
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
          // component: Home,
          components: {
            home: Home
          },
          meta: {
            saved: true
          },
          children: [

          ]
        },
        {
          path: 'member',
          name: 'member',
          // component: Member,
          components: {
            member: Member
          },
          meta: {
            saved: true
          },
          children: [

          ]
        },
        {
          path: 'classify',
          name: 'classify',
          // component: Classify,
          components: {
            classify: Classify
          },
          meta: {
            saved: true
          },
          children: [

          ]
        },
        {
          path: 'shoppingcar',
          name: 'shoppingcar',
          // component: ShoppingCar,
          components: {
            shoppingcar: ShoppingCar
          },
          meta: {
            saved: true
          },
          children: [

          ]
        },
        {
          path: 'my',
          name: 'my',
          // component: My,
          components: {
            my: My
          },
          meta: {
            saved: true
          },
          children: [

          ]
        }
      ]
// <<<<<<< HEAD
//     },
//     {
//       path: 'good-detail',
//       name: 'good-detail',
//       component: GoodDetail
//     },
//     {
//       path: 'member-good-detail/:goodsId',
//       name: 'member-good-detail',
//       component: MemberGoodsDetail
//     },
//     {
//       path: 'refine-order',
//       name: 'refine-order',
//       component: RefineOrder
//     },
//     {
//       path: 'add-address',
//       name: 'add-address',
//       component: AddAddress
// =======
// >>>>>>> origin/lzx
    }
  ]
};

import routerHome from 'components/home/router';
import routerMember from 'components/member/router';
import routerClassify from 'components/classify/router';
import routerShoppingCar from 'components/shoppingcar/router';
import routerMy from 'components/my/router';

routerEntity.routes[1].children[0].children = routerEntity.routes[1].children[0].children.concat(routerHome.routes);
routerEntity.routes[1].children[1].children = routerEntity.routes[1].children[1].children.concat(routerMember.routes);
routerEntity.routes[1].children[2].children = routerEntity.routes[1].children[2].children.concat(routerClassify.routes);
routerEntity.routes[1].children[3].children = routerEntity.routes[1].children[3].children.concat(routerShoppingCar.routes);
routerEntity.routes[1].children[4].children = routerEntity.routes[1].children[4].children.concat(routerMy.routes);

export default new Router(routerEntity);
