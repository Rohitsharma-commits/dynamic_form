import { createStore } from 'vuex'

export default createStore({
  state: {
    User: []
  },
  mutations: {
    setUser(state, use){
      state.User = use
    },
  },
  actions: {
    setUser({commit}, use){
      commit('setUser', use);
    }
  },
  getters: {
    User(state){
      return state.User;
    },
  }
})
