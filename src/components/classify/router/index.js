import GoodDetail from 'components/good-detail/GoodDetail.vue';

export default {
  routes: [
    {
      path: 'class-good-detail',
      name: 'class-good-detail',
      components: {
        classgooddetailcontent: GoodDetail
      }
    }
  ]
};
