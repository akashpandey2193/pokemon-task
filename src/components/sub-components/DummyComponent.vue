<template>
  <div class="container">
    <div
      :style="{ background: colors.textbg, color: colors.text }"
      class="dummy-name"
    >
      {{ name }}
    </div>
    <div class="icon">
    -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'DummyComponent',
  props: {
    colors: {
      type: Object,
      default: () => {
        return {}
      }
    },
    name: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container
    height 20%
    display flex
    align-items center
    padding 0 10px
    box-sizing border-box
  .dummy-name
    border-radius 12px
    padding 2px 10px
    font-size 12px
    height fit-content
  .icon
    margin-left auto
</style>
