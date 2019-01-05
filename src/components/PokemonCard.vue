<template>
  <div>
    <div
      :style="{ background: cardColors.bg }"
      class="main-container">
      <dummy-component
        :name="pokemonName"
        :colors="{ textbg: cardColors.textbg, text: cardColors.text }"
      />
      <pokemon-description
        :name="pokemonName"
        :description= "pokemonDescription"
        :colors="{ textbg: cardColors.textbg, text: cardColors.text }"
      />
      <pokemon-image
        :imageBg="cardColors.imgbg"
        :image= "pokemonImage"
      />
    </div>
  </div>
</template>

<script>
import PokemonImage from './sub-components/PokemonImage.vue'
import PokemonDescription from './sub-components/PokemonDescription.vue'
import DummyComponent from './sub-components/DummyComponent.vue'
export default {
  name: 'PokemonCard',
  components: {
    PokemonImage,
    PokemonDescription,
    DummyComponent
  },
  props: {
    pokemonName: {
      type: String,
      default: ''
    },
    pokemonImage: {
      type: String,
      default: ''
    },
    pokemonDescription: {
      type: String,
      default: ''
    },
    pokemonTag: {
      type: String,
      default: ''
    },
    cardColors: {
      type: Object,
      default: ()=> {
        return {}
      }
    },

  }
}
</script>
<style scoped lang="stylus" scoped>
  .main-container
    display flex
    flex-direction column
    height 100vh
    width 300px
    background black
    box-sizing border-box
  @media only screen and (max-width: 600px)
    .main-container
      height 100vh
      width 100vw
</style>
