import GoodDetail from 'components/good-detail/GoodDetail.vue';
import SelectCity from 'components/select-city/SelectCity.vue';
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
        selectcitycontent: SelectCity
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
