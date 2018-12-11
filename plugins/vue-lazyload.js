import Vue from 'vue';
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad,{
    error: require('../assets/image/loading.gif'),
    loading: require('../assets/image/loading.gif')
})