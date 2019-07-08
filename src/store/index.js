import Vue from 'vue'
import Vuex from 'vuex'
import freebox_actions from '../freebox_store/actions'
import freebox_mutations from '../freebox_store/mutations'
import freebox_defaultState from '../freebox_store/state'
import freebox_getters from '../freebox_store/getters'
import actions from './actions'
import mutations from './mutations'
import defaultState from './state'
import getters from './getters'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    ...defaultState,
    ...freebox_defaultState
  },
  actions: {
    ...actions,
    ...freebox_actions
  },
  mutations: {
    ...mutations,
    ...freebox_mutations
  },
  getters: {
    ...getters,
    ...freebox_getters
  }
})