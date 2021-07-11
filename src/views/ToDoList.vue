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
        v-model="todo.done"
        v-on:onDeleteToDo="deleteToDo"
      />
    </div>

    <h2>Active ToDos</h2>

    <ToDoItem
      v-for="todo in activeToDos"
      :key="todo.id"
      v-bind:todo="todo"
      v-model="todo.done"
      v-on:onDeleteToDo="deleteToDo"
    />

    <br />

    <h2>Done ToDos</h2>

    <ToDoItem
      v-for="todo in doneToDos"
      :key="todo.id"
      v-bind:todo="todo"
      v-model="todo.done"
      v-on:onDeleteToDo="deleteToDo"
    />
  </div>
</template>

<script>
import ToDoItem from "@/components/ToDoItem.vue";
import { ref, computed } from "vue";
export default {
  components: {
    ToDoItem,
  },
  setup() {
    const todos = ref([
      { id: 1, title: "HTML, CSS & JS lernen", done: false },
      { id: 2, title: "Vue lernen", done: false },
      { id: 3, title: "Next facebook bauen", done: true },
      { id: 4, title: "Vue aufgabe erledigt", done: true },
      { id: 5, title: "Vue computed properties gelernt", done: true },
    ]);
    console.log(todos.value);
    const counter = ref(6);
    const searchQuery = ref("");

    const addToDo = (e) => {
      todos.value.push({ id: counter.value++, title: e.target.value });
      e.target.value = "";
    };

    const deleteToDo = (id) => {
      todos.value.splice(
        todos.value.findIndex((item) => item.id === id),
        1
      );
    };

    const activeToDos = computed(() =>
      todos.value.filter((item) => !item.done)
    );
    const doneToDos = computed(() => todos.value.filter((item) => item.done));

    const filteredToDos = computed(() =>
      todos.value.filter((item) =>
        item.title.toLowerCase().startsWith(searchQuery.value.toLowerCase())
      )
    );

    return {
      todos,
      counter,
      searchQuery,
      addToDo,
      deleteToDo,
      activeToDos,
      doneToDos,
      filteredToDos,
    };
  },
};
</script>

<style></style>
