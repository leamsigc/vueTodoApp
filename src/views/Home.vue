<template>
  <div id="app">
    <addTodo v-on:add-todo="addTodo"/>
    <TodoList v-bind:todos="todos" v-on:del-todo="deleteTodo"/>
  </div>
</template>

<script>
import TodoList from "../components/TodoList";
import addTodo from "../components/addTodo";

export default {
  name: "Home",
  components: {
    TodoList,
    addTodo
  },
  data() {
    return {
      todos: []
    };
  },
  methods: {
    deleteTodo(id) {
      fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: "DELETE"
      })
        .then(res => res.json())
        .then(data => {
          this.todos = this.todos.filter(todo => todo.id !== id);
        });
    },
    addTodo(newTodo) {
      const { title, completed } = newTodo;
      fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ title, completed })
      })
        .then(data => data.json())
        .then(res => {
          this.todos = [...this.todos, res];
        })
        .catch(err => trow(err));
    }
  },
  created() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(data => data.json())
      .then(data => (this.todos = data));
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.btn {
  padding: 0.5rem;
  background: tomato;
  color: #fff;
  border-color: transparent;
}
</style>
