import * as firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/auth';

import Vue from 'vue';
import App from './App.vue';
import router from './Router/router';
import { store } from './Vuex/store';

import { VTooltip } from 'v-tooltip';
import PortalVue from 'portal-vue';
import Vuelidate from 'vuelidate'

import './assets/css/tailwind.css';

Vue.config.productionTip = false;
Vue.use(Vuelidate);
Vue.use(PortalVue);

import './Components';
import './Filters';

import 'firebase/auth';

firebase.auth().onAuthStateChanged(user => {
  //console.log('FIREBASE SERVICE', user);
  store.dispatch('authenticated', user);

  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app');
});
