<template>
  <div>
    <input v-on:keyup.enter="addToDo" />
    <div v-for="(todo, index) in todos" :key="index">
      <button v-on:click="deleteToDo(todo.id)">X</button>
      <input type="checkbox" v-model="todo.done" /> {{ todo.title }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: [
        { id: 1, title: "HTML, CSS & JS lernen", done: false },
        { id: 2, title: "Vue lernen", done: false },
        { id: 3, title: "Next facebook bauen", done: true },
      ],
      counter: 4,
    };
  },
  methods: {
    addToDo(e) {
      this.todos.push({ id: this.counter++, title: e.target.value });
      e.target.value = "";
    },
    deleteToDo(id) {
      this.todos.splice(
        this.todos.findIndex((item) => item.id === id),
        1
      );
    },
  },
};
</script>

<style></style>
