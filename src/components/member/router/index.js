import GoodDetail from 'components/good-detail/GoodDetail.vue';
import RefineOrder from 'components/shoppingcar/component/RefineOrder';
import MyAddress from 'components/my-address/My-address';

export default {
  routes: [
    {
      path: 'goods-detail',
      name: 'goods-detail',
      components: {
        goodsdetailcontent: GoodDetail
      },
      children: [
        {
          path: 'good-buy-imedi1',
          name: 'good-buy-imedi1',
          components: {
            goodBuyImedi1: RefineOrder
          },
          children: [
            {
              path: 'buy-imedi-config-address1',
              name: 'buy-imedi-config-address1',
              component1: MyAddress
            }
          ]
        }
      ]
    }
  ]
};
