import NumberInfo from './numberinfo/Index.vue';
import PageHeader from './pageheader/Index.vue';

export default {
    install: ( Vue: any ) => {
        Vue.component('av-number-info', NumberInfo);
        Vue.component('av-page-header', PageHeader);
    },
  };

