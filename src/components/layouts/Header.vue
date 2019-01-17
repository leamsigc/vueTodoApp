<template>
  <header class="title">
    <h1>Hello from the TodoApp</h1>
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
  </header>
</template>
<script>
export default {
  name: "Header"
};
</script>
<style scoped>
.title {
  background: #000;
  color: #fff;
  padding: 2rem 0;
}
#nav a {
  color: tomato;
  text-decoration: none;
  padding: 1rem 2rem;
}
#nav a:hover {
  color: #fff;
}
</style>

