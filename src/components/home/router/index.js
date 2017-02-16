import GoodDetail from 'components/good-detail/GoodDetail.vue';
import Locate from 'components/locate/Locate.vue';
import Search from 'components/search/Search.vue';

export default {
  routes: [
    {
      path: 'good-detail',
      name: 'good-detail',
      components: {
        gooddetailcontent: GoodDetail
      }
    },
    {
      path: 'select-city',
      name: 'select-city',
      components: {
        selectcitycontent: Locate
      }
    },
    {
      path: 'search',
      name: 'search',
      components: {
        search: Search
      }
    }
  ]
};
