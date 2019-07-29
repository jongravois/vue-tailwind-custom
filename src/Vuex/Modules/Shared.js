const state = {
    currentUser: {},
    loading: false,
    loggedIn: false,
    spacesURI: "https://uam.sfo2.digitaloceanspaces.com",
};
const getters = {
    currentUser: state => state.currentUser,
    loading: state => state.loading,
    loggedIn: state => state.loggedIn
};
const mutations = {
    SET_CURRENT_USER(state, payload) {
        state.currentUser = payload;
    },
    SET_LOGGED_IN(state, payload) {
        state.loggedIn = payload;
    }
};
const actions = {
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
};

export default { state, getters, mutations, actions };
