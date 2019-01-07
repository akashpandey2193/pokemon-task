<template>
  <div id="app">
    <div class="flex">
      <get-count
        @fetchPokemons="$_fetchPokemons"
      />
      <div
        v-for="(item,index) in pokemonCards"
        :key="index">
        <pokemon-card
          :pokemonDescription="item.description"
          :pokemonName="item.name"
          :pokemonImage="item.sprite"
          :pokemonTag="item.tag"
          :cardColors="item.cardColors"/>
      </div>
    </div>
  </div>
</template>

<script>
import PokemonCard from './components/PokemonCard.vue'
import GetCount from './components/GetCount.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'app',
  components: {
    PokemonCard,
    GetCount
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'pokemonCards'
    ])
  },
  methods: {
    $_fetchPokemons() {
      this.$store.dispatch('fetchPokemonCards')
    }
  },
  mounted() {
    this.$_fetchPokemons()
  }
}
</script>
<style lang="stylus" scoped>
  #app
    padding 40px 120px
  .flex
    display flex
    flex-wrap wrap
    box-sizing border-box
  @media only screen and (max-width: 600px)
    #app
      padding 0
</style>
