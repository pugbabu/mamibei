import Vue from 'vue';
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad,{
    error:'../assets/image/logo.png',
    loading:'../assets/image/logo.png'
})