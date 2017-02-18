import GoodDetail from 'components/good-detail/GoodDetail';
import Locate from 'components/locate/Locate';
import Search from 'components/search/Search';
import Merchant from 'components/merchant/Merchant';
import Asset from 'components/asset/Asset';
import RefineOrder from 'components/shoppingcar/component/RefineOrder';

export default {
  routes: [
    {
      path: 'good-detail',
      name: 'good-detail',
      components: {
        gooddetailcontent: GoodDetail
      },
      children: [
        {
          path: 'good-buy-imedi',
          name: 'good-buy-imedi',
          components: {
            goodBuyImedi: RefineOrder
          }
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
