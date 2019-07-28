import Vue from 'vue';
import Vuex from 'vuex';
import { db } from '@/Services/Firebase';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    currentUser: {},
    loading: false,
    loggedIn: false,
  },
  getters: {
    currentUser: state => state.currentUser,
    loading: state => state.loading,
    loggedIn: state => state.loggedIn
  },
  mutations: {
    SET_CURRENT_USER(state, payload) {
      state.currentUser = payload;
    },
    SET_LOGGED_IN(state, payload) {
      state.loggedIn = payload;
    }
  },
  actions: {
    authenticated({ commit }, payload) {
      commit('SET_LOGGED_IN', payload !== null);

      if(payload) {
        commit('SET_CURRENT_USER', {
          displayName: payload.displayName,
          email: payload.email
        });
      } else {
        commit('SET_CURRENT_USER', null);
      } // end if
    }
  }
});

export default new Vuex.Store({

})
