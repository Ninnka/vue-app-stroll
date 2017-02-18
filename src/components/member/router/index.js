import GoodDetail from 'components/good-detail/GoodDetail.vue';

export default {
  routes: [
    {
      path: 'goods-detail',
      name: 'goods-detail',
      components: {
        goodsdetailcontent: GoodDetail
      }
    }
  ]
};
