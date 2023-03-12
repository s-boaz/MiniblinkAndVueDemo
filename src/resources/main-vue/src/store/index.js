import Vue from 'vue'
import Vuex from 'vuex'
import {getCategories} from '@/api'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    app: null,
    categories: [],
    update: {
      categories: true,
    }
  },
  mutations: {
    SET_CATEGORIES(state, categories) {
      state.categories = categories
    },
    SET_UPDATE(state, payload) {
      state.update[payload.key] = payload.flag;
    },
  },
  actions: {
    async getCategories(context) {
      const key = 'categories', commit = 'SET_CATEGORIES', fn = getCategories
      if (context.state.update[key]) {
        const res = await fn()
        context.commit('SET_UPDATE', {key: key, flag: false})
        context.commit(commit, (res?.data||[]))
        return await res?.data || []
      }
      return await context.state[key];
    },
  },
})

export default store;
