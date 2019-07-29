import Vue from 'vue';
import Vuex from 'vuex';
import { db } from '@/Services/Firebase';

Vue.use(Vuex);

import Shared from './Modules/Shared';

export const store = new Vuex.Store({
  modules: {
    Shared
  }
});
