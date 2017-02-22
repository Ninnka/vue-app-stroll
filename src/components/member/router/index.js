import GoodDetail from 'components/good-detail/GoodDetail.vue';
import RefineOrder from 'components/shoppingcar/component/RefineOrder';
// import MyAddress from 'components/my-address/My-address';
import MyAddress from 'components/member/component/MemberAddress.vue';
import MyAddAddress from 'components/shoppingcar/component/AddAddress.vue';
// import MemberUpGrade from 'components/member/component/MemberUpGrade.vue';
import MemberVipRecharge from 'components/my-recharge/My-recharge.vue'

export default {
  routes: [
    {
      path: 'goods-detail',
      name: 'goods-detail',
      components: {
        goodsdetailcontent: GoodDetail
      },
      meta: {
        nextRouteNameList: [
          'good-buy-imedi1'
        ]
      },
      children: [
        {
          path: 'good-buy-imedi1',
          name: 'good-buy-imedi1',
          component: RefineOrder,
          meta: {
            nextRouteNameList: [
              'buy-imedi-config-address1'
            ]
          },
          children: [
            {
              path: 'buy-imedi-config-address1',
              name: 'buy-imedi-config-address1',
              component: MyAddress,
              meta: {
                nextRouteNameList: [
                  'member-add-address'
                ]
              },
              children: [
                {
                  path: 'member-add-address',
                  name: 'member-add-address',
                  component: MyAddAddress
                }
              ]
            }
          ]
        },
        {
          path: 'member-upgrade',
          name: 'member-upgrade',
          component: MemberVipRecharge
        }
      ]
    }
  ]
};
