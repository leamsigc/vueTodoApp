<template>
  <ul>
    <li class="todoList" v-bind:key="todo.id" v-for="todo in todos">
      <TodoItem v-bind:todo="todo" v-on:del-todo="$emit('del-todo',todo.id)"/>
    </li>
  </ul>
</template>

<script>
import TodoItem from "./TodoItem";
export default {
  name: "TodoList",
  props: ["todos"],
  components: {
    TodoItem
  }
};
</script>
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
a {
  color: #42b983;
}
</style>
