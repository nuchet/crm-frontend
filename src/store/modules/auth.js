import axios from 'axios'

const state = {
  user: null,
  posts: null
}

const getters = {
  isAuthenticated: (state) => !!state.user,
  StatePosts: (state) => state.posts,
  StateUser: (state) => state.user
}

const actions = {
  async LogIn ({ commit }, user) {
    await axios.post('api/login', user)
    await commit('setUser', user.get('username'))
  },

  async CreatePost ({ dispatch }, post) {
    await axios.post('post', post)
    return await dispatch('GetPosts')
  },

  async GetPosts ({ commit }) {
    const response = await axios.get('posts')
    commit('setPosts', response.data)
  },

  async LogOut ({ commit }) {
    const user = null
    commit('logout', user)
  }
}

const mutations = {
  setUser (state, username) {
    state.user = username
  },

  setPosts (state, posts) {
    state.posts = posts
  },
  logout (state, user) {
    state.user = user
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
