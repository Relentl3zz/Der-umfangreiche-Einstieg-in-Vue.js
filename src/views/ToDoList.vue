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
      />
    </div>

    <h2>Active ToDos</h2>

    <ToDoItem v-for="todo in activeToDos" :key="todo.id" v-bind:todo="todo" />

    <br />

    <h2>Done ToDos</h2>

    <ToDoItem v-for="todo in doneToDos" :key="todo.id" v-bind:todo="todo" />
  </div>
</template>

<script>
import ToDoItem from "@/components/ToDoItem.vue";
export default {
  components: {
    ToDoItem,
  },
  methods: {
    addToDo(e) {
      this.$store.dispatch("addToDo", { title: e.target.value, done: false });
      e.target.value = "";
    },
  },
  mounted() {
    this.$store.dispatch("fetchToDos");
  },
  computed: {
    activeToDos() {
      return this.$store.getters.activeToDos;
    },
    doneToDos() {
      return this.$store.getters.doneToDos;
    },
    filteredToDos() {
      return this.$store.getters.filteredToDos;
    },
    searchQuery: {
      get() {
        return this.$store.state.todo.searchQuery;
      },
      set(value) {
        this.$store.commit("SET_SEARCHQUERY", value);
      },
    },
  },
};
</script>

<style></style>
