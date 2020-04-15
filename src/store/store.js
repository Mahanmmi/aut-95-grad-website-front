import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

function initUser() {
  const str = localStorage.getItem("user");
  if (str) {
    return JSON.parse(str);
  }
  return {};
}

const state = {
  user: initUser()
};

const getters = {
  user(state) {
    return state.user;
  }
};

const mutations = {
  updateUser(state, payload) {
    state.user = payload;
    localStorage.setItem("user", JSON.stringify(payload));
  }
};

const actions = {
  updateUsername({commit}, payload) {
    let user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      user = {};
    }
    user.username = payload;
    commit("updateUser", user);
  },
  updateToken({commit}, payload) {
    let user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      user = {};
    }
    user.token = payload;
    commit("updateUser", user);
  }
};

export const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: []
});