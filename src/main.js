import * as firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/auth';

try {
  window.$ = window.jQuery = require('jquery');
} catch (e) {}

import Vue from 'vue';
import App from './App.vue';
import VueFirestore from 'vue-firestore';
import router from './Router/router';
import { store } from './Vuex/store';

import AccountingJS from 'accounting-js';
import axios from 'axios';
import Holidays from './Services/Holidays';
import Lodash from 'lodash';
import Moment from 'moment-business-days';
import MomentTZ from 'moment-timezone';
import VueMoment from 'vue-moment';
import PortalVue from 'portal-vue';
import VTooltip from 'v-tooltip';
import VueImgFallback from 'v-img-fallback';
import Vuelidate from 'vuelidate';
import ResetInput from 'v-reset-input';
import VueClip from 'vue-clip';
import TableComponent from 'vue-table-component';
import VueToastr from '@deveodk/vue-toastr';
import wysiwyg from "vue-wysiwyg";

import '@deveodk/vue-toastr/dist/@deveodk/vue-toastr.css';
import './assets/css/tooltip.css';
import './assets/css/tailwind.css';

window._ = Lodash;
window.firebase = firebase;
window.auth = firebase.auth();
window.axios = axios;
window.Accounting = AccountingJS;
window.moment = Moment;
window.moment_timezone = MomentTZ;

Vue.config.productionTip = false;

moment.locale('us', {
  holidays: Holidays,
  holidayFormat: 'YYYY-MM-DD'
});

Vue.use(VueFirestore);
Vue.use(VueImgFallback, {
  loading: '/images/loading.svg',
  error: '/images/error.svg',
  temp: '/images/temp.svg'
});
Vue.use(PortalVue);
Vue.use(ResetInput);
Vue.use(Vuelidate);
Vue.use(VueClip);
Vue.use(VueMoment);
Vue.use(TableComponent);
Vue.use(VueToastr, {
  defaultPosition: 'toast-top-right',
  defaultType: 'success',
  defaultTimeout: 2000
});
Vue.use(VTooltip);
Vue.use(wysiwyg, {});

import { library } from '@fortawesome/fontawesome-svg-core';
import FontAwesomeIcon from './FA.js';

import './Components';
import './Filters';

import 'firebase/auth';

firebase.auth().onAuthStateChanged(user => {
  //console.log('FIREBASE SERVICE', user);
  store.dispatch('authenticated', user);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
