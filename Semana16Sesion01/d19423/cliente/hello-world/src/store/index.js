
export default createStore({
  state: {
    token: null
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload
    }
  },
  actions: {
    async login({ commit }, usuario) {
      try {
        const res = await fetch('https://api-prueba-100.herokuapp.com/api/user/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(usuario)
        })
        const usuarioDB = await res.json()
        console.log(usuarioDB.data.token)
        commit('setToken', usuarioDB.data.token)
        localStorage.setItem('token2', usuarioDB.data.token)
      } catch (error) {
        console.log('error: ', error)
      }
    },
    obtenerToken({ commit }) {
      if (localStorage.getItem('token')) {
        commit('setToken', localStorage.getItem('token'))
      } else {
        commit('setToken', null)
      }
    },
    cerrarSesion({ commit }) {
      commit('setToken', null)
      localStorage.removeItem('token2')
  }
  }
})