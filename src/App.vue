<template>
  <div id="app">
    <img src="./assets/logo.png" />

    <!-- <HelloWorld />
    <PPP /> -->

    <!-- <router-view></router-view> -->
    <router-view />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld"; // 這裡 引入 HelloWorld 元件
import PPP from "./components/ppp";

export default {
  name: "App",
  components: {
    HelloWorld,
    PPP,
  }
};
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";
</style>
