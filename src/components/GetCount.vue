<template>
  <div class="container">
    <div>Please enter the pokemons to be called</div>
    <div class="input-container">
      <input v-model="totalCards" placeholder="Call pokemons">
      <span
        class="button"
        @click="$emit('fetchPokemons')">Call Me</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GetCount',
  computed: {
    totalCards: {
      get() {
        return this.$store.getters['totalCards']
      },
      set(value) {
        this.$store.dispatch('setTotalCards', value)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container
    width 100%
    margin-bottom 20px
    padding 8px
    display flex
    flex-wrap wrap
    >>> input
      outline 0
      border none
      height 18px
      padding 4px
      margin 4px 4px 4px 8px
      font-size 16px
  .button
    margin-left 12px
    background #33a0e8
    padding 10px
    border-radius 4px
    cursor pointer
    box-shadow 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)
    color white
  @media only screen and (max-width: 600px)
    .input-container
      margin-top 6px
</style>
