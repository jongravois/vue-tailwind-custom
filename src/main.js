import Vue from 'vue';
import App from './App.vue';
import router from './Router/router';
import store from './Vuex/store';
import './assets/tailwind.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
