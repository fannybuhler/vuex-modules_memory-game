export default {
  namespaced: true,
  
  state: {
    msg2: 'Test from store module B'
  },

  getters: {
    getMsg2: state => state.msg2
  },
  mutations: {},
  actions: {}
}
