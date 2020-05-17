import Cookies from 'js-cookie'
// import redirect from 'router'
export const state = () => {}

export const mutations = {
  setUser(state, user) {
    state.user = user
    Cookies.set('user', user)
  },
  setAuthorization(state, jwt) {
    state.jwt = jwt
    Cookies.set('jwt', jwt)
  },
  logout(state) {
    state.user = null
    state.jwt = null
    Cookies.set('user', null)
    Cookies.set('jwt', null)
    this.$router.push('sigin')
    // redirect('/sigin')
  }
}

export const getters = {
  username: state => {
    return state.user && state.user.username
  },
  user: state => {
    return state.user
  },
  isAuthenticated: state => {
    return !!state.user
  }
}
