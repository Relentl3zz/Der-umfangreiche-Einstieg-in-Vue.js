<template>
  <div>
    <h2>Add To Do</h2>
    <input v-on:keyup.enter="addToDo" />

    <h2>Search Results</h2>
    <input v-model="$store.state.searchQuery" />
    <div v-if="$store.state.searchQuery">
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
  },
};
</script>

<style></style>
