<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>
<script>
import Header from "./components/layouts/Header.vue";

export default {
  name: "app",
  components: {
    Header
  }
};
</script>

