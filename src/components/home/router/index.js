import GoodDetail from 'components/good-detail/GoodDetail.vue';

export default {
  routes: [
    {
      path: 'good-detail',
      name: 'good-detail',
      components: {
        content: GoodDetail
      }
    }
  ]
};
