import memoryCards from '@/assets/memoryCards.json'

export default {
  namespaced: true,
  
  state: {
    msg: 'Test from store module A',
    memoryCards: memoryCards,
    deck: []
  },

  getters: {
    getMsg: state => state.msg,
    getMemoryCards: state => state.memoryCards,

    getDeck: state => {
      const cards = state.memoryCards.flat()
      const doubleCards = cards.concat(cards)
      
      state.deck.push(doubleCards)
      return state.deck
    }
  },
  mutations: {},
  actions: {}
}
