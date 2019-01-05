<template>
  <div class="container">
    <div
      :style="{background: colors.textbg }"
      class="background-text">
      <div
        :style="{ color: colors.text }"
        class="text-details">
        <div class="name">
          {{ name }}
        </div>
        <div class="desc">
          {{ description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PokemonDescription',
  props: {
    name: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    colors: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container
    width 100%
    height 100%
    position relative
    padding 20px 0
    overflow hidden
    box-sizing border-box
  .background-text
    width 90%
    height 80%
    position absolute
    border-radius 20px
    transform rotate(-10deg)
  .text-details
    position relative
    padding 20px
    transform rotate(10deg)
    >>>.name
      font-weight bold
      font-size 30px
      padding-bottom 8px
    >>>.desc
      font-size 12px
</style>
