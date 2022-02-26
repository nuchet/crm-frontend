import Vue from 'vue'
import Vuex from 'vuex'
import auth from '@/store/modules/auth'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

// Create store
export default new Vuex.Store({
  modules: {
    auth
  },
  plugins: [createPersistedState()]
})
