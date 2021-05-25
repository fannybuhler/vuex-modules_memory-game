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
      const deck = state.deck
      const cards = state.memoryCards
      const doubleCards = cards.concat(cards)

      deck.push(doubleCards)

      return state.deck.flat()
    }
  },
  mutations: {},
  
  actions: {}
}