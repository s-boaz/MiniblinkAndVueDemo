<template>
  <div class="all-container">
    <soft-list></soft-list>
  </div>
</template>

<script>

export default {
  name: "All",
  components: {
    SoftList: () => import(/* webpackChunkName: "components" */ "../components/SoftList"),
  }
}
</script>

<style lang="scss" scoped>
.all-container {
  padding: 0 32px;
}
</style>
