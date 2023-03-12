<template>
  <div class="work-container">
    <soft-list :pid="19"></soft-list>
  </div>
</template>

<script>
export default {
  name: "Work",
  components: {
    SoftList: () => import(/* webpackChunkName: "components" */ "../components/SoftList"),
  }
}
</script>

<style lang="scss" scoped>
.work-container {
  padding: 0 32px;
}
</style>
