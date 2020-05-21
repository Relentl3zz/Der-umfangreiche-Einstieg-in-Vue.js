<template>
  <div>
    <input v-on:keyup.enter="addToDo" />

    <h2>Active ToDos</h2>

    <div v-for="todo in activeToDos" :key="todo.id">
      <input type="checkbox" v-model="todo.done" /> {{ todo.title }}
      <button v-on:click="deleteToDo(todo.id)">X</button>
    </div>

    <br />

    <h2>Done ToDos</h2>

    <div v-for="todo in doneToDos" :key="todo.id">
      <input type="checkbox" v-model="todo.done" /> {{ todo.title }}
      <button v-on:click="deleteToDo(todo.id)">X</button>
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
        { id: 4, title: "Vue aufgabe erledigt", done: true },
        { id: 5, title: "Vue computed properties gelernt", done: true },
      ],
      counter: 6,
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
  computed: {
    activeToDos() {
      return this.todos.filter((item) => !item.done);
    },
    doneToDos() {
      return this.todos.filter((item) => item.done);
    },
  },
};
</script>

<style></style>
