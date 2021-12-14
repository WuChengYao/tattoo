import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false, //isLoading
  },
  mutations: {
    Set_Loading(state, payload) { //isLoading
      state.isLoading = payload;
    }
  },
  actions: {
    setLoading(context, payload) { //isLoading
      context.commit('Set_Loading', payload);
    }
  },
  modules: {
  }
})
