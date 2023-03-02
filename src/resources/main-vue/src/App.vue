<template>
  <div id="app">
    <div id="nav">

    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {

    };
  },
  methods: {

  },
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  font-size: 20px;
  height: 100vh;
  --theme: rgb(241, 107, 95);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100vw;
}

#nav {
  background-color: white;
  flex-shrink: 0;
  font-size: 20px;
  display: flex;
  position: relative;
  z-index: 1;
  flex-direction: column;
  padding: 30px 0;
  width: 210px;
  height: 100vh;
  box-sizing: border-box;
  box-shadow: 3px 0px 9px 2px #e6e6e6;
  transition: transform 0.1s linear;
  transform: translate(0, 0);
  overflow: auto;
}

@media screen and (max-width: 768px) {
  #nav {
    position: absolute;
    box-shadow: none;
    transform: translate(-100%, 0);
  }
}
.content {
  flex: 1;
  height: 100vh;
  overflow: hidden scroll;
  width: 1px;
}
</style>
