<template>
  <div class="todo--item">
    <div @click="completeTodo">
      <p :class="{'is-done':todo.completed}">{{todo.title}}</p>
    </div>
    <button class="del" @click="$emit('del-todo',todo.id)">X</button>
  </div>
</template>
<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {
    completeTodo() {
      this.todo.completed = !this.todo.completed;
    }
  }
};
</script>
<style>
.todo--item {
  margin: 0 auto;
  margin-bottom: 0.3rem;
  background: #f3f3f3;
  max-width: 400px;
  width: 100%;
  padding: 0.2rem 1rem;
  display: flex;
  justify-content: space-between;
}
.is-done {
  text-decoration: line-through;
}
.del {
  display: inline-block;
  width: 40px;
  height: 40px;
  background: tomato;
  border-color: transparent;
  border-radius: 50%;
  cursor: pointer;
}
</style>

