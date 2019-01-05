<template>
  <div class="container">
    <div
      :style="{ background: imageBg }"
      class="image-container">
      <div
        :style="{ 'background': 'url(' + image + ') no-repeat' }"
        class="img"
      >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PokemonImage',
  props: {
    image: {
      type: String,
      default: ''
    },
    imageBg: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
  display flex
  justify-content center
  height 100%
  padding 20px
  box-sizing border-box
.image-container
  width 100%
  height 100%
  max-width 240px
  max-height 240px
  border-radius 50%
  >>>.img
      width 100%
      height 100%
      background-position center !important
      background-size contain !important
      border-radius 50%
</style>
