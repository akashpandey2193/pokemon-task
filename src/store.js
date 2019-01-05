import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import { SET_POKEMON_CARDS, CLEAR_STATE } from './mutation-types.js'


Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    pokemonCards: []
  },
  getters: {
    pokemonCards: state => {
      return state.pokemonCards
    }
  },
  mutations: {
    [SET_POKEMON_CARDS] (state, pokemonCards) {
      state.pokemonCards = pokemonCards
    },
    [CLEAR_STATE] (state) {
      state.pokemonCards = []
    }
  },
  actions: {
    fetchPokemonCards ({ commit }) {
      axios({
        method: 'get',
        url: 'https://dev-util.edyst.com/challenge/pokemons/random'
      })
        .then(function (response) {
          commit('SET_POKEMON_CARDS', response.data)
        })
        .catch(() => {
          commit('SET_POKEMON_CARDS', [])
        })
    },
    clearState ({ commit }) {
      commit('CLEAR_STATE')
    }
  }
})
