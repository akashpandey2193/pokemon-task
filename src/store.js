import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import { SET_POKEMON_CARDS, SET_TOTAL_CARDS, CLEAR_STATE } from './mutation-types.js'


Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    pokemonCards: [],
    totalCards: 3,
  },
  getters: {
    pokemonCards: state => {
      return state.pokemonCards
    },
    totalCards: state => {
      return state.totalCards
    }
  },
  mutations: {
    [SET_POKEMON_CARDS] (state, pokemonCards) {
      state.pokemonCards = pokemonCards
    },
    [SET_TOTAL_CARDS] (state, totalNumbers) {
      state.totalCards = totalNumbers
    },
    [CLEAR_STATE] (state) {
      state.pokemonCards = []
    }
  },
  actions: {
    fetchPokemonCards ({ commit, state }) {
      axios({
        method: 'get',
        url: `https://dev-util.edyst.com/challenge/pokemons/random?any=${state.totalCards}`
      })
        .then(function (response) {
          commit('SET_POKEMON_CARDS', response.data)
        })
        .catch(() => {
          commit('SET_POKEMON_CARDS', [])
        })
    },
    setTotalCards({ commit }, totalNumber) {
      commit('SET_TOTAL_CARDS', totalNumber)
    },
    clearState ({ commit }) {
      commit('CLEAR_STATE')
    }
  }
})
