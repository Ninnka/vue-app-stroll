import RefineOrder from 'components/shoppingcar/component/RefineOrder.vue';
import AddAddress from 'components/shoppingcar/component/AddAddress.vue';
// import Myaddress from 'components/my-address/My-address.vue';
import Myaddress from 'components/shoppingcar/component/CarMyAddress.vue';
import Paysuccess from 'components/my-pay-success/My-pay-success.vue';
import Goodsdetail from 'components/good-detail/GoodDetail.vue';

export default {
  routes: [
    {
      path: 'refine-order',
      name: 'refine-order',
      component: RefineOrder,
      children: [{
        path: 'my-address',
        name: 'my-address',
        component: Myaddress,
        children: [{
          path: 'add-address',
          name: 'add-address',
          components: {
            addaddresscontent: AddAddress
          }
        }]
      },
      {
        path: 'pay-success',
        name: 'pay-success',
        component: Paysuccess
      }]
    },
    {
      path: 'car-good-detail',
      name: 'car-good-detail',
      component: Goodsdetail,
      children: [
        {
          path: 'car-good-buy-imedi',
          name: 'car-good-buy-imedi',
          component: RefineOrder,
          children: [
            {
              path: 'car-buy-imedi-config-address',
              name: 'car-buy-imedi-config-address',
              component: Myaddress,
              children: [
                {
                  path: 'car-add-address',
                  name: 'car-add-address',
                  component: AddAddress
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
