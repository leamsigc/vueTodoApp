<template>
  <div>
    <form class="form" @submit="addTodo">
      <input type="text" name="title" placeholder="add Todo" v-model="title">
      <input type="submit" value="add Todo" class="btn">
    </form>
  </div>
</template>
<script>
export default {
  name: "addTodo",
  data() {
    return {
      title: ""
    };
  },
  methods: {
    addTodo(e) {
      e.preventDefault();
      if (!this.title || this.title === " ") {
        return;
      }
      const newTodo = {
        // id: Date.now(),
        title: this.title,
        completed: false
      };

      this.$emit("add-todo", newTodo);
      this.title = "";
    }
  }
};
</script>
<style scoped>
.form {
  margin: 1rem 0;
}
.form input{
  padding: 0.2rem;
}
</style>

