<template>
  <div id="app">
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: "App",
  };
</script>

<style lang="scss" scoped>
  $fullHeight: 100vh;
  #app {
    height: $fullHeight;
    .container {
      height: $fullHeight;
    }
  }
</style>
