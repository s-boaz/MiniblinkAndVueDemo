<template>
  <div class="game-container">
    <soft-list :pid="11"></soft-list>
  </div>
</template>

<script>
export default {
  name: "Game",
  components: {
    SoftList: () => import(/* webpackChunkName: "components" */ "../components/SoftList"),
  }
}
</script>

<style lang="scss" scoped>
.game-container {
  padding: 0 32px;
}
</style>
