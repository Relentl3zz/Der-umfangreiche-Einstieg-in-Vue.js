<template>
  <div>
    <h2>Add To Do</h2>
    <input v-on:keyup.enter="addToDo" />

    <h2>Search Results</h2>
    <input v-model="searchQuery" />
    <div v-if="searchQuery">
      <ToDoItem
        v-for="todo in filteredToDos"
        :key="todo.id"
        v-bind:todo="todo"
        v-on:onDeleteToDo="deleteToDo"
      />
    </div>

    <h2>Active ToDos</h2>

    <ToDoItem
      v-for="todo in activeToDos"
      :key="todo.id"
      v-bind:todo="todo"
      v-on:onDeleteToDo="deleteToDo"
    />

    <br />

    <h2>Done ToDos</h2>

    <ToDoItem
      v-for="todo in doneToDos"
      :key="todo.id"
      v-bind:todo="todo"
      v-on:onDeleteToDo="deleteToDo"
    />
  </div>
</template>

<script>
import ToDoItem from "@/components/ToDoItem.vue";
export default {
  components: {
    ToDoItem,
  },
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
      searchQuery: "",
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
    filteredToDos() {
      return this.todos.filter((item) =>
        item.title.toLowerCase().startsWith(this.searchQuery.toLowerCase())
      );
    },
  },
};
</script>

<style></style>
