<template>
  <div id="app">
    <div id="header">
      <header-box/>
    </div>
    <div class="main">
      <div id="nav">
        <nav-box/>
      </div>
      <div id="content">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  methods: {},
  components: {
    HeaderBox: () => import(/* webpackChunkName: "components" */ "./components/HeaderBox"),
    NavBox: () => import(/* webpackChunkName: "components" */ "./components/NavBox"),
  }
};
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  list-style: none;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #333333;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
}

::-webkit-scrollbar {
  width: 6px;
  height: 10px;
  margin-right: 10px;
}
::-webkit-scrollbar-thumb {
  background: #d8d8d8;
  border-radius: 10px;
}
::-webkit-scrollbar-track {
  background: #efefef;
  background-color: #fff;
  border-radius: 2px;
}

#app {
  width: 1060px;
  height: 680px;
  border-radius: 8px;
  position: relative;
}

#header {

}

.main {
  display: flex;
  height: 604px;
}

#nav {
  width: 180px;
  padding-bottom: 24px;
  padding-top: 0;
  box-sizing: border-box;
}

#content {
  flex: 1;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  position: relative;
  box-sizing: border-box;
  overflow: auto;
}

[class*=" el-icon-"], [class^=el-icon-] {
  font-size: 16px!important;
  font-weight: bold!important;
}

.el-dropdown-menu {
  .popper__arrow {
    display: none!important;
  }
  .el-dropdown-menu__item {
    padding: 0 10px;
    font-size: 13px;
    height: 30px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    color: #333333;
  }
  .el-dropdown-menu__item:focus, .el-dropdown-menu__item:not(.is-disabled):hover {
    background-color: #f3f4f8;
    color: #333333;
  }
}
</style>
