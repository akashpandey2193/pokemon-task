<template>
  <div id="app">
    <div class="flex">
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
import { mapGetters } from 'vuex'
export default {
  name: 'app',
  components: {
    PokemonCard
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
  mounted() {
    this.$store.dispatch('fetchPokemonCards')
  }
}
</script>
<style lang="stylus" scoped>
  #app
    padding 60px
  .flex
    display flex
    justify-content space-between
    flex-wrap wrap
    box-sizing border-box
  @media only screen and (max-width: 600px)
    #app
      padding 0
</style>
