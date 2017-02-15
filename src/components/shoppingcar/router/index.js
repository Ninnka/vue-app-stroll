import RefineOrder from 'components/shoppingcar/component/RefineOrder.vue';
import AddAddress from 'components/shoppingcar/component/AddAddress.vue';

export default {
  routes: [
    {
      path: 'refine-order',
      name: 'refine-order',
      components: {
        refineordercontent: RefineOrder
      }
    },
    {
      path: 'add-address',
      name: 'add-address',
      components: {
        addaddresscontent: AddAddress
      }
    }
  ]
};
