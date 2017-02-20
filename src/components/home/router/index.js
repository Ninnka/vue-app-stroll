import GoodDetail from 'components/good-detail/GoodDetail';
import Locate from 'components/locate/Locate';
import Search from 'components/search/Search';
import Merchant from 'components/merchant/Merchant';
import Asset from 'components/asset/Asset';
import RefineOrder from 'components/shoppingcar/component/RefineOrder';
import MyAddress from 'components/my-address/My-address'

export default {
  routes: [
    {
      path: 'good-detail',
      name: 'good-detail',
      components: {
        gooddetailcontent: GoodDetail
      },
      meta: {
        nextRouteNameList: [
          'good-buy-imedi'
        ]
      },
      children: [
        {
          path: 'good-buy-imedi',
          name: 'good-buy-imedi',
          component: RefineOrder,
          meta: {
            nextRouteNameList: [
              'buy-imedi-config-address'
            ]
          },
          children: [
            {
              path: 'buy-imedi-config-address',
              name: 'buy-imedi-config-address',
              component: MyAddress,
              meta: {
                nextRouteNameList: [
                  'edit-address'
                ]
              }
            }
          ]
        }
      ]
    },
    {
      path: 'locate',
      name: 'locate',
      components: {
        locatecontent: Locate
      }
    },
    {
      path: 'search',
      name: 'search',
      components: {
        search: Search
      }
    },
    {
      path: 'merchant',
      name: 'merchant',
      components: {
        merchant: Merchant
      },
      children: [
        {
          path: 'asset-detail',
          name: 'asset-detail',
          components: {
            assetDetail: Asset
          }
        }
      ]
    }
  ]
};
