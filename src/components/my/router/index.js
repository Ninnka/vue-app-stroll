import MyBaseMsg from '../../my-base-msg/My-base-msg.vue';
import MyCollection from '../../my-collection/My-collection.vue';
import MyUpgrade from '../../my-upgrade/My-upgrade.vue';
import MyRecharge from '../../my-recharge/My-recharge.vue';
import MyPaySuccess from '../../my-pay-success/My-pay-success.vue';
import MyWallet from '../../my-wallet/My-wallet.vue';
import MyCharge from '../../my-charge/My-charge.vue';
import MyAccount from '../../my-account/My-account.vue';
import MyMore from '../../my-more/My-more.vue';
import MyOrders from '../../my-orders/My-orders.vue';
import MyAddress from '../../my-address/My-address.vue';
import MyHelpCenter from '../../my-help-center/My-help-center.vue';
import MyAboutUs from '../../my-about-us/My-about-us.vue';
import MyFedback from '../../my-fedback/My-fedback.vue';
import MyQuestions from '../../my-questions/My-questions.vue';
import MyLogin from '../../my-login/My-login.vue';
import MyRegister from '../../my-register/My-register.vue';
import MyOrderDetail from '../../my-order-detail/My-order-detail.vue';
import MyEditPassword from '../../my-edit-password/My-edit-password.vue';
import MyEditWalletPassword from '../../my-edit-wallet-password/My-edit-wallet-password.vue';
import MySupplyEnergy from '../../my-supply-energy/My-supply-energy.vue';
import MyEditName from '../../my-edit-name/My-edit-name.vue';
import MyEditPhone from '../../my-edit-phone/My-edit-phone.vue';
import MyComment from '../../my-comment/My-comment.vue';
import MyAddAddress from '../../shoppingcar/component/AddAddress.vue';

export default {
  routes: [{
    path: 'login',
    name: 'myLogin',
    component: MyLogin,
    children: [{
      path: '/register/:title',
      name: 'myRegister',
      component: MyRegister
    }]
  },
  {
    path: '/basemsg',
    name: 'baseMsg',
    component: MyBaseMsg,
    children: [{
      path: 'editPassword',
      name: 'myEditPassword',
      component: MyEditPassword
    },
    {
      path: 'editWalletPassword',
      name: 'myEditWalletPassword',
      component: MyEditWalletPassword
    },
    {
      path: 'supplyEnergy',
      name: 'mySupplyEnergy',
      component: MySupplyEnergy
    },
    {
      path: 'editName',
      name: 'myEditName',
      component: MyEditName
    },
    {
      path: 'editPhone',
      name: 'myEditPhone',
      component: MyEditPhone
    }]
  },
  {
    path: '/collection',
    name: 'collection',
    component: MyCollection
  },
  {
    path: '/upgrade',
    name: 'myUpgrade',
    component: MyUpgrade,
    children: [{
      path: 'recharge',
      name: 'myRecharge',
      component: MyRecharge,
      children: [{
        path: 'paySuccess',
        name: 'myPaySuccess',
        component: MyPaySuccess
      }]
    }]
  },
  {
    path: '/more',
    name: 'myMore',
    component: MyMore,
    children: [{
      path: 'aboutUs',
      name: 'myAboutUs',
      component: MyAboutUs
    },
    {
      path: 'helpCenter',
      name: 'myHelpCenter',
      component: MyHelpCenter,
      children: [{
        path: 'question/:question',
        name: 'myQuestion',
        component: MyQuestions
      }]
    },
    {
      path: 'fedback',
      name: 'myFedback',
      component: MyFedback
    }]
  },
  {
    path: '/orders',
    name: 'myOrders',
    component: MyOrders,
    children: [{
      path: 'detail/:orderId/:tag',
      name: 'myOrderDetail',
      component: MyOrderDetail,
      children: [{
        path: '/comment/:orderId',
        name: 'myComment',
        component: MyComment
      }]
    }]
  },
  {
    path: '/address/:from',
    name: 'myAddress',
    component: MyAddress,
    children: [{
      path: '/addAddress',
      name: 'myAddAddress',
      component: MyAddAddress
    }]
  },
  {
    path: '/wallet',
    name: 'myWallet',
    component: MyWallet,
    children: [{
      path: '/charge',
      name: 'myCharge',
      component: MyCharge
    },
    {
      path: '/account',
      name: 'myAccount',
      component: MyAccount
    }]
  }]
}
