<template>
  <div>
    <input v-on:keyup.enter="addToDo" />
    <div v-for="(todo, index) in todos" :key="index">
      {{ todo.title }} <button v-on:click="deleteToDo(todo.id)">X</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: [
        { id: 1, title: "HTML, CSS & JS lernen" },
        { id: 2, title: "Vue lernen" },
        { id: 3, title: "Next facebook bauen" },
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
